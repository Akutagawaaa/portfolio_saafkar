import OpenAI from "openai";

// the newest OpenAI model is "gpt-4o" which was released May 13, 2024. do not change this unless explicitly requested by the user
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

async function generateChatResponse(message: string): Promise<string> {
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4o",
      messages: [
        {
          role: "system",
          content: "You are a helpful customer service agent for Saafkar, a premium car cleaning service operating in Delhi, Noida, and Gaur City. Your responses should be professional, helpful, and focused on car cleaning services. Keep responses concise and friendly.",
        },
        {
          role: "user",
          content: message,
        },
      ],
    });

    return response.choices[0].message.content || "I apologize, but I couldn't generate a response. Please try again.";
  } catch (error) {
    console.error("OpenAI API error:", error);
    return "I apologize, but I'm having trouble processing your request. Please try again later.";
  }
}

export { generateChatResponse };
