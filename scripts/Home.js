$(document).ready(function() {
     $('#example').DataTable( {
        "ajax": "../API/comparativos"
    } );
//CargaInformacionComparativos(); // Funcion que carga la tabla d elos comparativos
    $("#AgregarComparativo").click(function (){        
           $.ajax({
                url:"../API/NuevoComparativo" ,
                type: "POST",
                dataType: "JSON", 
                data: { Titulo : $("#TituloComparativo").val()}
              }).done(function( data) {
                  $("#TituloComparativo").val("");
                  $("#CancelarTitulo").click();                            
                 CargaInformacionComparativos("#example","../API/comparativos");
            });
    });
} );

//Funcion que carga la tabla de registros de coparativos
function CargaInformacionComparativos(tableId, urlData){
     $.getJSON(urlData, null, function( json ){
        table = $(tableId).dataTable();
        oSettings = table.fnSettings();
        table.fnClearTable(this);
        
        for (var i=0; i<json.aaData.length; i++){
            table.oApi._fnAddData(oSettings, json.aaData[i]);
        }
        oSettings.aiDisplay = oSettings.aiDisplayMaster.slice();
        table.fnDraw();
        
    });
}
// Funcion que nos lleva a ver los comparativos
function VerComparativo(ComparativoID){
    localStorage.setItem("ComparativoID", ComparativoID); // Asignamos en SesionStore el comparativo
    window.location.href = "../Comparativo/Ver";
}
// Funcion que nos lleva a editar los comparativos
function EditarComparativo(){
    localStorage.setItem("ComparativoID", ComparativoID); // Asignamos en SesionStore el comparativo
    window.location.href = "Comparativo/Editar";
}

