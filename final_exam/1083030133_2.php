<?php

$year1 = $_POST['year1'];
$month1 = $_POST['month1'];
$year2 = $_POST['year2'];
$month2 = $_POST['month2'];

$value = 12 * ($year2 - $year1) + ($month2 - $month1) + 1;

echo ($value);
