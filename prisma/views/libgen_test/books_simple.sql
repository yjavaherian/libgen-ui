SELECT
  `libgen_test`.`updated`.`ID` AS `id`,
  `libgen_test`.`updated`.`Title` AS `title`,
  `libgen_test`.`updated`.`Author` AS `author`,
  `libgen_test`.`updated`.`Edition` AS `edition`,
  `libgen_test`.`updated`.`Year` AS `year`,
  `libgen_test`.`updated`.`Publisher` AS `publisher`,
  `libgen_test`.`updated`.`Pages` AS `pages`,
  `libgen_test`.`updated`.`Language` AS `language`,
  round(
    `libgen_test`.`updated`.`Filesize` / (1024 * 1024),
    2
  ) AS `fileSize`,
  `libgen_test`.`updated`.`Extension` AS `extension`,
  `libgen_test`.`updated`.`MD5` AS `md5`,
  `libgen_test`.`updated`.`Locator` AS `locator`,
  `libgen_test`.`updated`.`Coverurl` AS `coverURL`,
  `libgen_test`.`updated`.`TimeAdded` AS `timeAdded`,
  `libgen_test`.`updated`.`Identifier` AS `identifier`
FROM
  `libgen_test`.`updated`