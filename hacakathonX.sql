-- phpMyAdmin SQL Dump
-- version 5.0.3
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Mar 25, 2021 at 04:51 PM
-- Server version: 10.4.14-MariaDB
-- PHP Version: 7.4.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `hacakathonX`
--

-- --------------------------------------------------------

--
-- Table structure for table `Activity`
--

CREATE TABLE `Activity` (
  `id` int(11) NOT NULL,
  `phoneNummer` varchar(10) NOT NULL,
  `activityType` varchar(20) NOT NULL,
  `calorise` int(10) NOT NULL,
  `dateOfActivity` date NOT NULL,
  `completedTime` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `Activity_Group`
--

CREATE TABLE `Activity_Group` (
  `id` int(10) NOT NULL,
  `activityType` varchar(10) NOT NULL,
  `dateOfActivity` date NOT NULL,
  `timeOfActivity` time NOT NULL,
  `location` text NOT NULL,
  `description` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `Activity_Type`
--

CREATE TABLE `Activity_Type` (
  `ActivityType` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `User`
--

CREATE TABLE `User` (
  `phoneNumber` varchar(10) NOT NULL,
  `firstName` varchar(8) NOT NULL,
  `lastName` varchar(8) NOT NULL,
  `email` varchar(20) NOT NULL,
  `dateOfBirth` date NOT NULL,
  `hobby` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `Activity`
--
ALTER TABLE `Activity`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `Activity_Group`
--
ALTER TABLE `Activity_Group`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `Activity_Type`
--
ALTER TABLE `Activity_Type`
  ADD PRIMARY KEY (`ActivityType`);

--
-- Indexes for table `User`
--
ALTER TABLE `User`
  ADD PRIMARY KEY (`phoneNumber`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `Activity`
--
ALTER TABLE `Activity`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `Activity_Group`
--
ALTER TABLE `Activity_Group`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
