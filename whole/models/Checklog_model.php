<?php

class Checklog_model extends CI_Model {
	public $id;
	public $dev_id;
	public $time;
	public $detail;

	public function __construct()
	{
		parent::__construct();
	}

	public function get_checklog_by_id($id)
	{
		$this->db->select();
		$this->db->where('id',$id);
		$query = $this->db->get('check_log');
		$array1 = $query->result();
		return $array1;
	}

	public function get_all_checklog($num,$page,$query)
	{
		$orderbywhat = null ;
		if (array_key_exists('orderbydesc', $query)||array_key_exists('orderby', $query)) {
			if (array_key_exists('orderbydesc', $query)) {
				$orderbywhat = $query['orderbydesc'].' DESC';
				unset($query['orderbydesc']);
			} else {
				$orderbywhat = $query['orderby'].' ASC';
				unset($query['orderby']);
			}		
		} 

		if ($num==null&&$page==null) {
			# code...
			//$this->db->select(*);
			$this->db->from('check_log');
			$this->db->where($query);
			$this->db->order_by($orderbywhat);
			$query_ = $this->db->get();
			return $query_->result();
		}else{
			$begin=$num*($page-1);
			// $string1 = 'select * from fix_log limit '.$begin.','.$num;
			// $query = $this->db->query($string1);

			//$this->db->select(*);
			$this->db->from('check_log');
			$this->db->where($query);
			$this->db->order_by($orderbywhat);
			$this->db->limit($num,$begin);
			$query_ = $this->db->get();

			return $query_->result();
		}
		
	}

	public function add_one_checklog($data)
	{
		
		$this->db->insert('check_log',$data);
		$id = $this->db->insert_id();
		return $this->get_checklog_by_id($id);
	}

	public function update_one_checklog($data)
	{
			$id = (int)$data['id'];
			$this->db->set('dev_id',$data['dev_id']);
			$this->db->set('time',$data['time']);
			$this->db->set('detail',$data['detail']);
			$this->db->where('id',$id);
			$this->db->update('check_log');			# code...
			return $this->get_checklog_by_id($id);
	}

	public function delete_checklog($id)
	{	
		if ($this->get_checklog_by_id($id)) {
			$this->db->delete('check_log',array('id'=>$id));
			return $this->db->affected_rows();
			# code...
		} else {
			return 0;
			# code...
		}
	}
}