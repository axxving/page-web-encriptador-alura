@include("layouts.head")


<body>

    <!-- Estructura de la pantalla de carga -->
    <div class="loader-wrapper">
        <div class="loader"></div>
    </div>

    <!-- Sección con Textos y Botones -->
    <section class="container-fluid video-background pt-5 pb-5" id="encriptador">
        <video autoplay muted loop playsinline>
            <source src="/imgs/animation_-_7529 (720p).mp4" type="video/mp4">
            <!-- Agrega más formatos de video si lo necesitas para compatibilidad con navegadores -->
        </video>
        <div class="container">
            <div class="row">
                <!-- Columna Izquierda -->
                <div class="col-md-6">
                    <!-- Texto Grande -->
                    <h1 class="display-3">Encriptador de Textos</h1>
                    <!-- Texto Pequeño -->
                    <p class="lead">Protege tu información con nuestro potente encriptador de textos.</p>
                    <!-- Texto Mediano -->
                    <p>Escribe tu mensaje en el área de escritura y conviértelo en un código seguro.</p>
                    <!-- Área de Escritura -->
                    <textarea id="inputTexto" class="form-control mb-3 glass-textarea" placeholder="Escribe aquí"
                        pattern="[a-z]+" oninput="validarTexto()"></textarea>
                    <!-- Botones -->
                    <div class="d-grid gap-2 d-md-flex justify-content-md-start">
                        <button id="btnEncriptar" class="btn btn-outline-light me-md-2">Encriptar</button>
                        <button id="btnDescifrar" class="btn btn-outline-success">Descifrar</button>
                    </div>
                </div>
                <!-- Columna Derecha -->
                <div class="col-md-6">
                    <!-- Cuadro Superior -->
                    <div id="cuadroEncriptado" class="bg-light p-4 mb-3 mt-3">
                        <h2>Texto encriptado</h2>
                        <!-- Contenido del Cuadro Superior -->
                    </div>
                    <!-- Cuadro Inferior -->
                    <div id="cuadroDescencriptado" class="bg-light p-4 mb-3 mt-3">
                        <h2>Texto descencriptado</h2>
                        <!-- Contenido del Cuadro Inferior -->
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Modal de Advertencia -->
    <div class="modal fade" id="modalAdvertencia" tabindex="-1" aria-labelledby="modalAdvertenciaLabel"
        aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content glass-modal">
                <div class="modal-header">
                    <h5 class="modal-title" id="modalAdvertenciaLabel">
                        <i class="bi bi-exclamation-triangle-fill text-warning me-2"></i>
                        Advertencia
                    </h5>
                    <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"
                        aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <p class="lead p-m">
                        <i class="bi bi-info-circle-fill me-2"></i>
                        No puedes ingresar números, símbolos o letras mayúsculas. Por favor, ingresa solo letras en
                        minúsculas.
                    </p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-warning" data-bs-dismiss="modal">Cerrar</button>
                </div>
            </div>
        </div>
    </div>

    @include("layouts.scripts")