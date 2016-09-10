$(document).ready(function(){    
    VerComparativo();
});
function VerComparativo(){
   $.ajax({
     url:"../API/oficinas" ,
     type: "POST",
     dataType: "JSON",       
   }).done(function( data, textStatus, jqXHR ) {
    console.log(data);    
 }).fail(function( data, textStatus, jqXHR ) {
         console.log( "La solicitud NO se ha completado." );
     
 });
}

