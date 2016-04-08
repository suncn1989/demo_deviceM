<?php

defined('BASEPATH') OR exit('No direct script access allowed');

// This can be removed if you use __autoload() in config.php OR use Modular Extensions

class Assettags extends CI_Controller {

	public function __construct()
	{
		parent::__construct();

		$this->load->model('assettag_model');
	}

	public function getnum()
	{

		$total_num = $this->assettag_model->get_total_num();
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
		$get_all_asset_tag = $this->assettag_model->get_all_asset_tag($num,$page);
		if ($get_all_asset_tag) {
			$this->output
			->set_content_type('application/json')
			->set_output(json_encode($get_all_asset_tag));		
		} else {
			$this->output
			->set_status_header(404);
		}	
	}

	public function getone($id)
	{
		$get_one_asset_tag = $this->assettag_model->get_asset_tag_by_id($id);
		if ($get_one_asset_tag) {
			$this->output
			->set_content_type('application/json')
			->set_output(json_encode($get_one_asset_tag));		
		} else {
			$this->output
			->set_status_header(404);
		}	
	}

	public function addAssetTags()
	{
		$data = json_decode(trim(file_get_contents('php://input')),true);
		$add_cate=$this->assettag_model->add_one_asset_tag($data[0]["number"]);
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

	public function updateAssetTags()
	{
		$data = json_decode(trim(file_get_contents('php://input')),true);
		var_dump($data[0]);
		if (array_key_exists('id', $data[0])&&array_key_exists('number', $data[0])) {
			$updatedate = $this->assettag_model->update_one_asset_tag($data[0]);
			$this->output
			->set_status_header(200)
			->set_content_type('application/json')
			->set_output(json_encode($updatedate));
		} else {
			$this->output
			->set_status_header(400);			# code...
		}
	}

	public function deleteAssetTags($id)
	{
		var_dump($id);
		$num = $this->assettag_model->delete_asset_tag($id);
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
