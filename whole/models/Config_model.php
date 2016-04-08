<?php

class Config_model extends CI_Model {
    public $id;
    public $dev_id;
    public $cpu;
    public $ram;
    public $mainboard;
    public $harddisk;
    public $gpu;
    public $power;
    public $monitor;
    public $switch;
    public $other1;
    public $other2;
    public $other3;
    
	public function __construct()
	{
		parent::__construct();
	}

	public function get_config_by_id($id)
	{
		$this->db->select();
		$this->db->where('id',$id);
		$query = $this->db->get('config');
		$array1 = $query->result();
		return $array1;
	}

	public function get_all_config($num,$page)
	{
		if ($num==null&&$page==null) {
			# code...
			$query = $this->db->get('config');
			return $query->result();
		}else{
			$begin=$num*($page-1);
			$string1 = 'select * from config limit '.$begin.','.$num;
			$query = $this->db->query($string1);
			return $query->result();
		}
		
	}

	public function add_one_config($dev_id,$cpu,$ram,$mainboard,$harddisk,$gpu,$power,$monitor,$switch,$other1,$other2,$other3)
	{
		$data = array(
			'dev_id'=>$dev_id,
            'cpu'=>$cpu,
            'ram'=>$ram,
            'mainboard'=>$mainboard,
            'harddisk'=>$harddisk,
            'gpu'=>$gpu,
            'power'=>$power,
            'monitor'=>$monitor,
            'switch'=>$switch,
            'other1'=>$other1,
            'other2'=>$other2,
            'other3'=>$other3,
			);
		$this->db->insert('config',$data);
		$id = $this->db->insert_id();
		return $this->get_config_by_id($id);
	}
}