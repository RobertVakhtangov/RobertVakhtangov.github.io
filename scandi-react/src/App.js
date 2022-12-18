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
    //     [
    // {
    //     id: 1,
    //     SKU: 'JVC200123',
    //     name: 'acme DISC',
    //     price: 1.00,
    //     attribute: '700 MB',
    //     checked: false,
    // },
    // {
    //     id: 2,
    //     SKU: 'GGWP0007',
    //     name: 'War and Peace',
    //     price: 20.00,
    //     attribute: '2KG',
    //     checked: false,
    // },
    // {
    //     id: 3,
    //     SKU: 'TR120555',
    //     name: 'Chair',
    //     price: 40.00,
    //     attribute: '24x45x15',
    //     checked: false,
    // },
    // {
    //     id: 4,
    //     SKU: 'TR120555',
    //     name: 'Chair',
    //     price: 40.00,
    //     attribute: '24x45x15',
    //     checked: false,
    // },
    // {
    //     id: 5,
    //     SKU: 'TR120555',
    //     name: 'Chair',
    //     price: 40.00,
    //     attribute: '24x45x15',
    //     checked: false,
    // },
    // {
    //     id: 6,
    //     SKU: 'TR120555',
    //     name: 'Chair',
    //     price: 40.00,
    //     attribute: '24x45x15',
    //     checked: false,
    // },
    
    // ])
    const [newProduct, setNewProduct] = useState({"checked": false})
    const hrf = window.location.href;
    const splitHrf = hrf.split('/').pop();

    const getProducts = () => {
        axios.get("http://localhost/").then((response) => {
            for(let prod of response.data) prod["checked"] = false;
            setProducts(response.data);
        })
    }

    let mHeader = <MainHeader getProds={getProducts} prods={products} setProds={setProducts}/>
    let paHeader = <ProductAddHeader newProd={newProduct} setNewProd={setNewProduct} setProds={setProducts}/>
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
        console.log(products);
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