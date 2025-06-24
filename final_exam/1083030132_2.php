<?php
$hostName = ''; //hostName
$dataBase = ''; //dataBase
$userName = ''; //userName
$connectPassword = ''; //password
$conn = new mysqli($hostName, $userName, $connectPassword, $dataBase);

if ($conn->connect_error) {
    die("登入失敗");
}

$deepLearning1 = $_POST['deepLearning'];
$algorithms1 = $_POST['algorithms'];
$factfulness1 = $_POST['factfulness'];

$query = "insert into orderList(id,deepLearning,algorithms,factfulness) values('108303013',$deepLearning1,$algorithms1,$factfulness1)";

$resultOrder = $conn->query($query);

if ($resultOrder != 0) {
    header("Location: 1083030132_3.html");
} else {
    die("登入失敗");
}
$conn->close();
