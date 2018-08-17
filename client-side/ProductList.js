import React from 'react'
import Product from './Product'

const ProductList = ({ products }) => {
    return (
        <div className="products">
            <ol className="product-grid">
                {
                    products.map((product) =>
                        <Product key={product.id} product={product} />
                    )
                }
            </ol>
        </div>
    )
}

export default ProductList