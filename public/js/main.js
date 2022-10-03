//Encryption part
const encryptText = document.querySelector("#encrypt-text");
const encryptKey = document.querySelector("#encrypt-key");
const encryptButton = document.querySelector("#encrypt-button");
const encryptOutput = document.querySelector("#encrypt-output");

encryptButton?.addEventListener("click", (e) => {
  e.preventDefault();

  if (!encryptText.value || !Number(encryptKey.value)) return;

  let txt = [];
  let output = "";

  for (let i of encryptText.value) {
    txt.push(i.charCodeAt(i));
  }

  for (let i of txt) {
    output += String.fromCharCode(i + Number(encryptKey.value));
  }

  encryptOutput.innerText = output;
});
