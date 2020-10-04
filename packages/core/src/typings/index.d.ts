type Encoding = "ascii85" | "z85" | "ipv6";
declare module "base85" {
  export function decode(
    data: string | ArrayBuffer,
    encoding?: Encoding
  ): ArrayBuffer;
  export function encode(
    data: string | ArrayBuffer,
    encoding?: Encoding
  ): string;
}
