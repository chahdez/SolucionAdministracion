$(document).ready(function(){    
    VerComparativo();
    TituloFechaComparativo(  localStorage.getItem("ComparativoID") );
     $("#AlertaValidacionError").hide();
     $("#AlertaValidacionExito").hide();    
    
    // Funcion que  agrega una nueva clave
    $("#AgregaClave").click(function(){
         var clave = $("#clave").val();
         var numero = $("#numero").val();
         var importe = $("#importe").val();
         var fraccionamientoID = FraccionamientoActivo();
       
       
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
                           RecuperaFraccionamientoDatos();
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
     var fracActivo = "";
       for(var i = 0; i < data.Fraccionamientos.length; i++ ){
           if( i != 0){
             pestañas += ' <li id="fracci_'+data.Fraccionamientos[i].idFraccionamiento+'" onClick="RecuperaFraccionamientoDatos('+data.Fraccionamientos[i].idFraccionamiento+')"><a  href="#">'+data.Fraccionamientos[i].NombreFraccionamiento+'</a></li>';  
           }else{
            pestañas += '<li id="fracci_'+data.Fraccionamientos[i].idFraccionamiento+'" onClick="RecuperaFraccionamientoDatos('+data.Fraccionamientos[i].idFraccionamiento+')" class="active"><a href="#">'+data.Fraccionamientos[i].NombreFraccionamiento+'</a></li>';
              fracActivo = data.Fraccionamientos[i].idFraccionamiento;
            }         
       }
       $("#FraccionamientoPestañas").html(pestañas);
      TabActivado("li_"+OficinaID,"OficinasPestañas");
    RecuperaFraccionamientoFechas(fracActivo );
    RecuperaFraccionamientoDatos(fracActivo)
 }).fail(function( data, textStatus, jqXHR ) {
        console.log( "La solicitud genero: "+textStatus );      
 });
}
// Funcion que devuelve el listado de datos de un fraccionamiento
function RecuperaFraccionamientoDatos(){
      $.ajax({
                url:"../API/PartidasComparativo" ,
                type: "POST",
                dataType: "JSON",
                data: { 
                    ComparativoID :  localStorage.getItem("ComparativoID")
                    ,FraccionamientoID : FraccionamientoActivo()
                }
              }).done(function( data ) {
                  var filas = "";
              for(var i = 0; i < data.PartidasComparativo.length; i++){
                  filas+= '<tr><td>'+data.PartidasComparativo[i].Clave+'</td><td>'+data.PartidasComparativo[i].NumeroPago+'</td><td> $'+data.PartidasComparativo[i].ImporteTotal+'</td><td>'+data.PartidasComparativo[i].Accion+'</td></tr>'
              }
              $("#CuerpoRegistros").html(filas);
            }).fail(function(data, textStatus ) {
                 alert( "Ocurrio un error solicitud genero: "+data );      
            });
}
// Funcion que devuelve el corte de fechas de un fraccionamiento
function RecuperaFraccionamientoFechas(FracciID){ 
    var compa =  localStorage.getItem("ComparativoID");
            $.ajax({
                url:"../API/FechasCorteComparativo" ,
                type: "POST",
                dataType: "JSON",
                data: {  ComparativoID : parseInt( compa) ,FraccionamientoID : parseInt(FracciID) }
              }).done(function( data ) { 
                  if(data.FechasCorteComparativo.length > 0){
                   $("#FechaCorteVer").html("Fecha Corte: ["+data.FechasCorteComparativo[0].FechaInicio+"] a ["+data.FechasCorteComparativo[0].FechaFin+"]");   
                  }else{
                      alert("Este fraccionamiento, no tiene fecha de corte");
                      $("#FechaCorteVer").html("");
                  }
                
            }).fail(function(data, textStatus ) {
                 alert( "Ocurrio un error solicitud genero: "+data );      
            });
         TabActivado("fracci_"+FracciID , "FraccionamientoPestañas"); // Activamos la pestaña solicitada
}
// Funcion que devuelve la informacion del comparativo
function TituloFechaComparativo(ComparativoID){
            $.ajax({
     url:"../API/InformacionComparativo" ,
     type: "POST",
     dataType: "JSON",
     data: {ComparativoID : ComparativoID}
   }).done(function( data ) {
   $("#TituloComparativoVer").html(data.Comparativo[0].Titulo);
   //$("#FechaCorteVer").html("Fecha de Corte: "+ data.Comparativo[0].FechaHoraRegistro);      
 }).fail(function( textStatus ) {
        console.log( "La solicitud genero: "+textStatus );      
 });
}
// Funcion que elimina un fregistro
function EliminarRegistro(RegistroID){
               $.ajax({
     url:"../API/EliminarRegistro" ,
     type: "POST",
     dataType: "JSON",
     data: { id: RegistroID}
   }).done(function( data ) {
       if(data.EliminarRegistro[0].Eliminado == "Eliminado"){
      RecuperaFraccionamientoDatos();  
       }else{
           alert("Hubo un error en la BD, intenta volver a eliminar");
       }
     
 }).fail(function( textStatus ) {
        console.log( "La solicitud genero: "+textStatus );      
 });
    
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
// Funcion que devuelve el fraccionamiento activo
function FraccionamientoActivo(){
    var fraccioamientoActivo = "";
    $("#FraccionamientoPestañas li").each(function (){
            if($(this).hasClass("active")){
                fraccioamientoActivo = (this.id).substring(7);
              
            }
        }); 
        return fraccioamientoActivo;
}
function Mayusculas(letra){
    document.getElementById("clave").value = letra.toUpperCase();
}
function Pesos(pesos){
    document.getElementById("importe").value = numeral(pesos).format('0,0.00');
}