type Encoding = "ascii85" | "z85" | "ipv6";
declare module "r85" {
  export default class R85 {
    decode(
      data: string | ArrayBuffer,
      // encoding?: Encoding
    ): ArrayBuffer;
    encodeToString(
      data: string,
      // encoding?: Encoding
    ): string;
  }
  
}
