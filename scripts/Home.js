$(document).ready(function() {
  $('#example').DataTable( {
        "ajax": "API/comparativos"
    } );
} );

function VerComparativo(ComparativoID){
    localStorage.setItem("ComparativoID", ComparativoID); // Asignamos en SesionStore el comparativo
    window.location.href = "Comparativo/Ver";
}
function EditarComparativo(){
    localStorage.setItem("ComparativoID", ComparativoID); // Asignamos en SesionStore el comparativo
    window.location.href = "Comparativo/Editar";
}

