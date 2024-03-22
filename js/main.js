// Función para validar y encriptar el texto
function encriptarTexto() {
    let texto = document.getElementById('inputTexto').value;
    let tipoEncriptacion = document.getElementById('tipoEncriptacion').value;
    let textoEncriptado = '';

    if (tipoEncriptacion === '1') {
        textoEncriptado = encriptacionSencilla(texto);
    } else if (tipoEncriptacion === '2') {
        textoEncriptado = sha256(texto);
    } else if (tipoEncriptacion === '3') {
        let desplazamiento = parseInt(prompt("Introduce el desplazamiento para el cifrado César:", 3));
        textoEncriptado = cifradoCesar(texto, desplazamiento);
    }

    // Muestra el texto encriptado en el campo correspondiente
    document.getElementById('textoEncriptado').value = textoEncriptado;
}

// Función para descifrar el texto
function descifrarTexto() {
    let textoEncriptado = document.getElementById('textoEncriptado').value;
    let tipoEncriptacion = document.getElementById('tipoEncriptacion').value;
    let textoDescifrado = '';

    if (tipoEncriptacion === '1') {
        // Para la encriptación sencilla, convertimos el texto encriptado a mayúsculas
        textoEncriptado = textoEncriptado.toUpperCase();

        // Recorremos cada carácter del texto encriptado
        for (let i = 0; i < textoEncriptado.length; i++) {
            let char = textoEncriptado[i];

            // Si el carácter es una letra
            if (char >= 'A' && char <= 'Z') {
                // Desplazamos el carácter en una posición hacia la izquierda en el alfabeto
                let codigoAscii = char.charCodeAt(0);
                let nuevoCodigoAscii = ((codigoAscii - 65 - 1 + 26) % 26) + 65;
                textoDescifrado += String.fromCharCode(nuevoCodigoAscii);
            } else {
                // Si no es una letra, simplemente lo agregamos sin modificar
                textoDescifrado += char;
            }
        }
    } else if (tipoEncriptacion === '2') {
        // No es posible descifrar un hash SHA-256, ya que es irreversible
        alert("No se puede descifrar un hash SHA-256, ya que es irreversible.");
        return;
    } else if (tipoEncriptacion === '3') {
        let desplazamiento = parseInt(prompt("Introduce el desplazamiento para el cifrado César:", 3));
        // Aplicamos el descifrado César invirtiendo el desplazamiento
        textoDescifrado = cifradoCesar(textoEncriptado, -desplazamiento);
    }

    // Muestra el texto descifrado en el campo correspondiente
    document.getElementById('textoDescencriptado').value = textoDescifrado;
}

// Event listener para el botón de borrar
document.getElementById('btnBorrar').addEventListener('click', function () {
    borrarCampos();
});

// Función para borrar todos los campos y restablecer la selección del tipo de encriptación
function borrarCampos() {
    // Borra el texto de los campos de entrada y salida
    document.getElementById('inputTexto').value = '';
    document.getElementById('textoEncriptado').value = '';
    document.getElementById('textoDescencriptado').value = '';
    document.getElementById('textoACopiar').value = ''; // Nuevo: Limpiar campo de copiar y pegar

    // Restablece la selección del tipo de encriptación al valor predeterminado
    document.getElementById('tipoEncriptacion').selectedIndex = 0;
}


// Función para copiar el texto encriptado o descifrado
function copiarTexto() {
    let textoACopiar = document.getElementById('textoEncriptado').value;
    // Si estamos mostrando el texto descifrado, copiamos desde el campo correspondiente
    if (textoACopiar === '') {
        textoACopiar = document.getElementById('textoDescencriptado').value;
    }
    // Si no hay texto para copiar, mostrar un mensaje
    if (textoACopiar === '') {
        textoACopiar = "Aun no hay texto";
    }
    // Actualizamos el valor del input de copiar y pegar con el texto encriptado
    document.getElementById('textoACopiar').value = textoACopiar;
    // Copiamos el texto al portapapeles
    navigator.clipboard.writeText(textoACopiar)
        .then(() => {
            // Mostramos un tooltip indicando que el texto se ha copiado
            let tooltip = new bootstrap.Tooltip(document.getElementById('copyIcon'), {
                title: "Texto copiado",
                trigger: 'manual'
            });
            tooltip.show();
            // Ocultamos el tooltip después de 1.5 segundos
            setTimeout(() => {
                tooltip.hide();
            }, 1500);
        })
        .catch(err => {
            console.error('No se pudo copiar el texto: ', err);
        });
}


// Event listener para el botón de encriptar
document.getElementById('btnEncriptar').addEventListener('click', function () {
    encriptarTexto();
    copiarTexto();
});

// Event listener para el botón de descifrar
document.getElementById('btnDescifrar').addEventListener('click', function () {
    descifrarTexto();
    copiarTexto();
});

// Función para encriptación sencilla
function encriptacionSencilla(texto) {
    // Convertimos el texto a minúsculas para facilitar el manejo
    texto = texto.toLowerCase();

    let resultado = '';

    // Recorremos cada carácter del texto
    for (let i = 0; i < texto.length; i++) {
        let char = texto[i];

        // Si el carácter es una letra
        if (char >= 'a' && char <= 'z') {
            // Desplazamos el carácter en una posición hacia la derecha en el alfabeto
            let codigoAscii = char.charCodeAt(0);
            let nuevoCodigoAscii = ((codigoAscii - 97 + 1) % 26) + 97;
            resultado += String.fromCharCode(nuevoCodigoAscii);
        } else {
            // Si no es una letra, simplemente lo agregamos sin modificar
            resultado += char;
        }
    }

    return resultado;
}

// Función para SHA-256
function sha256(texto) {
    // Verifica que CryptoJS esté cargado en el entorno
    if (typeof CryptoJS === 'undefined') {
        console.error('CryptoJS no está cargado. Asegúrate de incluirlo en tu proyecto.');
        return null;
    }

    // Calcula el hash SHA-256 del texto utilizando CryptoJS
    return CryptoJS.SHA256(texto).toString(CryptoJS.enc.Hex);
}


// Función para cifrado César
function cifradoCesar(texto, desplazamiento) {
    // Implementa tu lógica de cifrado César aquí
    let resultado = '';

    for (let i = 0; i < texto.length; i++) {
        let charCode = texto.charCodeAt(i);
        let encryptedCharCode;

        if (charCode >= 65 && charCode <= 90) { // Rango de caracteres A-Z
            encryptedCharCode = ((charCode - 65 + desplazamiento) % 26) + 65;
        } else if (charCode >= 97 && charCode <= 122) { // Rango de caracteres a-z
            encryptedCharCode = ((charCode - 97 + desplazamiento) % 26) + 97;
        } else {
            encryptedCharCode = charCode; // Mantener caracteres no alfabéticos sin cambios
        }

        resultado += String.fromCharCode(encryptedCharCode);
    }

    return resultado;
}

// Agrega la clase "loaded" al body cuando la página haya cargado completamente
window.addEventListener("load", function () {
    document.body.classList.add("loaded");
});