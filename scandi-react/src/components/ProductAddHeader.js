import React from 'react'
import '../index.css'
import {Navigate, Link, useNavigate} from 'react-router-dom'

const MainHeader = ({ newProd, getProds}) => {
    const navigate = useNavigate();

    const handleOnClick = async () => {
        if(!checkKeyVal()){
            alert("Please, submit required data");
            return;
        }
        let response;
        // await fetch("https://rob-scandi-php.herokuapp.com/", {
        await fetch("http://localhost/", {
            method: 'POST',
            body: JSON.stringify(newProd)
        })
        .then((response) => response.json())
        .then((data) => response = data)
        if(response.status === 'error'){
            alert(`Please, provide the data of indicated type\n${response.message.split(';').map((msg) => {
                if(msg) return "\n" + msg;
            })}`)
            return;
        }
        navigate('/');
        getProds()
    }

    const checkKeyVal = () => {
        if(!newProd["price"] || !newProd["name"] || !newProd["SKU"] || !newProd["attribute"]) {
            return false;
        }
        return true;
    }

  return (
    <div className="navDiv">
      <span>Product Add</span>
      <div className="navButtons">
        <button className='button' onClick={handleOnClick}>Save</button>
        <Link to="/" className='button'>Cancel</Link>
      </div>
    </div>
  )
}

export default MainHeader
