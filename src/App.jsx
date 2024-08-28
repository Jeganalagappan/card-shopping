
import { useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const Initial_product_list = [

  {
    name: "Samsung Galaxy S23 FE",
    poster: "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/71qGismu6NL._SX679_.jpg",
    price: "59,999",
    rating: "⭐⭐⭐⭐⭐",
  }, 
  {
    name: "OnePlus Bullets Earphones",
    poster: "https://m.media-amazon.com/images/I/31uoncbEmvL._SX300_SY300_QL70_FMwebp_.jpg",
    price: "1999",
    rating: "⭐⭐⭐⭐",
  },
  {
    name: "Motivational Poster Frame",
    poster: "https://m.media-amazon.com/images/I/71kb+LvPEsL._SX425_.jpg",
    price: "874",
    rating: "⭐⭐",
  },
  {
    name: "Apple iPhone 15 Pro Max",
    poster: "https://m.media-amazon.com/images/I/81Os1SDWpcL._AC_UY327_FMwebp_QL65_.jpg",
    price: "1,56,990",
    summary: "FORGED IN TITANIUM — iPhone 15 Pro Max has a strong and light aerospace-grade titanium design with a textured matte-glass back. It also features a Ceramic Shield front that’s tougher than any smartphone glass. And it’s splash, water, and dust resistant.",
    rating: "⭐",
  },
  {
    name: "Samsung Galaxy S23 5G",
    poster: "https://m.media-amazon.com/images/I/51L8W6d-DNL._AC_UY218_.jpg",
    price: "₹65,320",
    rating: "⭐⭐⭐⭐⭐",
  },
  {
    name: "Samsung Galaxy S23 Ultra 5G",
    poster: "https://m.media-amazon.com/images/I/51hqXIAVXAL._AC_UY218_.jpg",
    price: "₹1,00,000",
    rating: "⭐⭐⭐⭐⭐",
    },
  {
    name: "Apple AirPods Pro ​​​​​​​ ",
    poster: "https://m.media-amazon.com/images/I/61SUj2aKoEL._AC_UY218_.jpg",
    price: "₹20,999 ",
    rating: "⭐⭐",
   },
  {
    name: " Apple Watch Series 9",
    poster: "https://m.media-amazon.com/images/I/81I70qV6cOL._AC_UY218_.jpg",
    price: "₹75,900 ",
    rating: "⭐",
  },
  {
    name: " Samsung Galaxy Watch5 Bluetooth",
    poster: "https://m.media-amazon.com/images/I/61aVQDazNHL._SX679_.jpg",
    price: "₹22,999",
    rating: "⭐⭐⭐",
    },
  {
    name: "SAMSUNG Galaxy Buds2 Pro- White",
    poster: "https://m.media-amazon.com/images/I/51m4LnFz84L._SX466_.jpg",
    price: "₹27,141",
    rating: "⭐⭐⭐",
  },
  {
    name: "Apple MacBook Air Laptop",
    poster: "https://m.media-amazon.com/images/I/71vFKBpKakL._SX679_.jpg",
    price: "₹84,990",
    rating: 5.0,
   },
  {
    name: "Samsung Galaxy Book2 Pro ",
    poster: "https://m.media-amazon.com/images/I/71iBfI3rAYL._SX679_.jpg",
    price: "₹1,10,790",
    rating: "⭐⭐⭐⭐⭐",
  }
]

function App() {
  const [productList, setproductList] = useState(Initial_product_list);
  
  const [cart, setCart] = useState([]);

  const handleCart = (product, index) => {
    let add = true
    let b = []
    for(let x of cart){
      if(product.name == x.name){
        add = false
      }
      else{
        b.push(x)
      }
    }
    if(add){
      setCart([...cart, product]);
    }
    else{
      setCart(b)
    }
    let a = structuredClone(productList)
    a[index] = {...product, cart: !product.cart}
    setproductList(a)
  };


  return (
    <div className='App'>
      <Home cart = {cart}/>
        <Welcome />
      <div className='product-list'>
        {productList.map((product, index) => (
          <Product productList = {productList} setproductList = {setproductList} product={product} index = {index} onAddCart={handleCart} />
        ))}
      </div>   
      <Cart cartItem={cart} />
      <Footer/>
    </div>
  )
}
function Product({ product, onAddCart, productList, setproductList, index}) {  //=> Product = Component

  return (
    <div className='product-container'>
      <img className='product-poster' src={product.poster} alt='' />
      <h4 className='product-name'>{product.name}</h4>
      <p className='product-rating'>⭐{product.rating}</p>
      <div id='price'>
       <button className = "btn btn-dark"onClick={() => onAddCart(product, index)}>{product.cart ?"Remove to cart" : "Add to cart"}</button>

      </div>
     </div>
  )
}
function Welcome() {
  return (
    <div className='banner'>
      <h1 className='b-head'>Shop in Style</h1>
      <h4 style={{ fontFamily: 'monospace', color: "rgb(204, 192, 192)" }}>The Black Friday Sale</h4>
    </div>
  )
}

function Cart() {
  return (
    <div>
    </div>
  );
}


function Footer(){
  return(
    <div>
      <h5 className='footer'>Copyright © Your Website 2023</h5>
    </div>
  )
}

function Home({cart}){
  return(
      <div className='home'>
        <div className="nav-bar">
          <p className="start">Start Bootstrap</p>
          <p>Home</p>
          <p>About</p>
          <p>Shop</p>
        </div>
        <div>
          <button>🛒 Cart {cart.length}</button>
        </div>
      </div>  
  )
}


export default App;
