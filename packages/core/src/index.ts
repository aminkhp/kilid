import * as BASE85 from "base85";

export type Digest = (data: ArrayBuffer) => ArrayBuffer;
export class Kilid {
  textEncoder = new TextEncoder();
  textDecoder = new TextDecoder();
  constructor(private sha: Digest) {}

  generate = async (master: string) => {
    const buffer = this.textEncoder.encode(master);
    const sha = await this.sha(buffer);
    const b85 = BASE85.encode(sha, "z85");
    return b85;
  };
}
