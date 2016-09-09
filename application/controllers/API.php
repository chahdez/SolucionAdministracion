<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class API extends CI_Controller {
    public function index()
    {
            $this->load->view('API/index');
    }
    
    public function comparativos(){
        $comparativos = array("Test","Test","Test","Test","Test","<button>Boton</button>");
        $this->output->set_content_type('application/json');
        $this->output->set_output('{"aaData":'.json_encode($comparativos)."}");
    }
}