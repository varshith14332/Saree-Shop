import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const slides = [
    {
        id: 1,
        title: "The Royal Banarasi",
        subtitle: "Weaving Heritage",
        description: "Experience the timeless elegance of handwoven Banarasi silk, crafted for royalty.",
        image: "https://images.unsplash.com/photo-1610189012906-47833822852d?q=80&w=2000&auto=format&fit=crop",
        cta: "Shop Banarasi",
        link: "/shop?category=banarasi"
    },
    {
        id: 2,
        title: "Kanchipuram Grace",
        subtitle: "South Indian Splendor",
        description: "Rich textures and vibrant colors that tell a story of tradition and culture.",
        image: "https://images.unsplash.com/photo-1610189010146-d87e8d4f1533?q=80&w=2000&auto=format&fit=crop",
        cta: "Explore Collection",
        link: "/shop?category=kanchipuram"
    },
    {
        id: 3,
        title: "Contemporary Chic",
        subtitle: "Modern Elegance",
        description: "Fusion designs that blend traditional craftsmanship with modern aesthetics.",
        image: "https://images.unsplash.com/photo-1596392996883-43c81cd39497?q=80&w=2000&auto=format&fit=crop",
        cta: "View New Arrivals",
        link: "/shop?category=designer"
    }
];

const Hero = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slideRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 6000);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(
                ".hero-text",
                { y: 50, opacity: 0 },
                { y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: "power3.out" }
            );

            gsap.fromTo(
                ".hero-image",
                { scale: 1.1 },
                { scale: 1, duration: 6, ease: "none" }
            );
        }, slideRef);

        return () => ctx.revert();
    }, [currentSlide]);

    return (
        <div ref={slideRef} className="relative h-screen w-full overflow-hidden bg-maroon-900">
            {slides.map((slide, index) => (
                <div
                    key={slide.id}
                    className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
                        }`}
                >
                    {/* Background Image */}
                    <div className="absolute inset-0 bg-black/10 z-10"></div>
                    <img
                        src={slide.image}
                        alt={slide.title}
                        className="hero-image w-full h-full object-cover object-center"
                    />

                    {/* Content */}
                    <div className="absolute inset-0 z-20 flex items-center justify-center text-center px-4">
                        <div ref={textRef} className="max-w-4xl mx-auto text-white">
                            <p className="hero-text text-gold-300 uppercase tracking-[0.2em] mb-4 font-medium text-sm md:text-base">
                                {slide.subtitle}
                            </p>
                            <h1 className="hero-text text-white text-5xl md:text-7xl lg:text-8xl font-serif font-bold mb-6 leading-tight">
                                {slide.title}
                            </h1>
                            <p className="hero-text text-white text-lg md:text-xl mb-10 max-w-2xl mx-auto font-light">
                                {slide.description}
                            </p>
                            <div className="hero-text">
                                <Link
                                    to={slide.link}
                                    className="inline-block px-8 py-4 bg-white text-maroon-900 font-medium uppercase tracking-widest hover:bg-gold-400 transition-colors duration-300"
                                >
                                    {slide.cta}
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            ))}

            {/* Indicators */}
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-30 flex space-x-3">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentSlide ? 'bg-gold-400 w-8' : 'bg-white/50 hover:bg-white'
                            }`}
                    />
                ))}
            </div>
        </div>
    );
};

export default Hero;
