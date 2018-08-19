import React, { Component } from 'react';
import './css/App.css'
import Loading from 'react-loading'
import escapeRegExp from 'escape-string-regexp'
import ProductList from './ProductList'
import Logo from './Logo'
import SearchBar from './SearchBar'
import UserTrolley from './UserTrolley'
import Footer from './Footer'

class SearchPage extends Component {

  state = {
    searchQuery : '',
    payload: [],
    loading: true,
    trolley: [],
    displayTrolley: false
  }

  componentDidMount() {
    this.fetchPayload()
      .then(payload => this.setState({ payload, loading: false }))
      .catch(error => this.setState({ error }))        
  }

  fetchPayload = async () => {
    const response = await fetch('/api/data');
    const payload = await response.json();

    if (response.status !== 200) {
        this.setState({ loading: false, error : true });
    }
    
    return payload;
  }

  onChangeText = (searchQuery) => {
    this.setState({ searchQuery })
  }

  onHandleSubmit = (event) => {
    event.preventDefault();
    const { searchQuery, payload } = this.state;
    if(searchQuery) {
        const match = new RegExp(escapeRegExp(searchQuery), 'i');
        const displayProducts = payload.filter(product => match.test(product.attributes.name));
        this.setState({ payload : displayProducts });
    } 
  }

  onFilterBy = (filter) => {
    const { payload } = this.state;    
    const filteredProducts = payload.filter(product => product.attributes[filter] === true)
    this.setState({ payload: filteredProducts })
  }

  onSortBy = (filter) => {
    const { payload } = this.state;
    const filteredProducts = payload.sort((productA, productB) => productB.attributes[filter] - productA.attributes[filter])
    this.setState({ payload: filteredProducts })
  }

  onAddToTrolley = (product, increment = true) => {
    const currTrolley = this.state.trolley;
    const itemInTrolley = currTrolley.some(item => {
      if(item.id === product.id){
        item.quantity = increment ? +(item.quantity) + 1 : +(item.quantity) - 1;
      }
      return item.id === product.id;
    });
    
    if( !itemInTrolley ) {
      this.updateTrolleyState([...currTrolley, product]);
    } else {
      this.updateTrolleyState(currTrolley);
    }
  }

  updateTrolleyState = (trolley) => this.setState({ trolley })

  displayTrolley = () => this.setState({ displayTrolley: true })

  closeTrolley = () => this.setState({ displayTrolley: false })
  
  render() {
    const products = this.state.payload;
    return(
      <div className="container">
          <header className="header">
              <Logo/>
              <SearchBar 
                onHandleSubmit={this.onHandleSubmit}
                onSortBy={this.onSortBy}
                onFilterBy={this.onFilterBy}
                onChangeText={this.onChangeText}
                searchQuery={this.state.searchQuery}
                trolley={this.state.trolley}
                viewTrolley={this.displayTrolley}
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
                  onAddToTrolley={this.onAddToTrolley} 
                />                
            }
            
            {this.state.displayTrolley && 
              <UserTrolley 
                trolley={this.state.trolley}
                onAddToTrolley={this.onAddToTrolley}
                closeTrolley={this.closeTrolley}
              />
            }
          </main>
          <footer className="footer"><Footer /></footer>
      </div>
    )
  }
}

export default SearchPage
