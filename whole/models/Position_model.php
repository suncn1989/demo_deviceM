<?php

class Position_model extends CI_Model {
	public $id;
	public $room;
	public $rack;

	public function __construct()
	{
		parent::__construct();
	}

	public function get_position_by_id($id)
	{
		$this->db->select();
		$this->db->where('id',$id);
		$query = $this->db->get('position');
		$array1 = $query->result();
		return $array1;
	}

	public function get_all_position($num,$page)
	{
		if ($num==null&&$page==null) {
			# code...
			$query = $this->db->get('position');
			return $query->result();
		}else{
			$begin=$num*($page-1);
			$string1 = 'select * from position limit '.$begin.','.$num;
			$query = $this->db->query($string1);
			return $query->result();
		}
		
	}

	public function add_one_position($data)
	{
		// $data = array(
		// 	'room'=>$room,
		// 	'rack'=>$rack,
		// 	);
		$this->db->insert('position',$data);
		$id = $this->db->insert_id();
		return $this->get_position_by_id($id);
	}

	// public function add_one_position($room,$rack)
	// {
	// 	$data = array(
	// 		'room'=>$room,
	// 		'rack'=>$rack,
	// 		);
	// 	$this->db->insert('position',$data);
	// 	$id = $this->db->insert_id();
	// 	return $this->get_position_by_id($id);
	// }

	public function update_one_position($data)
	{
			$id = (int)$data['id'];
			$this->db->set('room',$data['room']);
			$this->db->set('rack',$data['rack']);
			$this->db->where('id',$id);
			$this->db->update('position');			# code...
			return $this->get_position_by_id($id);
	}

	public function delete_position($id)
	{	
		if ($this->get_position_by_id($id)) {
			$this->db->delete('position',array('id'=>$id));
			return $this->db->affected_rows();
			# code...
		} else {
			return 0;
			# code...
		}
	}
}