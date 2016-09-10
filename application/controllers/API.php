<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class API extends CI_Controller {
    public function index()
    {
        $this->load->view('API/index');
    }
    
    public function login(){
        $user = $this->input->post('user');
        $password = $this->input->post('password');
        $this->load->database();
        $query = $this->db->query("CALL Usp_Adminsitracion_Login('$user' , '$password')");
        $this->output->set_content_type('application/json');
        $this->output->set_output('{"Login":'.json_encode($query->result_array())."}");
    }
    
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
    
    public function oficinas(){
        $this->load->database();
        $query = $this->db->query("CALL Usp_Administracion_Oficinas");
        $this->output->set_content_type('application/json');
        $this->output->set_output('{"Oficinas":'.json_encode($query->result_array())."}");
    }
}