import React from 'react';
import lodash from 'lodash';
import './css/App.css';
import './css/starRating.css';

const Product = ({ product }) => {
    return (
        <div className="product">
            <div className="product-top">
                <img className="product-img" src={`http://media.4rgos.it/s/Argos/${product.id}_R_SET%3Fw=220&h=220`} alt={product.name} />
            </div>
            <div className="product-bottom">
                <div className="product-title"><h5>{product.attributes.name}</h5></div>
                <div className="product-price">£{product.attributes.price}</div>
                <div className="product-ratings"><span className={`stars-container stars-${percentageRating(product.attributes.avgRating)}`}>★★★★★</span>({lodash.ceil(product.attributes.reviewsCount)})</div>
                <div className="product-info">
                    <a href={`http://www.argos.co.uk/product/${product.id}`}>More Info</a>
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

const percentageRating = (num, denum = 5) => {
    return lodash.floor((lodash.ceil(num) / denum) * 100)
}