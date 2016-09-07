$(document).ready(function(){
    ObtenerDatos();
});
function ObtenerDatos(){
    
    var rows = "";
    for(var i=1;i < 11;i++){        
     rows+= " <tr> <td>Descripcion del contenido: "+i+"</td> <td>09/09/2016</td><td>Abierto</td><td><button type='button' class='btn btn-sm btn-danger'>Editar</button><button type='button' class='btn btn-sm btn-success'>Ver</button></td>  </tr>";
    }
    $("#DatosJson").html(rows);
}


