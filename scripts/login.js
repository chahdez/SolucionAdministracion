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
//           $.ajax({
//            url: "../Home/ValidaSesion"
//               , Type: "post"
//               , dataType: "Json"
//               , data: { usuario: user, contasena: password }
//               , success: function (data) {
//                   var validacion = JSON.parse(data);
//                   if (validacion == true) {
//                       window.location.href = "/Principal";
//                   } else {
//                       $("#AnswerLogin").html("El usuario o la contaseña son incorrectos.").fadeIn("slow").delay(1500).fadeOut("slow");
//                   }
//               }
//        }); 
//window.location.href= "SolucionAdministracion/Home/Index.php";
        }else{
             $("#AnswerLogin").html("*Favor de ingresar contaseña.").fadeIn("slow").removeClass("hidden").delay(1500).slideToggle("slow");            
        } 
    } else {
        $("#AnswerLogin").html("*Favor de ingresar usuario.").fadeIn("slow").removeClass("hidden").delay(1500).slideToggle("slow");
    }
}