$(function(){
    $.ajax({
        url:"API/oficinas" ,
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
    
    $.ajax({
        url : "Colindancias/Recuperar",
        method : "POST",
        success: function(response){
            var html = "";
            $(response.aaData).each(function(index){
                var obj = response.aaData[index]
                html += "<option value='"+obj[0]+"'>"+obj[1]+"</option>"+obj[1];
            });
            $("select").html(html);
        }
    });
});

function RecuperaSucursalInfo(OficinaID){
    $.ajax({
        url:"API/fraccionamientos" ,
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

function ClavesLibres(idFraccionamiento){
    $.ajax({
       url : "Terrenos/Libres",
       method : "POST",
       data : { idFraccionamiento : idFraccionamiento },
       success : function(response){
           var html = "";
           $(response.Claves).each(function(index){
               html += '<div style="margin:20px; cursor:pointer;"><span class="label label-default" onclick="InformacionTerreno(\''+response.Claves[index].Clave+'\')">'+response.Claves[index].Clave+'</span></div>';
           });
           $("#claves").html(html);
       }
    });
}

function RecuperaFraccionamientoDatos(id){
    ClavesLibres(id);
}

function InformacionTerreno(clave){    
    $.ajax({
        url : "Terrenos/Consultar",
        method : "POST",
        data : {Clave : clave},
        success: function(response){
            var obj = response.Terreno[0];
            
            $("#superficie").val(obj.Superficie);
            $("#precio").val(obj.Precio);
            $("#enganche").val(obj.Enganche);
            $("#cesion").val(obj.Cesion);
            $('#colindancia1_select option[value='+obj.TituloColindancia1+']').prop('selected', true);
            $("#colindancia1").val(obj.Colindancia1);
            $('#colindancia2_select option[value='+obj.TituloColindancia2+']').prop('selected', true);
            $("#colindancia2").val(obj.Colindancia2);
            $('#colindancia3_select option[value='+obj.TituloColindancia3+']').prop('selected', true);
            $("#colindancia3").val(obj.Colindancia3);
            $('#colindancia4_select option[value='+obj.TituloColindancia4+']').prop('selected', true);
            $("#colindancia4").val(obj.Colindancia4);
        }
    })
}