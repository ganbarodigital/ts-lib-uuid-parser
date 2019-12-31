/**
 * A type-safe representation of a UUID / GUID
 */
export declare class Uuid {
    readonly hex: string;
    constructor(uuid: string);
}
/**
 * A type-guard to make sure that you're dealing with a type-safe Uuid
 */
export declare function IsUuid(input: any): input is Uuid;
//# sourceMappingURL=Uuid.d.ts.map