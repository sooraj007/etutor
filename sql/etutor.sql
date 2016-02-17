-- phpMyAdmin SQL Dump
-- version 4.1.12
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Feb 17, 2016 at 06:33 PM
-- Server version: 5.6.16
-- PHP Version: 5.5.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `etutor`
--

-- --------------------------------------------------------

--
-- Table structure for table `course`
--

CREATE TABLE IF NOT EXISTS `course` (
  `id` int(25) NOT NULL AUTO_INCREMENT,
  `cname` varchar(255) NOT NULL,
  `c_thumb` varchar(255) NOT NULL,
  `c_nv` int(25) NOT NULL,
  `c_level` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=5 ;

--
-- Dumping data for table `course`
--

INSERT INTO `course` (`id`, `cname`, `c_thumb`, `c_nv`, `c_level`) VALUES
(1, 'Laravel', 'app/images/1.jpg', 6, 'Beginer'),
(2, 'Vim Mastery', 'app/images/3.jpg', 8, 'Advanced'),
(3, 'Unit testing', 'app/images/4.jpg', 5, 'Intermediate'),
(4, 'Laravel 5.2', 'app/images/5.jpg', 10, 'Beginner');

-- --------------------------------------------------------

--
-- Table structure for table `lessons`
--

CREATE TABLE IF NOT EXISTS `lessons` (
  `id` int(25) NOT NULL AUTO_INCREMENT,
  `c_id` int(25) NOT NULL,
  `lesson_name` varchar(255) NOT NULL,
  `lesson_thumb` varchar(255) NOT NULL,
  `l_dis` text NOT NULL,
  `l_vpath` varchar(255) NOT NULL,
  `l_dur` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=9 ;

--
-- Dumping data for table `lessons`
--

INSERT INTO `lessons` (`id`, `c_id`, `lesson_name`, `lesson_thumb`, `l_dis`, `l_vpath`, `l_dur`) VALUES
(1, 1, 'Introduction', '', '', 'app/videos/laravel/ang01.mp4', '5:14'),
(2, 1, 'Overall structure', '', '', 'app/videos/laravel/ang02.mp4', '04:11'),
(3, 2, 'Introduction to Vim', '', '', 'app/videos/vimmas/ang07.mp4', '5:20'),
(4, 2, 'Setting Up Vim', '', '', 'app/videos/vimmas/ang08.mp4', '7:02'),
(5, 3, 'Introduction to unit testing', '', '', 'app/videos/unittest/ang15.mp4', '11:02'),
(6, 3, 'Introduction to unit test', '', '', 'app/videos/unittest/ang01.mp4', '8:02'),
(7, 4, 'Introduction to laravel 5.2', '', '', 'app/videos/laravel5/ang20.mp4', '7:05'),
(8, 4, 'Laravel 5.2 changes', '', '', 'app/videos/laravel5/ang21.mp4', '10:15');

-- --------------------------------------------------------

--
-- Table structure for table `units`
--

CREATE TABLE IF NOT EXISTS `units` (
  `id` int(25) NOT NULL AUTO_INCREMENT,
  `l_id` int(25) NOT NULL,
  `u_name` varchar(255) NOT NULL,
  `v_url` varchar(255) NOT NULL,
  `v_image` varchar(255) NOT NULL,
  `v_dur` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=3 ;

--
-- Dumping data for table `units`
--

INSERT INTO `units` (`id`, `l_id`, `u_name`, `v_url`, `v_image`, `v_dur`) VALUES
(1, 1, 'Hai laravel', 'app/videos/laravel/ang01.mp4', 'app/images/Laravel-5.png', '5:14'),
(2, 1, 'Overall Structure', 'app/videos/laravel/ang02.mp4', 'app/images/ldb.png', '04:11');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
