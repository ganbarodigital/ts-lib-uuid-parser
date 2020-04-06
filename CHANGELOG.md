# CHANGELOG

## develop

### Dependencies

* Upgraded everything to fix a vulnerability in the `minimist` package
* Moved TypeScript et al into the `devDependencies` section

## v0.3.0

Released Thursday, 20th February 2020.

### Backwards-Compatibility Break

* Error reporting has switched over to `@ganbarodigital/ts-lib-error-reporting`
* We now export `lib/v1`, not `V1`

### Tests

* Switched from `jasmine` to `mocha` and `chai`

## v0.2.0

Released Wednesday, 29th January 2020.

### Backwards-Compatibility Break

* `Uuid` is now a branded string. No longer a class / value object.
* `mustBeUuid()` is now `mustBeUuidData()`
* `mustBeUuidWithOnError()` has been removed; use `mustBeUuidData()` instead

### New

* Added automatic to-string conversion of Uuids.

### Refactor

* Move conversion to/from unformatted strings into separate functions

## v0.1.1

Released Thursday, 2nd January 2020.

### Fixes

* Solved the problem of missing Typescript declaration files from the published package.

## v0.1.0

Released Thursday, 2nd January 2020.

### B/C Breaks

* `fromBytes()` is now `uuidFromBytes()`
* `IsInvalidUuidError()` is now `isInvalidUuidError()`
* `isUuid()` is now `isUuidType()`
* `mustBe()` is now `mustBeUuid()`
* `toBytes()` is now `uuidToBytes()`
* `validate()` is now `isUuidData()`
* `uuidToBytes()` now requires a `Buffer`
* `uuidFromBytes()` now requires a `Buffer`

### New

* Added `isUuidString()`
* Added `mustBeUuidWithOnError()`
* Added `UuidByteLength` constant

### Fixes

* Clean up the NPM scripts
* Do not include Jasmine's `spec` folder in the published package
* Switch to our fork of 'jasmine-ts', solves NPM security audit issue
* Switch to `rimraf` in NPM scripts for more portability

## v0.0.4

Released Wednesday, 1st January 2020

### Fixes

* `import {} from "@ganbarodigital/ts-uuid-parser/V1` hopefully now works
* `mustBe` is now exported

## v0.0.3

Releaed Wednesday, 1st January 2020

### Fixes

* `npm run clean` now removes the `lib` folder
* Removed `npm postinstall` script (prevents package installing correctly)

## v0.0.2

Released Wednesday, 1st January 2020

### New

* Added `npm run lint` tool

### Fixes

* All files now pass TSLint
* (Hopefully) auto-import for VSCode now works

## v0.0.1

Released Tuesday, 31st December 2019.

### New

* Added `Uuid` type
* Added `isUuid()` type-guard
* Added `InvalidUuidError` type
* Added `isInvalidUuidError()` type-guard
* Added `validate()` function
* Added `mustBe()` function
* Added `toBytes()` function
* Added `fromBytes()` function