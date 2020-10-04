
declare module "password-prompt" {
  export default function (
    ask?: string,
    option?: { method: "mask" | "hide" }
  ): Promise<string>;
}
