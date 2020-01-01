# CHANGELOG

## develop

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