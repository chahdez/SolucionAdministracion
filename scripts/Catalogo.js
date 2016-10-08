$(document).ready(function(){
    $("#AlertaModal").hide();
   var TipoVista = localStorage.getItem("Catalogo") ? localStorage.getItem("Catalogo") : "Nada" ;
   
   if(TipoVista != "Nada"){
        $("#TituloCatalogo").text(TipoVista);
         $("#BtnModal").text("Agregar tipo "+TipoVista);
         $("#TituloModal").text("Nuevo tipo "+TipoVista);
       cargaDatos(TipoVista);
   }
   
   
   // Funcion que  evalua si decea cerrar el modal de Agregar
   $("#Cancelar").click(function (){  
       $("#Descripcion").val("");
       $("#CerrarModal").click();
        $("#AlertaModal").hide();
   });
   // Funcion encargada de agregar una descripcion nueva
   $("#AgregarModal").click(function (){
       var text = $("#Descripcion").val();
       if(text.length > 4){
           if(TipoVista == "Gastos"){
                  $.ajax({
                        url:"Catalogo/GastosInsertarTipo" ,
                        type: "POST",
                        dataType: "JSON", 
                        data: {Concepto :text }
                      }).done(function( data) {
                           $("#Descripcion").val("");
                           $("#CerrarModal").click();
                         CargaInformacionComparativos("#example","Catalogo/GastosTipoRecuperar");
                    }).fail(function (){
                 $("#Descripcion").val("");
                           $("#CerrarModal").click();
                         CargaInformacionComparativos("#example","Catalogo/GastosTipoRecuperar");   
                });
           }else{
                $.ajax({
                        url:"Catalogo/ColindanciasInsertar" ,
                        type: "POST",
                        dataType: "JSON", 
                        data: {Colindancia :text }
                      }).done(function( data) {
                           $("#Descripcion").val("");
                           $("#CerrarModal").click();
                         CargaInformacionComparativos("#example","Catalogo/ColindanciasRecuperar");
                    }).fail(function (){
                            $("#Descripcion").val("");
                           $("#CerrarModal").click();
                         CargaInformacionComparativos("#example","Catalogo/ColindanciasRecuperar");
                });
           }
       }else{       
       $("#AlertaModal").html("<strong>Ingrese un texto mayor a 5 letras.</strong>").fadeIn("slow").delay(2000).fadeOut("slow"); 
       }
       
   });
   
});

function cargaDatos(TipoVista){
      if(TipoVista == "Gastos"){
              $('#example').DataTable({
                 "ajax": "Catalogo/GastosTipoRecuperar"
                 });
         }else{
              $('#example').DataTable( {
                 "ajax": "Catalogo/ColindanciasRecuperar"
                 });  
         }
}

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