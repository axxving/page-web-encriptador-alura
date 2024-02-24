function generatePassword(length) {
    // definir los caracteres que se utilizarán en la contraseña
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$&";
    let password = "";
    // generar cada carácter de la contraseña
    for (let i = 0; i < length; i++) {
      password += charset.charAt(Math.floor(Math.random() * charset.length));
    }
    return password;
  }

  function generateAndDisplayPassword() {
    const passwordLength = document.getElementById("passwordLength").value;
    const generatedPassword = generatePassword(passwordLength);
    document.getElementById("password").value = generatedPassword;
  }