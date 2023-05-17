SELECT
  `libgen`.`books`.`id` AS `id`,
  `libgen`.`books`.`title` AS `title`,
  `libgen`.`books`.`author` AS `author`,
  `libgen`.`books`.`edition` AS `edition`,
  `libgen`.`books`.`year` AS `year`,
  `libgen`.`books`.`publisher` AS `publisher`,
  `libgen`.`books`.`pages` AS `pages`,
  `libgen`.`books`.`language` AS `language`,
  round(`libgen`.`books`.`fileSize` / (1024 * 1024), 2) AS `fileSize`,
  `libgen`.`books`.`extension` AS `extension`,
  `libgen`.`books`.`md5` AS `md5`,
  `libgen`.`books`.`locator` AS `locator`,
  `libgen`.`books`.`coverURL` AS `coverURL`,
  `libgen`.`books`.`timeAdded` AS `timeAdded`,
  `libgen`.`books`.`identifier` AS `identifier`
FROM
  `libgen`.`books`