import React from 'react'
import '../index.css'
import {BrowserRouter as Router, Link} from 'react-router-dom'
import axios from 'axios';

const MainHeader = ({getProds, prods, setProds}) => {
    const hrefSplit = window.location.href.split('/');
    let headerName = hrefSplit[hrefSplit.length-1] === "add" ? "Add" : "List"; 

    const massDelete = () => {
        let checkedProds = [];
        for(let prod of prods) if(prod.checked) {
            checkedProds.push(prod.id);
        }
        if(!checkedProds.length) return;
        axios.delete(`http://localhost/`, {data: { ids: checkedProds}}).then((response) => {
            console.log(response.data);
            getProds();
        })
        
    }

    return (
        <div className="navDiv">
            <span>Product {headerName}</span>
            <div className="navButtons">
                <Link to='/add-product' style={{}} className="button">Add</Link>
                <button onClick={massDelete}>Mass Delete</button>
            </div>
        </div>
    )
}

export default MainHeader