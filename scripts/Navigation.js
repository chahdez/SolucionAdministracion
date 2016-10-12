
function VerCatalogoVista(Vista){
        localStorage.setItem("Catalogo",Vista); // Asignamos en SesionStore la vista a devolver
        window.location.href = "Catalogo";
    }
// Funcion que  trae la vista  de Revocaciones (Corte - Folio)
function VerRevocaciones(Vista){
      localStorage.setItem("Revocacion",Vista); // Asignamos en SesionStore la vista a devolver
        window.location.href = "Revocacion";
}
