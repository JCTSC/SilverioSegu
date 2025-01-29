
function criptografar() {
    const texto = document.getElementById("texto").value;
    const chave = document.getElementById("chave").value;
    const textoCriptografado = CryptoJS.AES.encrypt(texto, chave).toString();
    document.getElementById("resultado").value = textoCriptografado;
  }
  function descriptografar() {
    const texto = document.getElementById("texto").value;
      document.getElementById("resultado").value = texto;
 
  }
