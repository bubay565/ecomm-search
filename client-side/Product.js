import React from 'react';
import lodash from 'lodash';
import './css/App.css';
import './css/starRating.css';

const Product = ({ product, onAddToTrolley }) => {
    return (
        <div className="product">
            <div className="product-top">
                <img className="product-img" src={`http://media.4rgos.it/s/Argos/${product.id}_R_SET%3Fw=220&h=220`} alt={product.attributes.name} />
            </div>
            <div className="product-bottom">
                <div className="product-title">{product.attributes.name}</div>
                <div className="product-price">£{product.attributes.price}</div>
                <div className="product-ratings"><span className={`stars-container stars-${percentageRating(product.attributes.avgRating)}`}>★★★★★</span><span className="product-reviews">({lodash.ceil(product.attributes.reviewsCount)})</span></div>
                <div className="product-info">
                    <button className="purchaseBtn" type="button" id="addToCart" name="addToCart" onClick={() => onAddToTrolley({id: product.id, quantity: 1, name: product.attributes.name, price: product.attributes.price})}>
                        <span className="sOnly">ADD TO TROLLEY</span>
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