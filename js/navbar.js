function crearNavbar () {
    const navContainer = document.getElementById('nav');

    navContainer.innerHTML = `
        <nav class="navbar navbar-expand-lg bg-light mb-3">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">Portal de Turismo</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="index.html">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="sitios-interes.html">Sitios de interes</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="asistencia.html">Centros de asistencia</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="avisos.html">Avisos</a>
                    </li>
                    </ul>
                </div>
            </div>
        </nav>
    `;
}

crearNavbar();