import React from 'react'
import '../index.css'
import {Link} from 'react-router-dom'

const MainHeader = ({prods, getProds}) => {
    const massDelete = () => {
        let checkedProds = [];
        for(let prod of prods) if(prod.checked) {
            console.log(checkedProds);
            checkedProds.push(prod.id);
        }
        let payload = {ids: checkedProds}
        if(!checkedProds.length) return;
        fetch("https://rob-scandi-php.herokuapp.com/", {
            method: 'DELETE',
            headers: {
                'Accept' : 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        })
        .then((response) => response.json)
        .then(() => getProds())
        .catch((err) => console.log(err))
    }

    return (
        <div className="navDiv">
            <span>Product List TESTTEST</span>
            <div className="navButtons">
                <Link to='/add-product' className="button">ADD</Link>
                <button onClick={massDelete}>MASS DELETE</button>
            </div>
        </div>
    )
}

export default MainHeader