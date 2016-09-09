<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class API extends CI_Controller {
    public function index()
    {
        $this->load->view('API/index');
    }
    
    public function comparativos(){
        $comparativo = array("Volvo", "BMW", "Toyota","Volvo", "BMW", "<button>Ver</button>");
        $this->output->set_content_type('application/json');
        $this->output->set_output(json_encode(array('Comparativos'=> $comparativo)));
    }
}
