// Archivo .ts
function validarTexto(event) {
    // Obtener el textarea por su ID y especificar que es de tipo HTMLTextAreaElement
    var textoElement: HTMLTextAreaElement | null = document.getElementById("inputTexto") as HTMLTextAreaElement;

    // Verificar si se encontró el elemento y asegurarse de que sea un textarea
    if (textoElement && textoElement instanceof HTMLTextAreaElement) {
        // Obtener el contenido del textarea
        var texto: string = textoElement.value;

        // Validar que no haya números, mayúsculas ni caracteres especiales
        if (/[\dA-Z!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/.test(event.key)) {
            alert("Por favor, ingresa solo letras minúsculas y espacios.");
            // Evitar que se escriba el carácter no permitido
            event.preventDefault();
        }
    }
}