<link href="//maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css" rel="stylesheet">
<script src="libs/js/jquery.js" type="text/javascript"></script>
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
<!-- Optional theme -->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css" integrity="sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp" crossorigin="anonymous">
<!-- Latest compiled and minified JavaScript -->
<link href="libs/css/dataTables.min.css" rel="stylesheet" type="text/css"/>
<script src="libs/js/dataTables.min.js" type="text/javascript"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
<script src="scripts/home.js"></script>
<div class="container">
    <div class="row ">
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
    <div class="col-lg-2 ">
        <div class="row">
            <label  class="active">Corporativos</label>
        </div>
    </div>
     <div class="col-lg-10 ">
         <div class="row">
             <div class="col-lg-6">
              <button type="button" class="btn btn-danger btn-small" data-toggle="modal" data-target="#myModal">Nuevo Comparativo</button> 
             </div>
             <div class="col-lg-3 col-lg-offset-5">
             <form>
    <div class="form-group">
      <label for="sel1">Filtrado por:</label>
      <select class="form-control" id="sel1">
        <option>Status</option>
        <option>Fecha</option>
        <option>Descripcion</option>
      </select>
    </div>
  </form>   
             </div>
            

   


         </div>
         <div class="row">
         <table id="example" class="display" cellspacing="0" width="100%">
        <thead>
            <tr>
                <th>Name</th>
                <th>Position</th>
                <th>Office</th>
                <th>Extn.</th>
                <th>Start date</th>
                <th>Salary</th>
            </tr>
        </thead>
        <tfoot>
            <tr>
                <th>Name</th>
                <th>Position</th>
                <th>Office</th>
                <th>Extn.</th>
                <th>Start date</th>
                <th>Salary</th>
            </tr>
        </tfoot>
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
    <input type="text" class="form-control" id="descripcionModal">
  </div>
          </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-default" data-dismiss="modal">Cancelar</button>
      </div>
    </div>

  </div>
</div>