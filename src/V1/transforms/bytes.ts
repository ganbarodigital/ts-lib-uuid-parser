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
import { OnError } from "@ganbarodigital/ts-on-error/lib/V1";

import { uuidFromUnformatted, uuidToUnformatted } from ".";
import { InvalidUuidError, Uuid } from "..";
import { UuidByteLength } from "../types/Uuid";

/**
 * Converts a human-readable UUID into an array of bytes
 */
export function uuidToBytes(uuid: Uuid, target?: Buffer): Buffer {
    target = target ?? Buffer.alloc(UuidByteLength);

    // we can use the Buffer to do the conversion for us!
    target.write(uuidToUnformatted(uuid), "hex");

    // all done
    return target;
}

/**
 * converts an array of bytes into a type-safe UUID
 */
export function uuidFromBytes(input: Buffer, onError?: OnError<InvalidUuidError>): Uuid {
    // the Buffer will give us the raw hex ...
    const unformattedHex = input.toString("hex", 0, 16);

    // ... we just need to format it
    return uuidFromUnformatted(unformattedHex, onError);
}