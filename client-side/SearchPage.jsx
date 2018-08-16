import React, { Component } from 'react';
import './css/App.css'
import Loading from 'react-loading'
import lodash from 'lodash'
import escapeRegExp from 'escape-string-regexp'


class SearchPage extends Component {

  state = {
    searchQuery : '',
    payload: [],
    loading: true
  }

  componentDidMount() {
    fetch('./payload.JSON')
            .then(res => res.json())
            .then(data => this.setState({ payload: data, loading: false }))
  }

  onChangeText = (searchQuery) => {
    this.setState({ searchQuery })
  }

  onHandleSubmit = (event) => {
    event.preventDefault();
    const {searchQuery, payload} = this.state;
    if(searchQuery) {
        const match = new RegExp(escapeRegExp(searchQuery), 'i');
        const displayProducts = payload.filter(product => match.test(product.attributes.name));
        this.setState({ payload : displayProducts});
    } else {
        this.setState({ payload });
    }
  }
  
  render() {
    const products = this.state.payload;
    return(
      <div className="container">
          <header className="header">
              <img className="logo" src={require('./assets/argos_logo.png')} alt="Argos Digital logo" />
              <div className="searchBar">
                  <div className="searchContaner">
                      <form id="searchForm" onSubmit={this.onHandleSubmit} className="searchForm">
                          <label className="srOnly" htmlFor="searchTerm">Search:</label>
                          <input 
                              type="search"
                              id="searchTerm"
                              name="searchTerm" 
                              placeholder="Search Argos..."
                              autoComplete="off"
                              autoCapitalize="off"
                              autoCorrect="off"
                              spellCheck="false"
                              value={this.state.searchQuery}
                              onChange={(event) => this.onChangeText(event.target.value)}
                              className="searchInput"
                          />

                          <button className="submitBtn" type="submit" id="submitButton" name="submitButton">
                              <span className="srOnly">Search button</span>
                              <i className="fa fa-search" aria-hidden="true"></i>
                          </button>
                      </form>
                  </div>
              </div>
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
