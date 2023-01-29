<?php
class Furniture extends Product
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
        if ((is_numeric($this->attributeUnprocessed->h) && floatval($this->attributeUnprocessed->h) >= 0)
            && (is_numeric($this->attributeUnprocessed->w) && floatval($this->attributeUnprocessed->w) >= 0)
            && (is_numeric($this->attributeUnprocessed->l) && floatval($this->attributeUnprocessed->l) >= 0)
        ) {
            $this->attribute = $this->attributeUnprocessed->h . 'x' . $this->attributeUnprocessed->w . 'x' . $this->attributeUnprocessed->l;
            return true;
        }
        return false;
    }
}
