<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: *");

include 'autoLoader.php';

$productsController = new ProductsController();

$method = $_SERVER['REQUEST_METHOD'];
switch ($method) {
    case "GET":
        echo $productsController->fetch();
        break;
    case "POST":
        echo $productsController->addProduct(json_decode(file_get_contents('php://input')));
        break;
    case "DELETE":
        echo $productsController->massDelete(json_decode(file_get_contents('php://input')));
        break;
}
