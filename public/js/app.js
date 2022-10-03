//Decryption part
const decryptText = document.querySelector("#decrypt-text");
const decryptKey = document.querySelector("#decrypt-key");
const decryptButton = document.querySelector("#decrypt-button");
const decryptOutput = document.querySelector("#decrypt-output");

decryptButton.addEventListener("click", (e) => {
  e.preventDefault();

  if (!decryptText.value || !Number(decryptKey.value)) return;

  let txt = [];
  let output = "";

  for (let i of decryptText.value) {
    txt.push(i.charCodeAt(i));
  }

  for (let i of txt) {
    output += String.fromCharCode(i - Number(decryptKey.value));
  }

  decryptOutput.innerText = output;
});
