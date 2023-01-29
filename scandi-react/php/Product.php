<?php
class Product extends DbMethods
{
    protected $SKU;
    protected $name;
    protected $price;
    protected $attributeUnprocessed;
    protected $attribute;

    function __construct()
    {
        parent::__construct();
    }

    public function add()
    {
        $this->set(array($this->SKU, $this->name, $this->price, $this->attribute));
    }

    public function isValidSKU()
    {
        return (preg_match('/^(?=.*\d)(?=.*[A-z])[A-z\d]{4,16}$/', $this->SKU) && $this->isUnique($this->SKU));
    }
    public function isValidName()
    {
        return (strlen($this->name) > 0);
    }
    public function isValidPrice()
    {
        return ((strlen($this->price) > 0) && filter_var($this->price, FILTER_VALIDATE_FLOAT) && floatval($this->price) >= 0);
    }
}
