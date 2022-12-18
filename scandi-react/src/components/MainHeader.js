import React from 'react'
import '../index.css'
import {Link} from 'react-router-dom'
import axios from 'axios';

const MainHeader = ({prods, getProds}) => {
    const massDelete = async () => {
        let checkedProds = [];
        for(let prod of prods) if(prod.checked) {
            checkedProds.push(prod.id);
        }
        let payload = {ids: checkedProds}
        if(!checkedProds.length) return;
        await fetch("https://scandi-react.000webhostapp.com/", {
            method: 'DELETE',
            body: JSON.stringify(payload)
        })
        .then((response) => response.json)
        .then((data) => console.log(data))
        getProds();
    }

    return (
        <div className="navDiv">
            <span>Product List</span>
            <div className="navButtons">
                <Link to='/add-product' className="button">ADD</Link>
                <button onClick={massDelete}>MASS DELETE</button>
            </div>
        </div>
    )
}

export default MainHeader