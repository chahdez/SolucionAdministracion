<?php $this->load->view('Partials/page_head'); ?>
<script src="scripts/Catalogo.js" type="text/javascript"></script>
<div id="wrapper">
    <?php $this->load->view('Partials/navigation'); ?>
    <div id="page-wrapper">
        <div class="container-fluid">
            <div class="col-xs-12 ">
                <div class="page-header">                
                    <h3>Administracion <small id="TituloCatalogo"></small></h3>
                </div>
                <div id="contenido" class="col-lg-12">
                    <button id="BtnModal" class="btn btn-sm btn-danger" data-toggle="modal" data-target=".MuestraModal"></button>
                </div>
            </div>
             <div class="col-xs-8 col-xs-offset-2">
                       <table id="example" class="display" cellspacing="0" width="100%">
                           <thead>
                               <tr>
                                   <th>ID</th>
                                   <th>Tipo</th>
                               </tr>
                           </thead>       
                       </table>
                </div>
        </div>
    </div>
</div>

<div  class="modal fade MuestraModal">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
          <button id="CerrarModal" type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
          <h4 class="modal-title" id="TituloModal"></h4>
      </div>
      <div class="modal-body">
       <form class="form-horizontal" role="form">
        <div class="form-group">
          <label for="" class="col-lg-2 control-label">Descripcion: </label>
          <div class="col-lg-7">
            <input type="text" class="form-control" id="Descripcion"
                   placeholder="Ingrese una descripcion">
          </div>          
        </div>
            <div class="form-group">
                <div id="AlertaModal" class="alert alert-danger col-lg-offset-2 col-lg-7">
          </div>
          
        </div>
       </form>
      </div>
      <div class="modal-footer">
          <button id="Cancelar" type="button" class="btn btn-danger" >Cancelar</button>
          <button id="AgregarModal" type="button" class="btn btn-primary">Agregar</button>
      </div>
    </div><!-- /.modal-content -->
  </div><!-- /.modal-dialog -->
</div><!-- /.modal -->