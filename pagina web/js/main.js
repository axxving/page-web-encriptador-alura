function validarTexto() {
    const inputTexto = document.getElementById('inputTexto');
    const modalAdvertencia = new bootstrap.Modal(document.getElementById('modalAdvertencia'));

    // Expresión regular para permitir solo letras minúsculas
    const regex = /^[a-z]+$/;

    if (!regex.test(inputTexto.value)) {
        // Mostrar el modal de advertencia
        modalAdvertencia.show();
        // Limpiar el contenido del textarea
        inputTexto.value = '';
        // Deshabilitar el textarea
        inputTexto.disabled = true;
    }
}

document.addEventListener('DOMContentLoaded', function () {
    const btnEncriptar = document.getElementById('btnEncriptar');
    const btnDescifrar = document.getElementById('btnDescifrar');
    const inputTexto = document.getElementById('inputTexto');
    const cuadroEncriptado = document.getElementById('cuadroEncriptado');
    const cuadroDescencriptado = document.getElementById('cuadroDescencriptado');
    const modalAdvertencia = new bootstrap.Modal(document.getElementById('modalAdvertencia'));

    // Función para encriptar el texto
    const encriptarTexto = () => {
        const textoOriginal = inputTexto.value;
        // Lógica de encriptado (puedes personalizar esta parte)
        const textoEncriptado = btoa(textoOriginal);
        cuadroEncriptado.textContent = textoEncriptado;
    };

    // Función para descifrar el texto
    const descifrarTexto = () => {
        const textoEncriptado = cuadroEncriptado.textContent;
        // Lógica de descifrado (puedes personalizar esta parte)
        const textoDescencriptado = atob(textoEncriptado);
        cuadroDescencriptado.textContent = textoDescencriptado;
    };

    // Evento click para encriptar
    btnEncriptar.addEventListener('click', function () {
        validarTexto(); // Llamar a la función de validación antes de encriptar
        encriptarTexto();
    });

    // Evento click para descifrar
    btnDescifrar.addEventListener('click', function () {
        validarTexto(); // Llamar a la función de validación antes de descifrar
        descifrarTexto();
    });

    // Evento para cerrar el modal al hacer clic en los botones de cerrar o 'x'
    const modalCloseButtons = document.querySelectorAll('[data-bs-dismiss="modal"]');
    modalCloseButtons.forEach(button => {
        button.addEventListener('click', () => {
            modalAdvertencia.hide();
            // Habilitar el textarea al cerrar el modal
            inputTexto.disabled = false;
        });
    });

    // Evento para cambiar el fondo del textarea al escribir
    inputTexto.addEventListener('input', function () {
        this.classList.add('textarea-active');
    });

    // Evento para restaurar el fondo del textarea al perder el foco
    inputTexto.addEventListener('blur', function () {
        this.classList.remove('textarea-active');
    });
});

// Agrega la clase "loaded" al body cuando la página haya cargado completamente
window.addEventListener("load", function () {
    document.body.classList.add("loaded");
});