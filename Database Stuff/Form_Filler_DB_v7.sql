-- phpMyAdmin SQL Dump
-- version 4.5.4.1deb2ubuntu2.1
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Mar 28, 2024 at 08:46 PM
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
CREATE DATABASE `Form_Filler_DB` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `Form_Filler_DB`;

-- --------------------------------------------------------

--
-- Table structure for table `Admin_Org`
--

CREATE TABLE `Admin_Org` (
  `Email` varchar(320) NOT NULL,
  `Org_Tag` varchar(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `Admin_Org`
--

INSERT INTO `Admin_Org` (`Email`, `Org_Tag`) VALUES
('testuser1@test.com', 'TestOrg1');

-- --------------------------------------------------------

--
-- Table structure for table `Blank_Forms`
--

CREATE TABLE `Blank_Forms` (
  `Blank_Form_ID` int(11) NOT NULL,
  `Blank_Form_Name` text NOT NULL,
  `Blank_Form_Data` text NOT NULL,
  `Org_Tag` varchar(15) NOT NULL
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

--
-- Dumping data for table `Organizations`
--

INSERT INTO `Organizations` (`Org_Tag`, `Org_Name`, `About_Org`) VALUES
('TestOrg1', 'Test Org 1', 'Test Org 1');

-- --------------------------------------------------------

--
-- Table structure for table `Users`
--

CREATE TABLE `Users` (
  `First_Name` text,
  `Middle_Name` text,
  `Last_Name` text,
  `Email` varchar(320) NOT NULL,
  `Password` binary(64) NOT NULL,
  `Phone` text,
  `DoB` text,
  `Address` text,
  `Zip` text
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `Users`
--

INSERT INTO `Users` (`First_Name`, `Middle_Name`, `Last_Name`, `Email`, `Password`, `Phone`, `DoB`, `Address`, `Zip`) VALUES
('First', 'Middle', 'Last', 'testuser1@test.com', 0x9360f21bae149711fa6cfd7475bbb18c5c39a3ebac0cd7db6d336a2492b126758d04309b689d403bfb108d1138348396cff7c0df25191b8e895e022ba2a62ed7, '123-456-7890', '1-2-3', '123 st', '12345'),
('Firstname', 'Middlename', 'Lastname', 'testuser2@test.com', 0xa31ead92e057a36f331798ad3e35377476289498c203566f3b733094e2088d44ce114ec8bb98ace36b71b8ca5b0c805ffffb9219eb25511a08847ab140497ed7, '098-765-4321', '4-5-06', '456 s 789th st', '56789');

-- --------------------------------------------------------

--
-- Table structure for table `User_Org`
--

CREATE TABLE `User_Org` (
  `Email` varchar(320) NOT NULL,
  `Org_Tag` varchar(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `User_Org`
--

INSERT INTO `User_Org` (`Email`, `Org_Tag`) VALUES
('testuser2@test.com', 'TestOrg1');

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
-- Indexes for table `Blank_Forms`
--
ALTER TABLE `Blank_Forms`
  ADD PRIMARY KEY (`Blank_Form_ID`),
  ADD KEY `Org_Tag` (`Org_Tag`);

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
-- AUTO_INCREMENT for table `Blank_Forms`
--
ALTER TABLE `Blank_Forms`
  MODIFY `Blank_Form_ID` int(11) NOT NULL AUTO_INCREMENT;
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
-- Constraints for table `Blank_Forms`
--
ALTER TABLE `Blank_Forms`
  ADD CONSTRAINT `Blank_Forms_ibfk_1` FOREIGN KEY (`Org_Tag`) REFERENCES `Organizations` (`Org_Tag`);

--
-- Constraints for table `User_Org`
--
ALTER TABLE `User_Org`
  ADD CONSTRAINT `User_Org_ibfk_3` FOREIGN KEY (`Email`) REFERENCES `Users` (`Email`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `User_Org_ibfk_4` FOREIGN KEY (`Org_Tag`) REFERENCES `Organizations` (`Org_Tag`) ON DELETE NO ACTION ON UPDATE NO ACTION;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
