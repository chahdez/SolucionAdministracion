<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Revocacion extends CI_Controller {
    public function index(){
        $this->load->view('Revocacion/index');
    }
}