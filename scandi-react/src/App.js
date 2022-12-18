import { useState, useEffect } from 'react'
import Products from './components/Products'
import MainHeader from './components/MainHeader'
import ProductAddHeader from './components/ProductAddHeader'
import ProductAddPage from './pages/ProductAddPage'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import Footer from './components/Footer'
import axios from 'axios'

function App() {
    const [products, setProducts] = useState([])
    const [newProduct, setNewProduct] = useState({"checked": false})
    const hrf = window.location.href;
    const splitHrf = hrf.split('/').pop();

    const getProducts = async () => {
        await fetch("http://localhost/")
            .then((response) => response.json())
            .then((data) => {
                for(let prod of data) prod["checked"] = false;
                setProducts(data);
            })
    }

    let mHeader = <MainHeader  prods={products} getProds={getProducts}/>
    let paHeader = <ProductAddHeader newProd={newProduct} getProds={getProducts}/>
    let headerToRender = mHeader;
    headerToRender = splitHrf === 'scandi_react' || splitHrf === '' ? mHeader : paHeader;

    useEffect(() => {
        headerToRender = splitHrf === 'scandi_react' || splitHrf === '' ? mHeader : paHeader
        setProducts((prev) => {
            for(let prod of prev){
                prod.checked = false;
            }
            return prev;
        })
    }, [useLocation()])

    useEffect(() => {
        getProducts();
    }, [])    

    return (
        <div className="App">
            {headerToRender}
            <Routes>
                <Route path="/scandi_react" element={<Products prods={products} setProds={setProducts}/>} />
                <Route path="add-product" element={<ProductAddPage setNewProd={setNewProduct}/>} />
            </Routes>
        <Footer />
        </div>
    );
}

export default App;