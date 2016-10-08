<?php $this->load->view('Partials/page_head'); ?>
<script src="scripts/Terrenos.js" type="text/javascript"></script>
<div id="wrapper">
    <?php $this->load->view('Partials/navigation'); ?>
    <div id="page-wrapper">
        <div class="container-fluid">
            <div class="col-xs-12 ">
                <div class="page-header">                
                    <h3>Administracion <small>Terrenos</small></h3>
                </div>
                <div id="contenido">
                    <div class="col-xs-12">
                        <ul id="OficinasPestañas" class="nav nav-tabs"></ul>
                        <ul id="FraccionamientoPestañas" class="nav nav-tabs"></ul>
                    </div>
                    <div class="col-xs-12">
                        <div class="col-xs-2">
                            <h4>Terrenos</h4>
                            <div id="claves"></div>
                        </div>
                        <div class="col-xs-10">
                            <div class="col-xs-6">
                                <h4>Informacion</h4>
                                <div class="form-group">
                                    <label>Superficie</label>
                                    <input type="text" class="form-control" id="superficie">
                                </div>
                                <div class="form-group">
                                    <label>Precio</label>
                                    <input type="text" class="form-control" id="precio">
                                </div>
                                <div class="form-group">
                                    <label>Enganche</label>
                                    <input type="text" class="form-control" id="enganche">
                                </div>
                                <div class="form-group">
                                    <label>Cesion</label>
                                    <input type="text" class="form-control" id="cesion">
                                </div>
                            </div>
                            <div class="col-xs-6">
                                <h4>Colindancias</h4>
                                <div class="form-group">
                                    <label>Colindancia 1</label>
                                    <select class="form-control" id="colindancia1_select"></select>
                                </div>
                                <div class="form-group">
                                    <input type="text" class="form-control" id="colindancia1">
                                </div>
                                <div class="form-group">
                                    <label>Colindancia 2</label>
                                    <select class="form-control" id="colindancia2_select"></select>
                                </div>
                                <div class="form-group">
                                    <input type="text" class="form-control" id="colindancia2">
                                </div>
                                <div class="form-group">
                                    <label>Colindancia 3</label>
                                    <select class="form-control" id="colindancia3_select"></select>
                                </div>
                                <div class="form-group">
                                    <input type="text" class="form-control" id="colindancia3">
                                </div>
                                <div class="form-group">
                                    <label>Colindancia 4</label>
                                    <select class="form-control" id="colindancia4_select"></select>
                                </div>
                                <div class="form-group">
                                    <input type="text" class="form-control" id="colindancia4">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xs-12">
                        <button class="btn btn-primary btn-lg" style="float:right;">Guardar</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>