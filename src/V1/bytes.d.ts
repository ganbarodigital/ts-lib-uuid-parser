import { Uuid } from './types/Uuid';
/**
 * Converts a human-readable UUID into an array of bytes
 */
export declare function toBytes(uuid: Uuid | string, buf?: ArrayBuffer, offset?: number): ArrayBuffer;
/**
 * converts an array of bytes into a type-safe UUID
 */
export declare function fromBytes(input: ArrayBuffer, offset?: number): Uuid;
//# sourceMappingURL=bytes.d.ts.map