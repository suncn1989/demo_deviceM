<?php

defined('BASEPATH') OR exit('No direct script access allowed');

// This can be removed if you use __autoload() in config.php OR use Modular Extensions

class Position extends CI_Controller {

	public function __construct()
	{
		parent::__construct();

		$this->load->model('position_model');
	}

	public function index($num=null,$page=null)
	{

		$get_all_position = $this->position_model->get_all_position($num,$page);
		if ($get_all_position) {
			$this->output
			->set_content_type('application/json')
			->set_output(json_encode($get_all_position));		
		} else {
			$this->output
			->set_status_header(404);
		}	
	}

	public function getone($id)
	{
		$get_one_position = $this->position_model->get_position_by_id($id);
		if ($get_one_position) {
			$this->output
			->set_content_type('application/json')
			->set_output(json_encode($get_one_position));		
		} else {
			$this->output
			->set_status_header(404);
		}	
	}

	public function addposition()
	{
		$data = json_decode(trim(file_get_contents('php://input')),true);
		$add_position=$this->position_model->add_one_position($data[0]["room"],$data[0]["rack"]);
		//$data = $this->input->post();
		//var_dump($data[0]["name"]);
		if ($add_position) {
			$this->output
			->set_status_header(201)
			->set_content_type('application/json')
			->set_output(json_encode($add_position));		
		} else {
			$this->output
			->set_status_header(400);
		}	
	}

	public function updateposition()
	{
		$data = json_decode(trim(file_get_contents('php://input')),true);
		if (array_key_exists('id', $data[0])&&array_key_exists('room', $data[0])) {
			$updatedata = $this->position_model->update_one_position($data[0]);
			$this->output
			->set_status_header(200)
			->set_content_type('application/json')
			->set_output(json_encode($updatedata));
		} else {
			$this->output
			->set_status_header(400);			# code...
		}
	}

	public function deleteposition($id)
	{
		$num = $this->position_model->delete_position($id);
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
