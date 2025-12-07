import React from 'react';
import { FiMapPin, FiPhone, FiMail } from 'react-icons/fi';

const Contact = () => {
    return (
        <div className="min-h-screen pt-24 pb-20 bg-cream-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-serif font-bold text-maroon-800 mb-4">Contact Us</h1>
                    <p className="text-gray-600">We'd love to hear from you. Visit our store or send us a message.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                    {/* Info */}
                    <div className="bg-maroon-900 text-white p-10 rounded-sm shadow-xl">
                        <h2 className="text-2xl font-serif font-bold mb-8">Get in Touch</h2>

                        <div className="space-y-8">
                            <div className="flex items-start gap-4">
                                <FiMapPin className="text-2xl text-gold-400 mt-1" />
                                <div>
                                    <h3 className="font-medium text-gold-200 mb-1">Visit Our Store</h3>
                                    <p className="text-gray-300">123 Heritage Lane, Silk Quarter<br />Varanasi, Uttar Pradesh 221001</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <FiPhone className="text-2xl text-gold-400 mt-1" />
                                <div>
                                    <h3 className="font-medium text-gold-200 mb-1">Call Us</h3>
                                    <p className="text-gray-300">+91 98765 43210</p>
                                    <p className="text-gray-300 text-sm">Mon - Sat, 10am - 8pm</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <FiMail className="text-2xl text-gold-400 mt-1" />
                                <div>
                                    <h3 className="font-medium text-gold-200 mb-1">Email Us</h3>
                                    <p className="text-gray-300">hello@sareeshop.com</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Form */}
                    <div className="bg-white p-10 rounded-sm shadow-sm">
                        <h2 className="text-2xl font-serif font-bold text-maroon-800 mb-6">Send a Message</h2>
                        <form className="space-y-6">
                            <div>
                                <label className="block text-sm text-gray-600 mb-2">Name</label>
                                <input
                                    type="text"
                                    className="w-full border border-gray-300 px-4 py-2 rounded-sm focus:outline-none focus:border-maroon-500"
                                    placeholder="Your Name"
                                />
                            </div>
                            <div>
                                <label className="block text-sm text-gray-600 mb-2">Email</label>
                                <input
                                    type="email"
                                    className="w-full border border-gray-300 px-4 py-2 rounded-sm focus:outline-none focus:border-maroon-500"
                                    placeholder="your@email.com"
                                />
                            </div>
                            <div>
                                <label className="block text-sm text-gray-600 mb-2">Message</label>
                                <textarea
                                    rows={4}
                                    className="w-full border border-gray-300 px-4 py-2 rounded-sm focus:outline-none focus:border-maroon-500"
                                    placeholder="How can we help you?"
                                ></textarea>
                            </div>
                            <button className="bg-maroon-600 text-white px-8 py-3 uppercase tracking-widest hover:bg-maroon-700 transition-colors w-full">
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
