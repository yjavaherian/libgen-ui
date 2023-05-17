SELECT
  `libgen`.`books`.`id` AS `id`,
  concat_ws(
    ' ',
    `libgen`.`books`.`author`,
    `libgen`.`books`.`title`,
    `libgen`.`books`.`publisher`,
    `libgen`.`books`.`language`,
    `libgen`.`books`.`year`,
    `libgen`.`books`.`edition`,
    `libgen`.`books`.`extension`,
    `libgen`.`books`.`identifierWODash`
  ) AS `bagOfWords`
FROM
  `libgen`.`books`