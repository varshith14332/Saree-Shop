import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import productsData from '../mock/products.json';
import { useCartStore } from '../store/useCartStore';
import { FiMinus, FiPlus, FiShoppingBag, FiTruck, FiShield, FiShare2 } from 'react-icons/fi';
import ProductGrid from '../components/product/ProductGrid';

const ProductDetails = () => {
    const { slug } = useParams();
    const navigate = useNavigate();
    const { addItem } = useCartStore();

    const product = productsData.find(p => p.slug === slug);
    const [selectedImage, setSelectedImage] = useState(0);
    const [quantity, setQuantity] = useState(1);

    if (!product) {
        return (
            <div className="min-h-screen pt-32 text-center">
                <h2 className="text-2xl font-serif">Product not found</h2>
                <button onClick={() => navigate('/shop')} className="mt-4 text-maroon-600 underline">Back to Shop</button>
            </div>
        );
    }

    const handleAddToCart = () => {
        for (let i = 0; i < quantity; i++) {
            addItem(product);
        }
    };

    const relatedProducts = productsData
        .filter(p => p.category === product.category && p.id !== product.id)
        .slice(0, 4);

    return (
        <div className="min-h-screen pt-24 pb-20">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
                    {/* Image Gallery */}
                    <div className="space-y-4">
                        <div className="aspect-[3/4] bg-gray-100 overflow-hidden rounded-sm relative group">
                            <img
                                src={product.images[selectedImage]}
                                alt={product.name}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 cursor-zoom-in text-transparent"
                            />
                        </div>
                        <div className="flex gap-4 overflow-x-auto pb-2">
                            {product.images.map((img, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setSelectedImage(idx)}
                                    className={`w-24 h-32 flex-shrink-0 border-2 transition-colors ${selectedImage === idx ? 'border-maroon-600' : 'border-transparent hover:border-gray-300'
                                        }`}
                                >
                                    <img src={img} alt={`${product.name} ${idx}`} className="w-full h-full object-cover text-transparent" />
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Product Info */}
                    <div className="lg:py-8">
                        <div className="mb-2">
                            <span className="text-sm text-gray-500 uppercase tracking-widest">{product.category}</span>
                        </div>
                        <h1 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">{product.name}</h1>
                        <p className="text-2xl text-maroon-700 font-medium mb-6">₹{product.price.toLocaleString('en-IN')}</p>

                        <p className="text-gray-600 leading-relaxed mb-8">{product.description}</p>

                        <div className="space-y-6 mb-10">
                            <div className="flex items-center gap-4">
                                <span className="font-medium text-gray-900 w-20">Fabric:</span>
                                <span className="text-gray-600">{product.fabric}</span>
                            </div>
                            <div className="flex items-center gap-4">
                                <span className="font-medium text-gray-900 w-20">Color:</span>
                                <span className="text-gray-600">{product.color}</span>
                            </div>
                            <div className="flex items-center gap-4">
                                <span className="font-medium text-gray-900 w-20">Availability:</span>
                                <span className={product.inStock ? 'text-green-600' : 'text-red-600'}>
                                    {product.inStock ? 'In Stock' : 'Out of Stock'}
                                </span>
                            </div>
                        </div>

                        {/* Actions */}
                        <div className="flex flex-col sm:flex-row gap-4 mb-10">
                            <div className="flex items-center border border-gray-300 rounded-sm w-max">
                                <button
                                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                    className="p-3 hover:bg-gray-50 text-gray-600"
                                >
                                    <FiMinus />
                                </button>
                                <span className="w-12 text-center font-medium">{quantity}</span>
                                <button
                                    onClick={() => setQuantity(quantity + 1)}
                                    className="p-3 hover:bg-gray-50 text-gray-600"
                                >
                                    <FiPlus />
                                </button>
                            </div>
                            <button
                                onClick={handleAddToCart}
                                disabled={!product.inStock}
                                className="flex-1 bg-maroon-600 text-white py-3 px-8 font-medium uppercase tracking-widest hover:bg-maroon-700 transition-colors shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                            >
                                <FiShoppingBag /> Add to Cart
                            </button>
                        </div>

                        {/* Features */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 border-t border-gray-200">
                            <div className="flex items-center gap-3 text-sm text-gray-600">
                                <FiTruck className="text-xl text-gold-500" />
                                <span>Free Shipping</span>
                            </div>
                            <div className="flex items-center gap-3 text-sm text-gray-600">
                                <FiShield className="text-xl text-gold-500" />
                                <span>Authentic Quality</span>
                            </div>
                            <div className="flex items-center gap-3 text-sm text-gray-600">
                                <FiShare2 className="text-xl text-gold-500" />
                                <span>Easy Returns</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Related Products */}
                {relatedProducts.length > 0 && (
                    <ProductGrid title="You May Also Like" products={relatedProducts} />
                )}
            </div>
        </div>
    );
};

export default ProductDetails;
