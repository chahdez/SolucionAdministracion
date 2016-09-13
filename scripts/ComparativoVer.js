$(document).ready(function(){    
    VerComparativo();
     $("#AlertaValidacionError").hide();
     $("#AlertaValidacionExito").hide();    
    
    // Funcion que  agrega una nueva clave
    $("#AgregaClave").click(function(){
         var clave = $("#clave").val();
         var numero = $("#numero").val();
         var importe = $("#importe").val();
         var fraccionamientoID = "" ;
        $("#FraccionamientoPestañas li").each(function (){
            if($(this).hasClass("active")){
                fraccionamientoID = (this.id).substring(7);
                console.log(fraccionamientoID)
            }
        });
         if(ValidaPrecio(importe)){
            if(clave != null && clave != ""){
                if(numero != null && numero > 0){
                    $.ajax({
                        url:"../API/InsertarDetalleComparativo" ,
                        type: "POST",
                        dataType: "JSON", 
                        data: { 
                            FraccionamientoID : fraccionamientoID
                            ,ComparativoID: localStorage.getItem("ComparativoID")
                            ,Clave : clave
                            ,NumeroPago: numero
                            ,Importe :  importe
                        }
                      }).done(function( data) {
                          if(data.InsertarDetalleComparativo){
                            $("#clave").val("");
                             $("#numero").val(0);
                             $("#importe").val("");
                             $("#AlertaValidacionExito").html("<strong>Registro agregado con exito.</strong>").fadeIn("slow").delay(2500).fadeOut("slow");     
                          }else{
                            $("#AlertaValidacionError").html("<strong>Ocurrio un error en los datos, verifique por favor.</strong>").fadeIn("slow").delay(2500).fadeOut("slow");     
                          }
                    });
                     
                }else{
                   $("#AlertaValidacionError").html("<strong>Ingrese un numero por favor.</strong>").fadeIn("slow").delay(2500).fadeOut("slow");   
                }
            }else{
                $("#AlertaValidacionError").html("<strong>Ingrese una clave por favor.</strong>").fadeIn("slow").delay(3500).fadeOut("slow");  
            }
         }else{
            $("#AlertaValidacionError").html("<strong>El precio ingresado no es uno valido.( Ejemplo: 150.00 , 1500.00, 15000.00 ... etc)</strong>").fadeIn("slow").delay(5500).fadeOut("slow"); 
         }
    });
    // Funcion que analiza el corte
    $("#AnalizarCorte").click(function (){
        alert("Me hablaste para analizar? :3");
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
// Funcion que valida si el precio es valido
function ValidaPrecio(precio){
    var reg = new RegExp("^[0-9]{1,8}[.]{1}[0-9]{2,6}");
        return  reg.test(precio);    
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