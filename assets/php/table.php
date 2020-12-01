<?php

if (!empty($_POST)) {
    $checkTables = $_POST['check'];
    $data = array();

    foreach ($checkTables as $check) {
        for ($i = 1; $i <= 10; $i++) {
            $result = $i * $check;
            $data[$check][$i]['operation'] = "$i x $check";
            $data[$check][$i]['result'] = $result;
        }
    }

    try {
        header('Content-Type: application/json');
        echo json_encode($data, JSON_THROW_ON_ERROR);
    } catch (JsonException $e) {
        $e->getMessage();
    }
}