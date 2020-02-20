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
import { OnError } from "@ganbarodigital/ts-lib-error-reporting/lib/v1";

import { uuidFromFormatted } from "./formatted";
import { uuidFromUnformatted, uuidToUnformatted } from "./unformatted";

describe("uuidToUnformatted()", () => {
    it("accepts a UUID object", () => {
        const inputValue = uuidFromFormatted("123e4567-e89b-12d3-a456-426655440000");
        const expectedValue = "123e4567e89b12d3a456426655440000";

        const actualValue = uuidToUnformatted(inputValue);

        expect(actualValue).toEqual(expectedValue);
    });
});

describe("uuidFromUnformatted()", () => {

    it("accepts a string", () => {
        const expectedValue = uuidFromFormatted("123e4567-e89b-12d3-a456-426655440000");
        const inputValue = "123e4567e89b12d3a456426655440000";

        const actualValue = uuidFromUnformatted(inputValue);

        expect(actualValue).toEqual(expectedValue);
    });

    it("rejects a string that's shorter than 32 characters", () => {
        const expectedDescription = "UUID is invalid / not in RFC 4122 format";
        let actualDescription = "";

        const onError: OnError = (e) => {
            actualDescription = e.details.detail;
            throw e;
        };
        const inputValue = "this is a short string";

        expect(() => {uuidFromUnformatted(inputValue, onError); } ).toThrow();
        expect(actualDescription).toEqual(expectedDescription);
    });

    it("rejects a string that's longer than 32 characters", () => {
        const expectedDescription = "UUID is invalid / not in RFC 4122 format";
        let actualDescription = "";

        const onError: OnError = (e) => {
            actualDescription = e.details.detail;
            throw e;
        };
        const inputValue = "this is a long string that's definitely longer than a UUID is";

        expect(() => {uuidFromUnformatted(inputValue, onError); } ).toThrow();
        expect(actualDescription).toEqual(expectedDescription);
    });
});