<?php $this->load->view('Partials/page_head'); ?>
<script src="../scripts/ComparativoVer.js" type="text/javascript"></script>
<link href="../libs/css/MyStyles.css" rel="stylesheet" type="text/css"/>
<div id="wrapper">
    <?php $this->load->view('Partials/navigation'); ?>
    <div id="page-wrapper">
        <div class="container-fluid">
            <div class="col-xs-12">
                <div class="col-xs-11">
                    <h3 id="TituloComparativoVer"></h3>
                </div>
                <div id="ContenedorBtn" class="col-xs-1">
                    <button id="AnalizarCorte" type="button"  class="btn btn-small btn-primary">Analizar Registros</button>
                </div>
            </div>
            <div class="col-xs-12">
                <ul id="OficinasPestañas" class="nav nav-tabs"></ul>
            </div>
            <div class="col-xs-12">
                <h3 id="FechaCorteVer"></h3>
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
                      <input type="text" class="form-control" id="clave" placeholder="Clave" onkeyup="Mayusculas(this.value)" onblur="Mayusculas(this.value)">
                    </div>
                    <div class="form-group">
                      <label  for="numero">Numero: </label>
                      <input type="number" min="1" class="form-control" id="numero" 
                             placeholder="0">
                    </div>
                    <div class="form-group">
                      <label  for="importe">Importe: $</label>
                      <input type="text" class="form-control" id="importe" onblur="Pesos(this.value)" placeholder="00.00">
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
                            <th>Clave</th>
                            <th># Pago</th>
                            <th>Importe</th>   
                            <th>Accion</th>
                        </tr>
                    </thead>  
                    <tbody id="CuerpoRegistros"></tbody>
                </table>
            </div>
        </div>
    </div>
</div>