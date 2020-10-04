import { createHash } from "crypto";
import { Digest, Kilid } from "@kilid/core";
import prompt from "password-prompt";
import * as Clipboard from "clipboardy";

const sha: Digest = (data: ArrayBuffer) => {
  const hash = createHash("sha512");
  hash.update(new Uint8Array(data));
  return hash.digest();
};

const kilid = new Kilid(sha);

prompt("Password: ", { method: "hide" })
  .then(kilid.generate)
  .then(Clipboard.write)
  .then(() => {
    console.log("Copied to Clipboard!");
  });
