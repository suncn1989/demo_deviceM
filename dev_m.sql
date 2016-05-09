-- phpMyAdmin SQL Dump
-- version 4.4.15.5
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: 2016-05-09 10:01:05
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
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

--
-- 转存表中的数据 `asset_tag`
--

INSERT INTO `asset_tag` (`id`, `number`) VALUES
(1, 'sadfasdf32423423423'),
(2, '23423423423424');

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
(1, '思科'),
(2, '华为'),
(3, '华三'),
(4, 'HP'),
(5, 'DELL'),
(6, 'IBM'),
(7, 'NetApp'),
(8, 'F5');

-- --------------------------------------------------------

--
-- 表的结构 `category`
--

CREATE TABLE IF NOT EXISTS `category` (
  `id` int(8) NOT NULL,
  `name` varchar(50) CHARACTER SET utf8 NOT NULL
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;

--
-- 转存表中的数据 `category`
--

INSERT INTO `category` (`id`, `name`) VALUES
(1, '交换机'),
(2, '服务器'),
(3, '存储'),
(4, '工作站');

-- --------------------------------------------------------

--
-- 表的结构 `check_log`
--

CREATE TABLE IF NOT EXISTS `check_log` (
  `id` int(8) NOT NULL,
  `dev_id` int(8) NOT NULL,
  `time` date NOT NULL,
  `detail` varchar(50) NOT NULL
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;

--
-- 转存表中的数据 `check_log`
--

INSERT INTO `check_log` (`id`, `dev_id`, `time`, `detail`) VALUES
(1, 1, '2016-03-01', '0'),
(2, 2, '2016-03-02', '0333333'),
(3, 3, '2016-03-03', '000000000000000000000000'),
(4, 4, '2016-03-04', '0');

-- --------------------------------------------------------

--
-- 表的结构 `config`
--

CREATE TABLE IF NOT EXISTS `config` (
  `dev_id` int(8) NOT NULL,
  `os` varchar(50) CHARACTER SET utf8 NOT NULL,
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
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- 转存表中的数据 `config`
--

INSERT INTO `config` (`dev_id`, `os`, `cpu`, `ram`, `mainboard`, `harddisk`, `gpu`, `power`, `monitor`, `switch`, `other1`, `other2`, `other3`) VALUES
(1, '', '', '', '', '', '', '', '', '', '', '', ''),
(2, '', '', '', '', '', '', '', '', '', '', '', ''),
(3, '', '', '', '', '', '', '', '', '', '', '', ''),
(4, '', '', '', '', '', '', '', '', '', '', '', ''),
(5, '', '', '', '', '', '', '', '', '', '', '', '');

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
) ENGINE=MyISAM AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;

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
  `pos_num` varchar(20) CHARACTER SET utf8 NOT NULL,
  `type_no` varchar(50) CHARACTER SET utf8 NOT NULL,
  `serial_no` varchar(50) CHARACTER SET utf8 NOT NULL,
  `asset_tag` varchar(50) CHARACTER SET utf8 NOT NULL,
  `function` int(8) NOT NULL,
  `begin_time` date NOT NULL,
  `end_time` date NOT NULL,
  `ip` varchar(50) CHARACTER SET utf8 NOT NULL,
  `other1` varchar(100) CHARACTER SET utf8 NOT NULL,
  `other2` varchar(100) CHARACTER SET utf8 NOT NULL
) ENGINE=MyISAM AUTO_INCREMENT=21 DEFAULT CHARSET=latin1;

--
-- 转存表中的数据 `main_info`
--

INSERT INTO `main_info` (`id`, `category`, `brand`, `position`, `pos_num`, `type_no`, `serial_no`, `asset_tag`, `function`, `begin_time`, `end_time`, `ip`, `other1`, `other2`) VALUES
(1, 2, 4, 19, '09', 'DL388eGen8', 'CN730405BR', '0310990118', 7, '2013-01-30', '2016-01-30', '172.27.120.87', 'COM', ''),
(2, 2, 4, 19, '12', 'DL388eGen8', 'CN731204MY', '0310990119', 8, '2013-03-21', '2016-03-25', '172.27.120.86', 'MLS', ''),
(3, 2, 4, 19, '14', 'DL388eGen8', 'CN7312052M', '0310990120', 9, '2013-03-28', '2016-03-27', '172.27.120.85', 'FLS', ''),
(4, 2, 4, 19, '18', 'DL388eGen8', 'CN730405BR', '0310990121', 10, '2013-03-21', '2016-01-25', '172.27.120.84', 'MPC', ''),
(5, 2, 4, 19, '35', 'DL380G8', 'CN72290GP7', '0310990117', 11, '2012-07-30', '2015-07-23', '172.27.120.81', 'COM', ''),
(6, 2, 4, 17, '35', 'DL380G8', 'CN72290GP7', '0310990117', 11, '2012-07-30', '2015-07-23', '172.27.120.81', 'COM', 'test'),
(7, 2, 4, 16, '35', 'DL380G8', 'CN72290GP7', '0310990117', 11, '2012-07-30', '2015-07-23', '172.27.120.81', 'COM', 'test'),
(8, 2, 4, 18, '35', 'DL380G8', 'CN72290GP7', '0310990117', 11, '2012-07-30', '2015-07-23', '172.27.120.81', 'COM', 'test'),
(9, 2, 4, 15, '35', 'DL380G8', 'CN72290GP7', '0310990117', 11, '2012-07-30', '2015-07-23', '172.27.120.81', 'COM', 'test'),
(10, 2, 4, 14, '35', 'DL380G8', 'CN72290GP7', '0310990117', 11, '2012-07-30', '2015-07-23', '172.27.120.81', 'COM', 'test'),
(11, 2, 4, 14, '35', 'DL380G8', 'CN72290GP7', '0310990117', 11, '2012-07-30', '2015-07-23', '172.27.120.81', 'COM', 'test'),
(12, 2, 4, 14, '35', 'DL380G8', 'CN72290GP7', '0310990117', 11, '2012-07-30', '2015-07-23', '172.27.120.81', 'COM', 'test'),
(13, 2, 4, 13, '35', 'DL380G8', 'CN72290GP7', '0310990117', 11, '2012-07-30', '2015-07-23', '172.27.120.81', 'COM', 'test'),
(14, 2, 4, 12, '35', 'DL380G8', 'CN72290GP7', '0310990117', 11, '2012-07-30', '2015-07-23', '172.27.120.81', 'COM', 'test'),
(15, 2, 4, 8, '35', 'DL380G8', 'CN72290GP7', '0310990117', 11, '2012-07-30', '2015-07-23', '172.27.120.81', 'COM', 'test'),
(16, 2, 4, 10, '35', 'DL380G8', 'CN72290GP7', '0310990117', 11, '2012-07-30', '2015-07-23', '172.27.120.81', 'COM', 'test'),
(17, 2, 4, 10, '35', 'DL380G8', 'CN72290GP7', '0310990117', 11, '2012-07-30', '2015-07-23', '172.27.120.81', 'COM', 'test'),
(18, 2, 4, 10, '35', 'DL380G8', 'CN72290GP7', '0310990117', 11, '2012-07-30', '2015-07-23', '172.27.120.81', 'COM', 'test'),
(19, 2, 4, 10, '35', 'DL380G8', 'CN72290GP7', '0310990117', 11, '2012-07-30', '2015-07-23', '172.27.120.81', 'COM', 'test'),
(20, 2, 4, 8, '35', 'DL380G8', 'CN72290GP7', '0310990117', 11, '2012-07-30', '2015-07-23', '172.27.120.81', 'COM', 'test');

-- --------------------------------------------------------

--
-- 表的结构 `position`
--

CREATE TABLE IF NOT EXISTS `position` (
  `id` int(8) NOT NULL,
  `room` varchar(50) CHARACTER SET utf8 NOT NULL,
  `rack` varchar(50) CHARACTER SET utf8 NOT NULL
) ENGINE=MyISAM AUTO_INCREMENT=53 DEFAULT CHARSET=latin1;

--
-- 转存表中的数据 `position`
--

INSERT INTO `position` (`id`, `room`, `rack`) VALUES
(1, '602', 'A01'),
(2, '602', 'A02'),
(3, '602', 'A03'),
(4, '602', 'A04'),
(5, '602', 'A05'),
(6, '602', 'A06'),
(7, '602', 'B01'),
(8, '602', 'B02'),
(9, '602', 'B03'),
(10, '602', 'B04'),
(11, '602', 'B05'),
(12, '602', 'B06'),
(13, '602', 'C01'),
(14, '602', 'C02'),
(15, '602', 'C03'),
(16, '602', 'C04'),
(17, '602', 'C05'),
(18, '602', 'C06'),
(19, '602', 'D01'),
(20, '602', 'D02'),
(21, '602', 'D03'),
(22, '602', 'D04'),
(23, '602', 'D05'),
(24, '602', 'D06'),
(25, '602', '机柜25'),
(26, '602', '机柜26'),
(27, '602', '机柜27'),
(28, '602', '机柜28'),
(29, '602', '机柜29'),
(30, '602', '机柜30'),
(31, '602', '机柜31'),
(32, '602', '机柜32'),
(33, '602', '机柜33'),
(34, '602', '机柜34'),
(35, '602', '机柜35'),
(36, '602', '机柜36'),
(37, '602', '机柜37'),
(38, '602', '机柜38'),
(39, '602', '机柜39'),
(40, '602', '机柜40'),
(41, '602', '机柜41'),
(42, '602', '机柜42'),
(43, '602', '机柜43'),
(44, '602', '机柜44'),
(45, '602', '机柜45'),
(46, '602', '机柜46'),
(47, '602', '机柜47'),
(48, '602', '机柜48'),
(49, '606', 'E1'),
(50, '606', 'E5'),
(51, '606', 'E8'),
(52, '606', 'E10');

-- --------------------------------------------------------

--
-- 表的结构 `system`
--

CREATE TABLE IF NOT EXISTS `system` (
  `id` int(8) NOT NULL,
  `name` varchar(50) CHARACTER SET utf8 NOT NULL,
  `function` varchar(50) CHARACTER SET utf8 NOT NULL
) ENGINE=MyISAM AUTO_INCREMENT=13 DEFAULT CHARSET=latin1;

--
-- 转存表中的数据 `system`
--

INSERT INTO `system` (`id`, `name`, `function`) VALUES
(1, '1号平台', '门户服务器'),
(2, '1号平台', '上游服务器'),
(3, '1号平台', '下游服务器'),
(4, '1号平台', '内容传输服务器'),
(5, '1号平台', '央视服务器'),
(6, '1号平台', '平台预览服务器'),
(7, '索贝', 'COM'),
(8, '索贝', 'MLS'),
(9, '索贝', 'FLS'),
(10, '索贝', 'MPC'),
(11, '索贝', '数据库'),
(12, '索贝', '工作站');

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
  ADD UNIQUE KEY `dev_id` (`dev_id`);

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
  MODIFY `id` int(8) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT for table `brand`
--
ALTER TABLE `brand`
  MODIFY `id` int(8) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=9;
--
-- AUTO_INCREMENT for table `category`
--
ALTER TABLE `category`
  MODIFY `id` int(8) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT for table `check_log`
--
ALTER TABLE `check_log`
  MODIFY `id` int(8) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT for table `fix_log`
--
ALTER TABLE `fix_log`
  MODIFY `id` int(8) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=6;
--
-- AUTO_INCREMENT for table `main_info`
--
ALTER TABLE `main_info`
  MODIFY `id` int(8) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=21;
--
-- AUTO_INCREMENT for table `position`
--
ALTER TABLE `position`
  MODIFY `id` int(8) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=53;
--
-- AUTO_INCREMENT for table `system`
--
ALTER TABLE `system`
  MODIFY `id` int(8) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=13;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
