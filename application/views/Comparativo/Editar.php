<?php $this->load->view('Partials/page_head'); ?>
<script src="../scripts/ComparativoEditar.js" type="text/javascript"></script>
<link href="../libs/css/MyStyles.css" rel="stylesheet" type="text/css"/>
<div id="wrapper">
    <?php $this->load->view('Partials/navigation'); ?>
    <div id="page-wrapper">
        <div class="container-fluid">
            <div class="col-xs-12">
                <div class="col-xs-11">
                    <h3 class="TituloFecha">Comparativo Corte de la Primera semana de Septiembre</h3>
                </div>
                <div id="ContenedorBtn" class="col-xs-1">
                    <button id="TerminarCorte" type="button"  class="btn btn-small btn-primary">Terminar</button>
                </div>
            </div>
            <div class="col-xs-12">
                <ul id="OficinasPestañas" class="nav nav-tabs"></ul>
            </div>
            <div class="col-xs-11">
                <h3 class="TituloFecha">Fecha de Corte: 15/09/2016 - 21/09/2016 </h3>
            </div>
   
            <div class="col-xs-12">
                <ul id="FraccionamientoPestañas" class="nav nav-tabs"></ul>
           </div>
            <div class="col-xs-12">
                <table id="example" class="table table-striped">
                    <thead>
                        <tr>
                            <th>Cavle</th>
                            <th># Pago</th>
                            <th>Importe (BD)</th> 
                            <th>Importe (OF)</th>
                            <th>Diferiencia</th>
                            <th>Comentario</th>
                        </tr>
                    </thead>       
                </table>
            </div>
        </div>
    </div>
</div>