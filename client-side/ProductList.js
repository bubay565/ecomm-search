import React from 'react'
import Product from './Product'

const ProductList = ({ products, onAddToTrolley }) => {
    return (
        <div className="products">
            <ol className="product-grid">
                {
                    products.map((product) =>
                        <Product 
                            key={product.id} 
                            product={product} 
                            onAddToTrolley={onAddToTrolley}
                        />
                    )
                }
            </ol>
        </div>
    )
}

export default ProductList