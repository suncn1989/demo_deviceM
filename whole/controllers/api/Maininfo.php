<?php

defined('BASEPATH') OR exit('No direct script access allowed');

// This can be removed if you use __autoload() in config.php OR use Modular Extensions

class Maininfo extends CI_Controller {

	public function __construct()
	{
		parent::__construct();

		$this->load->model('Maininfo_model');
	}

	public function index($num=null,$page=null)
	{
		$query=$this->input->get();
		$get_all_maininfo = $this->Maininfo_model->get_all_maininfo($num,$page,$query);
		if ($get_all_maininfo) {
			$this->output
			->set_content_type('application/json')
			->set_output(json_encode($get_all_maininfo));		
		} else {
			$this->output
			->set_status_header(404);
		}	
	}

	public function getone($id)
	{
		$get_one_maininfo = $this->Maininfo_model->get_maininfo_by_id($id);
		if ($get_one_maininfo) {
			$this->output
			->set_content_type('application/json')
			->set_output(json_encode($get_one_maininfo));		
		} else {
			$this->output
			->set_status_header(404);
		}	
	}





	
}