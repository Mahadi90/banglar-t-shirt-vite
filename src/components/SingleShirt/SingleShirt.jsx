import React from 'react';
import './SingleShirt.css'

const SingleShirt = ({singleShirt}) => {

    const {price, picture, name, gender, _id} = singleShirt;
    return (
        <div className='shirt-card'>
            <img src={picture} alt="" />
        </div>
    );
};

export default SingleShirt;