<?php

class Category_model extends CI_Model {
	public $id;
	public $name;

	public function __construct()
	{
		parent::__construct();
	}

	public function get_total_num()
	{
		$query = $this->db->query("select * from category");
		return $query->num_rows();
	}

	public function get_category_by_id($id)
	{
		$this->db->select();
		$this->db->where('id',$id);
		$query = $this->db->get('category');
		$array1 = $query->result();
		return $array1;
	}

	public function get_all_category($num,$page)
	{
		if ($num==null&&$page==null) {
			# code...
			$query = $this->db->get('category');
			return $query->result();
		}else{
			$begin=$num*($page-1);
			$string1 = 'select * from category limit '.$begin.','.$num;
			$query = $this->db->query($string1);
			return $query->result();
		}
		
	}

	public function add_one_category($name)
	{
		$data = array(
			'name'=>$name,
			);
		$this->db->insert('category',$data);
		$id = $this->db->insert_id();
		return $this->get_category_by_id($id);
	}

	public function update_one_category($data)
	{
			$id = (int)$data['id'];
			$this->db->set('name',$data['name']);
			$this->db->where('id',$id);
			$this->db->update('category');			# code...
			return $this->get_category_by_id($id);
	}

	public function delete_category($id)
	{	
		if ($this->get_category_by_id($id)) {
			$this->db->delete('category',array('id'=>$id));
			return $this->db->affected_rows();
			# code...
		} else {
			return 0;
			# code...
		}
	}
}