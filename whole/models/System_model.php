<?php

class System_model extends CI_Model {
	public $id;
	public $name;

	public function __construct()
	{
		parent::__construct();
	}

	public function get_total_num()
	{
		$query = $this->db->query("select * from system");
		return $query->num_rows();
	}
	
	public function get_system_by_id($id)
	{
		$this->db->select();
		$this->db->where('id',$id);
		$query = $this->db->get('system');
		$array1 = $query->result();
		return $array1;
	}

	public function get_all_system($num,$page)
	{
		if ($num==null&&$page==null) {
			# code...
			$query = $this->db->get('system');
			return $query->result();
		}else{
			$begin=$num*($page-1);
			$string1 = 'select * from system limit '.$begin.','.$num;
			$query = $this->db->query($string1);
			return $query->result();
		}
		
	}

	public function add_one_system($name)
	{
		$data = array(
			'name'=>$name,
			);
		$this->db->insert('system',$data);
		$id = $this->db->insert_id();
		return $this->get_system_by_id($id);
	}
	
	public function update_one_system($data)
	{
			$id = (int)$data['id'];
			$this->db->set('name',$data['name']);
			$this->db->where('id',$id);
			$this->db->update('system');			# code...
			return $this->get_system_by_id($id);
	}

	public function delete_system($id)
	{	
		if ($this->get_system_by_id($id)) {
			$this->db->delete('system',array('id'=>$id));
			return $this->db->affected_rows();
			# code...
		} else {
			return 0;
			# code...
		}
	}
}