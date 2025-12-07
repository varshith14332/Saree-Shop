import React from 'react';
import { Link } from 'react-router-dom';
import type { Product } from '../../types';
import { useCartStore } from '../../store/useCartStore';
import { motion } from 'framer-motion';
import { FiShoppingBag, FiEye } from 'react-icons/fi';

interface ProductCardProps {
    product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    const { addItem } = useCartStore();

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="group relative bg-white rounded-sm shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden"
        >
            {/* Image Container */}
            <div className="relative aspect-[3/4] overflow-hidden bg-gray-100">
                <img
                    src={product.images[0]}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 text-transparent"
                />
                {product.images[1] && (
                    <img
                        src={product.images[1]}
                        alt={product.name}
                        className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    />
                )}

                {/* Badges */}
                <div className="absolute top-3 left-3 flex flex-col gap-2">
                    {product.isNew && (
                        <span className="bg-maroon-500 text-white text-[10px] uppercase tracking-wider px-2 py-1 font-medium">New</span>
                    )}
                    {!product.inStock && (
                        <span className="bg-gray-800 text-white text-[10px] uppercase tracking-wider px-2 py-1 font-medium">Sold Out</span>
                    )}
                </div>

                {/* Quick Actions Overlay */}
                <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 flex justify-center gap-3 bg-gradient-to-t from-black/50 to-transparent pb-6 pt-10">
                    <button
                        onClick={() => addItem(product)}
                        className="bg-white text-maroon-600 p-3 rounded-full hover:bg-maroon-500 hover:text-white transition-colors shadow-lg"
                        title="Add to Cart"
                    >
                        <FiShoppingBag />
                    </button>
                    <Link
                        to={`/product/${product.slug}`}
                        className="bg-white text-gray-800 p-3 rounded-full hover:bg-gray-800 hover:text-white transition-colors shadow-lg"
                        title="View Details"
                    >
                        <FiEye />
                    </Link>
                </div>
            </div>

            {/* Product Info */}
            <div className="p-4 text-center">
                <p className="text-xs text-gray-500 uppercase tracking-widest mb-1">{product.category}</p>
                <h3 className="font-serif text-lg text-gray-900 mb-2 group-hover:text-maroon-600 transition-colors line-clamp-1">
                    <Link to={`/product/${product.slug}`}>{product.name}</Link>
                </h3>
                <p className="font-medium text-maroon-700">₹{product.price.toLocaleString('en-IN')}</p>
            </div>
        </motion.div>
    );
};

export default ProductCard;
