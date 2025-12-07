import React, { useState } from 'react';
import { useCartStore } from '../store/useCartStore';
import { processPayment } from '../services/paymentMock';
import { useNavigate } from 'react-router-dom';
import { FiCheckCircle, FiAlertCircle, FiLoader } from 'react-icons/fi';
import { motion } from 'framer-motion';

const Checkout = () => {
    const { items, total, clearCart } = useCartStore();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        address: '',
        city: '',
        state: '',
        zip: '',
    });

    const [isProcessing, setIsProcessing] = useState(false);
    const [paymentStatus, setPaymentStatus] = useState<'idle' | 'success' | 'error'>('idle');
    const [errorMsg, setErrorMsg] = useState('');

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsProcessing(true);
        setPaymentStatus('idle');

        try {
            const result = await processPayment(total());

            if (result.success) {
                setPaymentStatus('success');
                setTimeout(() => {
                    clearCart();
                    // In a real app, we would redirect to a success page with order details
                    // For now, we show the success state here
                }, 2000);
            } else {
                setPaymentStatus('error');
                setErrorMsg(result.error || 'Payment failed');
            }
        } catch (error) {
            setPaymentStatus('error');
            setErrorMsg('An unexpected error occurred');
        } finally {
            setIsProcessing(false);
        }
    };

    if (items.length === 0 && paymentStatus !== 'success') {
        return (
            <div className="min-h-screen pt-32 text-center">
                <h2 className="text-2xl font-serif mb-4">Your cart is empty</h2>
                <button onClick={() => navigate('/shop')} className="text-maroon-600 underline">Continue Shopping</button>
            </div>
        );
    }

    if (paymentStatus === 'success') {
        return (
            <div className="min-h-screen pt-32 flex flex-col items-center justify-center text-center px-4">
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="text-green-500 text-6xl mb-6"
                >
                    <FiCheckCircle />
                </motion.div>
                <h2 className="text-3xl font-serif font-bold text-maroon-800 mb-4">Order Placed Successfully!</h2>
                <p className="text-gray-600 mb-8 max-w-md">
                    Thank you for your purchase. Your order has been confirmed and will be shipped shortly.
                </p>
                <button
                    onClick={() => navigate('/')}
                    className="bg-maroon-600 text-white px-8 py-3 uppercase tracking-widest hover:bg-maroon-700 transition-colors"
                >
                    Back to Home
                </button>
            </div>
        );
    }

    return (
        <div className="min-h-screen pt-24 pb-20 bg-cream-50">
            <div className="container mx-auto px-4">
                <h1 className="text-3xl font-serif font-bold text-maroon-800 mb-10 text-center">Checkout</h1>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                    {/* Shipping Form */}
                    <div className="bg-white p-8 rounded-sm shadow-sm">
                        <h2 className="text-xl font-serif font-bold mb-6">Shipping Details</h2>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm text-gray-600 mb-2">First Name</label>
                                    <input
                                        type="text"
                                        name="firstName"
                                        required
                                        value={formData.firstName}
                                        onChange={handleInputChange}
                                        className="w-full border border-gray-300 px-4 py-2 rounded-sm focus:outline-none focus:border-maroon-500"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm text-gray-600 mb-2">Last Name</label>
                                    <input
                                        type="text"
                                        name="lastName"
                                        required
                                        value={formData.lastName}
                                        onChange={handleInputChange}
                                        className="w-full border border-gray-300 px-4 py-2 rounded-sm focus:outline-none focus:border-maroon-500"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm text-gray-600 mb-2">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    required
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    className="w-full border border-gray-300 px-4 py-2 rounded-sm focus:outline-none focus:border-maroon-500"
                                />
                            </div>

                            <div>
                                <label className="block text-sm text-gray-600 mb-2">Address</label>
                                <input
                                    type="text"
                                    name="address"
                                    required
                                    value={formData.address}
                                    onChange={handleInputChange}
                                    className="w-full border border-gray-300 px-4 py-2 rounded-sm focus:outline-none focus:border-maroon-500"
                                />
                            </div>

                            <div className="grid grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm text-gray-600 mb-2">City</label>
                                    <input
                                        type="text"
                                        name="city"
                                        required
                                        value={formData.city}
                                        onChange={handleInputChange}
                                        className="w-full border border-gray-300 px-4 py-2 rounded-sm focus:outline-none focus:border-maroon-500"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm text-gray-600 mb-2">ZIP Code</label>
                                    <input
                                        type="text"
                                        name="zip"
                                        required
                                        value={formData.zip}
                                        onChange={handleInputChange}
                                        className="w-full border border-gray-300 px-4 py-2 rounded-sm focus:outline-none focus:border-maroon-500"
                                    />
                                </div>
                            </div>

                            <button
                                type="submit"
                                disabled={isProcessing}
                                className="w-full bg-maroon-600 text-white py-4 font-medium uppercase tracking-widest hover:bg-maroon-700 transition-colors shadow-lg disabled:opacity-70 flex items-center justify-center gap-2"
                            >
                                {isProcessing ? (
                                    <>
                                        <FiLoader className="animate-spin" /> Processing...
                                    </>
                                ) : (
                                    `Pay ₹${total().toLocaleString('en-IN')}`
                                )}
                            </button>

                            {paymentStatus === 'error' && (
                                <div className="flex items-center gap-2 text-red-600 bg-red-50 p-4 rounded-sm">
                                    <FiAlertCircle />
                                    <span>{errorMsg}</span>
                                </div>
                            )}
                        </form>
                    </div>

                    {/* Order Summary */}
                    <div className="bg-white p-8 rounded-sm shadow-sm h-fit">
                        <h2 className="text-xl font-serif font-bold mb-6">Order Summary</h2>
                        <div className="space-y-4 mb-6 max-h-80 overflow-y-auto pr-2">
                            {items.map((item) => (
                                <div key={item.id} className="flex gap-4">
                                    <div className="w-16 h-20 bg-gray-100 rounded-sm overflow-hidden flex-shrink-0">
                                        <img src={item.images[0]} alt={item.name} className="w-full h-full object-cover" />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="font-serif text-sm text-gray-900 line-clamp-1">{item.name}</h3>
                                        <p className="text-xs text-gray-500">Qty: {item.quantity}</p>
                                        <p className="text-sm font-medium text-maroon-600">₹{(item.price * item.quantity).toLocaleString('en-IN')}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="border-t border-gray-100 pt-4 space-y-2">
                            <div className="flex justify-between text-gray-600">
                                <span>Subtotal</span>
                                <span>₹{total().toLocaleString('en-IN')}</span>
                            </div>
                            <div className="flex justify-between text-gray-600">
                                <span>Shipping</span>
                                <span className="text-green-600">Free</span>
                            </div>
                            <div className="flex justify-between text-xl font-serif font-bold text-maroon-800 pt-4 border-t border-gray-100 mt-4">
                                <span>Total</span>
                                <span>₹{total().toLocaleString('en-IN')}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Checkout;
