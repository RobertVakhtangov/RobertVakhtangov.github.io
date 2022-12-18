import React from 'react'
import '../index.css'
import {Link} from 'react-router-dom'

const MainHeader = ({ newProd, getProds}) => {
    const handleOnClick = async (e) => {
        if(!checkKeyVal()){
            e.preventDefault();
            alert("Please, submit required data");
            return;
        }
        await fetch("https://scandi-react.000webhostapp.com/", {
            method: 'POST',
            body: JSON.stringify(newProd)
        })
        getProds()
    }

    const checkKeyVal = () => {
        if(!newProd["price"] || !newProd["name"] || !newProd["SKU"] || !newProd["attribute"]) {
            console.log(newProd);
            return false;
        }
        return true;
    }

  return (
    <div className="navDiv">
      <span>Product Add</span>
      <div className="navButtons">
        <Link to="/" className='button' onClick={handleOnClick}>Save</Link>
        <Link to="/" className='button'>Cancel</Link>
      </div>
    </div>
  )
}

export default MainHeader
