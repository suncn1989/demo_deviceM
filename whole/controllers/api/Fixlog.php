<?php

defined('BASEPATH') OR exit('No direct script access allowed');

// This can be removed if you use __autoload() in config.php OR use Modular Extensions

class Fixlog extends CI_Controller {

	public function __construct()
	{
		parent::__construct();

		$this->load->model('fixlog_model');
	}

	public function index($num=null,$page=null)
	{
		$query=$this->input->get();
		$get_all_fixlog = $this->fixlog_model->get_all_fixlog($num,$page,$query);
		if ($get_all_fixlog) {
			$this->output
			->set_content_type('application/json')
			->set_output(json_encode($get_all_fixlog));		
		} else {
			$this->output
			->set_status_header(404);
		}	
	}

	public function getone($id)
	{
		$get_one_fixlog = $this->fixlog_model->get_fixlog_by_id($id);
		if ($get_one_fixlog) {
			$this->output
			->set_content_type('application/json')
			->set_output(json_encode($get_one_fixlog));		
		} else {
			$this->output
			->set_status_header(404);
		}	
	}

	public function addfixlog()
	{
		$data = json_decode(trim(file_get_contents('php://input')),true);
		$add_fixlog=$this->fixlog_model->add_one_fixlog($data[0]);
		//$add_position=$this->position_model->add_one_position($data[0]["room"],$data[0]["rack"]);
		//$data = $this->input->post();
		//var_dump($data[0]["name"]);
		if ($add_fixlog) {
			$this->output
			->set_status_header(201)
			->set_content_type('application/json')
			->set_output(json_encode($add_fixlog));		
		} else {
			$this->output
			->set_status_header(400);
		}	
	}

	public function updatefixlog()
	{
		$data = json_decode(trim(file_get_contents('php://input')),true);
		if (array_key_exists('id', $data[0])) {
			$updatedata = $this->fixlog_model->update_one_fixlog($data[0]);
			$this->output
			->set_status_header(200)
			->set_content_type('application/json')
			->set_output(json_encode($updatedata));
		} else {
			$this->output
			->set_status_header(400);			# code...
		}
	}

	public function deletefixlog($id)
	{
		$num = $this->fixlog_model->delete_fixlog($id);
		if ($num>0) {
			$this->output
			->set_status_header(200)
			->set_content_type('application/json')
			->set_output();
			# code...
		} else {
			$this->output
			->set_status_header(400);	
			# code...
		}
		
		# code...
	}
}
