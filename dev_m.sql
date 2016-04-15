-- phpMyAdmin SQL Dump
-- version 4.4.15.5
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: 2016-04-11 10:00:21
-- 服务器版本： 5.5.35-0ubuntu0.12.04.2
-- PHP Version: 5.3.10-1ubuntu3.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `dev_m`
--

-- --------------------------------------------------------

--
-- 表的结构 `asset_tag`
--

CREATE TABLE IF NOT EXISTS `asset_tag` (
  `id` int(8) NOT NULL,
  `number` varchar(50) NOT NULL
) ENGINE=MyISAM AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `asset_tag`
--

INSERT INTO `asset_tag` (`id`, `number`) VALUES
(1, 'number0303040115'),
(2, 'number0303040116'),
(3, 'number0303040117'),
(4, 'number0303040118');

-- --------------------------------------------------------

--
-- 表的结构 `brand`
--

CREATE TABLE IF NOT EXISTS `brand` (
  `id` int(8) NOT NULL,
  `name` varchar(50) CHARACTER SET utf8 NOT NULL
) ENGINE=MyISAM AUTO_INCREMENT=9 DEFAULT CHARSET=latin1;

--
-- 转存表中的数据 `brand`
--

INSERT INTO `brand` (`id`, `name`) VALUES
(1, '惠普HP'),
(2, '戴尔DELL'),
(3, 'IBM'),
(4, '华为HUAWEI'),
(5, '思科Cisco'),
(6, '华三H3C'),
(7, 'Netapp');

-- --------------------------------------------------------

--
-- 表的结构 `category`
--

CREATE TABLE IF NOT EXISTS `category` (
  `id` int(8) NOT NULL,
  `name` varchar(50) CHARACTER SET utf8 NOT NULL
) ENGINE=MyISAM AUTO_INCREMENT=11 DEFAULT CHARSET=latin1;

--
-- 转存表中的数据 `category`
--

INSERT INTO `category` (`id`, `name`) VALUES
(1, '服务器'),
(2, '交换机'),
(3, '存储'),
(4, '工作站');

-- --------------------------------------------------------

--
-- 表的结构 `check_log`
--

