# UUID Parser for Typescript

## Introduction

This TypeScript library will take any [RFC 4122 UUID](http://www.ietf.org/rfc/rfc4122.txt), and parse it into a stream of bytes.

The library also offers a `Uuid` type, and a useful validation function.

- [Introduction](#introduction)
- [Quick Start](#quick-start)
- [V1 API](#v1-api)
  - [Uuid()](#uuid)
  - [Uuid Automatic String Conversion](#uuid-automatic-string-conversion)
  - [isUuidData()](#isuuiddata)
  - [mustBeUuidData()](#mustbeuuiddata)
  - [uuidFromBytes()](#uuidfrombytes)
  - [uuidToBytes()](#uuidtobytes)
  - [uuidFromFormatted()](#uuidfromformatted)
  - [uuidFromUnformatted()](#uuidfromunformatted)
- [NPM Scripts](#npm-scripts)
  - [npm run clean](#npm-run-clean)
  - [npm run build](#npm-run-build)
  - [npm run test](#npm-run-test)
  - [npm run cover](#npm-run-cover)

## Quick Start

```
# run this from your Terminal
npm install @ganbarodigital/ts-uuid-parser
```

```typescript
// add this import to your Typescript code
import { Uuid } from "@ganbarodigital/ts-uuid-parser/V1"
```

__VS Code users:__ once you've added a single import anywhere in your project, you'll then be able to auto-import anything else that this library exports.

## V1 API

### Uuid()

```typescript
import { Branded } from "@ganbarodigital/ts-lib-value-objects/V1";

/**
 * A type-safe representation of a UUID / GUID
 */
export type Uuid = Branded<string, "uuid">;
```

`Uuid` is a _branded type_. It represents a validated RFC 4122 UUID.

For example:

```typescript
import { uuidFromFormatted } from "@ganbarodigital/ts-uuid-parser/V1";

// creates a new Uuid
const myUuid = uuidFromFormatted("9c47cb7c-9793-4944-9189-61a938d0e9bd");
```

### Uuid Automatic String Conversion

At runtime, `Uuid` is just a string. You can use it anywhere you'd normally use a string.

```typescript
import { Uuid } from "@ganbarodigital/ts-uuid-parser/V1";

// creates a new Uuid
const myUuid = uuidFromFormatted("9c47cb7c-9793-4944-9189-61a938d0e9bd");

// outputs the string "9c47cb7c-9793-4944-9189-61a938d0e9bd"
console.log(myUuid);
```

### isUuidData()

```typescript
function isUuidData(input: string): boolean
```

`isUuidData()` is a _data guard_. It returns `true` if the input string contains a well-formatted UUID.

For example:

```typescript
import { isUuidData } from "@ganbarodigital/ts-uuid-parser/V1";

if (!isUuidData("12345-67890")) {
    throw new Error("invalid UUID");
}
```

### mustBeUuidData()

```typescript
export function mustBeUuidData(input: string, onError?: OnError<InvalidUuidError>): void
```

`mustBeUuidData()` is a _data guarantee_. It throws an `InvalidUuidError` if the input isn't an acceptable UUID.

### uuidFromBytes()

```typescript
export function uuidFromBytes(input: Buffer, onError?: OnError<InvalidUuidError>): Uuid
```

`uuidFromBytes()` is a _data transform_. It builds a human-readable UUID from a `Buffer`, reading from offset `0`. It returns the resulting `Uuid` value.

If the resulting string isn't a valid UUID, the `onError` handler is called.

The default `onError` handler is `throwInvalidUuidError()`.

### uuidToBytes()

```typescript
export function uuidToBytes(uuid: Uuid, target?: Buffer): Buffer
```

`uuidToBytes()` is a _data transform_. It converts a human-readable UUID into bytes, and writes those bytes into the `target` `Buffer`, starting at offset `0`.

If you do not provide a `target` `Buffer` to write to, `uuidToBytes()` will allocate one for you.

The return value is the `Buffer` that has been written to.

### uuidFromFormatted()

```typescript
/**
 * this is our main factory for building Uuids
 */
export function uuidFromFormatted(input: string, onError?: OnError<InvalidUuidError>): Uuid;
```

`uuidFromFormatted()` is a _smart constructor_. It validates that `input` contains a well-formed UUID, and returns a `Uuid` type.

If the input validation fails, `uuidFromFormatted()` calls the `onError` handler. The `onError` handler must throw an `Error` of some kind.

The default `onError` handler is `throwInvalidUuidError()`.

### uuidFromUnformatted()

```typescript
/**
 * converts an array of bytes into a type-safe UUID
 */
export function uuidFromUnformatted(input: string, onError?: OnError<InvalidUuidError>): Uuid;
```

`uuidFromUnformatted()` is a _data transform_. It converts the contents of `input` into a well-formatted UUID, and then calls `uuidFromFormatted()`.

## NPM Scripts

### npm run clean

Use `npm run clean` to delete all of the compiled code.

### npm run build

Use `npm run build` to compile the Typescript into plain Javascript. The compiled code is placed into the `lib/` folder.

`npm run build` does not compile the unit test code.

### npm run test

Use `npm run test` to compile and run the unit tests. The compiled code is placed into the `lib/` folder.

### npm run cover

Use `npm run cover` to compile the unit tests, run them, and see code coverage metrics.

Metrics are written to the terminal, and are also published as HTML into the `coverage/` folder.