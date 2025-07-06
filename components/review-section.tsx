/* eslint-disable react/no-unescaped-entities */
"use client";

import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const reviews = [
	{
		name: "Sarah Johnson",
		avatar: "/images/person.jpg",
		rating: 5,
		comment:
			"Absolutely amazing! The combination of waffles and shawarma is genius. The flavors work so well together.",
		date: "2 weeks ago",
	},
	{
		name: "Mike Chen",
		avatar: "/images/person.jpg",
		rating: 5,
		comment:
			"Best fusion restaurant in town! The chicken shawarma waffle is my new favorite dish.",
		date: "1 month ago",
	},
	{
		name: "Emily Rodriguez",
		avatar: "/images/person.jpg",
		rating: 4,
		comment:
			"Creative concept and delicious food. The staff is friendly and the atmosphere is great.",
		date: "3 weeks ago",
	},
	{
		name: "David Kim",
		avatar: "/images/person.jpg",
		rating: 5,
		comment:
			"I was skeptical at first, but this place exceeded all my expectations. Will definitely be back!",
		date: "1 week ago",
	},
	{
		name: "Lisa Thompson",
		avatar: "/images/person.jpg",
		rating: 5,
		comment:
			"The perfect blend of sweet and savory. The Belgian waffles are authentic and the shawarma is top-notch.",
		date: "2 months ago",
	},
	{
		name: "Ahmed Hassan",
		avatar: "/images/person.jpg",
		rating: 4,
		comment:
			"As someone from the Middle East, I can say their shawarma is authentic and delicious!",
		date: "3 weeks ago",
	},
];

