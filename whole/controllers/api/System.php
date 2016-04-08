<?php

defined('BASEPATH') OR exit('No direct script access allowed');

// This can be removed if you use __autoload() in config.php OR use Modular Extensions


class System extends CI_Controller {

	public function __construct()
	{
		parent::__construct();

		$this->load->model('system_model');
	}

	public function getnum()
	{

		$total_num = $this->system_model->get_total_num();
		if ($total_num) {
			$this->output
			->set_content_type('application/json')
			->set_output(json_encode($total_num));		
		} else {
			$this->output
			->set_status_header(404);
		}	
	}

	public function index($num=null,$page=null)
	{
		$get_all_system = $this->system_model->get_all_system($num,$page);
		if ($get_all_system) {
			$this->output
			->set_content_type('application/json')
			->set_output(json_encode($get_all_system));		
		} else {
			$this->output
			->set_status_header(404);
		}	
	}

	public function getone($id)
	{
		$get_one_system = $this->system_model->get_system_by_id($id);
		if ($get_one_system) {
			$this->output
			->set_content_type('application/json')
			->set_output(json_encode($get_one_system));		
		} else {
			$this->output
			->set_status_header(404);
		}	
	}

	public function addSystem()
	{
		var_dump("name");
		$data = json_decode(trim(file_get_contents('php://input')),true);
		$add_cate=$this->system_model->add_one_system($data[0]["name"]);
		//$data = $this->input->post();
		//var_dump($data[0]["name"]);
		if ($add_cate) {
			$this->output
			->set_status_header(201)
			->set_content_type('application/json')
			->set_output(json_encode($add_cate));		
		} else {
			$this->output
			->set_status_header(400);
		}	
	}

	public function updateSystem()
	{
		$data = json_decode(trim(file_get_contents('php://input')),true);
		var_dump($data[0]);
		if (array_key_exists('id', $data[0])&&array_key_exists('name', $data[0])) {
			$updatedate = $this->system_model->update_one_system($data[0]);
			$this->output
			->set_status_header(200)
			->set_content_type('application/json')
			->set_output(json_encode($updatedate));
		} else {
			$this->output
			->set_status_header(400);			# code...
		}
	}

	public function deleteSystem($id)
	{
		var_dump($id);
		$num = $this->system_model->delete_system($id);
		var_dump($num);
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
