export type ID = string;

export function generateID(): ID {
  return crypto.randomUUID();
}
