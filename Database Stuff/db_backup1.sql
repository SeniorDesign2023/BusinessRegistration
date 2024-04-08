-- MySQL dump 10.13  Distrib 8.3.0, for macos14.2 (arm64)
--
-- Host: localhost    Database: form_filler_db
-- ------------------------------------------------------
-- Server version	8.3.0

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `Admin_Org`
--

DROP TABLE IF EXISTS `Admin_Org`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Admin_Org` (
  `Email` varchar(320) NOT NULL,
  `Org_Tag` varchar(15) NOT NULL,
  UNIQUE KEY `Email` (`Email`,`Org_Tag`),
  KEY `UserID` (`Email`),
  KEY `OrgTag` (`Org_Tag`),
  CONSTRAINT `Admin_Org_ibfk_3` FOREIGN KEY (`Email`) REFERENCES `Users` (`Email`),
  CONSTRAINT `Admin_Org_ibfk_4` FOREIGN KEY (`Org_Tag`) REFERENCES `Organizations` (`Org_Tag`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Admin_Org`
--

LOCK TABLES `Admin_Org` WRITE;
/*!40000 ALTER TABLE `Admin_Org` DISABLE KEYS */;
INSERT INTO `Admin_Org` VALUES ('movies@flix.net','flixnet'),('amanda@gmail.com','mandel-studios'),('movies@flix.net','pan-runners'),('movies@flix.net','rendi-college'),('testuser1@test.com','TestOrg1'),('testuser1@test.com','testorg2'),('movies@flix.net','writers-group');
/*!40000 ALTER TABLE `Admin_Org` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Assigned_Forms`
--

DROP TABLE IF EXISTS `Assigned_Forms`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Assigned_Forms` (
  `Email` varchar(320) NOT NULL,
  `Blank_Form_ID` int NOT NULL,
  KEY `Email` (`Email`),
  KEY `Blank_Form_ID` (`Blank_Form_ID`),
  CONSTRAINT `Assigned_Forms_ibfk_1` FOREIGN KEY (`Email`) REFERENCES `Users` (`Email`),
  CONSTRAINT `Assigned_Forms_ibfk_2` FOREIGN KEY (`Blank_Form_ID`) REFERENCES `Blank_Forms` (`Blank_Form_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Assigned_Forms`
--

LOCK TABLES `Assigned_Forms` WRITE;
/*!40000 ALTER TABLE `Assigned_Forms` DISABLE KEYS */;
INSERT INTO `Assigned_Forms` VALUES ('movies@flix.net',1),('movies@flix.net',7),('movies@flix.net',5);
/*!40000 ALTER TABLE `Assigned_Forms` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Blank_Forms`
--

DROP TABLE IF EXISTS `Blank_Forms`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Blank_Forms` (
  `Blank_Form_ID` int NOT NULL AUTO_INCREMENT,
  `Blank_Form_Name` text NOT NULL,
  `Blank_Form_Data` text NOT NULL,
  `Org_Tag` varchar(15) NOT NULL,
  PRIMARY KEY (`Blank_Form_ID`),
  KEY `Org_Tag` (`Org_Tag`),
  CONSTRAINT `Blank_Forms_ibfk_1` FOREIGN KEY (`Org_Tag`) REFERENCES `Organizations` (`Org_Tag`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Blank_Forms`
--

LOCK TABLES `Blank_Forms` WRITE;
/*!40000 ALTER TABLE `Blank_Forms` DISABLE KEYS */;
INSERT INTO `Blank_Forms` VALUES (1,'Movie Request','{\n	\"schema\": {	\n		\"type\": \"object\",\n		\"properties\": {\n			\"Title\": {\n				\"type\": \"string\",\n				\"description\": \"Title of the movie\"\n			},\n			\"Description\": {\n				\"type\": \"string\",\n				\"description\": \"Brief description of the movie\"\n			},\n			\"Studio\": {\n				\"type\": \"string\",\n				\"description\": \"Studio which produced the movie\"\n			},\n			\"Year\": {\n				\"type\": \"integer\",\n				\"description\": \"Year the movie was released\"\n			}\n		}\n	}\n}','flixnet'),(2,'Payment Info','{\n	\"schema\": {	\n		\"type\": \"object\",\n		\"properties\": {\n			\"A\": {\n				\"type\": \"string\",\n				\"description\": \"this is a description\"\n			},\n			\"B\": {\n				\"type\": \"boolean\"\n			},\n			\"C\": {\n				\"type\": \"object\",\n				\"properties\": {\n					\"D\": {\n						\"type\": \"integer\"\n					},\n					\"E\": {\n						\"type\": \"string\",\n						\"format\": \"date\"\n					}\n				}\n			}\n		}\n	}\n}','flixnet'),(3,'Best TV shows Survey 2024','{\n \"schema\" : {\n	\"Best TV shows 2024\": {\n	\"personalData\": {\n	\"type\": \"object\",\n	\"properties\": {\n	  \"name\": {\n		\"type\": \"string\",\n		\"minLength\": 3,\n		\"description\": \"Please enter your name\"\n	  },\n	  \"birthDate\": {\n		\"type\": \"string\",\n		\"format\": \"date\"\n	  },\n	  \"nationality\": {\n		\"type\": \"string\",\n		\"description\": \"US\",\n		\"enum\": [\n		  \"DE\",\n		  \"IT\",\n		  \"JP\",\n		  \"US\",\n		  \"RU\",\n		  \"Other\"\n		]\n	  }\n	  },\n	  \"Favorite shows\": {\n		\"type\": \"object\",\n		\"properties\": {\n		  \"Favorite TV Show 1\": {\n			\"type\": \"string\"\n		  },\n		  \"Favorite TV Show 2\": {\n			\"type\": \"string\"\n		  }\n		}\n	  }\n	}\n  }\n}\n}','flixnet'),(4,'Best Tv Show 2023 Survey','{\n	\"schema\": {	\n		\"Best TV shows 2023\": {\n		\"type\": \"object\",\n		\"properties\": {\n			\"Name\": {\n				\"type\": \"string\",\n				\"description\": \"Enter your name\"\n			},\n			\"Birthdate\": {\n				\"type\": \"string\",\n				\"description\": \"2023-01-01\",\n				\"format\": \"date\"\n			}\n			},\n			\"bestTvShows\": {\n				\"type\": \"object\",\n				\"properties\": {\n					\"bestShow1\": {\n						\"type\": \"string\",\n						\"description\": \"best Tv show\"\n					},\n					\"bestShow2\": {\n						\"type\": \"string\",\n						\"description\": \"second best Tv show\"\n					}\n				}\n			}\n		}\n	}\n}','flixnet'),(5,'Best Tv Shows 2022 Survey','{\n	\"schema\": {	\n		\"bestTVShows2022\": {\n		\"type\": \"object\",\n		\"properties\": {\n			\"Name\": {\n				\"type\": \"string\",\n				\"description\": \"Enter your name\"\n			},\n			\"Birthdate\": {\n				\"type\": \"string\",\n				\"description\": \"2023-01-01\",\n				\"format\": \"date\"\n			}\n			},\n			\"bestTvShows\": {\n				\"type\": \"object\",\n				\"properties\": {\n					\"bestShow1\": {\n						\"type\": \"string\",\n						\"description\": \"best Tv show\"\n					},\n					\"bestShow2\": {\n						\"type\": \"string\",\n						\"description\": \"second best Tv show\"\n					}\n				}\n			}\n		}\n	}\n}','flixnet'),(6,'Best Tv Shows 2021 Survey','{\n	\"schema\": {	\n		\"type\": \"object\",\n		\"properties\": {\n			\"Name\": {\n				\"type\": \"string\",\n				\"description\": \"Enter your name\"\n			},\n			\"Birthdate\": {\n				\"type\": \"string\",\n				\"description\": \"2023-01-01\",\n				\"format\": \"date\"\n			},\n			\"bestTvShows2021\": {\n				\"type\": \"object\",\n				\"properties\": {\n					\"bestShow1\": {\n						\"type\": \"string\",\n						\"description\": \"best Tv show\"\n					},\n					\"bestShow2\": {\n						\"type\": \"string\",\n						\"description\": \"second best Tv show\"\n					}\n				}\n			}\n		}\n	}\n}','flixnet'),(7,'Aid Game Season 1 feedback','{\n	\"schema\": {	\n		\"type\": \"object\",\n		\"properties\": {\n			\"bestActor\": {\n				\"type\": \"string\"\n			},\n			\"bestEpisode\": {\n				\"type\": \"integer\"\n			},\n			\"bestScene\": {\n				\"type\": \"string\",\n				\"default\": \"bar\"\n			},\n			\"additionalInformation\": {\n				\"type\": \"object\",\n				\"properties\": {\n					\"commentsOnHowTheShowWasDirected\": {\n						\"type\": \"string\",\n						\"default\": \"bar\"\n					},\n					\"commentsOnTheDesignChoices\": {\n						\"type\": \"string\",\n						\"default\": \"bar\"\n					},\n					\"commentsOnTheLocationChoices\": {\n						\"type\": \"string\",\n						\"default\": \"bar\"\n					},\n					\"RateTheActingOnTheShowFrom1To5\": {\n						\"type\": \"integer\",\n						\"maximum\": 5,\n						\"minimum\": 5\n					},\n					\"RateTheSpeedOfTheShowFrom1To5\": {\n						\"type\": \"integer\",\n						\"maximum\": 5,\n						\"minimum\": 5\n					},\n					\"RateThePlotOfTheShowFrom1To5\": {\n						\"type\": \"integer\",\n						\"maximum\": 5,\n						\"minimum\": 5\n					},\n					\"otherRecommedations\": {\n						\"type\": \"string\"\n					},\n					\"season2?\": {\n						\"type\": \"boolean\"\n					  },\n					\"rating\": {\n						\"type\": \"integer\",\n						\"default\": 5\n					  }\n				}\n			}\n		}\n	}\n}','flixnet'),(8,'LakeView Documentary Feedback','{\n	\"schema\": {	\n		\"type\": \"object\",\n		\"properties\": {\n			\"bestActor\": {\n				\"type\": \"string\"\n			},\n			\"bestEpisode\": {\n				\"type\": \"integer\"\n			},\n			\"bestScene\": {\n				\"type\": \"string\",\n				\"default\": \"bar\"\n			},\n			\"additionalInformation\": {\n				\"type\": \"object\",\n				\"properties\": {\n					\"commentsOnHowTheShowWasDirected\": {\n						\"type\": \"string\",\n						\"default\": \"bar\"\n					},\n					\"commentsOnTheDesignChoices\": {\n						\"type\": \"string\",\n						\"default\": \"bar\"\n					},\n					\"commentsOnTheLocationChoices\": {\n						\"type\": \"string\",\n						\"default\": \"bar\"\n					},\n					\"RateTheActingOnTheShowFrom1To5\": {\n						\"type\": \"integer\",\n						\"maximum\": 5,\n						\"minimum\": 5\n					},\n					\"RateTheSpeedOfTheShowFrom1To5\": {\n						\"type\": \"integer\",\n						\"maximum\": 5,\n						\"minimum\": 5\n					},\n					\"RateThePlotOfTheShowFrom1To5\": {\n						\"type\": \"integer\",\n						\"maximum\": 5,\n						\"minimum\": 5\n					},\n					\"otherRecommedations\": {\n						\"type\": \"string\"\n					},\n					\"season2?\": {\n						\"type\": \"boolean\"\n					  },\n					\"rating\": {\n						\"type\": \"integer\",\n						\"default\": 5\n					  }\n				}\n			}\n		}\n	}\n}','flixnet'),(9,'Top Comedy Movie of 2023','{\n	\"schema\": {	\n		\"type\": \"object\",\n		\"properties\": {\n			\"Name\": {\n				\"type\": \"string\",\n				\"description\": \"Enter your name\"\n			},\n			\"Birthdate\": {\n				\"type\": \"string\",\n				\"description\": \"2023-01-01\",\n				\"format\": \"date\"\n			},\n			\"bestComedyMovies\": {\n				\"type\": \"object\",\n				\"properties\": {\n					\"bestMovie1\": {\n						\"type\": \"string\"\n					},\n					\"bestMovie2\": {\n						\"type\": \"string\"\n					}\n				}\n			}\n		}\n	}\n}','flixnet'),(10,'Maxed Out Reality Show Interest Form','{\n	\"schema\": {	\n		\"type\": \"object\",\n		\"properties\": {\n			\"Name\": {\n				\"type\": \"string\",\n				\"description\": \"Enter your name\"\n			},\n			\"Birthdate\": {\n				\"type\": \"string\",\n				\"description\": \"2023-01-01\",\n				\"format\": \"date\"\n			},\n			\"bestRealityShow\": {\n				\"type\": \"object\",\n				\"properties\": {\n					\"bestShow1\": {\n						\"type\": \"string\",\n						\"description\": \"best Tv show\"\n					},\n					\"bestShow2\": {\n						\"type\": \"string\",\n						\"description\": \"second best Tv show\"\n					}\n				}\n			}\n		}\n	}\n}','flixnet'),(11,'Pottery Class application form','{\n	\"schema\": {	\n		\"type\": \"object\",\n		\"properties\": {\n			\"Name\": {\n				\"type\": \"string\",\n				\"description\": \"Enter your name\"\n			},\n			\"Birthdate\": {\n				\"type\": \"string\",\n				\"description\": \"2023-01-01\",\n				\"format\": \"date\"\n			},\n			\"bestPotteryShows\": {\n				\"type\": \"object\",\n				\"properties\": {\n					\"bestShow1\": {\n						\"type\": \"string\",\n						\"description\": \"best Tv show\"\n					},\n					\"bestShow2\": {\n						\"type\": \"string\",\n						\"description\": \"second best Tv show\"\n					}\n				}\n			}\n		}\n	}\n}','mandel-studios'),(12,'Design WorkShop application form','{\n	\"schema\": {	\n		\"type\": \"object\",\n		\"properties\": {\n			\"Name\": {\n				\"type\": \"string\",\n				\"description\": \"Enter your name\"\n			},\n			\"Birthdate\": {\n				\"type\": \"string\",\n				\"description\": \"2023-01-01\",\n				\"format\": \"date\"\n			},\n                       \"workshopDate\": {\n				\"type\": \"string\",\n				\"description\": \"2023-01-01\",\n				\"format\": \"date\"\n			}\n			\n		}\n	}\n}','mandel-studios'),(13,'Ceramincs Donation Information','{\n	\"schema\": {	\n		\"type\": \"object\",\n		\"properties\": {\n			\"Name\": {\n				\"type\": \"string\",\n				\"description\": \"Enter your name\"\n			},\n			\"Birthdate\": {\n				\"type\": \"string\",\n				\"description\": \"2023-01-01\",\n				\"format\": \"date\"\n			},\n			\"bestTvShows2021\": {\n				\"type\": \"object\",\n				\"properties\": {\n					\"bestShow1\": {\n						\"type\": \"string\",\n						\"description\": \"best Tv show\"\n					},\n					\"bestShow2\": {\n						\"type\": \"string\",\n						\"description\": \"second best Tv show\"\n					}\n				}\n			}\n		}\n	}\n}','mandel-studios'),(14,'Rings Festival Meet and Greet Volunteer Sign up','{\n	\"schema\": {	\n		\"type\": \"object\",\n		\"properties\": {\n			\"Name\": {\n				\"type\": \"string\",\n				\"description\": \"Enter your name\"\n			},\n			\"Birthdate\": {\n				\"type\": \"string\",\n				\"description\": \"2023-01-01\",\n				\"format\": \"date\"\n			},\n			\"bestTvShows2021\": {\n				\"type\": \"object\",\n				\"properties\": {\n					\"bestShow1\": {\n						\"type\": \"string\",\n						\"description\": \"best Tv show\"\n					},\n					\"bestShow2\": {\n						\"type\": \"string\",\n						\"description\": \"second best Tv show\"\n					}\n				}\n			}\n		}\n	}\n}','mandel-studios'),(15,'Rings Festival Donation form','{\n	\"schema\": {	\n		\"type\": \"object\",\n		\"properties\": {\n			\"Name\": {\n				\"type\": \"string\",\n				\"description\": \"Enter your name\"\n			},\n			\"Birthdate\": {\n				\"type\": \"string\",\n				\"description\": \"2023-01-01\",\n				\"format\": \"date\"\n			},\n			\"bestTvShows2021\": {\n				\"type\": \"object\",\n				\"properties\": {\n					\"bestShow1\": {\n						\"type\": \"string\",\n						\"description\": \"best Tv show\"\n					},\n					\"bestShow2\": {\n						\"type\": \"string\",\n						\"description\": \"second best Tv show\"\n					}\n				}\n			}\n		}\n	}\n}','mandel-studios');
/*!40000 ALTER TABLE `Blank_Forms` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Forms`
--

DROP TABLE IF EXISTS `Forms`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Forms` (
  `FormID` int NOT NULL AUTO_INCREMENT,
  `Blank_Form_ID` int NOT NULL,
  `Org_Tag` varchar(15) NOT NULL,
  `Email` varchar(320) NOT NULL,
  `Form_Name` text NOT NULL,
  `Form_Data` text NOT NULL,
  `Completed` enum('Complete','Incomplete') NOT NULL,
  PRIMARY KEY (`FormID`),
  KEY `OrgID` (`Org_Tag`),
  KEY `Email` (`Email`),
  CONSTRAINT `Forms_ibfk_1` FOREIGN KEY (`Org_Tag`) REFERENCES `Organizations` (`Org_Tag`),
  CONSTRAINT `Forms_ibfk_2` FOREIGN KEY (`Email`) REFERENCES `Users` (`Email`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Forms`
--

LOCK TABLES `Forms` WRITE;
/*!40000 ALTER TABLE `Forms` DISABLE KEYS */;
INSERT INTO `Forms` VALUES (1,6,'flixnet','movies@flix.net','Best Tv Shows 2021 Survey','{\"First_Name\":\"Movel\",\"Middle_Name\":\"net\",\"Last_Name\":\"Wright\",\"Email\":\"movies@flix.net\",\"Phone\":\"000-000-0000\",\"DoB\":\"01011996\",\"Address\":\"142 North Ave Greens, NY\",\"bestTvShows2021\":{\"bestShow1\":\"RandomShow\",\"bestShow2\":\"Shadow\"},\"Name\":\"Malen Dill\",\"Birthdate\":\"1993-04-13\"}','Incomplete'),(2,8,'flixnet','movies@flix.net','LakeView Documentary Feedback','{\"First_Name\":\"Movel\",\"Middle_Name\":\"net\",\"Last_Name\":\"Wright\",\"Email\":\"movies@flix.net\",\"Phone\":\"000-000-0000\",\"DoB\":\"01011996\",\"Address\":\"142 North Ave Greens, NY\",\"bestActor\":\"Mady\",\"bestEpisode\":20,\"bestScene\":\"The river crossing\"}','Incomplete'),(3,9,'flixnet','movies@flix.net','Top Comedy Movie of 2023','{\"First_Name\":\"Movel\",\"Middle_Name\":\"net\",\"Last_Name\":\"Wright\",\"Email\":\"movies@flix.net\",\"Phone\":\"000-000-0000\",\"DoB\":\"01011996\",\"Address\":\"142 North Ave Greens, NY\",\"Name\":\"Malen Dill\",\"Birthdate\":\"1977-04-11\",\"bestComedyMovies\":{\"bestMovie1\":\"The running track\",\"bestMovie2\":\"Imposter in green\"}}','Complete'),(4,2,'flixnet','movies@flix.net','Payment Info','{\"First_Name\":\"Movel\",\"Middle_Name\":\"net\",\"Last_Name\":\"Wright\",\"Email\":\"movies@flix.net\",\"Phone\":\"000-000-0000\",\"DoB\":\"01011996\",\"Address\":\"142 North Ave Greens, NY\",\"A\":\"20\",\"C\":{\"D\":1,\"E\":\"2024-04-12\"},\"B\":true}','Complete'),(5,10,'flixnet','movies@flix.net','Maxed Out Reality Show Interest Form','{\"First_Name\":\"Movel\",\"Middle_Name\":\"net\",\"Last_Name\":\"Wright\",\"Email\":\"movies@flix.net\",\"Phone\":\"000-000-0000\",\"DoB\":\"01011996\",\"Address\":\"142 North Ave Greens, NY\",\"Name\":\"Malen Dill\",\"Birthdate\":\"2024-04-17\",\"bestRealityShow\":{\"bestShow1\":\"Maxed out season 3\",\"bestShow2\":\"Running back\"}}','Complete');
/*!40000 ALTER TABLE `Forms` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Organizations`
--

DROP TABLE IF EXISTS `Organizations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Organizations` (
  `Org_Tag` varchar(15) NOT NULL,
  `Org_Name` text NOT NULL,
  `About_Org` text,
  PRIMARY KEY (`Org_Tag`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Organizations`
--

LOCK TABLES `Organizations` WRITE;
/*!40000 ALTER TABLE `Organizations` DISABLE KEYS */;
INSERT INTO `Organizations` VALUES ('flixnet','FlixNet','Watch flix on the net!'),('mandel-studios','Mandel Studios','This organization deals with all things pottery'),('pan-runners','Pan Runners','A group for runners in mellville'),('rendi-college','Rendi College','The college for arts and sciences'),('TestOrg1','Test Org 1','Test Org 1'),('testorg2','test org 2','testorg2'),('writers-group','Writers Group','This organization is for a community of writers');
/*!40000 ALTER TABLE `Organizations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `User_Org`
--

DROP TABLE IF EXISTS `User_Org`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `User_Org` (
  `Email` varchar(320) NOT NULL,
  `Org_Tag` varchar(15) NOT NULL,
  UNIQUE KEY `Email` (`Email`,`Org_Tag`),
  KEY `UserID` (`Email`),
  KEY `Org_Tag` (`Org_Tag`),
  CONSTRAINT `User_Org_ibfk_3` FOREIGN KEY (`Email`) REFERENCES `Users` (`Email`),
  CONSTRAINT `User_Org_ibfk_4` FOREIGN KEY (`Org_Tag`) REFERENCES `Organizations` (`Org_Tag`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `User_Org`
--

LOCK TABLES `User_Org` WRITE;
/*!40000 ALTER TABLE `User_Org` DISABLE KEYS */;
INSERT INTO `User_Org` VALUES ('testuser2@test.com','TestOrg1'),('testuser3@test.com','TestOrg1');
/*!40000 ALTER TABLE `User_Org` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Users`
--

DROP TABLE IF EXISTS `Users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Users` (
  `First_Name` text,
  `Middle_Name` text,
  `Last_Name` text,
  `Email` varchar(320) NOT NULL,
  `Password` binary(64) NOT NULL,
  `Phone` text,
  `DoB` text,
  `Address` text,
  `Zip` text,
  PRIMARY KEY (`Email`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Users`
--

LOCK TABLES `Users` WRITE;
/*!40000 ALTER TABLE `Users` DISABLE KEYS */;
INSERT INTO `Users` VALUES (NULL,NULL,NULL,'amanda@gmail.com',_binary 'L@ž-iû\æZÜ€#\ß\õx\Ók£\r\Ú0LUŽÇ˜…\áh=º\Z\æÿem\Ô^	JM@¡\Ñ\Ïx™0J:\ê\à<pq™†y',NULL,NULL,NULL,NULL),('Movel','net','Wright','movies@flix.net',_binary 'f\Ù3X”ŸsÀ¬h\ã\çŽ¿\0*ˆq™‚*UDŸ\Ø©\Îø9\ñ\Ód\Ó<ú)\È\r7\ÄQml±ß\â\ã\Ó\Ý\Î\Ãc\õm\ï','000-000-0000','01011996','142 North Ave Greens, NY',NULL),('First','Middle','Last','testuser1@test.com',_binary '“`\ò®—úlýtu»±Œ\\9£\ë¬\×\Ûm3j$’±&u0›h@;û84ƒ–\Ï\÷À\ß%Ž‰^+¢¦.\×','123-456-7890','1-2-3','123 st','12345'),('Firstname','Middlename','Lastname','testuser2@test.com',_binary '£­’\àW£o3˜­>57tv(”˜\ÂVo;s0”\âD\ÎNÈ»˜¬\ãkq¸\Ê[€_ÿû’\ë%Q\Z„z±@I~\×','098-765-4321','4-5-06','456 s 789th st','56789'),(NULL,NULL,NULL,'testuser3@test.com',_binary 'D(Ô ¤>ûY•³hˆ\È³6!t~…^©\Í~Iýø¿\Õ>Â›\Ì[z½d¿ƒ)\n\Ù\Ãd:s\niQ	\ÎV4’N',NULL,NULL,NULL,NULL);
/*!40000 ALTER TABLE `Users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-04-08 16:36:30
