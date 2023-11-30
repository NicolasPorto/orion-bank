CREATE DATABASE  IF NOT EXISTS `oriondb` /*!40100 DEFAULT CHARACTER SET utf8mb3 */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `oriondb`;
-- MySQL dump 10.13  Distrib 8.0.34, for Win64 (x86_64)
--
-- Host: localhost    Database: oriondb
-- ------------------------------------------------------
-- Server version	8.0.35

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `chave_favorita`
--

DROP TABLE IF EXISTS `chave_favorita`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `chave_favorita` (
  `ID` int NOT NULL AUTO_INCREMENT,
  `Codigo` char(38) NOT NULL,
  `CodigoConta` char(38) NOT NULL,
  `Chave` varchar(14) NOT NULL,
  `TipoChave` int NOT NULL,
  PRIMARY KEY (`Codigo`),
  UNIQUE KEY `ID_UNIQUE` (`ID`),
  KEY `fk_cad.Chave_Favorita_cad.Conta_idx` (`CodigoConta`),
  CONSTRAINT `fk_cad.Chave_Favorita_cad.Conta` FOREIGN KEY (`CodigoConta`) REFERENCES `conta` (`Codigo`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `chave_favorita`
--

LOCK TABLES `chave_favorita` WRITE;
/*!40000 ALTER TABLE `chave_favorita` DISABLE KEYS */;
/*!40000 ALTER TABLE `chave_favorita` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `chave_pix`
--

DROP TABLE IF EXISTS `chave_pix`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `chave_pix` (
  `ID` int NOT NULL AUTO_INCREMENT,
  `Codigo` char(38) NOT NULL,
  `CodigoConta` char(38) NOT NULL,
  `Chave_Pix` varchar(200) NOT NULL,
  `TipoChave` int NOT NULL,
  `Situacao` int NOT NULL,
  `DtSituacao` datetime NOT NULL,
  `DtInclusao` datetime NOT NULL,
  PRIMARY KEY (`Codigo`),
  UNIQUE KEY `ID_UNIQUE` (`ID`),
  UNIQUE KEY `Chave_Pix_UNIQUE` (`Chave_Pix`),
  KEY `fk_cad.Chave_Pix_cad.Conta1_idx` (`CodigoConta`),
  CONSTRAINT `fk_cad.Chave_Pix_cad.Conta1` FOREIGN KEY (`CodigoConta`) REFERENCES `conta` (`Codigo`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `chave_pix`
--

LOCK TABLES `chave_pix` WRITE;
/*!40000 ALTER TABLE `chave_pix` DISABLE KEYS */;
/*!40000 ALTER TABLE `chave_pix` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `conta`
--

DROP TABLE IF EXISTS `conta`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `conta` (
  `ID` int NOT NULL AUTO_INCREMENT,
  `Codigo` char(38) NOT NULL,
  `Agencia` varchar(4) NOT NULL,
  `Conta` varchar(8) NOT NULL,
  `ContaDigito` varchar(1) NOT NULL,
  `ContaPgto` varchar(9) NOT NULL,
  `DocumentoFederal` varchar(14) NOT NULL,
  `NomeCompleto` varchar(200) NOT NULL,
  `Senha` varchar(255) NOT NULL,
  `Email` varchar(100) NOT NULL,
  `DtNasc` date NOT NULL,
  `TelefoneCelular` varchar(11) NOT NULL,
  `CEP` varchar(8) NOT NULL,
  `Logradouro` varchar(60) NOT NULL,
  `NumeroResidencial` int NOT NULL,
  `DtInclusao` datetime NOT NULL,
  `Situacao` int NOT NULL,
  `DtSituacao` datetime NOT NULL,
  `TipoConta` int DEFAULT NULL,
  PRIMARY KEY (`Codigo`),
  UNIQUE KEY `ID_UNIQUE` (`ID`),
  UNIQUE KEY `DocumentoFederal_UNIQUE` (`DocumentoFederal`),
  UNIQUE KEY `Conta_UNIQUE` (`Conta`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `conta`
--

LOCK TABLES `conta` WRITE;
/*!40000 ALTER TABLE `conta` DISABLE KEYS */;
INSERT INTO `conta` VALUES (3,'4fb277fe-7a8a-11ee-a7a6-0250cafedab2','1234','12345678','8','123456789','12400862966','Marcos Vinicius Santos da Silva','202cb962ac59075b964b07152d234b70','gustavo@gmail.com','2004-08-18','47984354302','89224475','Areia Branca',1215,'2023-10-19 00:00:00',1,'2023-10-19 00:00:00',2),(6,'6c0dac57-8279-11ee-8971-0250cafedab2','1234','12345679','9','123456789','08175537973','Nicolas Porto','81dc9bdb52d04dc20036dbd8313ed055','nicolasporto468@gmail.com','2002-10-24','47984354302','89224475','Areia Branca',1215,'2023-10-19 00:00:00',1,'2023-10-19 00:00:00',2),(7,'75672c3f-8279-11ee-8971-0250cafedab2','1234','12345676','6','123456786','07041556999','Gustavo Do Espirito Santo','81dc9bdb52d04dc20036dbd8313ed055','gustavo@gmail.com','2004-08-18','47984354302','89224475','Areia Branca',1215,'2023-10-19 00:00:00',1,'2023-10-19 00:00:00',2),(9,'9947d2bc-8279-11ee-8971-0250cafedab2','1234','12345675','5','123456755','07041556998','Zézinho','81dc9bdb52d04dc20036dbd8313ed055','gustavo@gmail.com','2004-08-18','47984354302','89224475','Areia Branca',1215,'2023-10-19 00:00:00',1,'2023-10-19 00:00:00',1);
/*!40000 ALTER TABLE `conta` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `movimento`
--

DROP TABLE IF EXISTS `movimento`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `movimento` (
  `ID` int NOT NULL AUTO_INCREMENT,
  `Codigo` char(38) NOT NULL,
  `CodigoContaOrigem` char(38) NOT NULL,
  `CodigoContaDestino` char(38) NOT NULL,
  `Valor` decimal(10,0) NOT NULL,
  `Chave_Pix` varchar(100) DEFAULT NULL,
  `EMV` varchar(8000) DEFAULT NULL,
  `InfoAdicional` varchar(255) DEFAULT NULL,
  `DescMovimento` varchar(10) DEFAULT NULL,
  `TipoTransacao` int NOT NULL,
  `DtMovimento` datetime NOT NULL,
  PRIMARY KEY (`Codigo`),
  UNIQUE KEY `ID_UNIQUE` (`ID`),
  KEY `fk_mov.Movimento_cad.Conta1_idx` (`CodigoContaOrigem`),
  CONSTRAINT `fk_mov.Movimento_cad.Conta1` FOREIGN KEY (`CodigoContaOrigem`) REFERENCES `conta` (`Codigo`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `movimento`
--

LOCK TABLES `movimento` WRITE;
/*!40000 ALTER TABLE `movimento` DISABLE KEYS */;
INSERT INTO `movimento` VALUES (2,'035e5ca9-827c-11ee-8971-0250cafedab2','4fb277fe-7a8a-11ee-a7a6-0250cafedab2','6c0dac57-8279-11ee-8971-0250cafedab2',200,NULL,NULL,NULL,NULL,1,'2023-11-13 00:00:00'),(3,'08f4bf19-827c-11ee-8971-0250cafedab2','4fb277fe-7a8a-11ee-a7a6-0250cafedab2','6c0dac57-8279-11ee-8971-0250cafedab2',300,NULL,NULL,NULL,NULL,1,'2023-11-13 00:00:00'),(4,'3a82012a-827c-11ee-8971-0250cafedab2','6c0dac57-8279-11ee-8971-0250cafedab2','4fb277fe-7a8a-11ee-a7a6-0250cafedab2',10,NULL,NULL,NULL,NULL,1,'2023-11-13 00:00:00'),(5,'3d9377a3-827c-11ee-8971-0250cafedab2','6c0dac57-8279-11ee-8971-0250cafedab2','4fb277fe-7a8a-11ee-a7a6-0250cafedab2',200,NULL,NULL,NULL,NULL,1,'2023-11-13 00:00:00'),(6,'4ac8c296-827c-11ee-8971-0250cafedab2','75672c3f-8279-11ee-8971-0250cafedab2','4fb277fe-7a8a-11ee-a7a6-0250cafedab2',200,NULL,NULL,NULL,NULL,1,'2023-11-13 00:00:00'),(7,'4d30487e-827c-11ee-8971-0250cafedab2','75672c3f-8279-11ee-8971-0250cafedab2','4fb277fe-7a8a-11ee-a7a6-0250cafedab2',300,NULL,NULL,NULL,NULL,1,'2023-11-13 00:00:00'),(1,'efbd08d5-827b-11ee-8971-0250cafedab2','4fb277fe-7a8a-11ee-a7a6-0250cafedab2','6c0dac57-8279-11ee-8971-0250cafedab2',100,NULL,NULL,NULL,NULL,1,'2023-11-13 00:00:00');
/*!40000 ALTER TABLE `movimento` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `qr_code`
--

DROP TABLE IF EXISTS `qr_code`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `qr_code` (
  `ID` int NOT NULL AUTO_INCREMENT,
  `Codigo` char(38) NOT NULL,
  `CodigoConta` char(38) NOT NULL,
  `Chave_Pix` varchar(100) DEFAULT NULL,
  `Valor` decimal(10,0) NOT NULL,
  `EMV` varchar(8000) DEFAULT NULL,
  `DtInclusao` datetime NOT NULL,
  PRIMARY KEY (`Codigo`),
  UNIQUE KEY `ID_UNIQUE` (`ID`),
  KEY `fk_cad.Qr_Code_cad.Conta1_idx` (`CodigoConta`),
  CONSTRAINT `fk_cad.Qr_Code_cad.Conta1` FOREIGN KEY (`CodigoConta`) REFERENCES `conta` (`Codigo`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `qr_code`
--

LOCK TABLES `qr_code` WRITE;
/*!40000 ALTER TABLE `qr_code` DISABLE KEYS */;
/*!40000 ALTER TABLE `qr_code` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `saldo`
--

DROP TABLE IF EXISTS `saldo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `saldo` (
  `ID` int NOT NULL AUTO_INCREMENT,
  `Codigo` char(38) NOT NULL,
  `CodigoConta` char(38) NOT NULL,
  `DtAtualizacao` datetime NOT NULL,
  `Saldo` decimal(10,3) DEFAULT NULL,
  PRIMARY KEY (`Codigo`),
  UNIQUE KEY `ID_UNIQUE` (`ID`),
  KEY `fk_mov.Saldo_cad.Conta1_idx` (`CodigoConta`),
  CONSTRAINT `fk_mov.Saldo_cad.Conta1` FOREIGN KEY (`CodigoConta`) REFERENCES `conta` (`Codigo`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `saldo`
--

LOCK TABLES `saldo` WRITE;
/*!40000 ALTER TABLE `saldo` DISABLE KEYS */;
INSERT INTO `saldo` VALUES (1,'1dba93a9-8271-11ee-8971-0250cafedab2','4fb277fe-7a8a-11ee-a7a6-0250cafedab2','2023-11-13 00:00:00',90000.000),(2,'2863ae0e-827a-11ee-8971-0250cafedab2','6c0dac57-8279-11ee-8971-0250cafedab2','2023-11-13 00:00:00',5000.000),(3,'36954063-827a-11ee-8971-0250cafedab2','75672c3f-8279-11ee-8971-0250cafedab2','2023-11-13 00:00:00',5000.000),(4,'3d91390c-827a-11ee-8971-0250cafedab2','9947d2bc-8279-11ee-8971-0250cafedab2','2023-11-13 00:00:00',5000.000);
/*!40000 ALTER TABLE `saldo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `saldo_data`
--

DROP TABLE IF EXISTS `saldo_data`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `saldo_data` (
  `ID` int NOT NULL AUTO_INCREMENT,
  `Codigo` char(38) NOT NULL,
  `CodigoConta` char(38) NOT NULL,
  `SaldoInicial` decimal(10,0) NOT NULL,
  `SaldoFinal` decimal(10,0) NOT NULL,
  `DtInclusao` datetime NOT NULL,
  PRIMARY KEY (`Codigo`),
  UNIQUE KEY `ID_UNIQUE` (`ID`),
  KEY `fk_mov.Saldo_Data_cad.Conta1_idx` (`CodigoConta`),
  CONSTRAINT `fk_mov.Saldo_Data_cad.Conta1` FOREIGN KEY (`CodigoConta`) REFERENCES `conta` (`Codigo`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `saldo_data`
--

LOCK TABLES `saldo_data` WRITE;
/*!40000 ALTER TABLE `saldo_data` DISABLE KEYS */;
/*!40000 ALTER TABLE `saldo_data` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `solicitacao_abertura_conta`
--

DROP TABLE IF EXISTS `solicitacao_abertura_conta`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `solicitacao_abertura_conta` (
  `ID` int NOT NULL AUTO_INCREMENT,
  `Codigo` char(38) NOT NULL,
  `MensagemSolicitacao` varchar(9000) NOT NULL,
  `Situacao` int NOT NULL,
  `DtSituacao` datetime NOT NULL,
  `DtInclusao` datetime NOT NULL,
  PRIMARY KEY (`Codigo`),
  UNIQUE KEY `ID_UNIQUE` (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `solicitacao_abertura_conta`
--

LOCK TABLES `solicitacao_abertura_conta` WRITE;
/*!40000 ALTER TABLE `solicitacao_abertura_conta` DISABLE KEYS */;
/*!40000 ALTER TABLE `solicitacao_abertura_conta` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'oriondb'
--

--
-- Dumping routines for database 'oriondb'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-11-13 20:32:36