CREATE TABLE IF NOT EXISTS `check_log` (
  `id` int(8) NOT NULL,
  `dev_id` int(8) NOT NULL,
  `time` date NOT NULL
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;

--
-- 转存表中的数据 `check_log`
--

INSERT INTO `check_log` (`id`, `dev_id`, `time`) VALUES
(1, 1, '2016-03-01'),
(2, 2, '2016-03-02'),
(3, 3, '2016-03-03'),
(4, 4, '2016-03-04');

-- --------------------------------------------------------

--
-- 表的结构 `config`
--

CREATE TABLE IF NOT EXISTS `config` (
  `id` int(8) NOT NULL,
  `dev_id` int(8) NOT NULL,
  `cpu` varchar(50) CHARACTER SET utf8 NOT NULL,
  `ram` varchar(50) CHARACTER SET utf8 NOT NULL,
  `mainboard` varchar(50) CHARACTER SET utf8 NOT NULL,
  `harddisk` varchar(50) CHARACTER SET utf8 NOT NULL,
  `gpu` varchar(50) CHARACTER SET utf8 NOT NULL,
  `power` varchar(50) CHARACTER SET utf8 NOT NULL,
  `monitor` varchar(50) CHARACTER SET utf8 NOT NULL,
  `switch` varchar(50) CHARACTER SET utf8 NOT NULL,
  `other1` varchar(50) CHARACTER SET utf8 NOT NULL,
  `other2` varchar(50) CHARACTER SET utf8 NOT NULL,
  `other3` varchar(50) CHARACTER SET utf8 NOT NULL
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;

--
-- 转存表中的数据 `config`
--

INSERT INTO `config` (`id`, `dev_id`, `cpu`, `ram`, `mainboard`, `harddisk`, `gpu`, `power`, `monitor`, `switch`, `other1`, `other2`, `other3`) VALUES
(1, 1, 'cpuXXX01', 'ramXXX01', 'mainboardXXX01', 'harddiskXXX01', 'gpuXXX01', 'powerXXX01', 'monitorXXX01', 'switchXXX01', 'other101', 'other201', 'other301'),
(2, 2, 'cpuXXX02', 'ramXXX02', 'mainboardXXX02', 'harddiskXXX02', 'gpuXXX02', 'powerXXX02', 'monitorXXX02', 'switchXXX02', 'other102', 'other202', 'other302'),
(3, 3, 'cpuXXX03', 'ramXXX03', 'mainboardXXX03', 'harddiskXXX03', 'gpuXXX03', 'powerXXX03', 'monitorXXX03', 'switchXXX03', 'other103', 'other203', 'other303'),
(4, 4, 'cpuXXX04', 'ramXXX04', 'mainboardXXX04', 'harddiskXXX04', 'gpuXXX04', 'powerXXX04', 'monitorXXX04', 'switchXXX04', 'other104', 'other204', 'other304');

-- --------------------------------------------------------

--
-- 表的结构 `fix_log`
--

CREATE TABLE IF NOT EXISTS `fix_log` (
  `id` int(8) NOT NULL,
  `dev_id` varchar(50) CHARACTER SET utf8 NOT NULL,
  `partname` varchar(50) CHARACTER SET utf8 NOT NULL,
  `time` date NOT NULL,
  `detail` varchar(250) CHARACTER SET utf8 NOT NULL
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;

--
-- 转存表中的数据 `fix_log`
--

INSERT INTO `fix_log` (`id`, `dev_id`, `partname`, `time`, `detail`) VALUES
(1, '1', 'cpu', '2016-03-01', 'detailXXX01'),
(2, '2', 'ram', '2016-03-02', 'detailXXX02'),
(3, '3', 'mainborad', '2016-03-03', 'detailXXX03'),
(4, '4', 'harddisk', '2016-03-04', 'detailXXX04');

-- --------------------------------------------------------

--
-- 表的结构 `main_info`
--

CREATE TABLE IF NOT EXISTS `main_info` (
  `id` int(8) NOT NULL,
  `category` int(8) NOT NULL,
  `brand` int(8) NOT NULL,
  `position` int(8) NOT NULL,
  `type_no` varchar(50) CHARACTER SET utf8 NOT NULL,
  `serial_no` varchar(50) CHARACTER SET utf8 NOT NULL,
  `function` int(8) NOT NULL,
  `asset_tag` int(8) NOT NULL,
  `begin_time` date NOT NULL,
  `end_time` date NOT NULL,
  `ip` varchar(50) CHARACTER SET utf8 NOT NULL,
  `config` int(8) NOT NULL,
  `other1` varchar(100) CHARACTER SET utf8 NOT NULL,
  `other2` varchar(100) CHARACTER SET utf8 NOT NULL
) ENGINE=MyISAM AUTO_INCREMENT=13 DEFAULT CHARSET=latin1;

--
-- 转存表中的数据 `main_info`
--

INSERT INTO `main_info` (`id`, `category`, `brand`, `position`, `type_no`, `serial_no`, `function`, `asset_tag`, `begin_time`, `end_time`, `ip`, `config`, `other1`, `other2`) VALUES
(1, 1, 1, 1, 'DL380G7', 'CNG210TJTP', 1, 1, '2016-03-01', '2016-03-02', '192.168.10.125', 1, 'otherXXX11', 'otherXXX12'),
(2, 2, 2, 2, 'DL380G7', 'CNG210TJVK', 2, 2, '2016-03-03', '2016-03-04', '192.168.10.124', 2, 'otherXXX21', 'otherXXX22'),
(3, 3, 3, 3, 'DL380G7', 'CNG210TJW2', 3, 3, '2016-03-05', '2016-03-06', '172.27.118.100', 1, 'otherXXX31', 'otherXXX32'),
(4, 4, 4, 8, 'R610', '53ZJ63X', 4, 4, '2016-03-07', '2016-03-08', '172.27.118.173', 1, 'otherXXX41', 'otherXXX42'),
(5, 4, 4, 8, 'R6109', '53ZJ63X', 4, 4, '2016-03-07', '2016-03-08', '172.27.118.173', 1, 'otherXXX41', 'otherXXX42'),
(6, 4, 4, 2, 'R610988', '53ZJ63Xgfsdf', 4, 4, '2016-03-07', '2016-03-08', '172.27.118.175', 1, 'otherXXX415', 'otherXXX424'),
(7, 4, 4, 1, 'R61330988', '5333ZJ63Xgfsdf', 4, 4, '2016-03-07', '2016-03-08', '172.27.118.175', 1, 'otherXXX415', 'otherXXX424'),
(8, 4, 4, 4, 'R61330988', '5333ZJ63Xgfsdf', 4, 4, '2016-03-07', '2016-03-08', '172.27.118.175', 1, 'otherXXX415', 'otherXXX424'),
(9, 4, 4, 8, 'R61330988', '5333ZJ63Xgfsdf', 4, 4, '2016-03-07', '2016-03-08', '172.27.118.175', 1, 'otherXXX415', 'otherXXX424'),
(10, 4, 4, 4, 'R61330988', '5333ZJ63Xgfsdf', 4, 4, '2016-03-07', '2016-03-08', '172.27.118.175', 1, 'otherXXX415', 'otherXXX424'),
(11, 4, 4, 4, 'R61330988', '5333ZJ63Xgfsdf', 4, 4, '2016-03-07', '2016-03-08', '172.27.118.175', 1, 'otherXXX415', 'otherXXX424'),
(12, 4, 4, 4, 'R61330988', '5333ZJ63Xgfsdf', 4, 4, '2016-03-07', '2016-03-08', '172.27.118.175', 1, 'otherXXX415', 'otherXXX424');

-- --------------------------------------------------------

--
-- 表的结构 `position`
--

CREATE TABLE IF NOT EXISTS `position` (
  `id` int(8) NOT NULL,
  `room` varchar(50) CHARACTER SET utf8 NOT NULL,
  `rack` varchar(50) CHARACTER SET utf8 NOT NULL
) ENGINE=MyISAM AUTO_INCREMENT=12 DEFAULT CHARSET=latin1;

--
-- 转存表中的数据 `position`
--

INSERT INTO `position` (`id`, `room`, `rack`) VALUES
(1, 'room601', 'A06-01'),
(2, 'room602', 'A06-02'),
(3, 'room603', 'A06-03'),
(4, 'room604', 'A06-04'),
(5, 'room602', 'A06-10'),
(7, 'room601', 'A06-02'),
(8, 'room604', 'A06-03'),
(9, 'room601', 'A06-04'),
(10, 'room601', 'A06-05'),
(11, 'room601', 'A06-06');

-- --------------------------------------------------------

--
-- 表的结构 `system`
--

CREATE TABLE IF NOT EXISTS `system` (
  `id` int(8) NOT NULL,
  `name` varchar(50) CHARACTER SET utf8 NOT NULL,
  `function` varchar(50) CHARACTER SET utf8 NOT NULL
) ENGINE=MyISAM AUTO_INCREMENT=9 DEFAULT CHARSET=latin1;

--
-- 转存表中的数据 `system`
--

INSERT INTO `system` (`id`, `name`, `function`) VALUES
(1, 'EPG4.0', '流媒体服务器'),
(2, 'EPG4.0', '接口机'),
(3, 'C3', '数据库'),
(5, 'C3', 'WEB服务器'),
(8, 'C3', 'Hadoop存储服务器');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `asset_tag`
--
ALTER TABLE `asset_tag`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `brand`
--
ALTER TABLE `brand`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `check_log`
--
ALTER TABLE `check_log`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `config`
--
ALTER TABLE `config`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `fix_log`
--
ALTER TABLE `fix_log`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `main_info`
--
ALTER TABLE `main_info`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `position`
--
ALTER TABLE `position`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `system`
--
ALTER TABLE `system`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `asset_tag`
--
ALTER TABLE `asset_tag`
  MODIFY `id` int(8) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=8;
--
-- AUTO_INCREMENT for table `brand`
--
ALTER TABLE `brand`
  MODIFY `id` int(8) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=9;
--
-- AUTO_INCREMENT for table `category`
--
ALTER TABLE `category`
  MODIFY `id` int(8) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=11;
--
-- AUTO_INCREMENT for table `check_log`
--
ALTER TABLE `check_log`
  MODIFY `id` int(8) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT for table `config`
--
ALTER TABLE `config`
  MODIFY `id` int(8) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT for table `fix_log`
--
ALTER TABLE `fix_log`
  MODIFY `id` int(8) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT for table `main_info`
--
ALTER TABLE `main_info`
  MODIFY `id` int(8) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=13;
--
-- AUTO_INCREMENT for table `position`
--
ALTER TABLE `position`
  MODIFY `id` int(8) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=12;
--
-- AUTO_INCREMENT for table `system`
--
ALTER TABLE `system`
  MODIFY `id` int(8) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=9;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
