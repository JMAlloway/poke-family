// In-memory storage placeholder.
// Replace with database-backed storage when needed.
export interface IStorage {}

class MemStorage implements IStorage {}

export const storage = new MemStorage();
