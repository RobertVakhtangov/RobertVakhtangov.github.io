<?php
class Book extends Product
{
    function __construct($product)
    {
        parent::__construct();
        $this->SKU = $product->SKU;
        $this->name = $product->name;
        $this->price = $product->price;
        $this->attributeUnprocessed = $product->attribute;
    }

    public function isValidAttribute()
    {
        if (is_numeric($this->attributeUnprocessed->weight) && floatval($this->attributeUnprocessed->weight) >= 0) {
            $this->attribute = $this->attributeUnprocessed->weight . ' KG';
            return true;
        }
        return false;
    }
}
