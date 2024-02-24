// Función para encriptar el texto
function encriptar() {
    // Se obtiene el texto sin cifrar que se encuentra en el elemento con id "texto_sin_cifrar"
    const texto_sin_cifrar = document.getElementById("texto_sin_cifrar").value;
    let texto_cifrado = "";
    
    // Se recorre el texto sin cifrar letra por letra
    for (let i = 0; i < texto_sin_cifrar.length; i++) {
        let letra = texto_sin_cifrar[i];
    
        // Solo se cifran las letras, el resto de caracteres se mantienen igual
        if (letra.match(/[a-z]/i)) {
            // Se obtiene el código ASCII de la letra
            const codigo_ascii = letra.charCodeAt(0);
            // Se cifra el código ASCII sumando 1 (desplazamiento de una posición hacia la derecha)
            const codigo_ascii_cifrado = codigo_ascii + 1;
            // Se convierte el código ASCII cifrado en la letra correspondiente
            letra = String.fromCharCode(codigo_ascii_cifrado);
        }
    
        // Se va construyendo el texto cifrado letra por letra
        texto_cifrado += letra;
    }
    
    // Se muestra el texto cifrado en el elemento con id "texto_cifrado"
    document.getElementById("texto_cifrado").value = texto_cifrado;
}

// Función para descifrar el texto cifrado
function descifrar() {
    // Se obtiene el texto cifrado que se encuentra en el elemento con id "texto_cifrado"
    const texto_cifrado = document.getElementById("texto_cifrado").value;
    let texto_descifrado = "";
    
    // Se recorre el texto cifrado letra por letra
    for (let i = 0; i < texto_cifrado.length; i++) {
        let letra = texto_cifrado[i];
    
        // Solo se descifran las letras, el resto de caracteres se mantienen igual
        if (letra.match(/[a-z]/i)) {
            // Se obtiene el código ASCII de la letra cifrada
            const codigo_ascii = letra.charCodeAt(0);
            // Se descifra el código ASCII restando 1 (desplazamiento de una posición hacia la izquierda)
            const codigo_ascii_descifrado = codigo_ascii - 1;
            // Se convierte el código ASCII descifrado en la letra correspondiente
            letra = String.fromCharCode(codigo_ascii_descifrado);
        }
    
        // Se va construyendo el texto descifrado letra por letra
        texto_descifrado += letra;
    }
    
    // Se muestra el texto descifrado en el elemento con id "texto_sin_cifrar" y "texto_descifrado"
    document.getElementById("texto_sin_cifrar").value = texto_descifrado;
    document.getElementById("texto_descifrado").value = texto_descifrado;
}