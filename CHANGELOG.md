# CHANGELOG

## develop

### B/C Breaks

* `fromBytes()` is now `uuidFromBytes()`
* `isUuid()` is now `isUuidType()`
* `mustBe()` is now `mustBeUuid()`
* `toBytes()` is now `uuidToBytes()`
* `validate()` is now `isUuidData()`

### New

* Added `isUuidString()`
* Added `mustBeUuidWithOnError()`

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