import React, { Component } from 'react';
import './css/App.css'
import Loading from 'react-loading'
import escapeRegExp from 'escape-string-regexp'
import ProductList from './ProductList'
import Logo from './Logo'
import SearchBar from './SearchBar';


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
              <Logo/>
              <SearchBar 
                onHandleSubmit={this.onHandleSubmit}
                onChangeFilter={this.onChangeFilter}
                onChangeText={this.onChangeText}
                searchQuery={this.state.searchQuery}
              />
          </header>
      
          <main className="content">
            {
              this.state.loading ?
                <Loading 
                  delay={200} 
                  type='spin' 
                  color='#222' 
                  className='loading' 
                />
              :
                <ProductList 
                  products={products} 
                />
            }
          </main>
          <footer className="footer">footer</footer>
      </div>
    )
  }
}

export default SearchPage