export default function ReviewSection() {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [isAutoPlaying, setIsAutoPlaying] = useState(true);
	const [reviewsPerView, setReviewsPerView] = useState(3);

	// Responsive reviews per view
	useEffect(() => {
		const updateReviewsPerView = () => {
			if (window.innerWidth < 640) {
				setReviewsPerView(1); // Mobile
			} else if (window.innerWidth < 1024) {
				setReviewsPerView(2); // Tablet
			} else {
				setReviewsPerView(3); // Desktop
			}
		};

		updateReviewsPerView();
		window.addEventListener("resize", updateReviewsPerView);
		return () => window.removeEventListener("resize", updateReviewsPerView);
	}, []);

	// Auto-play functionality
	useEffect(() => {
		if (!isAutoPlaying) return;

		const interval = setInterval(() => {
			setCurrentIndex((prev) => {
				const maxIndex = reviews.length - reviewsPerView;
				return prev >= maxIndex ? 0 : prev + 1;
			});
		}, 4000);

		return () => clearInterval(interval);
	}, [isAutoPlaying, reviewsPerView]);

	const nextSlide = () => {
		const maxIndex = reviews.length - reviewsPerView;
		setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
	};

	const prevSlide = () => {
		const maxIndex = reviews.length - reviewsPerView;
		setCurrentIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
	};

	const maxIndex = Math.max(0, reviews.length - reviewsPerView);

	return (
		<section
			id='reviews'
			className='py-12 bg-gradient-to-b from-yellow-50 to-orange-50'
			onMouseEnter={() => setIsAutoPlaying(false)}
			onMouseLeave={() => setIsAutoPlaying(true)}
		>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
				{/* Header */}
				<div className='text-center mb-8'>
					<h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'>
						What Our Customers Say
					</h2>
					<p className='text-lg text-gray-600 max-w-2xl mx-auto mb-4'>
						Don't just take our word for it - hear from our satisfied customers
					</p>
					<div className='flex items-center justify-center'>
						<div className='flex items-center space-x-1'>
							{[...Array(5)].map((_, i) => (
								<Star
									key={i}
									className='h-5 w-5 fill-yellow-400 text-yellow-400'
								/>
							))}
						</div>
						<span className='ml-2 text-lg font-semibold text-gray-900'>
							4.8/5
						</span>
						<span className='ml-2 text-gray-600'>
							({reviews.length} reviews)
						</span>
					</div>
				</div>

				{/* Reviews Swiper */}
				<div className='relative'>
					{/* Navigation Buttons - Hidden on mobile */}
					<Button
						variant='ghost'
						size='icon'
						className='absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-md h-10 w-10 rounded-full hidden sm:flex'
						onClick={prevSlide}
					>
						<ChevronLeft className='h-5 w-5' />
					</Button>

					<Button
						variant='ghost'
						size='icon'
						className='absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-md h-10 w-10 rounded-full hidden sm:flex'
						onClick={nextSlide}
					>
						<ChevronRight className='h-5 w-5' />
					</Button>

					{/* Reviews Container */}
					<div className='overflow-hidden px-0 sm:px-12'>
						<div
							className='flex transition-transform duration-500 ease-in-out gap-4'
							style={{
								transform: `translateX(-${
									currentIndex * (100 / reviewsPerView)
								}%)`,
							}}
						>
							{reviews.map((review, index) => (
								<div
									key={index}
									className='flex-shrink-0 w-full sm:w-1/2 lg:w-1/3'
									style={{
										minWidth:
											reviewsPerView === 1
												? "100%"
												: reviewsPerView === 2
												? "calc(50% - 8px)"
												: "calc(33.333% - 11px)",
									}}
								>
									<Card className='h-full hover:shadow-lg transition-all duration-300 border-yellow-200 hover:border-yellow-400 bg-white'>
										<CardContent className='p-4'>
											{/* Header - Compact */}
											<div className='flex items-center mb-3'>
												<Avatar className='h-10 w-10 mr-3'>
													<AvatarImage
														src={review.avatar || "/placeholder.svg"}
														alt={review.name}
													/>
													<AvatarFallback className='bg-yellow-100 text-yellow-700 text-sm font-medium'>
														{review.name
															.split(" ")
															.map((n) => n[0])
															.join("")}
													</AvatarFallback>
												</Avatar>
												<div className='flex-1 min-w-0'>
													<h4 className='font-semibold text-gray-900 text-sm truncate'>
														{review.name}
													</h4>
													<p className='text-xs text-gray-500'>{review.date}</p>
												</div>
												{/* Rating - Moved to header */}
												<div className='flex items-center ml-2'>
													{[...Array(5)].map((_, i) => (
														<Star
															key={i}
															className={`h-3 w-3 ${
																i < review.rating
																	? "fill-yellow-400 text-yellow-400"
																	: "text-gray-300"
															}`}
														/>
													))}
												</div>
											</div>

											{/* Comment - Shorter */}
											<div className='mb-3'>
												<p className='text-gray-600 text-sm leading-relaxed line-clamp-3'>
													"{review.comment}"
												</p>
											</div>

											{/* Verified Badge - Smaller */}
											<div className='flex justify-end'>
												<span className='inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-700'>
													✓ Verified
												</span>
											</div>
										</CardContent>
									</Card>
								</div>
							))}
						</div>
					</div>

					{/* Mobile Navigation Buttons */}
					<div className='flex justify-center mt-4 space-x-4 sm:hidden'>
						<Button
							variant='outline'
							size='sm'
							onClick={prevSlide}
							className='border-yellow-300 text-yellow-600 hover:bg-yellow-50 bg-transparent'
						>
							<ChevronLeft className='h-4 w-4 mr-1' />
							Previous
						</Button>
						<Button
							variant='outline'
							size='sm'
							onClick={nextSlide}
							className='border-yellow-300 text-yellow-600 hover:bg-yellow-50 bg-transparent'
						>
							Next
							<ChevronRight className='h-4 w-4 ml-1' />
						</Button>
					</div>

					{/* Pagination Dots */}
					<div className='flex justify-center mt-6 space-x-2'>
						{Array.from({ length: maxIndex + 1 }).map((_, index) => (
							<button
								key={index}
								className={`w-2 h-2 rounded-full transition-all duration-300 ${
									currentIndex === index
										? "bg-yellow-500 w-6"
										: "bg-gray-300 hover:bg-gray-400"
								}`}
								onClick={() => setCurrentIndex(index)}
							/>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
