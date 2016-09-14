<link href="libs/css/bootstrap-theme.min.css" rel="stylesheet" type="text/css"/>
<link href="libs/css/bootstrap.min.css" rel="stylesheet" type="text/css"/>
<script src="libs/js/jquery.js" type="text/javascript"></script>
<script src="scripts/login.js"></script>
<style>

    .formato{        
            margin-left: 420px;
            padding-top: 123px;
            -moz-box-shadow: 0px 0px 102px -4px rgba(0,0,0,0.46);
    }
    .formFormato{
                height: 350px;
                width: 550px;
                background-color: white;
                color: black;
                -webkit-box-shadow: 0px 0px 102px -4px rgba(0,0,0,0.46);
                -moz-box-shadow: 0px 0px 102px -4px rgba(0,0,0,0.46);
                box-shadow: 0px 0px 102px -4px rgba(0,0,0,0.46);
                border-radius: 7px;
                }
                .formAlineacion{
                        padding-left: 70px;
                        padding-right: 70px;
                        }
                        .formFormGroup1{
                                padding-top: 45px;
                        }
                        .formButon{
                                padding-top: 25px;
                                padding-left: 42px;
                        }
                        label{
                            font-size: x-large;
                        }
</style>
<div class="container formato">
 
           <div class="col-xs-3 formFormato">
               <form class="formAlineacion">
                <div class="form-group formFormGroup1">
                  <label for="exampleInputEmail1">Usuario:</label>
                  <input type="text" class="form-control" id="User" placeholder="Usuario">
                </div>
                <div class="form-group">
                  <label for="exampleInputPassword1">Contraseña:</label>
                  <input type="password" class="form-control" id="Password" placeholder="Contraseña">
                </div>
                <div class="form-group col-xs-offset-7 formButon">
                    <button id="Ingresar" type="button" class="btn btn-success">Iniciar Sesion</button>
                </div>
                 <div id="AnswerLogin" class="alert alert-danger hidden subFormatLogin"></div>
              </form>
        
        </div>
</div>