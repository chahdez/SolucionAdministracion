function EditarComparativo(){
       localStorage.setItem("ComparativoID", ComparativoID); // Asignamos en SesionStore el comparativo
    window.location.href = "Comparativo/Editar";
       $.ajax({
     url:"API/oficinas" ,
     type: "POST",
     dataType: "JSON"           
   }).done(function( data, textStatus, jqXHR ) {
    console.log( "La solicitud se ha completado correctamente." );
 }).fail(function( data, textStatus, jqXHR ) {
        console.log( "La solicitud genero: "+textStatus );      
 });
}