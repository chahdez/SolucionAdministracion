$(function(){
    document.getElementById('User').onkeypress = function (e) {
        if (!e) e = window.event;
        var keyCode = e.keyCode || e.which;
        if (keyCode == '13') {
            ValidaSesion();
        }
    }
    document.getElementById('Password').onkeypress = function (e) {
        if (!e) e = window.event;
        var keyCode = e.keyCode || e.which;
        if (keyCode == '13') {
            ValidaSesion();
        }
    }
   
    $("#Ingresar").click(function () {
        ValidaSesion();
    });
});
// Funcion que valida que los campos sean llenados de manera correcta
function ValidaSesion() {
    var user = $("#User").val();
    var password = $("#Password").val();
    if (user != "" ) {
        if( password != ""){
           $.ajax({
            url: "login"
               , type: "POST"
               , dataType: "JSON"
               , data: { user:user , password: password  }
//               , success: function (data) {
//                   alert();
//                   var validacion = JSON.parse(data);
//                   if (validacion.Login[0].Valid) {
//                       window.location.href= "Home";
//                   } else {
//                       $("#AnswerLogin").html("El usuario o la contaseña son incorrectos.").fadeIn("slow").delay(1500).fadeOut("slow");
//                   }
//               },
//               error: function( jqXHR, textStatus, errorThrown){
//                   console.log(textStatus + " y "+errorThrown+ " y "+jqXHR.Login[0].Valid);
//               }
           }).done(function( data, textStatus, jqXHR ) {
    // if ( console && console.log ) {
    
         console.log( "La solicitud se ha completado correctamente." );
    // }
 }) .fail(function( jqXHR, textStatus, errorThrown ) {
     //if ( console && console.log ) {
         console.log( "La solicitud a fallado: " +  textStatus);
          window.location.href= "Home";
     //}
}); 

        }else{
             $("#AnswerLogin").html("*Favor de ingresar contaseña.").fadeIn("slow").removeClass("hidden").delay(1500).slideToggle("slow");            
        } 
    } else {
        $("#AnswerLogin").html("*Favor de ingresar usuario.").fadeIn("slow").removeClass("hidden").delay(1500).slideToggle("slow");
    }
}