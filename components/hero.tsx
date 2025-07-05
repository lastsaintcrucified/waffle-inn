"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const heroImages = [
	{
		src: "/images/waffle-hero2.jpg",
		alt: "Delicious Belgian Waffles",
		title: "Authentic Belgian Waffles",
		subtitle: "Crispy outside, fluffy inside, made fresh daily",
	},
	{
		src: "/images/waffle-hero1.jpg",
		alt: "Fresh Shawarma",
		title: "Premium Shawarma",
		subtitle: "Tender meat, fresh vegetables, homemade sauces",
	},
	{
		src: "/images/shawarma-hero1.jpg",
		alt: "Waffle Shawarma Combo",
		title: "The Perfect Fusion",
		subtitle: "Where Belgian meets Middle Eastern cuisine",
	},
	{
		src: "/images/shawarma-hero2.jpg",
		alt: "Waffle Shawarma Combo",
		title: "The Perfect Fusion",
		subtitle: "Where Belgian meets Middle Eastern cuisine",
	},
];

export default function Hero() {
	const [currentSlide, setCurrentSlide] = useState(0);

	useEffect(() => {
		const timer = setInterval(() => {
			setCurrentSlide((prev) => (prev + 1) % heroImages.length);
		}, 5000);
		return () => clearInterval(timer);
	}, []);

	const nextSlide = () => {
		setCurrentSlide((prev) => (prev + 1) % heroImages.length);
	};

	const prevSlide = () => {
		setCurrentSlide(
			(prev) => (prev - 1 + heroImages.length) % heroImages.length
		);
	};

	return (
		<section
			id='home'
			className='relative h-[70vh] md:h-[80vh] overflow-hidden'
		>
			{/* Image Slider */}
			<div className='relative w-full h-full'>
				{heroImages.map((image, index) => (
					<div
						key={index}
						className={`absolute inset-0 transition-opacity duration-1000 ${
							index === currentSlide ? "opacity-100" : "opacity-0"
						}`}
					>
						<Image
							src={image.src || "/placeholder.svg"}
							alt={image.alt}
							fill
							className='object-cover'
							priority={index === 0}
						/>
						<div className='absolute inset-0 bg-black/40' />
					</div>
				))}
			</div>

			{/* Content Overlay */}
			<div className='absolute inset-0 flex items-center justify-center'>
				<div className='text-center text-white px-4 max-w-4xl'>
					<h1 className='text-4xl md:text-6xl lg:text-7xl font-bold mb-4 animate-fade-in'>
						<span className='text-yellow-400'>Inn</span> - food Corp.
					</h1>
					<p className='text-lg md:text-xl lg:text-2xl mb-8 opacity-90 animate-fade-in-delay'>
						{heroImages[currentSlide].subtitle}
					</p>
					<div className='flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-delay-2'>
						<Button
							size='lg'
							className='bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-8 py-3'
						>
							View Menu
						</Button>
						<Button
							size='lg'
							variant='outline'
							className='border-white text-white hover:bg-white hover:text-black px-8 py-3 bg-transparent'
						>
							Order Now
						</Button>
					</div>
				</div>
			</div>

			{/* Navigation Arrows */}
			<Button
				variant='ghost'
				size='icon'
				className='absolute left-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20 h-12 w-12'
				onClick={prevSlide}
			>
				<ChevronLeft className='h-6 w-6' />
			</Button>
			<Button
				variant='ghost'
				size='icon'
				className='absolute right-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20 h-12 w-12'
				onClick={nextSlide}
			>
				<ChevronRight className='h-6 w-6' />
			</Button>

			{/* Slide Indicators */}
			{/* <div className='absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2'>
				{heroImages.map((_, index) => (
					<button
						key={index}
						className={`w-3 h-3 rounded-full transition-all ${
							index === currentSlide ? "bg-yellow-400" : "bg-white/50"
						}`}
						onClick={() => setCurrentSlide(index)}
					/>
				))}
			</div> */}
			{/* Scroll Indicator */}
			<div className='absolute bottom-0 md:bottom-8 left-1/2 -translate-x-1/2 animate-bounce'>
				<div className='w-4 md:w-6 h-6 md:h-10  border-2 border-white/50 rounded-full flex justify-center'>
					<div className='w-1 h-1 md:h-3 bg-white/50 rounded-full mt-2 animate-pulse'></div>
				</div>
			</div>
		</section>
	);
}
