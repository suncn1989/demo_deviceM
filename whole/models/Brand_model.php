<?php

class Brand_model extends CI_Model {
	public $id;
	public $name;

	public function __construct()
	{
		parent::__construct();
	}

	public function get_total_num()
	{
		$query = $this->db->query("select * from brand");
		return $query->num_rows();
	}

	public function get_brand_by_id($id)
	{
		$this->db->select();
		$this->db->where('id',$id);
		$query = $this->db->get('brand');
		$array1 = $query->result();
		return $array1;
	}

	public function get_all_brand($num,$page)
	{
		if ($num==null&&$page==null) {
			# code...
			$query = $this->db->get('brand');
			return $query->result();
		}else{
			$begin=$num*($page-1);
			$string1 = 'select * from brand limit '.$begin.','.$num;
			$query = $this->db->query($string1);
			return $query->result();
		}
		
	}

	public function add_one_brand($name)
	{
		$data = array(
			'name'=>$name,
			);
		$this->db->insert('brand',$data);
		$id = $this->db->insert_id();
		return $this->get_brand_by_id($id);
	}
	
	public function update_one_brand($data)
	{
			$id = (int)$data['id'];
			$this->db->set('name',$data['name']);
			$this->db->where('id',$id);
			$this->db->update('brand');			# code...
			return $this->get_brand_by_id($id);
	}

	public function delete_brand($id)
	{	
		if ($this->get_brand_by_id($id)) {
			$this->db->delete('brand',array('id'=>$id));
			return $this->db->affected_rows();
			# code...
		} else {
			return 0;
			# code...
		}
	}
}