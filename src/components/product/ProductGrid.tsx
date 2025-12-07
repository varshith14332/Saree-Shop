import React from 'react';
import ProductCard from './ProductCard';
import type { Product } from '../../types';

interface ProductGridProps {
    products: Product[];
    title?: string;
}

const ProductGrid: React.FC<ProductGridProps> = ({ products, title }) => {
    return (
        <section className="py-16 px-4 bg-cream-50/50">
            <div className="container mx-auto">
                {title && (
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-serif text-maroon-800 mb-4">{title}</h2>
                        <div className="w-24 h-1 bg-gold-400 mx-auto"></div>
                    </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProductGrid;
