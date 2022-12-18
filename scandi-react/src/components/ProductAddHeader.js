import React from 'react'
import '../index.css'
import {Link} from 'react-router-dom'
import axios from 'axios'

const MainHeader = ({ newProd, setNewProd, setProds}) => {
    const handleOnClick = (e) => {
        if(!checkKeyVal()){
            e.preventDefault();
            alert("Please, submit required data");
            return;
        }
        axios.post("http://localhost/", newProd)
        setProds((prev) => {
            return [...prev, newProd]
        })
        setNewProd({"checked": false})
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
        {/* <button onClick={event =>  window.location.href='/'}>Save</button> */}
        {/* <button>Cancel</button> */}
        <Link to="/" className='button' onClick={handleOnClick}>Save</Link>
        <Link to="/" className='button'>Cancel</Link>
      </div>
    </div>
  )
}

export default MainHeader
