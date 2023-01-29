<?php
class ProductsController
{
    private $attribute;
    private $product;
    private $message = '';

    function addProduct($product)
    {
        $this->attribute = $product->attribute;
        if (property_exists($this->attribute, 'weight')) $this->product = new Book($product);
        if (property_exists($this->attribute, 'size')) $this->product = new DVD($product);
        if (property_exists($this->attribute, 'h')) $this->product = new Furniture($product);
        $this->validateAllFieldsAndAdd();
    }

    public function fetch()
    {
        (new Product)->getAll();
    }


    public function validateAllFieldsAndAdd()
    {
        if (!$this->product->isValidSKU())
            $this->message .= 'The SKU is invalid or it already exists;SKU should be an alphanumeric string between 8-16 characters and contain at least one digit and one letter;';
        if (!$this->product->isValidName())
            $this->message .= 'Invalid name;';
        if (!$this->product->isValidPrice())
            $this->message .= 'Invalid price;';
        if (!$this->product->isValidAttribute())
            $this->message .= 'Invalid attributes;';

        if (strlen($this->message) == 0) {
            $this->product->add();
            $response = ['status' => 'success', 'message' => 'Product added to the database'];
            echo json_encode($response);
            return;
        }
        $response = ['status' => 'error', 'message' => $this->message];
        echo json_encode($response);
    }

    public function massDelete($product_ids)
    {
        (new Product)->delete($product_ids);
    }
}
