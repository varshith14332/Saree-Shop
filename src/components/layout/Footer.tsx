import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaPinterestP, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-maroon-700 text-cream-100 pt-16 pb-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                    {/* Brand Info */}
                    <div className="space-y-6">
                        <h3 className="text-2xl font-serif font-bold">SAREE SHOP</h3>
                        <p className="text-cream-200/80 text-sm leading-relaxed">
                            Celebrating the timeless elegance of Indian heritage. Handwoven masterpieces for the modern woman.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="hover:text-gold-400 transition-colors"><FaInstagram /></a>
                            <a href="#" className="hover:text-gold-400 transition-colors"><FaFacebookF /></a>
                            <a href="#" className="hover:text-gold-400 transition-colors"><FaPinterestP /></a>
                            <a href="#" className="hover:text-gold-400 transition-colors"><FaWhatsapp /></a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-serif mb-6 text-gold-300">Quick Links</h4>
                        <ul className="space-y-3 text-sm">
                            <li><Link to="/shop" className="hover:text-gold-300 transition-colors">Shop All</Link></li>
                            <li><Link to="/about" className="hover:text-gold-300 transition-colors">Our Story</Link></li>
                            <li><Link to="/contact" className="hover:text-gold-300 transition-colors">Contact Us</Link></li>
                            <li><Link to="/faq" className="hover:text-gold-300 transition-colors">FAQs</Link></li>
                        </ul>
                    </div>

                    {/* Collections */}
                    <div>
                        <h4 className="text-lg font-serif mb-6 text-gold-300">Collections</h4>
                        <ul className="space-y-3 text-sm">
                            <li><Link to="/shop?category=banarasi" className="hover:text-gold-300 transition-colors">Banarasi Silk</Link></li>
                            <li><Link to="/shop?category=kanchipuram" className="hover:text-gold-300 transition-colors">Kanchipuram</Link></li>
                            <li><Link to="/shop?category=cotton" className="hover:text-gold-300 transition-colors">Handloom Cotton</Link></li>
                            <li><Link to="/shop?category=bridal" className="hover:text-gold-300 transition-colors">Bridal Wear</Link></li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h4 className="text-lg font-serif mb-6 text-gold-300">Newsletter</h4>
                        <p className="text-sm text-cream-200/80 mb-4">Subscribe to receive updates, access to exclusive deals, and more.</p>
                        <form className="flex flex-col space-y-3">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="bg-maroon-800 border border-maroon-600 px-4 py-2 text-sm focus:outline-none focus:border-gold-400 text-cream-100 placeholder-cream-200/50"
                            />
                            <button className="bg-gold-500 text-maroon-700 px-4 py-2 text-sm font-medium uppercase tracking-wide hover:bg-gold-400 transition-colors">
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>

                <div className="border-t border-maroon-600 mt-16 pt-8 text-center text-xs text-cream-200/60">
                    <p>&copy; {new Date().getFullYear()} Saree Shop. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
