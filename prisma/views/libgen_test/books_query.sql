SELECT
  `libgen_test`.`updated`.`ID` AS `id`,
  concat_ws(
    ' ',
    `libgen_test`.`updated`.`Author`,
    `libgen_test`.`updated`.`Title`,
    `libgen_test`.`updated`.`Publisher`,
    `libgen_test`.`updated`.`Language`,
    `libgen_test`.`updated`.`Year`,
    `libgen_test`.`updated`.`Edition`,
    `libgen_test`.`updated`.`Extension`,
    `libgen_test`.`updated`.`IdentifierWODash`
  ) AS `bagOfWords`
FROM
  `libgen_test`.`updated`