<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Terrenos extends CI_Controller {
    public function index()
    {
        $this->load->view('Terrenos/index');
    }
    
    public function RecuperarLibres(){
        $idFraccionamiento = $this->input->post('idFraccionamiento');
        $this->load->database();
        $query = $this->db->query("CALL Usp_Administracion_Terrenos_RecuperarLibres($idFraccionamiento);");
        $this->output->set_content_type('application/json');
        $this->output->set_output('{"Claves":'.json_encode($query->result_array())."}");
    }
    
    public function RecuperarInformacion(){
        $Clave = $this->input->post('Clave');
        $this->load->database();
        $query = $this->db->query("CALL Ups_Administracion_Terrenos_RecuperarInformacion('$Clave');");
        $this->output->set_content_type('application/json');
        $this->output->set_output('{"Terreno":'.json_encode($query->result_array())."}");
    }
    
    public function RecuperarColindancias(){
        $this->load->database();
        $query = $this->db->query("CALL Ups_Administracion_Colindancias_Recuperar();");
        $this->output->set_content_type('application/json');
        $this->output->set_output('{"Colindancias":'.json_encode($query->result_array())."}");
    }
}