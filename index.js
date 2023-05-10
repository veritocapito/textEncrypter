const text = document.getElementById('text');
const message = document.getElementById('message');


function btnEncrypter() {
    const encryptedText = encrypt(text.value);
    message.value = encryptedText;
    text.value = "";
    message.style.backgroundImage = "none";
}

function encrypt(stringEncrypted) {
    let matrixCode = [["e", "enter"],["i", "imes"],["a", "ai"],["o", "ober"],["u", "ufat"]]
    stringEncrypted = stringEncrypted.toLowerCase()

    for (let i = 0; i < matrixCode.length; i++) {
        if (stringEncrypted.includes(matrixCode[i][0])) {
            stringEncrypted = stringEncrypted.replaceAll(matrixCode[i][0], matrixCode[i][1])
        }
    }
    return stringEncrypted;
}

function btnDecrypter() {
    const decryptedText = decrypt(text.value);
    message.value = decryptedText;
    text.value = "";
}

function decrypt(stringDecrypted) {
    let matrixCode = [["e", "enter"],["i", "imes"],["a", "ai"],["o", "ober"],["u", "ufat"]]
    stringDecrypted = stringDecrypted.toLowerCase()

    for (let i = 0; i < matrixCode.length; i++) {
        if (stringDecrypted.includes(matrixCode[i][1])) {
            stringDecrypted = stringDecrypted.replaceAll(matrixCode[i][1], matrixCode[i][0])
        }
    }
    return stringDecrypted;
}

const source = document.getElementsByClassName(".copy");

source.addEventListener("copy", (event) => {
    const selection = document.getSelection();
    event.clipboardData.setData("text/plain", selection.toString());
    event.preventDefault();
});
