<link href="../libs/css/bootstrap-theme.min.css" rel="stylesheet" type="text/css"/>
<link href="../libs/css/bootstrap.min.css" rel="stylesheet" type="text/css"/>
<script src="../libs/js/jquery.js" type="text/javascript"></script>
<script src="../libs/js/bootstrap.min.js" type="text/javascript"></script>
<script src="../scripts/ComparativoVer.js" type="text/javascript"></script>
<link href="../libs/css/MyStyles.css" rel="stylesheet" type="text/css"/>

<div  class="container">
    <div class="col-xs-12">
        <div class="col-xs-11">
            <h3 class="TituloFecha">Comparativo Corte de la Primera semana de Septiembre</h3>
        </div>
        <div id="ContenedorBtn" class="col-xs-1">
            <button id="AnalizarCorte" type="button"  class="btn btn-small btn-primary">Analizar</button>
        </div>
    </div>
    <div class="col-xs-12">
         <ul id="OficinasPestañas" class="nav nav-tabs">
    </div>
</ul>  
    <div class="col-xs-12">
        <h3 class="TituloFecha">Fecha de Corte:</h1>
    </div>
   
     <div class="col-xs-12">
       <ul id="FraccionamientoPestañas" class="nav nav-tabs">
    </div>
     <div class="col-xs-12">
        <h3 class="TituloRegistro">Agregar Registro:</h3>
    </div>
    <div class="col-xs-12">
            <form class="form-inline LineaCierre">
                    <div class="form-group">
                      <label for="clave">Clave: </label>
                      <input type="text" class="form-control" id="clave" placeholder="Clave">
                    </div>
                    <div class="form-group">
                      <label  for="numero">Numero: </label>
                      <input type="number" min="1" class="form-control" id="numero" 
                             placeholder="0">
                    </div>
                    <div class="form-group">
                      <label  for="importe">Importe: $</label>
                      <input type="text" class="form-control" id="importe" 
                             placeholder="00.00">
                    </div>
                    <button id="AgregaClave" type="button"  class="btn btn-small btn-success">Agregar</button>
                    <div id="AlertaValidacionExito" class="alert alert-success"></div> 
                    <div id="AlertaValidacionError" class="alert alert-danger"></div>
            </form>
    </div>
    <div class="col-xs-12">
        <table id="example" class="table table-striped">
                    <thead>
                        <tr>
                            <th>Cavle</th>
                            <th># Pago</th>
                            <th>Importe</th>                            
                        </tr>
                    </thead>       
                </table>
    </div>
</div>
