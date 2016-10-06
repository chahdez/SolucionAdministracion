<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Catalogo extends CI_Controller {
    public function index(){
        $this->load->view('Catalogo/index');
    }
    
    public function GastosTipoRecuperar(){
        $this->load->database();
        $query = $this->db->query("SELECT * FROM orgTipoGastos");
        $directorio = array();
        foreach ($query->result() as $row){
            $objeto = array();
            array_push(
                    $objeto, 
                    $row->id,
                    $row->CONCEPTO
            );
            array_push($directorio,$objeto);
        }

        $this->output->set_content_type('application/json');
        $this->output->set_output('{"aaData":'.json_encode($directorio)."}");
    }
    
    public function GastosInsertarTipo(){
        $Concepto = $this->input->post('Concepto');
        $this->load->database();
        $query = $this->db->query("CALL Usp_Administracion_Gastos_InsertarTipo('$Concepto')");
        $this->output->set_content_type('application/json');
        $this->output->set_output('{TipoGasto:'.json_encode($query->result_array())."}");
    }
    
    public function ColindanciasRecuperar(){
        $this->load->database();
        $query = $this->db->query("SELECT * FROM ctrlColindancias");
        $directorio = array();
        foreach ($query->result() as $row){
            $objeto = array();
            array_push(
                    $objeto, 
                    $row->id,
                    $row->Colindancia
            );
            array_push($directorio,$objeto);
        }

        $this->output->set_content_type('application/json');
        $this->output->set_output('{"aaData":'.json_encode($directorio)."}");
    }
    
    public function ColindanciasInsertar(){
        $Colindancia = $this->input->post('Colindancia');
        $this->load->database();
        $query = $this->db->query("CALL Usp_Administracion_Colindancias_Insertar('$Colindancia')");
        $this->output->set_content_type('application/json');
        $this->output->set_output('{ColindanciaID:'.json_encode($query->result_array())."}");
    }
}