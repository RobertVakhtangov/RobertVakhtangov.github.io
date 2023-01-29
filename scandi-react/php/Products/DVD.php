<?php
class DVD extends Product
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
        if (is_numeric($this->attributeUnprocessed->size) && floatval($this->attributeUnprocessed->size) >= 0) {
            $this->attribute = $this->attributeUnprocessed->size . ' MB';
            return true;
        }
        return false;
    }
}
