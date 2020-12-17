<?php

if (!empty($_POST)) {

    $tableSelector = $_POST;

    try {
        echo json_encode($tableSelector, JSON_THROW_ON_ERROR);
    } catch (JsonException $e) {
    }
}