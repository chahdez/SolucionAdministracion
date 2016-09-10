$(document).ready(function (){
     VerComparativo();
   $("#TerminarCorte").click(function(){
         alert("Me ocupas?");
    }); 
});
// Funcion que devuelve el conjunto de oficinas
function VerComparativo(){
   $.ajax({
     url:"../API/oficinas" ,
     type: "POST",
     dataType: "JSON",       
   }).done(function( data) {
       var pestañas = "";
       var OficinaActiva = 0;
       for(var i = 0; i < data.Oficinas.length; i++ ){
           if( i != 0){
             pestañas += ' <li id="li_'+data.Oficinas[i].idOficina+'" onClick="RecuperaSucursalInfo('+data.Oficinas[i].idOficina+')"><a  href="#">'+data.Oficinas[i].NombreOficina+'</a></li>';  
           }else{
               OficinaActiva = data.Oficinas[i].idOficina;
            pestañas += '<li id="li_'+data.Oficinas[i].idOficina+'" onClick="RecuperaSucursalInfo('+data.Oficinas[i].idOficina+')" class="active"><a href="#">'+data.Oficinas[i].NombreOficina+'</a></li>';
            }         
       }
       $("#OficinasPestañas").html(pestañas); 
        RecuperaSucursalInfo(OficinaActiva);
 }).fail(function( textStatus, jqXHR ) {
    console.log( "La solicitud genero: "+textStatus );     
 });
}
// Funcion que devuelve la informacion de una Oficia por su ID
function RecuperaSucursalInfo(OficinaID){
        $.ajax({
     url:"../API/fraccionamientos" ,
     type: "POST",
     dataType: "JSON",
     data: {OficinaID: OficinaID}
   }).done(function( data, textStatus, jqXHR ) {
     var pestañas = "";
       for(var i = 0; i < data.Fraccionamientos.length; i++ ){
           if( i != 0){
             pestañas += ' <li id="fracci_'+data.Fraccionamientos[i].idFraccionamiento+'" onClick="RecuperaFraccionamientoDatos('+data.Fraccionamientos[i].idFraccionamiento+')"><a  href="#">'+data.Fraccionamientos[i].NombreFraccionamiento+'</a></li>';  
           }else{
            pestañas += '<li id="fracci_'+data.Fraccionamientos[i].idFraccionamiento+'" onClick="RecuperaFraccionamientoDatos('+data.Fraccionamientos[i].idFraccionamiento+')" class="active"><a href="#">'+data.Fraccionamientos[i].NombreFraccionamiento+'</a></li>';
            }         
       }
       $("#FraccionamientoPestañas").html(pestañas);
      TabActivado("li_"+OficinaID,"OficinasPestañas");
 }).fail(function( data, textStatus, jqXHR ) {
        console.log( "La solicitud genero: "+textStatus );      
 });
}
// Funcion que devuelve el listado de datos de un fraccionamiento
function RecuperaFraccionamientoDatos(FraccionamientoID){
    TabActivado("fracci_"+FraccionamientoID , "FraccionamientoPestañas"); // Activamos la pestaña solicitada
}

// Funcion que actualiz el tab de oficinas o sucursales
function TabActivado(TabID , ContenedorID){
    var tab = TabID;
    $("#"+ContenedorID+" li").each(function(){
        if(tab != this.id){
            $("#"+this.id).removeClass();
        }else{
             $("#"+tab).addClass("active");
        }
    });
    
}
// Funcion que regresa el conjunto  de datos
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