import React, { Component } from 'react';
import './css/App.css'
import Loading from 'react-loading'
import lodash from 'lodash'


class SearchPage extends Component {

  state = {
    payload: [],
    loading: true
  }

  componentDidMount() {
    fetch('./payload.JSON')
      .then(res => res.json())
      .then(data => this.setState({ payload: data, loading: false }))
  }
  
  render() {
    const products = this.state.payload;
    return(
      <div className="container">
          <header className="header">
              <img className="logo" src={require('./assets/argos_logo.png')} alt="Argos Digital logo" />
              
          </header>
      
          <main className="content">
            {products.length === 0 ?
              <Loading delay={200} type='spin' color='#222' className='loading' />
              :
              <div className="products">
                  <ol className="product-grid">
                      {products.map((product) => 
                          <li key={product.id}>
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
                          </li>
                      )}
                  </ol>
              </div>
            }
          </main>
          <footer className="footer">footer</footer>
      </div>
  )
  }
}

export default SearchPage
