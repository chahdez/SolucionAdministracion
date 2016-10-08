
function VerCatalogoVista(Vista){
        localStorage.setItem("Catalogo",Vista); // Asignamos en SesionStore la vista a devolver
        window.location.href = "Catalogo";
    }

