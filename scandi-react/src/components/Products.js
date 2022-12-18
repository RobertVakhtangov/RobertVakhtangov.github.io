import React, { useState } from 'react';

const Products = ({ prods, setProds }) => {
    const handleOnChange = (p, e) => {
        p.checked = e.target.checked;
        setProds(prods)
    }

    return (
        <div className="prodsContainer">
            {prods.map((p) => (
                <div className="prodContainer" key={p.id}>
                    <input type="checkbox" onChange={(e) => handleOnChange(p, e)} className=".delete-checkbox"/>
                    <h3>{p.SKU}</h3>
                    <h4>{p.name}</h4>            
                    <h4>Price: {p.price}$</h4>            
                    <h4>{p.attribute}</h4>            
                </div>
            ))}
        </div>
    )
}

export default Products