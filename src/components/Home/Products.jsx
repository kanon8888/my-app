import React from 'react';
import products from "@/data/items.json"
import ProductCard from '../cards/ProductsCard';

const Products = () => {
    return (
        <div>
            <h2 className='text-center text-4xl font-bold mb-10'>Our Products</h2>
            <div className='grid md:grid-cols-4 gap-5'>
                {
                    products.map(product => (<li key={product.id}><ProductCard key={product.title} product={product}></ProductCard></li>))
                }
            </div>
        </div>
    );
};

export default Products;