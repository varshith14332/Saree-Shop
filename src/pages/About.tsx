import React from 'react';

const About = () => {
    return (
        <div className="min-h-screen pt-24 pb-20">
            {/* Hero */}
            <div className="relative h-[60vh] bg-maroon-900 flex items-center justify-center text-center px-4 overflow-hidden">
                <div className="absolute inset-0 opacity-40">
                    <img
                        src="https://images.unsplash.com/photo-1606293926075-69a00dbfde81?q=80&w=2000&auto=format&fit=crop"
                        alt="Weaving Loom"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="relative z-10 max-w-3xl mx-auto text-white">
                    <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">Our Heritage</h1>
                    <p className="text-xl text-gold-200 font-light">Preserving the ancient art of handloom weaving, one saree at a time.</p>
                </div>
            </div>

            <div className="container mx-auto px-4 py-20">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-3xl font-serif font-bold text-maroon-800 mb-6">The Art of Weaving</h2>
                        <p className="text-gray-600 leading-relaxed mb-6">
                            Founded in 1985, Saree Shop began with a simple mission: to bring the finest handwoven sarees from the weavers of Varanasi and Kanchipuram directly to the world. We believe that a saree is not just a garment, but a canvas of culture, tradition, and artistry.
                        </p>
                        <p className="text-gray-600 leading-relaxed">
                            Every saree in our collection is handpicked for its quality, design, and the story it tells. We work directly with master weavers to ensure fair wages and to keep the traditional techniques alive for future generations.
                        </p>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <img
                            src="https://images.unsplash.com/photo-1610189012906-47833822852d?q=80&w=800&auto=format&fit=crop"
                            alt="Silk Texture"
                            className="rounded-sm shadow-lg mt-8"
                        />
                        <img
                            src="https://images.unsplash.com/photo-1583391733956-6c78276477e2?q=80&w=800&auto=format&fit=crop"
                            alt="Gold Zari"
                            className="rounded-sm shadow-lg"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
