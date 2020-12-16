<?php

//if (!empty($_POST) && isset($_POST['submit1'])) {
//    $x = 'Bonjour tout le monde';
//
//    try {
//        echo json_encode($x, JSON_THROW_ON_ERROR);
//    } catch (JsonException $e) {
//        $e->getMessage();
//    }
//}

if (!empty($_POST)) {

    try {
        echo json_encode($_POST, JSON_THROW_ON_ERROR);
    } catch (JsonException $e) {}
}