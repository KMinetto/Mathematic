<?php

if (!empty($_POST)) {


    try {
        echo json_encode($_POST, JSON_THROW_ON_ERROR);
    } catch (JsonException $e) {}
}