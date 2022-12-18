import React from 'react'
import '../index.css'
import {Link} from 'react-router-dom'
import axios from 'axios';

const MainHeader = ({prods, getProds}) => {
    const hrefSplit = window.location.href.split('/');
    let headerName = hrefSplit[hrefSplit.length-1] === "add" ? "Add" : "List"; 

    const massDelete = async () => {
        let checkedProds = [];
        for(let prod of prods) if(prod.checked) {
            checkedProds.push(prod.id);
        }
        let payload = {ids: checkedProds}
        if(!checkedProds.length) return;
        await fetch("http://localhost/", {
            method: 'DELETE',
            body: JSON.stringify(payload)
        })
        getProds();
    }

    return (
        <div className="navDiv">
            <span>Product {headerName}</span>
            <div className="navButtons">
                <Link to='/add-product' className="button">ADD</Link>
                <button onClick={massDelete}>MASS DELETE</button>
            </div>
        </div>
    )
}

export default MainHeader