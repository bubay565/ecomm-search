import React, { Component } from 'react';
import './css/App.css'
import Loading from 'react-loading'
import escapeRegExp from 'escape-string-regexp'
import ProductList from './ProductList'


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

  onChangeFilter = (filter) => {
    const { payload } = this.state;
    const filteredProducts = payload.sort((productA, productB) => productB.attributes[filter] - productA.attributes[filter])
    this.setState({ filter, payload: filteredProducts })
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
                  <div className="filterContainer">
                    <select className="filterInput" onChange={(event) => {this.onChangeFilter(event.target.value)}}>
                        <option value="">Filter</option>
                        <option value="price">Price</option>
                        <option value="rating">Star rating</option>
                        <option value="fastTrack">FastTrack</option>
                    </select>
                  </div>
              </div>
          </header>
      
          <main className="content">
            {products.length === 0 ?
              <Loading delay={200} type='spin' color='#222' className='loading' />
              :
              <ProductList products={products} />
            }
          </main>
          <footer className="footer">footer</footer>
      </div>
    )
  }
}

export default SearchPage
