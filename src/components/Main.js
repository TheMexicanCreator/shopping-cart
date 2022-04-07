import React from 'react';
import Product from './Product.js';

export default function Main(props) {
    const { products, onAdd } = props;
    return (<main className='mainblock col-2'> 
        <h2> Our Watches </h2>
        <div className='row'>
            {products.map((product) => (
            <Product key={product.id} product={product} onAdd={onAdd}></Product>
            ))}
        </div>
    </main>
    );
}