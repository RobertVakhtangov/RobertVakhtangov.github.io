<?php
abstract class DbMethods
{
    protected $conn;

    function __construct()
    {
        $this->conn = (new DbConnect)->connect();
    }

    public function getAll()
    {
        $sql = "SELECT * FROM products";
        $stmt = $this->conn->prepare($sql);
        $stmt->execute();
        $products = $stmt->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode($products);
    }

    public function isUnique($SKU)
    {
        $sql = "SELECT SKU FROM products WHERE SKU=:SKU";
        $stmt = $this->conn->prepare($sql);
        $stmt->execute(['SKU' => $SKU]);
        $product = $stmt->fetch();
        return !$product;
    }

    public function set(array $product)
    {
        $sql = "INSERT INTO products(id, SKU, name, price, attribute) VALUES(null, :SKU, :name, :price, :attribute)";
        $stmt = $this->conn->prepare($sql);
        $stmt->bindParam(':SKU', $product[0]);
        $stmt->bindParam(':name', $product[1]);
        $stmt->bindParam(':price', $product[2]);
        $stmt->bindParam(':attribute', $product[3]);
        $stmt->execute();
        return;
    }

    public function delete($product_ids)
    {
        $product_ids = json_decode(file_get_contents('php://input'));
        $extract_ids = implode(",", $product_ids->ids);
        $sql = "DELETE FROM products WHERE id IN($extract_ids)";
        $stmt = $this->conn->prepare($sql);
        if ($stmt->execute()) {
            $response = ['status' => 1, 'message' => 'Product deleted successfully'];
        } else {
            $response = ['status' => 0, 'message' => 'Failed to delete product'];
        }
        echo json_encode($response);
    }
}
