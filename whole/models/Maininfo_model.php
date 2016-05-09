<?php

class Maininfo_model extends CI_Model {
	public $id;
	public $type_no;
	public $serial_no;
	public $function;
	public $begin_time;
	public $end_time;
	public $ip;
	public $other1;
	public $other2;
	public $category;
	public $brand;
	public $position;
	public $asset_tag;


	public function __construct()
	{
		parent::__construct();
	}

	public function get_maininfo_by_id($id)
	{
		$this->db->select('main_info.id,main_info.type_no,main_info.serial_no,system.name AS system,system.function AS function,main_info.begin_time,main_info.end_time,main_info.ip,main_info.other1,main_info.other2,category.name AS category,brand.name AS brand,position.room,position.rack,main_info.pos_num,main_info.asset_tag',FALSE);
		$this->db->from('main_info');
		$this->db->where('main_info.id',$id);
		$this->db->join('category','main_info.category=category.id','left');
		$this->db->join('brand','main_info.brand=brand.id','left');
		$this->db->join('position','main_info.position=position.id','left');
		$this->db->join('system','main_info.function = system.id','left');
		$query = $this->db->get();
		$array1 = $query->result();
		return $array1;
	}

	public function getnum($query){
		$this->db->select('count(*) as num',FALSE);
		$this->db->from('main_info');
		$this->db->where($query);
		$query = $this->db->get();
		return $query->result();
	}

	public function get_all_maininfo($num,$page,$query)
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
			$this->db->select('main_info.id,main_info.type_no,main_info.serial_no,system.name AS system,system.function AS function,main_info.begin_time,main_info.end_time,main_info.ip,main_info.other1,main_info.other2,category.name AS category,brand.name AS brand,position.room,position.rack,main_info.pos_num,main_info.asset_tag',FALSE);
			$this->db->from('main_info');
			$this->db->join('category','main_info.category=category.id','left');
			$this->db->join('brand','main_info.brand=brand.id','left');
			$this->db->join('position','main_info.position=position.id','left');
			$this->db->join('system','main_info.function = system.id','left');
			$this->db->where($query);
			$this->db->order_by($orderbywhat);
			$query = $this->db->get();
			return $query->result();
		}else{
			$begin=$num*($page-1);
			// $string1 = 'SELECT main_info.id,main_info.type_no,main_info.serial_no,system.name AS system,system.function AS function,main_info.begin_time,main_info.end_time,main_info.ip,main_info.other1,main_info.other2,category.name AS category,brand.name AS brand,position.room,position.rack,asset_tag.number AS asset_tag FROM main_info LEFT JOIN category ON main_info.category=category.id LEFT JOIN brand ON main_info.brand=brand.id LEFT JOIN position ON main_info.position=position.id LEFT JOIN asset_tag ON main_info.asset_tag=asset_tag.id LEFT JOIN system ON main_info.function=system.id LIMIT '.$begin.','.$num;
			// $query1 = $this->db->query($string1);
			// return $query1->result();
			$this->db->select('main_info.id,main_info.type_no,main_info.serial_no,system.name AS system,system.function AS function,main_info.begin_time,main_info.end_time,main_info.ip,main_info.other1,main_info.other2,category.name AS category,brand.name AS brand,position.room,position.rack,main_info.pos_num,main_info.asset_tag',FALSE);
			$this->db->from('main_info');
			$this->db->join('category','main_info.category=category.id','left');
			$this->db->join('brand','main_info.brand=brand.id','left');
			$this->db->join('position','main_info.position=position.id','left');
			$this->db->join('system','main_info.function = system.id','left');
			$this->db->where($query);
			$this->db->order_by($orderbywhat);
			$this->db->limit($num,$begin);
			$_query = $this->db->get();
			return $_query->result();
		}
		
	}

}

/*SELECT main_info.id,main_info.type_no,main_info.serial_no,main_info.function,main_info.begin_time,main_info.end_time,main_info.ip,main_info.other1,main_info.other2,category.name AS category,brand.name AS brand,position.room,position.rack,asset_tag.number FROM main_info 
LEFT JOIN category ON main_info.category=category.id 
LEFT JOIN brand ON main_info.brand=brand.id 
LEFT JOIN position ON main_info.position=position.id 
LEFT JOIN asset_tag ON main_info.asset_tag=asset_tag.id*/