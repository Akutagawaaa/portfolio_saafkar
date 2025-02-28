import { type Waitlist, type InsertWaitlist } from "@shared/schema";
import { waitlist } from "@shared/schema";
import { db } from "./db";

export interface IStorage {
  createWaitlistEntry(entry: InsertWaitlist): Promise<Waitlist>;
}

export class DatabaseStorage implements IStorage {
  async createWaitlistEntry(insertEntry: InsertWaitlist): Promise<Waitlist> {
    const [entry] = await db
      .insert(waitlist)
      .values({
        ...insertEntry,
        message: insertEntry.message || null, // Handle undefined message
      })
      .returning();
    return entry;
  }
}

export const storage = new DatabaseStorage();