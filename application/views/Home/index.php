<?php $this->load->view('Partials/page_head'); ?>
<script src="scripts/Home.js" type="text/javascript"></script>
<div id="wrapper">

    <?php $this->load->view('Partials/navigation'); ?>
    <div id="page-wrapper">
        <div class="container-fluid">
            <div class="col-xs-12 ">
                <h3 class="page-header">
                Comparativos <small>Administracion</small>
                </h3>
                <button type="button" class="btn btn-danger btn-small" data-toggle="modal" data-target="#myModal">
                    Nuevo Comparativo
                </button>          
                <div id="ContenedorTabla" class="col-xs-12" style="padding:10px;">
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
    </div>
</div>

<div id="myModal" class="modal fade" role="dialog">
  <div class="modal-dialog">

     Modal content
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