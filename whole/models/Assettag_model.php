<?php
class Assettag_model extends CI_Model {
	public $id;
	public $number;

	public function __construct()
	{
		parent::__construct();
	}

	public function get_total_num()
	{
		$query = $this->db->query("select * from asset_tag");
		return $query->num_rows();
	}

	public function get_asset_tag_by_id($id)
	{
		$this->db->select();
		$this->db->where('id',$id);
		$query = $this->db->get('asset_tag');
		$array1 = $query->result();
		return $array1;
	}

	public function get_all_asset_tag($num,$page)
	{
		if ($num==null&&$page==null) {
			# code...
			$query = $this->db->get('asset_tag');
			return $query->result();
		}else{
			$begin=$num*($page-1);
			$string1 = 'select * from asset_tag limit '.$begin.','.$num;
			$query = $this->db->query($string1);
			return $query->result();
		}
		
	}

	public function add_one_asset_tag($number)
	{
		$data = array(
			'number'=>$number,
			);
		$this->db->insert('asset_tag',$data);
		$id = $this->db->insert_id();
		return $this->get_asset_tag_by_id($id);
	}
	
	public function update_one_asset_tag($data)
	{
			$id = (int)$data['id'];
			$this->db->set('number',$data['number']);
			$this->db->where('id',$id);
			$this->db->update('asset_tag');			# code...
			return $this->get_asset_tag_by_id($id);
	}

	public function delete_asset_tag($id)
	{	
		if ($this->get_asset_tag_by_id($id)) {
			$this->db->delete('asset_tag',array('id'=>$id));
			return $this->db->affected_rows();
			# code...
		} else {
			return 0;
			# code...
		}
	}
}