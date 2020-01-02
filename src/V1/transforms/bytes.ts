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

import { InvalidUuidError, Uuid } from "..";
import { UuidByteLength } from "../types";

/**
 * byteToHexMap holds the hexadecimal for each possible byte value
 */
type byteMap = { [key: number]: string };
const byteToHexMap: byteMap = [];

/**
 * hexToByteMap holds the byte value for each possible hexadecimal pair
 */
type hexMap = { [key: string]: number };
const hexToByteMap: hexMap = {};

// populate both maps
for (let i = 0; i < 256; i++) {
    // this guarantees that we always get two hex characters back
    byteToHexMap[i] = (i + 0x100).toString(16).substr(1);
    hexToByteMap[byteToHexMap[i]] = i;
}

/**
 * Converts a human-readable UUID into an array of bytes
 */
export function uuidToBytes(uuid: Uuid): Buffer {
    const target = Buffer.alloc(UuidByteLength);

    // let's get the UUID converted
    let i = 0;
    uuid.hex.toLowerCase().replace(/[0-9a-f]{2}/g, (hex: string): string => {
        target[i] = hexToByteMap[hex];
        i++;
        return hex;
    });

    // all done
    return target;
}

/**
 * converts an array of bytes into a type-safe UUID
 */
export function uuidFromBytes(input: Buffer, onError?: OnError<InvalidUuidError>): Uuid {
    // write to the start of the buffer
    let offset = 0;

    return new Uuid(
        byteToHexMap[input[offset++]]
        + byteToHexMap[input[offset++]]
        + byteToHexMap[input[offset++]]
        + byteToHexMap[input[offset++]]
        + "-"
        + byteToHexMap[input[offset++]]
        + byteToHexMap[input[offset++]]
        + "-"
        + byteToHexMap[input[offset++]]
        + byteToHexMap[input[offset++]]
        + "-"
        + byteToHexMap[input[offset++]]
        + byteToHexMap[input[offset++]]
        + "-"
        + byteToHexMap[input[offset++]]
        + byteToHexMap[input[offset++]]
        + byteToHexMap[input[offset++]]
        + byteToHexMap[input[offset++]]
        + byteToHexMap[input[offset++]]
        + byteToHexMap[input[offset++]],
        onError,
    );
}