import React from 'react';
import { useCartStore } from '../../store/useCartStore';
import { FiX, FiMinus, FiPlus, FiTrash2, FiShoppingBag } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const CartDrawer = () => {
    const { items, isOpen, toggleCart, removeItem, updateQuantity, total } = useCartStore();

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={toggleCart}
                        className="fixed inset-0 bg-black/50 z-[60] backdrop-blur-sm"
                    />

                    {/* Drawer */}
                    <motion.div
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: 'tween', duration: 0.3 }}
                        className="fixed top-0 right-0 h-full w-full md:w-[450px] bg-white z-[70] shadow-2xl flex flex-col"
                    >
                        {/* Header */}
                        <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-cream-50">
                            <h2 className="text-2xl font-serif text-maroon-800">Shopping Cart ({items.length})</h2>
                            <button onClick={toggleCart} className="text-gray-500 hover:text-maroon-600 transition-colors">
                                <FiX size={24} />
                            </button>
                        </div>

                        {/* Cart Items */}
                        <div className="flex-1 overflow-y-auto p-6 space-y-6">
                            {items.length === 0 ? (
                                <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
                                    <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center text-gray-400">
                                        <FiShoppingBag size={32} />
                                    </div>
                                    <p className="text-gray-500 text-lg">Your cart is empty</p>
                                    <button
                                        onClick={toggleCart}
                                        className="text-maroon-600 font-medium hover:underline"
                                    >
                                        Continue Shopping
                                    </button>
                                </div>
                            ) : (
                                items.map((item) => (
                                    <div key={item.id} className="flex gap-4">
                                        <div className="w-24 h-32 flex-shrink-0 bg-gray-100 rounded-sm overflow-hidden">
                                            <img src={item.images[0]} alt={item.name} className="w-full h-full object-cover" />
                                        </div>
                                        <div className="flex-1 flex flex-col justify-between">
                                            <div>
                                                <h3 className="font-serif text-gray-900 line-clamp-1">{item.name}</h3>
                                                <p className="text-sm text-gray-500">{item.category} | {item.color}</p>
                                                <p className="text-maroon-600 font-medium mt-1">₹{item.price.toLocaleString('en-IN')}</p>
                                            </div>

                                            <div className="flex justify-between items-center">
                                                <div className="flex items-center border border-gray-200 rounded-sm">
                                                    <button
                                                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                        className="p-2 hover:bg-gray-50 text-gray-600"
                                                    >
                                                        <FiMinus size={14} />
                                                    </button>
                                                    <span className="w-8 text-center text-sm font-medium">{item.quantity}</span>
                                                    <button
                                                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                        className="p-2 hover:bg-gray-50 text-gray-600"
                                                    >
                                                        <FiPlus size={14} />
                                                    </button>
                                                </div>
                                                <button
                                                    onClick={() => removeItem(item.id)}
                                                    className="text-gray-400 hover:text-red-500 transition-colors"
                                                >
                                                    <FiTrash2 size={18} />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>

                        {/* Footer */}
                        {items.length > 0 && (
                            <div className="p-6 border-t border-gray-100 bg-cream-50">
                                <div className="flex justify-between items-center mb-4">
                                    <span className="text-gray-600">Subtotal</span>
                                    <span className="text-xl font-serif font-bold text-maroon-800">₹{total().toLocaleString('en-IN')}</span>
                                </div>
                                <p className="text-xs text-gray-500 mb-6 text-center">Shipping and taxes calculated at checkout.</p>
                                <Link
                                    to="/checkout"
                                    onClick={toggleCart}
                                    className="block w-full bg-maroon-600 text-white text-center py-4 font-medium uppercase tracking-widest hover:bg-maroon-700 transition-colors shadow-lg"
                                >
                                    Proceed to Checkout
                                </Link>
                            </div>
                        )}
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default CartDrawer;
