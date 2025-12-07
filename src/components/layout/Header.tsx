import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useCartStore } from '../../store/useCartStore';
import { useUIStore } from '../../store/useUIStore';
import { FiShoppingBag, FiMenu, FiX, FiSearch } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import clsx from 'clsx';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const { items, toggleCart } = useCartStore();
    const { isMenuOpen, toggleMenu } = useUIStore();
    const location = useLocation();
    const navigate = useNavigate();
    const searchInputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (isSearchOpen && searchInputRef.current) {
            searchInputRef.current.focus();
        }
    }, [isSearchOpen]);

    const handleSearchSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            navigate(`/shop?search=${encodeURIComponent(searchQuery)}`);
            setIsSearchOpen(false);
            setSearchQuery('');
        }
    };

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Shop', path: '/shop' },
        { name: 'Collections', path: '/shop?category=collections' },
        { name: 'About', path: '/about' },
        { name: 'Contact', path: '/contact' },
    ];

    const isHome = location.pathname === '/';
    const useDarkText = isScrolled || !isHome;

    // Determine text colors based on scroll state & page
    // Only use white text if we are on Home AND not scrolled
    const headerTextColor = useDarkText ? 'text-gray-800' : 'text-white';
    const activeTextColor = useDarkText ? 'text-maroon-600' : 'text-gold-300';
    const logoColor = useDarkText ? 'text-maroon-600' : 'text-white';
    const hoverColor = useDarkText ? 'hover:text-maroon-500' : 'hover:text-gold-300';
    const iconColor = useDarkText ? 'text-gray-800' : 'text-white';

    return (
        <header
            className={clsx(
                'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
                isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
            )}
        >
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center">
                    {/* Mobile Menu Button */}
                    <button
                        className={clsx("md:hidden text-2xl transition-colors", iconColor)}
                        onClick={toggleMenu}
                    >
                        {isMenuOpen ? <FiX /> : <FiMenu />}
                    </button>

                    {/* Logo */}
                    <Link to="/" className={clsx("text-2xl md:text-3xl font-serif font-bold tracking-wider transition-colors", logoColor)}>
                        SAREE SHOP
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex space-x-8">
                        {navLinks.map((link) => {
                            const isActive = location.pathname === link.path;
                            return (
                                <Link
                                    key={link.name}
                                    to={link.path}
                                    className={clsx(
                                        'text-sm uppercase tracking-widest transition-colors font-medium',
                                        isActive ? activeTextColor : headerTextColor,
                                        hoverColor
                                    )}
                                >
                                    {link.name}
                                </Link>
                            );
                        })}
                    </nav>

                    {/* Icons */}
                    <div className="flex items-center space-x-6">
                        <button
                            onClick={() => setIsSearchOpen(!isSearchOpen)}
                            className={clsx("text-xl transition-colors", iconColor, hoverColor)}
                        >
                            {isSearchOpen ? <FiX /> : <FiSearch />}
                        </button>
                        <button
                            onClick={toggleCart}
                            className={clsx("text-xl transition-colors relative", iconColor, hoverColor)}
                        >
                            <FiShoppingBag />
                            {items.length > 0 && (
                                <span className="absolute -top-2 -right-2 bg-maroon-500 text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full">
                                    {items.length}
                                </span>
                            )}
                        </button>
                    </div>
                </div>

                {/* Search Bar Overlay */}
                <AnimatePresence>
                    {isSearchOpen && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden mt-4"
                        >
                            <form onSubmit={handleSearchSubmit} className="relative max-w-2xl mx-auto">
                                <input
                                    ref={searchInputRef}
                                    type="text"
                                    placeholder="Search for sarees, collections..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className={clsx(
                                        "w-full px-6 py-3 rounded-full focus:outline-none focus:border-gold-400 transition-all shadow-lg border",
                                        useDarkText
                                            ? "bg-gray-50 border-gray-200 text-gray-900 placeholder-gray-400 focus:bg-white"
                                            : "bg-white/10 backdrop-blur-sm border-white/30 text-white placeholder-white/70 focus:bg-white/20"
                                    )}
                                />
                                <button
                                    type="submit"
                                    className={clsx(
                                        "absolute right-3 top-1/2 transform -translate-y-1/2 p-2 rounded-full transition-colors",
                                        useDarkText ? "text-gray-500 hover:text-maroon-600" : "text-white/70 hover:text-white"
                                    )}
                                >
                                    <FiSearch />
                                </button>
                            </form>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-full left-0 w-full bg-white shadow-lg md:hidden flex flex-col items-center py-8 space-y-6 border-t border-gray-100"
                    >
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                onClick={toggleMenu}
                                className="text-lg uppercase tracking-widest text-gray-800 hover:text-maroon-600 transition-colors"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Header;
