import type { Express } from "express";
import { createServer } from "http";
import { WebSocketServer, WebSocket } from "ws";
import { storage } from "./storage";
import { insertWaitlistSchema } from "@shared/schema";
import { generateChatResponse } from "./openai";

export async function registerRoutes(app: Express) {
  const server = createServer(app);

  // WebSocket server setup
  const wss = new WebSocketServer({ server, path: '/ws' });

  wss.on('connection', (ws) => {
    console.log('Client connected');

    ws.on('message', async (message) => {
      try {
        const data = JSON.parse(message.toString());

        // Send user message to all clients
        wss.clients.forEach((client) => {
          if (client.readyState === WebSocket.OPEN) {
            client.send(JSON.stringify({
              type: 'message',
              content: data.content,
              timestamp: new Date().toISOString(),
              isAdmin: false
            }));
          }
        });

        // Generate AI response
        const aiResponse = await generateChatResponse(data.content);

        // Send AI response to all clients
        wss.clients.forEach((client) => {
          if (client.readyState === WebSocket.OPEN) {
            client.send(JSON.stringify({
              type: 'message',
              content: aiResponse,
              timestamp: new Date().toISOString(),
              isAdmin: true
            }));
          }
        });
      } catch (error) {
        console.error('Error processing message:', error);
        if (ws.readyState === WebSocket.OPEN) {
          ws.send(JSON.stringify({
            type: 'message',
            content: 'Sorry, there was an error processing your message. Please try again.',
            timestamp: new Date().toISOString(),
            isAdmin: true
          }));
        }
      }
    });

    ws.on('close', () => {
      console.log('Client disconnected');
    });
  });

  app.post("/api/waitlist", async (req, res) => {
    try {
      const data = insertWaitlistSchema.parse(req.body);
      const entry = await storage.createWaitlistEntry(data);
      res.json(entry);
    } catch (error) {
      res.status(400).json({ message: "Invalid request data" });
    }
  });

  return server;
}