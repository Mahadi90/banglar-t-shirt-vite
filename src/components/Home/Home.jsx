import React from "react";
import "./Home.css";
import { useLoaderData } from "react-router-dom";
import SingleShirt from "../SingleShirt/SingleShirt";

const Home = () => {

const tShirts = useLoaderData();
// console.log(tShirts)

  return (
    <div className="home-conatiner">
      <div className="shirt-container">
        <h2>All Shirts are here : {tShirts.length}</h2>

        <div className="shirts-parent">
        {
            tShirts.map(singleShirt => <SingleShirt
            key={singleShirt._id}
            singleShirt ={singleShirt}
            />)
        }
        </div>

      </div>
      <div className="cart-container">
        <h3>Ordeer Summary</h3>
      </div>
    </div>
  );
};

export default Home;
