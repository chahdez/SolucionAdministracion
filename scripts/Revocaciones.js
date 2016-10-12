$(document).ready(function(){
   var TipoVista = localStorage.getItem("Revocacion");
    $("#ModalBodyCorte").hide();
    $("#ModalBodyFolio").hide();
    $("#AlertaModal").hide();
   if(TipoVista == "Folio"){
       $("#TituloRevocacion").text("Colindancias");
       $("#ModalBodyFolio").show();
       $("#TituloModal").text("Revocacion Folio");
   }else{
       $("#TituloRevocacion").text("Cortes");
       $("#ModalBodyCorte").show();
       $("#TituloModal").text("Revocacion Corte");
       $("#AgregarModal").attr("onClick","RevocarCorte()")
   }
   
      // Funcion que  evalua si decea cerrar el modal de Agregar
   $("#Cancelar").click(function (){  
       $("#CerrarModal").click();
   });
   });

// Funcion que elimina un corte
function RevocarCorte(){
    var comentario = $("#Comentario").val();
    if(comentario.length > 10){
          $("#CerrarModal").click();
    }else{
    $("#AlertaModal").html("<strong>Ingrese un motivo mayor a 15 letras.</strong>").fadeIn("slow").delay(2000).fadeOut("slow");   
    }
}
