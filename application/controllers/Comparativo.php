<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Comparativo extends CI_Controller {
    public function index()
    {
        $ComparativoID =  $this->input->post('$ComparativoID');
        
        $this->load->view('Comparativo/Ver', $ComparativoID);
    }
        public function editar()
    {
        $this->load->view('Comparativo/Editar');
    }
}

