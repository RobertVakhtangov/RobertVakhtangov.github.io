import React, { useState } from 'react'
import '../index.css'
import AddBook from '../components/ProductAddVariants/AddBook.js'
import AddDVD from '../components/ProductAddVariants/AddDVD.js'
import AddFurniture from '../components/ProductAddVariants/AddFurniture.js'


const ProductAddPage = ({ setNewProd }) => {
    const [productType, setProductType] = useState("dvd");
    const handleOnChange = (value, key = "attribute") => {
        setNewProd((prev) => {
            prev[key] = value;
            return prev;
        })
    }

    let addRenderer = <AddDVD hoc={handleOnChange}/>
    if(productType === "DVD") addRenderer = <AddDVD hoc={handleOnChange}/>;
    if(productType === "Book") addRenderer = <AddBook hoc={handleOnChange}/>;
    if(productType === "Furniture") addRenderer = <AddFurniture hoc={handleOnChange}/>;
    
    
  return (
    <div className='productAddPage'>
      <form id="product_form">
        <div className='productPageTextInputs'>
            <div>
                <label for="SKU">SKU</label>
                <input type="text" name="SKU" placeholder="please type the product SKU" id="sku" onChange={(e) => handleOnChange(e.target.value, e.target.name)}></input>
            </div>
            <div>
                <label for="name">Name</label>
                <input type="text" name="name" placeholder="please type the product name" id="name" onChange={(e) => handleOnChange(e.target.value, e.target.name)}></input>
            </div>
            <div>
                <label for="price">Price</label>
                <input type="number" name="price" placeholder="please type the product price" id="price" onChange={(e) => handleOnChange(e.target.value, e.target.name)}></input>
            </div>
            <div>
                <label for="product_type">Type Switcher</label>
                <select id="productType" onChange={({ target }) => setProductType(target.value)}>
                    <option value="DVD" id="DVD">DVD</option>
                    <option value="Furniture" id="Furniture">Furniture</option>
                    <option value="Book" id="Book">Book</option>
                </select>
            </div>
            {addRenderer}
        </div>
      </form>
    </div>
  )
}

export default ProductAddPage
