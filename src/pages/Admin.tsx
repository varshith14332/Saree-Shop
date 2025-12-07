import React, { useState } from 'react';
import { FiPlus, FiEdit, FiTrash, FiImage } from 'react-icons/fi';
import productsData from '../mock/products.json';

const Admin = () => {
    const [products, setProducts] = useState(productsData);
    const [isEditing, setIsEditing] = useState(false);

    return (
        <div className="min-h-screen pt-24 pb-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center mb-10">
                    <h1 className="text-3xl font-serif font-bold text-maroon-800">Admin Dashboard</h1>
                    <button className="bg-maroon-600 text-white px-6 py-2 rounded-sm flex items-center gap-2 hover:bg-maroon-700 transition-colors">
                        <FiPlus /> Add Product
                    </button>
                </div>

                <div className="bg-white rounded-sm shadow-sm overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-gray-100 border-b border-gray-200 text-gray-600 text-sm uppercase tracking-wider">
                                    <th className="p-4">Image</th>
                                    <th className="p-4">Name</th>
                                    <th className="p-4">Category</th>
                                    <th className="p-4">Price</th>
                                    <th className="p-4">Stock</th>
                                    <th className="p-4">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                {products.map((product) => (
                                    <tr key={product.id} className="hover:bg-gray-50 transition-colors">
                                        <td className="p-4">
                                            <div className="w-12 h-16 bg-gray-200 rounded-sm overflow-hidden">
                                                <img src={product.images[0]} alt={product.name} className="w-full h-full object-cover" />
                                            </div>
                                        </td>
                                        <td className="p-4 font-medium text-gray-900">{product.name}</td>
                                        <td className="p-4 text-gray-500">{product.category}</td>
                                        <td className="p-4 text-gray-900">₹{product.price.toLocaleString('en-IN')}</td>
                                        <td className="p-4">
                                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${product.inStock ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                                                {product.inStock ? 'In Stock' : 'Out of Stock'}
                                            </span>
                                        </td>
                                        <td className="p-4">
                                            <div className="flex gap-3 text-gray-500">
                                                <button className="hover:text-blue-600 transition-colors"><FiEdit /></button>
                                                <button className="hover:text-red-600 transition-colors"><FiTrash /></button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Admin;
