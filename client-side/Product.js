import React from 'react';
import lodash from 'lodash';
import './css/App.css';

const Product = ({ product }) => {
    return (
        <div className="product">
            <div className="product-top">
                <img className="product-img" src={`http://media.4rgos.it/s/Argos/${product.id}_R_SET%3Fw=220&h=220`} alt={product.name} />
            </div>
            <div className="product-bottom">
                <div className="product-title">{product.attributes.name}</div>
                <div className="product-price">Price: £{product.attributes.price}</div>
                <div className="product-ratings"> StarRatings: {lodash.ceil(product.attributes.avgRating)} </div>
                <div className="product-reviews"> Reviews: {lodash.ceil(product.attributes.reviewsCount)} </div>
                <div className="product-info">
                    <a href={`http://www.argos.co.uk/product/${product.id}`}>More Info abut the product!</a>
                    <button className="purchaseBtn" type="button" id="addToCart" name="addToCart">
                        <span className="srOnly">Add to trolley</span>
                        <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                    </button>
                </div>
            </div>
        </div>
    )
    
}

export default Product