<link href="libs/css/bootstrap-theme.min.css" rel="stylesheet" type="text/css"/>
<link href="libs/css/bootstrap.min.css" rel="stylesheet" type="text/css"/>
<script src="libs/js/jquery.js" type="text/javascript"></script>
<script src="scripts/login.js"></script>

<div class="container ">
    <div class="row ">
           <div class="col-md-offset-5 col-md-3 well">
             <form>
                <div class="form-group">
                  <label for="exampleInputEmail1">Usuario:</label>
                  <input type="text" class="form-control" id="User" placeholder="Usuario">
                </div>
                <div class="form-group">
                  <label for="exampleInputPassword1">Contraseña:</label>
                  <input type="password" class="form-control" id="Password" placeholder="Contarseña">
                </div>
                <div class="form-group col-lg-offset-7">
                    <button id="Ingresar" type="button" class="btn btn-success">Iniciar Sesion</button>
                </div>
                 <div id="AnswerLogin" class="alert alert-danger hidden subFormatLogin"></div>
              </form>
        
        </div>
     
    </div>
</div>