import { v4 as uuidv4 } from 'uuid';

export interface ClientIdentity {
  identity: string;
  token: string;
}

// In-memory token → identity map. In production, use a DB table or Redis.
const tokenToIdentity = new Map<string, string>();

export function createIdentity(): ClientIdentity {
  const token = uuidv4();
  // Identity is a 64-char hex string (matching SpacetimeDB convention)
  const identity = uuidv4().replace(/-/g, '') + uuidv4().replace(/-/g, '');
  tokenToIdentity.set(token, identity);
  return { identity, token };
}

export function resolveToken(token: string): string | null {
  return tokenToIdentity.get(token) ?? null;
}
