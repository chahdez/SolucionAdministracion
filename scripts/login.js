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
                url: "API/login"
               ,type: "POST"
               ,dataType: "JSON"
               ,data: { user:user , password: password  }
            }).done(function(data,textStatus,jqXHR ) {
                console.log( "La solicitud se ha completado correctamente." );
                if(parseInt(data.Login[0].Valid)){
                    window.location.href = "Home/Index";
                } else {
                    $("#AnswerLogin").html("*Informacion Incorrecta.").fadeIn("slow").removeClass("hidden").delay(1500).slideToggle("slow");    
                }
            }) .fail(function(jqXHR,textStatus,errorThrown ) {
                console.log( "La solicitud a fallado: " +  textStatus);
            }); 

        }else{
             $("#AnswerLogin").html("*Favor de ingresar contaseña.").fadeIn("slow").removeClass("hidden").delay(1500).slideToggle("slow");            
        } 
    } else {
        $("#AnswerLogin").html("*Favor de ingresar usuario.").fadeIn("slow").removeClass("hidden").delay(1500).slideToggle("slow");
    }
}