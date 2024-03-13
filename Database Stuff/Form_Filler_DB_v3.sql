-- phpMyAdmin SQL Dump
-- version 4.5.4.1deb2ubuntu2.1
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Mar 13, 2024 at 05:49 PM
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
-- Table structure for table `ADMINORG`
--

CREATE TABLE `ADMINORG` (
  `Email` varchar(320) NOT NULL,
  `Org_Tag` varchar(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `BLANKFORMS`
--

CREATE TABLE `BLANKFORMS` (
  `Blank_Form_ID` int(11) NOT NULL,
  `Blank_Form_Name` text NOT NULL,
  `Blank_Form_Data` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `FORM`
--

CREATE TABLE `FORM` (
  `FormID` int(11) NOT NULL,
  `OrgID` int(11) NOT NULL,
  `Form_Name` text NOT NULL,
  `Form_Data` text NOT NULL,
  `Completed` enum('Complete','Incomplete') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `ORGANIZATION`
--

CREATE TABLE `ORGANIZATION` (
  `Org_Tag` varchar(15) NOT NULL,
  `Org_Name` text NOT NULL,
  `About_Org` text
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `USER`
--

CREATE TABLE `USER` (
  `First_Name` text,
  `Last_Name` text,
  `Email` varchar(320) NOT NULL,
  `Password` binary(64) NOT NULL,
  `DoB` text,
  `Address` text
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `USERORG`
--

CREATE TABLE `USERORG` (
  `Email` varchar(320) NOT NULL,
  `Org_Tag` varchar(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `ADMINORG`
--
ALTER TABLE `ADMINORG`
  ADD KEY `UserID` (`Email`),
  ADD KEY `OrgTag` (`Org_Tag`);

--
-- Indexes for table `FORM`
--
ALTER TABLE `FORM`
  ADD PRIMARY KEY (`FormID`),
  ADD KEY `OrgID` (`OrgID`);

--
-- Indexes for table `ORGANIZATION`
--
ALTER TABLE `ORGANIZATION`
  ADD PRIMARY KEY (`Org_Tag`);

--
-- Indexes for table `USER`
--
ALTER TABLE `USER`
  ADD PRIMARY KEY (`Email`);

--
-- Indexes for table `USERORG`
--
ALTER TABLE `USERORG`
  ADD KEY `UserID` (`Email`),
  ADD KEY `Org_Tag` (`Org_Tag`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `FORM`
--
ALTER TABLE `FORM`
  MODIFY `FormID` int(11) NOT NULL AUTO_INCREMENT;
--
-- Constraints for dumped tables
--

--
-- Constraints for table `ADMINORG`
--
ALTER TABLE `ADMINORG`
  ADD CONSTRAINT `ADMINORG_ibfk_3` FOREIGN KEY (`Email`) REFERENCES `USER` (`Email`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `ADMINORG_ibfk_4` FOREIGN KEY (`Org_Tag`) REFERENCES `ORGANIZATION` (`Org_Tag`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `USERORG`
--
ALTER TABLE `USERORG`
  ADD CONSTRAINT `USERORG_ibfk_3` FOREIGN KEY (`Email`) REFERENCES `USER` (`Email`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `USERORG_ibfk_4` FOREIGN KEY (`Org_Tag`) REFERENCES `ORGANIZATION` (`Org_Tag`) ON DELETE NO ACTION ON UPDATE NO ACTION;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
