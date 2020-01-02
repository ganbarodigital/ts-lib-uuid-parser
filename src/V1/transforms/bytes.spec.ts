//
// Copyright (c) 2019-present Ganbaro Digital Ltd
// All rights reserved.
//
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions
// are met:
//
//   * Re-distributions of source code must retain the above copyright
//     notice, this list of conditions and the following disclaimer.
//
//   * Redistributions in binary form must reproduce the above copyright
//     notice, this list of conditions and the following disclaimer in
//     the documentation and/or other materials provided with the
//     distribution.
//
//   * Neither the names of the copyright holders nor the names of his
//     contributors may be used to endorse or promote products derived
//     from this software without specific prior written permission.
//
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
// "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
// LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS
// FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
// COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
// INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING,
// BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
// LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
// CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT
// LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN
// ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
// POSSIBILITY OF SUCH DAMAGE.
//
import { Uuid } from "../";
import { uuidFromBytes, uuidToBytes } from "./bytes";

describe("uuidToBytes()", () => {

    it("accepts a well-formatted UUID string", () => {
        const inputValue = "123e4567-e89b-12d3-a456-426655440000";
        const expectedValue = new Uint8Array(new ArrayBuffer(16));
        expectedValue[0] = parseInt("12", 16);
        expectedValue[1] = parseInt("3e", 16);
        expectedValue[2] = parseInt("45", 16);
        expectedValue[3] = parseInt("67", 16);
        expectedValue[4] = parseInt("e8", 16);
        expectedValue[5] = parseInt("9b", 16);
        expectedValue[6] = parseInt("12", 16);
        expectedValue[7] = parseInt("d3", 16);
        expectedValue[8] = parseInt("a4", 16);
        expectedValue[9] = parseInt("56", 16);
        expectedValue[10] = parseInt("42", 16);
        expectedValue[11] = parseInt("66", 16);
        expectedValue[12] = parseInt("55", 16);
        expectedValue[13] = parseInt("44", 16);
        expectedValue[14] = parseInt("00", 16);
        expectedValue[14] = parseInt("00", 16);

        const actualValue = new Uint8Array(uuidToBytes(inputValue));

        expect(actualValue).toEqual(expectedValue);
    });

    it("accepts a UUID object", () => {
        const inputValue = new Uuid("123e4567-e89b-12d3-a456-426655440000");
        const expectedValue = new Uint8Array(new ArrayBuffer(16));
        expectedValue[0] = parseInt("12", 16);
        expectedValue[1] = parseInt("3e", 16);
        expectedValue[2] = parseInt("45", 16);
        expectedValue[3] = parseInt("67", 16);
        expectedValue[4] = parseInt("e8", 16);
        expectedValue[5] = parseInt("9b", 16);
        expectedValue[6] = parseInt("12", 16);
        expectedValue[7] = parseInt("d3", 16);
        expectedValue[8] = parseInt("a4", 16);
        expectedValue[9] = parseInt("56", 16);
        expectedValue[10] = parseInt("42", 16);
        expectedValue[11] = parseInt("66", 16);
        expectedValue[12] = parseInt("55", 16);
        expectedValue[13] = parseInt("44", 16);
        expectedValue[14] = parseInt("00", 16);
        expectedValue[14] = parseInt("00", 16);

        const actualValue = new Uint8Array(uuidToBytes(inputValue));

        expect(actualValue).toEqual(expectedValue);
    });

});

describe("uuidFromBytes()", () => {

    it("accepts an array of bytes", () => {
        const expectedValue = new Uuid("123e4567-e89b-12d3-a456-426655440000");
        const inputValue = new Uint8Array(new ArrayBuffer(16));
        inputValue[0] = parseInt("12", 16);
        inputValue[1] = parseInt("3e", 16);
        inputValue[2] = parseInt("45", 16);
        inputValue[3] = parseInt("67", 16);
        inputValue[4] = parseInt("e8", 16);
        inputValue[5] = parseInt("9b", 16);
        inputValue[6] = parseInt("12", 16);
        inputValue[7] = parseInt("d3", 16);
        inputValue[8] = parseInt("a4", 16);
        inputValue[9] = parseInt("56", 16);
        inputValue[10] = parseInt("42", 16);
        inputValue[11] = parseInt("66", 16);
        inputValue[12] = parseInt("55", 16);
        inputValue[13] = parseInt("44", 16);
        inputValue[14] = parseInt("00", 16);
        inputValue[14] = parseInt("00", 16);

        const actualValue = uuidFromBytes(inputValue);

        expect(actualValue).toEqual(expectedValue);
    });
});