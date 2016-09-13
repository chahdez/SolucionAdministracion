<link href="//maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css" rel="stylesheet">

<script src="../libs/js/jquery.js" type="text/javascript"></script>
<link href="../libs/css/bootstrap.min.css" rel="stylesheet" type="text/css"/>
<link href="../libs/css/bootstrap-theme.min.css" rel="stylesheet" type="text/css"/>
<!-- Latest compiled and minified JavaScript -->
<script src="../libs/js/bootstrap.min.js" type="text/javascript"></script>
<link href="../libs/css/dataTables.min.css" rel="stylesheet" type="text/css"/>
<script src="../libs/js/dataTables.min.js" type="text/javascript"></script>

<script src="../scripts/home.js"></script>
<div class="container">
 <div class="col-xs-12 " >
        <div class="col-lg-3">
            <span type="" class="btn btn-default" aria-label="Left Align">
                <span class="glyphicon glyphicon-cog" aria-hidden="true">Administacion</span>
             </span>
        </div>
        <div class="col-lg-offset-5 col-lg-3">
            <span type="" class="btn btn-default" >
                <span class="glyphicon glyphicon-user" aria-hidden="true"> Hola Arielin</span>
             </span>
        </div>
    </div>
    <div class="col-xs-2 ">
        <div class="row">
            <label  class="active">Corporativos</label>
        </div>
    </div>
     <div class="col-xs-10 ">
         <div class="col-xs-12" style="padding-bottom: 25px;">
             <div class="col-lg-6">
              <button type="button" class="btn btn-danger btn-small" data-toggle="modal" data-target="#myModal">Nuevo Comparativo</button> 
             </div>           
         </div>  
         <div class="col-xs-12">
                <table id="example" class="display" cellspacing="0" width="100%">
                    <thead>
                        <tr>
                            <th>ComparativoID</th>
                            <th>Titulo</th>
                            <th>FechaHoraRegistro</th>
                            <th>Status</th>
                            <th>Accion</th>
                        </tr>
                    </thead>       
                </table>
         </div>
    </div>
</div>

<div id="myModal" class="modal fade" role="dialog">
  <div class="modal-dialog">

    <!-- Modal content-->
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal">&times;</button>
        <h4 class="modal-title">Nuevo Comparativo</h4>
      </div>
      <div class="modal-body">
          <form>
  <div class="form-group">
    <label for="email">Descripcion:</label>
    <input type="text" id="TituloComparativo" class="form-control" id="descripcionModal">
  </div>
          </form>
      </div>
      <div class="modal-footer">
          <button id="CancelarTitulo" type="button" class="btn btn-danger" data-dismiss="modal">Cancelar</button>
           <button id="AgregarComparativo" type="button" class="btn btn-primary" >Agregar</button>
      </div>
    </div>

  </div>
</div>