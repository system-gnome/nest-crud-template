// context.js
import { AsyncLocalStorage } from 'async_hooks';
import { UUID } from 'crypto';

const asyncLocalStorage = new AsyncLocalStorage();

export function generateTraceId() {
  return Math.random().toString(36).substring(2, 15);
}

export function setTraceId(traceId: UUID) {
  asyncLocalStorage.enterWith({ traceId });
}

export function getTraceId() {
  return asyncLocalStorage.getStore() as { traceId: UUID };
}
