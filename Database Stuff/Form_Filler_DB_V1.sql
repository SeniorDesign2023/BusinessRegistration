-- phpMyAdmin SQL Dump
-- version 4.5.4.1deb2ubuntu2.1
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Feb 16, 2024 at 05:42 PM
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
-- Table structure for table `FORM`
--

CREATE TABLE `FORM` (
  `FormID` int(11) NOT NULL,
  `Form_Name` text NOT NULL,
  `From_Data` blob NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `ORGANIZATION`
--

CREATE TABLE `ORGANIZATION` (
  `OrgID` int(11) NOT NULL,
  `Org_Name` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `USER`
--

CREATE TABLE `USER` (
  `User_ID` int(11) NOT NULL,
  `First_Name` text,
  `Last_Name` text,
  `Email` text NOT NULL,
  `Password` binary(64) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `USERORG`
--

CREATE TABLE `USERORG` (
  `UserID` int(11) NOT NULL,
  `OrgID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `FORM`
--
ALTER TABLE `FORM`
  ADD PRIMARY KEY (`FormID`);

--
-- Indexes for table `ORGANIZATION`
--
ALTER TABLE `ORGANIZATION`
  ADD PRIMARY KEY (`OrgID`);

--
-- Indexes for table `USER`
--
ALTER TABLE `USER`
  ADD PRIMARY KEY (`User_ID`);

--
-- Indexes for table `USERORG`
--
ALTER TABLE `USERORG`
  ADD KEY `UserID` (`UserID`),
  ADD KEY `OrgID` (`OrgID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `FORM`
--
ALTER TABLE `FORM`
  MODIFY `FormID` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `ORGANIZATION`
--
ALTER TABLE `ORGANIZATION`
  MODIFY `OrgID` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `USER`
--
ALTER TABLE `USER`
  MODIFY `User_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;
--
-- Constraints for dumped tables
--

--
-- Constraints for table `USERORG`
--
ALTER TABLE `USERORG`
  ADD CONSTRAINT `USERORG_ibfk_1` FOREIGN KEY (`UserID`) REFERENCES `USER` (`User_ID`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `USERORG_ibfk_2` FOREIGN KEY (`OrgID`) REFERENCES `ORGANIZATION` (`OrgID`) ON DELETE NO ACTION ON UPDATE NO ACTION;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
