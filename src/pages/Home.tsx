import React from 'react';
import Hero from '../components/layout/Hero';
import ProductGrid from '../components/product/ProductGrid';
import products from '../mock/products.json';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Home = () => {
    const featuredProducts = products.filter(p => p.isFeatured);
    const newArrivals = products.filter(p => p.isNew);

    return (
        <div className="min-h-screen">
            <Hero />

            {/* Categories Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-serif text-maroon-800 mb-4">Shop by Category</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">Explore our curated collection of handpicked sarees for every occasion.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { title: 'Banarasi Silk', image: 'https://images.unsplash.com/photo-1610189012906-47833822852d?q=80&w=800&auto=format&fit=crop', link: '/shop?category=banarasi' },
                            { title: 'Kanchipuram', image: 'https://images.unsplash.com/photo-1610189010146-d87e8d4f1533?q=80&w=800&auto=format&fit=crop', link: '/shop?category=kanchipuram' },
                            { title: 'Bridal Collection', image: 'https://images.unsplash.com/photo-1583391733956-6c78276477e2?q=80&w=800&auto=format&fit=crop', link: '/shop?category=bridal' },
                        ].map((cat, idx) => (
                            <Link to={cat.link} key={idx} className="group relative h-96 overflow-hidden block">
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors z-10"></div>
                                <img
                                    src={cat.image}
                                    alt={cat.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 z-20 flex items-center justify-center">
                                    <h3 className="text-3xl font-serif text-white font-bold tracking-wide border-b-2 border-transparent group-hover:border-gold-400 pb-2 transition-all">
                                        {cat.title}
                                    </h3>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <ProductGrid title="Featured Collection" products={featuredProducts} />

            {/* Promo Section */}
            <section className="py-24 bg-maroon-900 relative overflow-hidden">
                <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
                <div className="container mx-auto px-4 relative z-10 text-center text-white">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-4xl md:text-6xl font-serif font-bold mb-6">The Wedding Edit</h2>
                        <p className="text-xl text-gold-200 mb-10 max-w-2xl mx-auto font-light">
                            Discover our exclusive bridal collection, handcrafted to make your special day unforgettable.
                        </p>
                        <Link
                            to="/shop?category=bridal"
                            className="inline-block px-10 py-4 border border-gold-400 text-gold-400 hover:bg-gold-400 hover:text-maroon-900 transition-all duration-300 uppercase tracking-widest font-medium"
                        >
                            Explore Bridal
                        </Link>
                    </motion.div>
                </div>
            </section>

            <ProductGrid title="New Arrivals" products={newArrivals} />
        </div>
    );
};

export default Home;
