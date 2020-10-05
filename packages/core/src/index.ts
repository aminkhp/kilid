// import * as BASE85 from "base85";
import * as BASE85 from "z85-codec";

export type Digest = (data: ArrayBuffer) => Promise<ArrayBuffer>;
export class Kilid {
  textEncoder = new TextEncoder();
  textDecoder = new TextDecoder();
  constructor(private sha: Digest, length: number = 16) {}

  generate = async (master: string) => {
    const buffer = this.textEncoder.encode(master);
    const sha = await this.sha(buffer);
    const b85 = BASE85.encode(this.padd(new Uint8Array(sha)));
    return b85!.substring(0, 16);
  };

  padd(buffer: Uint8Array): Uint8Array {
    if(buffer.byteLength % 4 === 0) return buffer;
    const newBuffer = new Uint8Array(buffer.byteLength + 4 - buffer.byteLength % 4);
    newBuffer.set(new Uint8Array(buffer), 0);
    return newBuffer;
  }
}
