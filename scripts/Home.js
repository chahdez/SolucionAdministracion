$(document).ready(function() {
CargaInformacionComparativos(); // Funcion que carga la tabla d elos comparativos
    $("#AgregarComparativo").click(function (){        
           $.ajax({
                url:"../API/NuevoComparativo" ,
                type: "POST",
                dataType: "JSON", 
                data: { Titulo : $("#TituloComparativo").val()}
              }).done(function( data) {
                  $("#TituloComparativo").val("");
                  $("#CancelarTitulo").click();                            
                 //CargaInformacionComparativos();
            });
    });
} );

//Funcion que carga la tabla de registros de coparativos
function CargaInformacionComparativos(){
      $('#example').DataTable( {
        "ajax": "../API/comparativos"
    } );
}
// Funcion que nos lleva a ver los comparativos
function VerComparativo(ComparativoID){
    localStorage.setItem("ComparativoID", ComparativoID); // Asignamos en SesionStore el comparativo
    window.location.href = "Comparativo/Ver";
}
// Funcion que nos lleva a editar los comparativos
function EditarComparativo(){
    localStorage.setItem("ComparativoID", ComparativoID); // Asignamos en SesionStore el comparativo
    window.location.href = "Comparativo/Editar";
}

