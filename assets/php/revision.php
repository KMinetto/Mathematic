<?php

if (!empty($_POST)) {
    $table = (int) $_POST['selectTable'];
    $data = [];

    for ($i = 1; $i <= 10; $i++) {
        $result = $i * $table;
        $data[$i]['operation'] = "$i x $table";
        $data[$i]['result'] = (string) $result;
    }

    try {
        echo json_encode($data, JSON_THROW_ON_ERROR);
    } catch (JsonException $e) {
        $e->getMessage();
    }
}