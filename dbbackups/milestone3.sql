-- MySQL dump 10.13  Distrib 5.7.20, for Linux (x86_64)
--
-- Host: localhost    Database: homestead
-- ------------------------------------------------------
-- Server version	5.7.20-0ubuntu0.16.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `migrations`
--

DROP TABLE IF EXISTS `migrations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `migrations` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `migrations`
--

LOCK TABLES `migrations` WRITE;
/*!40000 ALTER TABLE `migrations` DISABLE KEYS */;
INSERT INTO `migrations` VALUES (1,'2014_10_12_000000_create_users_table',1),(2,'2014_10_12_100000_create_password_resets_table',1),(3,'2017_10_29_173857_create_topics_table',1),(4,'2017_10_31_173020_create_resources_table',2),(5,'2017_10_31_174858_add_user_to_resources_table',2);
/*!40000 ALTER TABLE `migrations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `password_resets`
--

DROP TABLE IF EXISTS `password_resets`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `password_resets` (
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  KEY `password_resets_email_index` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `password_resets`
--

LOCK TABLES `password_resets` WRITE;
/*!40000 ALTER TABLE `password_resets` DISABLE KEYS */;
/*!40000 ALTER TABLE `password_resets` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `resources`
--

DROP TABLE IF EXISTS `resources`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `resources` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `abstract` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `votes` smallint(6) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `user_id` int(10) unsigned NOT NULL,
  PRIMARY KEY (`id`),
  KEY `resources_user_id_foreign` (`user_id`),
  CONSTRAINT `resources_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `resources`
--

LOCK TABLES `resources` WRITE;
/*!40000 ALTER TABLE `resources` DISABLE KEYS */;
/*!40000 ALTER TABLE `resources` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `topics`
--

DROP TABLE IF EXISTS `topics`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `topics` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `topics`
--

LOCK TABLES `topics` WRITE;
/*!40000 ALTER TABLE `topics` DISABLE KEYS */;
/*!40000 ALTER TABLE `topics` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `users_email_unique` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=52 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'qr8mtCLSJS','BouT9OpZGK@gmail.com','$2y$10$CZSgDdPECm.KJTHKBulU5OGZ6g86hzLqEGVjv8pCMk78pmvetJSJy',NULL,NULL,NULL),(2,'B4bN6JcWfH','SUaUkSeaeD@gmail.com','$2y$10$9MraUsG2LvlPf6saJcUKSO1jiDJXQ6wufRtzMYQ0LTByGmsx9rQVu',NULL,NULL,NULL),(3,'Swec7BCt3t','ivIoU9NrNP@gmail.com','$2y$10$x/QEhxTP4LiwIbysCdmL8udYl1v/hHN3qMgReQhL845UABTL6hy2u',NULL,NULL,NULL),(4,'nlzDXgcDU2','wl5UnLUqsC@gmail.com','$2y$10$nYYautvZQZ9djjUhL/kNYewcugMsh8YhSQuYSfCk1ZlazIimi9dsm',NULL,NULL,NULL),(5,'IFywm1T63W','veprx3XgbI@gmail.com','$2y$10$RBEUGJGjyfBHCap0lv.dn.iTtDFzfzM4ToPIIbyPNRxZGR7xmpj6q',NULL,NULL,NULL),(6,'j5wpPoNbDY','T9N9kXPzFU@gmail.com','$2y$10$X/yUAi53LhjmAa4.Vawafe0Uo/Jb/iNJKiwWCDMRU2nZvHuDwfHne',NULL,NULL,NULL),(7,'3khor45Gnz','hlhNhrk0UB@gmail.com','$2y$10$QILeXJM/vAlMer4SLTbrbui.z/hiTk1CxrcNaRLi.BImLLIa4KUyq',NULL,NULL,NULL),(8,'DoiRufp7kG','QJ6Q1sTJxI@gmail.com','$2y$10$P9IH/RGzh.MtbcrCHuxoV.Q/583MzI4pHFOEAs2GhHj4wN9fj1itS',NULL,NULL,NULL),(9,'jhuUqZMKmw','e98yPGI9Iw@gmail.com','$2y$10$3FdCEJmMgqzr2/kdAOR.HOXIagXj6dG91oHsjcR6.Iaq6zv6AGC02',NULL,NULL,NULL),(10,'ChJUryr6W7','UjZPqGapt8@gmail.com','$2y$10$6DM/dCPSjbA1PqgpTFJw2ufZfLVuS9da/NKPawRaTNEqFjSxShRX2',NULL,NULL,NULL),(11,'XtFkl2s3AO','IMJ05rOS7p@gmail.com','$2y$10$pa986HlMvSJil/7gBd3jNu1E0VQHUfb2Gy6gkLTLcfqYqlSeJDmVm',NULL,NULL,NULL),(12,'Ic7Uo7eCxb','WoY5ivu7uh@gmail.com','$2y$10$vsvCYeQLuRueVEHy/9Kjl.L00DSy7P5fHnjWruwbHqqQW2uXdzURO',NULL,NULL,NULL),(13,'or8SnOHhy9','8LPbcyzMmz@gmail.com','$2y$10$lcA8aEjIwMIGP7qwGqvdAOi0GPRXwxQ9HztUHkEi096IZEwSZA./W',NULL,NULL,NULL),(14,'nA2ifzZuQA','tdCrjGnuoC@gmail.com','$2y$10$EDdRKB7hHWrXxGPeuPtvFeFZtmQXg/4qhCPtdvMtLToAqjaZ8cDCy',NULL,NULL,NULL),(15,'8z9IxCr6xp','yxAEdYNEsh@gmail.com','$2y$10$fGWzcdWLKneuCmYw8EUpwuQjyV3mF1qOOBIgEwktaT/baGx54REQG',NULL,NULL,NULL),(16,'8hsQkzlmgq','YMh4y4wO0W@gmail.com','$2y$10$BJvfNmPgsixhTZMpkFjMm.cK/HRvj3EL8fN2hgDOmUE0uSQvh.qZe',NULL,NULL,NULL),(17,'Y8VS1YGrHq','y1VyV14i5M@gmail.com','$2y$10$9NSQ4b9iTbIbEVO1a4SLV.YZh7h0xyfof40Ck0It3ZmTyTuMprPmi',NULL,NULL,NULL),(18,'qewqwzXAWt','EuGAoyo3zO@gmail.com','$2y$10$NVegVAi2v2MxbhbluhVmCOyOQKnswnat7veQtpK7c2xLJyPX6VdvO',NULL,NULL,NULL),(19,'kY1Oiew6Af','lzRn0JhGs9@gmail.com','$2y$10$fZTvEFleRHvUaW/jPcx2E.z3OsMRKSjMzyTc0l4c/w6jZuXYbqf5e',NULL,NULL,NULL),(20,'eMD1T2UIWS','HlTGkG1goC@gmail.com','$2y$10$0EsGgqhx24oy3RJ4m0cbIe5JDNZfdmST62hdeX9gYaQepHXlt/HF.',NULL,NULL,NULL),(21,'EEHly1PDjZ','k6QHfi63hw@gmail.com','$2y$10$qYEo/dzN3Fu0Rd5Dmv0dsOFKLTQ/ev6Q0TBREEYu.9ATMkSy1alwK',NULL,NULL,NULL),(22,'BAgjjBjEVO','TxpFjyJRML@gmail.com','$2y$10$YUw.xL3Nt7L8oz9voUnSsu4lqMoMiteEJWiVUirHAeAZDgdRtF18m',NULL,NULL,NULL),(23,'vnYBweLmTi','3a0jupBRGH@gmail.com','$2y$10$JXNB2koZD8kT2hzwUlXE8uoH20hNi1Y7jgCRYFvuomQxXDh/DNQaG',NULL,NULL,NULL),(24,'NpIhLcY3zr','cSScpVARxo@gmail.com','$2y$10$DT2lEOA6xN8dPEFt1btEhuGDMxz1sJ6IfkJ37djPXZVzjHHDWo9SK',NULL,NULL,NULL),(25,'vU5DQORRvR','JCcIuKYDrV@gmail.com','$2y$10$Jvad8dHVLVu0nAmBxGrmNeMc96s9p.whg7Tnj63syKH1Deo0hcARi',NULL,NULL,NULL),(26,'K0IwBps7Xl','CBK2rurhMH@gmail.com','$2y$10$HXGLFiVKtjg6lSa9wPgeruXRyrGsu.lDsvITenEq2jE.9fGWfTXgG',NULL,NULL,NULL),(27,'DHtyN9rzOG','jR0qB0sGBR@gmail.com','$2y$10$fKoIQj7BwgPFvmx0eR6Wyen/d0qBSaTx9Py/eMs9.XSybbrjsDGmS',NULL,NULL,NULL),(28,'FVInYguYCL','ZpS8qTRcJI@gmail.com','$2y$10$8rEfs1Y8F8Wj9b7QFPd5n.kHrJPpIabLtNmllqA4jfxoo6G2hRX1q',NULL,NULL,NULL),(29,'46n3hkwZHX','ikz3uBLOSb@gmail.com','$2y$10$8jjQaehepb.k6LF4zSMRzOIcn/SfCbt2CPbIHmIKhzPBpQqj0qIJm',NULL,NULL,NULL),(30,'FFh2Cqj7x3','IvHluXGV2u@gmail.com','$2y$10$YkIW0wV6uYmYWQQga4X86uaxsenI6Yi634joVqCvZ7ikwhCjeHvRu',NULL,NULL,NULL),(31,'MCXMFuEsdR','mcRsBaaTEu@gmail.com','$2y$10$uREi3.7ilMKrlhCeXJeAfu8uXhiQrNQ65JZZoopL4A28R9fQOEh5G',NULL,NULL,NULL),(32,'l1FxwRiHnP','gDg2COdhWi@gmail.com','$2y$10$yjrxq8yd7YiBwgjt1UEKxuonblUo9kWns2OkfPmjPLPneU38E.IYy',NULL,NULL,NULL),(33,'rxc9rnKG73','j006Wty2ss@gmail.com','$2y$10$0N/sWCj47kJ2VwTf7sLk6.UHwUep0FO/7FaRAZQVt0uzjH7mLKQ0i',NULL,NULL,NULL),(34,'02gR7FInb1','sOkl2J5t7Y@gmail.com','$2y$10$y1yTImOulvWCDxa1cTszCOFjkb3Xw2oJZRlXeeP.PCv3OXTNQEIpy',NULL,NULL,NULL),(35,'AMAsTB8hfW','T0b1mRrBbc@gmail.com','$2y$10$ElTX2dlY0w4IdoaU6XrvjurEpLOQDo/05dt7hAhMC.sE78i2hxdfK',NULL,NULL,NULL),(36,'m11e4iAXcI','aUSUSXm5EA@gmail.com','$2y$10$GnxOnwLloE1.b1cYBWd7lOxHogmDQ6IVbGDLJ2/SHfzvKx9u72puO',NULL,NULL,NULL),(37,'2l4F5WA7eX','3vwFcRgclZ@gmail.com','$2y$10$qcUJ3IoqSYxi9PrfJtEYzO9qSo2N9zIyzc/FJTO67ooIUFrW18Que',NULL,NULL,NULL),(38,'ZVfU4bWvNH','cBuAzgsHZT@gmail.com','$2y$10$QEssZm2B8at8heNiDl5KQ.DFSIOUP0f1ZVOIzrto0doIO7nFOCQmq',NULL,NULL,NULL),(39,'a6A9S8Vy7E','BnPUwljmdU@gmail.com','$2y$10$BsGTDiQYPshrPZt7UTEyguwij9YOG1NkkDwdnaFr0ITBLKpS.E1sK',NULL,NULL,NULL),(40,'XAd8gcjceI','sbcu98Motn@gmail.com','$2y$10$k2.awlo.9arg5KkOFiJr4O95FZ4wG4rtU1HQjPIkyhLZnUgIK4mK.',NULL,NULL,NULL),(41,'8KAcDFNOwH','HwnEwdzfcz@gmail.com','$2y$10$dgzQnu2ceplVV.wfSSQDmuovWd0zcFGXBgYZgkZ867O66NBFS1/XS',NULL,NULL,NULL),(42,'4ajLESzxsj','nWPZyeq49V@gmail.com','$2y$10$XYvT6rH9mGLqsTDnaBb8oe6.BEy2e9GtFV/hJJ.blkdY5ilYqmmTG',NULL,NULL,NULL),(43,'bxFXgDdLVd','naJR2CVzAC@gmail.com','$2y$10$CBNhWn.c9.ifzQArNGweA.oFGF7EmNfuzcHTS7ozbppoS.3UYvD6W',NULL,NULL,NULL),(44,'mu6KAm1OoU','gzATM3unCp@gmail.com','$2y$10$8liaeT4Ia09UHhtcCr3qtutf/r4Zx.NEkK0T454FSzVPZZ5hp1Egm',NULL,NULL,NULL),(45,'ikVDwVjcwr','6djvCnAXVz@gmail.com','$2y$10$fAd3la4K7/Tl4E5Yb5qPX.aTKlQqEOIOpThPZhoMe8F8gNvHiU/hy',NULL,NULL,NULL),(46,'Uzw1JNA7bS','vqzDLGePQF@gmail.com','$2y$10$nv.QKWfVSxkup029ZWmztuBBMiimwyd19UMqP5wz7/rt/bddcH6JG',NULL,NULL,NULL),(47,'YbtZA6ZIC8','nYZm8VtGTx@gmail.com','$2y$10$ZIA746/wyCt2m1teu7VSo.XUPyN4gFrisnRnwEAwJjLCu028dhNFK',NULL,NULL,NULL),(48,'GeseakXR3n','bj3GTvvWM2@gmail.com','$2y$10$8354wpHa0sfnPUpM9jCI4uzix9aCAVJip18/OkgJDVjxZ6yJKpV9u',NULL,NULL,NULL),(49,'Z7fxGGPIYL','7cNW9QYL50@gmail.com','$2y$10$G0dTYxrInvVTTZuUBIGh8euG3z2nuwcUhTvHm7ajTBJ/wNsyzO1Ba',NULL,NULL,NULL),(50,'E9EzAoANZ5','ePnUfUFiPf@gmail.com','$2y$10$ibV24Ytn2S2pNr7.mFJnZ.vA/Ls8Rye7v/RVPKqJCHC3LjcAjZIoa',NULL,NULL,NULL),(51,'D8jbZEtQoc','5yRdNVz1Ta@gmail.com','$2y$10$imDOp0jhXV8HJDC9W.WcCe7KQOGdZLhHF00x3SPtzE/FNXB8vqDQm',NULL,NULL,NULL);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2017-11-02 11:09:21
