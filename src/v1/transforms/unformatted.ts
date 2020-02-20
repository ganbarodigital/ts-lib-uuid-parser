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
import { OnError, THROW_THE_ERROR } from "@ganbarodigital/ts-lib-error-reporting/lib/v1";

import { InvalidUuidError, Uuid } from "..";
import { uuidFromFormatted } from "./formatted";

/**
 * Converts a human-readable UUID into an unformatted string
 * (i.e. with the '-' stripped out)
 */
export function uuidToUnformatted(uuid: Uuid): string {
    return uuid.split("-").join("");
}

/**
 * converts an array of bytes into a type-safe UUID
 */
export function uuidFromUnformatted(input: string, onError: OnError = THROW_THE_ERROR): Uuid {
    // make sure the input string is the right length
    if (input.length !== 32) {
        onError(new InvalidUuidError({public: { invalidInput: input}}));
    }

    // ... we just need to format it
    return uuidFromFormatted(
        input.substr(0, 8)
        + "-"
        + input.substr(8, 4)
        + "-"
        + input.substr(12, 4)
        + "-"
        + input.substr(16, 4)
        + "-"
        + input.substr(20, 12),
        onError,
    );
}