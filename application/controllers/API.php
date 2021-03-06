<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class API extends CI_Controller {
    /*Documetnacion*/
    public function index(){
        $this->load->view('API/index');
    }
    
    /*Valida Login*/
    public function login(){
        $user = $this->input->post('user');
        $password = $this->input->post('password');
        $this->load->database();
        $query = $this->db->query("CALL Usp_Adminsitracion_Login('$user' , '$password')");
        $this->output->set_content_type('application/json');
        $this->output->set_output('{"Login":'.json_encode($query->result_array())."}");
    }
    
    /*Recupera JSON Parseado para DataTables*/
    public function comparativos(){
        $this->load->database();
        $query = $this->db->query("CALL Usp_Administracion_Comparativo_Comparativos");
        $directorio = array();
        foreach ($query->result() as $row){
            $objeto = array();
            array_push(
                    $objeto, 
                    $row->ComparativoID,
                    $row->Titulo,
                    $row->FechaHoraRegistro,
                    $row->Status,
                    $row->Accion
            );
            array_push($directorio,$objeto);
        }

        $this->output->set_content_type('application/json');
        $this->output->set_output('{"aaData":'.json_encode($directorio)."}");
    }
    
    /*Recupera Oficinas*/
    public function oficinas(){
        $this->load->database();
        $query = $this->db->query("CALL Usp_Administracion_Oficinas");
        $this->output->set_content_type('application/json');
        $this->output->set_output('{"Oficinas":'.json_encode($query->result_array())."}");
    }
    
    /*Recupera Fraccionamientos por OficinaID*/
    public function fraccionamientos(){
        $OficinaID = intval($this->input->post('OficinaID'));
        $this->load->database();
        $query = $this->db->query("CALL Usp_Administracion_Fraccionamientos($OficinaID)");
        $this->output->set_content_type('application/json');
        $this->output->set_output('{"Fraccionamientos":'.json_encode($query->result_array())."}");
    }
    
    /*Insertar Registro de Corte en Comparativo*/
    public function InsertarDetalleComparativo(){
        $FraccionamientoID = $this->input->post('FraccionamientoID');
        $ComparativoID = $this->input->post('ComparativoID');
        $Clave = $this->input->post('Clave');
        $NumeroPago = $this->input->post('NumeroPago');
        $ImporteTotal = $this->input->post('Importe');
        
        $data = array(
            'id' => '' ,
            'idComparativo' => $ComparativoID ,
            'idFraccionamiento' => $FraccionamientoID,
            'Clave' => $Clave,
            'NumeroPago' => $NumeroPago,
            'Importe' => 0,
            'GastosCobranza' => 0,
            'Intereses' => 0,
            'ImporteTotal' => $ImporteTotal
        );
        $this->output->set_content_type('application/json');
        $this->load->database();
        if($this->db->insert('transDetalleComparativo', $data)){
            $status = true;
        } else {
            $status = false;
        }
        $this->output->set_output('{"InsertarDetalleComparativo":'.json_encode($status)."}");
    }
    
    /*Crear Nuevo Comparativo*/
    public function NuevoComparativo(){
        date_default_timezone_set('America/Mexico_City');
        $Titulo = $this->input->post('Titulo');
        $this->output->set_content_type('application/json');
        $this->load->database();
        $query = $this->db->query("CALL Usp_Administracion_Comparativo_Nuevo('$Titulo')");
        $this->output->set_output('{"NuevoComparativo":'.json_encode($query->result_array())."}");
    }
    
    /*Recuperar Informacion de Comparativo*/
   public function InformacionComparativo(){
        $ComparativoID = $this->input->post('ComparativoID');
        $this->output->set_content_type('application/json');
        $this->load->database();
        $query = $this->db->query("CALL Usp_Administracion_Comparativo_Informacion($ComparativoID)");
        $this->output->set_output('{"Comparativo":'.json_encode($query->result_array())."}");
   }
   
   /*Recuperar Registros de Comparativo*/
   public function PartidasComparativo(){
        $ComparativoID = $this->input->post('ComparativoID');
        $FraccionamientoID = $this->input->post('FraccionamientoID');
        $this->output->set_content_type('application/json');
        $this->load->database();
        $query = $this->db->query("CALL Usp_Administracion_Comparativo_PartidasRegistradas($ComparativoID , $FraccionamientoID)");
        $this->output->set_output('{"PartidasComparativo":'.json_encode($query->result_array())."}");
   }
   
   /*Elimina Partida de Comparativo*/
   public function EliminarRegistro(){
        $ID = $this->input->post('id');
        $this->output->set_content_type('application/json');
        $this->load->database();
        $query = $this->db->query("CALL Usp_Administracion_Comparativo_EliminarRegistro('$ID')");
        $this->output->set_output('{"EliminarRegistro":'.json_encode($query->result_array())."}");
   }
   
   /*Recuperar Fecha de Corte de un Comparativo*/
   public function FechasCorteComparativo(){
        $ComparativoID = $this->input->post('ComparativoID');
        $FraccionamientoID = $this->input->post('FraccionamientoID');
        $this->output->set_content_type('application/json');
        $this->load->database();
        $query = $this->db->query("CALL Usp_Administracion_Comparativo_FechasCorteComparativo($ComparativoID , $FraccionamientoID)");
        $this->output->set_output('{"FechasCorteComparativo":'.json_encode($query->result_array())."}");
   }
}