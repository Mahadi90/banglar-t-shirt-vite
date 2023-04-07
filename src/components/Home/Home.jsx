import React, { useState } from "react";
import "./Home.css";
import { useLoaderData } from "react-router-dom";
import SingleShirt from "../SingleShirt/SingleShirt";
import Cart from "../Cart/Cart"
import Swal from 'sweetalert2'


const Home = () => {

const tShirts = useLoaderData();
// console.log(tShirts)
const [cart, setCart] = useState([]);

const addhandleToCart = singleShirt =>{


  const exist = cart.find(ts => ts._id === singleShirt._id);
  if(exist){
    Swal.fire({
      title: 'Opps!',
      text: 'You have already add this product',
      icon: 'error',
      confirmButtonText: 'Okay',
      position: 'top-start'
    })
  }else{
    const newCart = [...cart, singleShirt]
    setCart(newCart)
    Swal.fire({
      position: 'top-start',
      icon: 'success',
      title: 'The product has been save to the cart',
      showConfirmButton: false,
      timer: 2000
    })
  }
 }
  

const removeHandleFromCart = id =>{
  const remaining  = cart.filter(ts => ts._id !== id);
  setCart(remaining)
}
// console.log(cart)
  return (
    <div className="home-conatiner">
      <div className="shirt-container">
        <h2>All Shirts are here : {tShirts.length}</h2>

        <div className="shirts-parent">
        {
            tShirts.map(singleShirt => <SingleShirt
            key={singleShirt._id}
            singleShirt ={singleShirt}
            addhandleToCart={addhandleToCart}
            />)
        }
        </div>

      </div>
      <div className="cart-container">
        <Cart
        cart={cart}
        removeHandleFromCart={removeHandleFromCart}
        />
      </div>
    </div>
  );
};

export default Home;
