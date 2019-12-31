/**
 * A regex that will match UUID v1-v5, and the NULL UUID
 */
export declare const UuidRegex: RegExp;
/**
 * returns `true` if the given string is well-formatted UUID string,
 * `false` otherwise
 *
 * @export
 * @param {string} uuid
 * @returns {boolean}
 */
export declare function validate(uuid: string): boolean;
/**
 * throws an error if the given string is not a well-formatted UUID
 *
 * @export
 * @param {string} uuid
 */
export declare function mustBe(uuid: string): void;
//# sourceMappingURL=validate.d.ts.map