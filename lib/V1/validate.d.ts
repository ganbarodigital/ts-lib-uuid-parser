import { Uuid } from './types/Uuid';
/**
 * A regex that will match UUID v1-v5, and the NULL UUID
 */
export declare const UuidRegex: RegExp;
/**
 * returns `true` if the given string is well-formatted UUID string,
 * `false` otherwise
 */
export declare function validate(input: Uuid | string): boolean;
//# sourceMappingURL=validate.d.ts.map