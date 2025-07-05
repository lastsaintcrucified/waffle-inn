import ShawarmaReviewCard from "./shawarma-review-card";

const shawarmaReviews = [
	{
		name: "Omar Al-Hassan",
		rating: 5,
		comment:
			"As someone from Lebanon, I can confidently say this is the most authentic shawarma I've found in the city. The meat is perfectly seasoned and the garlic sauce is just like my grandmother's recipe.",
		avatar: "/images/person.jpg",
		date: "1 week ago",
		location: "Brooklyn, NY",
	},
	{
		name: "Maria Rodriguez",
		rating: 5,
		comment:
			"The beef shawarma is absolutely incredible! The meat is so tender and flavorful. I've tried many Middle Eastern restaurants, but this one stands out for its authenticity and quality.",
		avatar: "/images/person.jpg",
		date: "2 weeks ago",
		location: "Manhattan, NY",
	},
	{
		name: "Ahmed Khalil",
		rating: 4,
		comment:
			"Excellent shawarma with generous portions. The spicy chicken supreme has the perfect kick, and the mixed platter is great for sharing. Reminds me of the street food back home in Cairo.",
		avatar: "/images/person.jpg",
		date: "3 weeks ago",
		location: "Queens, NY",
	},
	{
		name: "Jennifer Park",
		rating: 5,
		comment:
			"I'm not usually a fan of Middle Eastern food, but this place converted me! The lamb shawarma is incredibly tender and the flavors are amazing. The staff is also very friendly and helpful.",
		avatar: "/images/person.jpg",
		date: "1 month ago",
		location: "Staten Island, NY",
	},
	{
		name: "Hassan Mahmoud",
		rating: 5,
		comment:
			"Finally found a place that makes shawarma the traditional way! The meat is cooked on a proper vertical rotisserie, and you can taste the difference. The tahini sauce is perfect too.",
		avatar: "/images/person.jpg",
		date: "2 months ago",
		location: "Bronx, NY",
	},
];

export default function ShawarmaReviews() {
	return (
		<section className='py-16 bg-orange-50'>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
				<div className='text-center mb-12'>
					<h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'>
						What Shawarma Lovers Say
					</h2>
					<p className='text-lg text-gray-600 max-w-2xl mx-auto'>
						Hear from our customers who appreciate authentic Middle Eastern
						flavors and traditional preparation methods
					</p>
				</div>

				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
					{shawarmaReviews.slice(0, 3).map((review, index) => (
						<div
							key={index}
							className='animate-fade-in'
							style={{ animationDelay: `${index * 150}ms` }}
						>
							<ShawarmaReviewCard {...review} />
						</div>
					))}
				</div>

				{/* Additional reviews for larger screens */}
				<div className='hidden lg:grid lg:grid-cols-2 gap-8 mt-8'>
					{shawarmaReviews.slice(3, 5).map((review, index) => (
						<div
							key={index + 3}
							className='animate-fade-in'
							style={{ animationDelay: `${(index + 3) * 150}ms` }}
						>
							<ShawarmaReviewCard {...review} />
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
