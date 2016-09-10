$(document).ready(function() {
  $('#example').DataTable( {
        "ajax": "API/comparativos"
    } );
} );

function VerComparativo(ComparativoID){
    window.location.href = "Comparativo/Ver?ComparativoID="+ComparativoID;
}
function EditarComparativo(){
       $.ajax({
     url:"API/oficinas" ,
     type: "POST",
     dataType: "JSON"       
   }).done(function( data, textStatus, jqXHR ) {
    console.log( "La solicitud se ha completado correctamente." );
 }).fail(function( data, textStatus, jqXHR ) {
         console.log( "La solicitud NO se ha completado." );     
 });
}

