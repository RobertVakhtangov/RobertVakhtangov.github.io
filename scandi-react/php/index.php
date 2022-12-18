<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: *");

include 'DbConnect.php';
$objDb = new DbConnect;
$conn = $objDb->connect();

$method = $_SERVER['REQUEST_METHOD'];
switch ($method) {
    case "GET":
        $sql = "SELECT * FROM products";
        $stmt = $conn->prepare($sql);
        $stmt->execute();
        $products = $stmt->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode($products);
        break;
    case "POST":
        $product = json_decode(file_get_contents('php://input'));
        $sql = "INSERT INTO products(id, SKU, name, price, attribute) VALUES(null, :SKU, :name, :price, :attribute)";
        $stmt = $conn->prepare($sql);
        $stmt->bindParam(':SKU', $product->SKU);
        $stmt->bindParam(':name', $product->name);
        $stmt->bindParam(':price', $product->price);
        $stmt->bindParam(':attribute', $product->attribute);
        if ($stmt->execute()) {
            $response = ['status' => 1, 'message' => 'Product added successfully'];
        } else {
            $response = ['status' => 0, 'message' => 'Failed to add product'];
        }
        echo json_encode($response);
        break;
    case "DELETE":
        $product_ids = json_decode(file_get_contents('php://input'));
        var_dump($product_ids);
        $extract_ids = implode(",", $product_ids->ids);
        $sql = "DELETE FROM products WHERE id IN($extract_ids)";
        $stmt = $conn->prepare($sql);
        if ($stmt->execute()) {
            $response = ['status' => 1, 'message' => 'Product deleted successfully'];
        } else {
            $response = ['status' => 0, 'message' => 'Failed to delete product'];
        }
        echo json_encode($response);
        break;
}
