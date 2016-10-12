<?php $this->load->view('Partials/page_head'); ?>
<script src="scripts/Revocaciones.js" type="text/javascript"></script>
<div id="wrapper">
    <?php $this->load->view('Partials/navigation'); ?>
    <div id="page-wrapper">
        <div class="container-fluid">
            <div class="col-xs-12 ">
                <div class="page-header">                
                    <h3>Revocacion <strong id="TituloRevocacion"></strong></h3>
                </div>
                <div id="contenido" class="col-lg-12">
                    <button id="BtnModal" class="btn btn-sm btn-danger" data-toggle="modal" data-target=".MuestraModal">Revocar</button>
                </div>
            </div>
             <div class="col-xs-8 col-xs-offset-2 hidden">
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
          <div class="row" id="ModalBodyFolio">
              
          </div>
          <div class="row" id="ModalBodyCorte" >
                     <div class="row ">
                <div class="col-lg-6">
                   <div class="form-group">
                    <label  class="col-lg-6 control-label">Oficina: </label>
                    <label  class="col-lg-5 control-label left"> Tateposco </label>         
                  </div>
               </div>
                <div class="col-lg-6">
                   <div class="form-group">
                        <label  class="col-lg-7 control-label">Fraccionamiento: </label>
                        <label  class="col-lg-5 control-label LE">Carrisillo </label>         
                      </div>
               </div>
          </div>
          <div class="row ">
          <div class="col-lg-6">
                     <div class="form-group">
                    <label  class="col-lg-6 left control-label">Fecha corte: </label>
                    <label  class="col-lg-6 control-label LE"> 11/10/2016 </label>         
                  </div>
                </div>
          </div>
          <div class="row ">
          <div class="col-lg-12">
            <div class="form-group">
                <label class="col-lg-2 left control-label" for="comment">Comentario:</label>
                <div class="col-lg-9">
                     <textarea id="Comentario" class="form-control" rows="2" id="comment"></textarea>
                </div>
              </div>
                </div>
          </div> 
              <div class="row">
                  <div class="col-lg-12">
                   <div class="form-group">
                     <label class="col-lg-2  control-label" for="comment"></label>
                    <div class="  col-lg-9">
                        <div id="AlertaModal" class="alert alert-danger">                            
                        </div>
                    </div>          
                  </div>
                  </div>
              </div>
          </div>  
      </div>
      <div class="modal-footer">
          <button id="Cancelar" type="button" class="btn btn-danger" >Cancelar</button>
          <button id="AgregarModal"  type="button" class="btn btn-primary">Aceptar</button>
      </div>
    </div><!-- /.modal-content -->
  </div><!-- /.modal-dialog -->
</div><!-- /.modal -->