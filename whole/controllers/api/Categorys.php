<?php

defined('BASEPATH') OR exit('No direct script access allowed');

// This can be removed if you use __autoload() in config.php OR use Modular Extensions

class Categorys extends CI_Controller {

	public function __construct()
	{
		parent::__construct();

		$this->load->model('category_model');
	}

	public function getnum()
	{

		$total_num = $this->category_model->get_total_num();
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

		$get_all_category = $this->category_model->get_all_category($num,$page);
		if ($get_all_category) {
			$this->output
			->set_content_type('application/json')
			->set_output(json_encode($get_all_category));		
		} else {
			$this->output
			->set_status_header(404);
		}	
	}

	public function getone($id)
	{
		$get_one_category = $this->category_model->get_category_by_id($id);
		if ($get_one_category) {
			$this->output
			->set_content_type('application/json')
			->set_output(json_encode($get_one_category));		
		} else {
			$this->output
			->set_status_header(404);
		}	
	}

	public function addcategorys()
	{
		$data = json_decode(trim(file_get_contents('php://input')),true);
		$add_cate=$this->category_model->add_one_category($data[0]["name"]);
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

	public function updatecategorys()
	{
		$data = json_decode(trim(file_get_contents('php://input')),true);
		if (array_key_exists('id', $data[0])&&array_key_exists('name', $data[0])) {
			$updatedate = $this->category_model->update_one_category($data[0]);
			$this->output
			->set_status_header(200)
			->set_content_type('application/json')
			->set_output(json_encode($updatedate));
		} else {
			$this->output
			->set_status_header(400);			# code...
		}
	}

	public function deletecategorys($id)
	{
		var_dump($id);
		$num = $this->category_model->delete_category($id);
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
