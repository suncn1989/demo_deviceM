<?php

defined('BASEPATH') OR exit('No direct script access allowed');

// This can be removed if you use __autoload() in config.php OR use Modular Extensions

class Brands extends CI_Controller {

	public function __construct()
	{
		parent::__construct();

		$this->load->model('brand_model');
	}

	public function getnum()
	{

		$total_num = $this->brand_model->get_total_num();
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

		$get_all_brand = $this->brand_model->get_all_brand($num,$page);
		if ($get_all_brand) {
			$this->output
			->set_content_type('application/json')
			->set_output(json_encode($get_all_brand));		
		} else {
			$this->output
			->set_status_header(404);
		}	
	}

	public function getone($id)
	{
		$get_one_brand = $this->brand_model->get_brand_by_id($id);
		if ($get_one_brand) {
			$this->output
			->set_content_type('application/json')
			->set_output(json_encode($get_one_brand));		
		} else {
			$this->output
			->set_status_header(404);
		}	
	}

	public function addbrands()
	{
		$data = json_decode(trim(file_get_contents('php://input')),true);
		$add_cate=$this->brand_model->add_one_brand($data[0]["name"]);
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

	public function updatebrands()
	{
		$data = json_decode(trim(file_get_contents('php://input')),true);
		var_dump($data[0]);
		if (array_key_exists('id', $data[0])&&array_key_exists('name', $data[0])) {
			$updatedate = $this->brand_model->update_one_brand($data[0]);
			$this->output
			->set_status_header(200)
			->set_content_type('application/json')
			->set_output(json_encode($updatedate));
		} else {
			$this->output
			->set_status_header(400);			# code...
		}
	}

	public function deletebrands($id)
	{
		var_dump($id);
		$num = $this->brand_model->delete_brand($id);
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
