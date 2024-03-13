-- phpMyAdmin SQL Dump
-- version 4.5.4.1deb2ubuntu2.1
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Mar 13, 2024 at 10:56 PM
-- Server version: 5.7.33-0ubuntu0.16.04.1
-- PHP Version: 7.0.33-0ubuntu0.16.04.16

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `Form_Filler_DB`
--
CREATE DATABASE IF NOT EXISTS `Form_Filler_DB` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `Form_Filler_DB`;

-- --------------------------------------------------------

--
-- Table structure for table `Admin_Org`
--

CREATE TABLE `Admin_Org` (
  `Email` varchar(320) NOT NULL,
  `Org_Tag` varchar(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `Blank_Forms`
--

CREATE TABLE `Blank_Forms` (
  `Blank_Form_ID` int(11) NOT NULL,
  `Blank_Form_Name` text NOT NULL,
  `Blank_Form_Data` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `Forms`
--

CREATE TABLE `Forms` (
  `FormID` int(11) NOT NULL,
  `OrgID` int(11) NOT NULL,
  `Form_Name` text NOT NULL,
  `Form_Data` text NOT NULL,
  `Completed` enum('Complete','Incomplete') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `Organizations`
--

CREATE TABLE `Organizations` (
  `Org_Tag` varchar(15) NOT NULL,
  `Org_Name` text NOT NULL,
  `About_Org` text
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `Users`
--

CREATE TABLE `Users` (
  `First_Name` text,
  `Last_Name` text,
  `Email` varchar(320) NOT NULL,
  `Password` binary(64) NOT NULL,
  `DoB` text,
  `Address` text
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `User_Org`
--

CREATE TABLE `User_Org` (
  `Email` varchar(320) NOT NULL,
  `Org_Tag` varchar(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `Admin_Org`
--
ALTER TABLE `Admin_Org`
  ADD UNIQUE KEY `Email` (`Email`,`Org_Tag`),
  ADD KEY `UserID` (`Email`),
  ADD KEY `OrgTag` (`Org_Tag`);

--
-- Indexes for table `Forms`
--
ALTER TABLE `Forms`
  ADD PRIMARY KEY (`FormID`),
  ADD KEY `OrgID` (`OrgID`);

--
-- Indexes for table `Organizations`
--
ALTER TABLE `Organizations`
  ADD PRIMARY KEY (`Org_Tag`);

--
-- Indexes for table `Users`
--
ALTER TABLE `Users`
  ADD PRIMARY KEY (`Email`);

--
-- Indexes for table `User_Org`
--
ALTER TABLE `User_Org`
  ADD UNIQUE KEY `Email` (`Email`,`Org_Tag`),
  ADD KEY `UserID` (`Email`),
  ADD KEY `Org_Tag` (`Org_Tag`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `Forms`
--
ALTER TABLE `Forms`
  MODIFY `FormID` int(11) NOT NULL AUTO_INCREMENT;
--
-- Constraints for dumped tables
--

--
-- Constraints for table `Admin_Org`
--
ALTER TABLE `Admin_Org`
  ADD CONSTRAINT `Admin_Org_ibfk_3` FOREIGN KEY (`Email`) REFERENCES `Users` (`Email`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `Admin_Org_ibfk_4` FOREIGN KEY (`Org_Tag`) REFERENCES `Organizations` (`Org_Tag`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `User_Org`
--
ALTER TABLE `User_Org`
  ADD CONSTRAINT `User_Org_ibfk_3` FOREIGN KEY (`Email`) REFERENCES `Users` (`Email`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `User_Org_ibfk_4` FOREIGN KEY (`Org_Tag`) REFERENCES `Organizations` (`Org_Tag`) ON DELETE NO ACTION ON UPDATE NO ACTION;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
