import React from 'react';
import './SingleShirt.css'

const SingleShirt = ({singleShirt}) => {

    const {price, picture, name, gender, _id} = singleShirt;
    return (
        <div className='shirt-card'>
            <img src={picture} alt="" />
            <h3>{name}</h3>
            <p>Price: ${price}</p>
            <p>Gender: {gender}</p>
            <button className='shirt-btn'>Buy Now</button>
        </div>
    );
};

export default SingleShirt;