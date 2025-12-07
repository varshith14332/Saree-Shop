import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import ProductGrid from '../components/product/ProductGrid';
import productsData from '../mock/products.json';
import { FiFilter, FiSearch } from 'react-icons/fi';

const Shop = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const categoryParam = searchParams.get('category');

    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState(categoryParam || 'All');
    const [priceRange, setPriceRange] = useState<[number, number]>([0, 50000]);
    const [showFilters, setShowFilters] = useState(false);

    const categories = ['All', 'Banarasi', 'Kanchipuram', 'Silk', 'Cotton', 'Designer', 'Bridal'];

    const filteredProducts = useMemo(() => {
        return productsData.filter(product => {
            const matchesCategory = selectedCategory === 'All' ||
                product.category.toLowerCase() === selectedCategory.toLowerCase() ||
                product.tags.includes(selectedCategory.toLowerCase());

            const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                product.description.toLowerCase().includes(searchTerm.toLowerCase());

            const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];

            return matchesCategory && matchesSearch && matchesPrice;
        });
    }, [selectedCategory, searchTerm, priceRange]);

    const handleCategoryChange = (cat: string) => {
        setSelectedCategory(cat);
        if (cat === 'All') {
            searchParams.delete('category');
            setSearchParams(searchParams);
        } else {
            setSearchParams({ category: cat.toLowerCase() });
        }
    };

    return (
        <div className="min-h-screen pt-24 pb-20">
            {/* Header */}
            <div className="bg-maroon-900 text-white py-16 mb-10">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Our Collection</h1>
                    <p className="text-gold-200 max-w-2xl mx-auto">Discover the finest handwoven sarees, crafted with passion and tradition.</p>
                </div>
            </div>

            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row gap-8">
                    {/* Sidebar Filters */}
                    <aside className={`md:w-1/4 ${showFilters ? 'block' : 'hidden md:block'}`}>
                        <div className="bg-white p-6 rounded-sm shadow-sm sticky top-24">
                            <div className="flex justify-between items-center mb-6">
                                <h3 className="text-lg font-serif font-bold">Filters</h3>
                                <button onClick={() => setShowFilters(false)} className="md:hidden text-gray-500"><FiFilter /></button>
                            </div>

                            {/* Search */}
                            <div className="mb-8">
                                <div className="relative">
                                    <input
                                        type="text"
                                        placeholder="Search sarees..."
                                        value={searchTerm}
                                        onChange={(e) => setSearchTerm(e.target.value)}
                                        className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-sm focus:outline-none focus:border-maroon-500"
                                    />
                                    <FiSearch className="absolute left-3 top-3 text-gray-400" />
                                </div>
                            </div>

                            {/* Categories */}
                            <div className="mb-8">
                                <h4 className="font-medium mb-4 text-gray-900">Categories</h4>
                                <ul className="space-y-2">
                                    {categories.map((cat) => (
                                        <li key={cat}>
                                            <button
                                                onClick={() => handleCategoryChange(cat)}
                                                className={`text-sm hover:text-maroon-600 transition-colors ${selectedCategory === cat ? 'text-maroon-600 font-bold' : 'text-gray-600'
                                                    }`}
                                            >
                                                {cat}
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Price Range */}
                            <div>
                                <h4 className="font-medium mb-4 text-gray-900">Price Range</h4>
                                <input
                                    type="range"
                                    min="0"
                                    max="50000"
                                    step="1000"
                                    value={priceRange[1]}
                                    onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
                                    className="w-full accent-maroon-600"
                                />
                                <div className="flex justify-between text-sm text-gray-500 mt-2">
                                    <span>₹0</span>
                                    <span>₹{priceRange[1].toLocaleString()}</span>
                                </div>
                            </div>
                        </div>
                    </aside>

                    {/* Product Grid */}
                    <div className="flex-1">
                        <div className="flex justify-between items-center mb-6">
                            <p className="text-gray-500 text-sm">Showing {filteredProducts.length} results</p>
                            <button
                                onClick={() => setShowFilters(!showFilters)}
                                className="md:hidden flex items-center gap-2 text-maroon-600 font-medium"
                            >
                                <FiFilter /> Filter
                            </button>
                        </div>

                        {filteredProducts.length > 0 ? (
                            <ProductGrid products={filteredProducts} />
                        ) : (
                            <div className="text-center py-20">
                                <p className="text-gray-500 text-lg">No products found matching your criteria.</p>
                                <button
                                    onClick={() => {
                                        setSearchTerm('');
                                        setSelectedCategory('All');
                                        setPriceRange([0, 50000]);
                                    }}
                                    className="mt-4 text-maroon-600 hover:underline"
                                >
                                    Clear all filters
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Shop;
