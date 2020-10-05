import "./styles.css";
import { Digest, Kilid } from "@kilid/core";

const sha: Digest = async (data: ArrayBuffer) => {
  return window.crypto.subtle.digest("SHA-512", data);
};

const kilid = new Kilid(sha);

const input = document.getElementById("password") as HTMLInputElement;
const generateButton = document.getElementById("generate");
const messageBox = document.getElementById("message")!;

function genarte() {
  kilid
    .generate(input.value)
    .then((k) => {
      navigator.clipboard.writeText(k);
      input.value = "";
    })
    .then(() => {
      messageBox.innerHTML = "Copied to Clipboard!";
      setTimeout(() => {
        messageBox.innerHTML = "";
      }, 3000);
    });
}
generateButton?.addEventListener("click", genarte);
input.addEventListener("keyup", (event) => {
  if (event.key === "Enter") {
    genarte();
  }
});

navigator.serviceWorker.register("./service-worker.ts");
