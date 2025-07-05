/* eslint-disable react/no-unescaped-entities */
import ReviewCard from "./review-card";

const waffleReviews = [
	{
		name: "Emma Thompson",
		rating: 5,
		comment:
			"The best Belgian waffles I've ever had! The texture is perfect - crispy outside and fluffy inside. The chocolate lovers delight is absolutely divine.",
		avatar: "/images/person.jpg",
		date: "1 week ago",
	},
	{
		name: "James Wilson",
		rating: 5,
		comment:
			"Authentic Belgian taste! As someone who lived in Brussels, I can confirm these waffles are the real deal. The caramel pecan crunch is my new favorite.",
		avatar: "/images/person.jpg",
		date: "2 weeks ago",
	},
	{
		name: "Sofia Martinez",
		rating: 4,
		comment:
			"Amazing variety and quality! The strawberry fields waffle was fresh and delicious. Great atmosphere and friendly staff too.",
		avatar: "/images/person.jpg",
		date: "3 weeks ago",
	},
	{
		name: "Michael Chen",
		rating: 5,
		comment:
			"The savory herb waffle blew my mind! Who knew waffles could work so well with salmon and cream cheese. Innovative and delicious.",
		avatar: "/images/person.jpg",
		date: "1 month ago",
	},
	{
		name: "Isabella Rodriguez",
		rating: 5,
		comment:
			"Perfect for weekend brunch! The banana foster waffle is like having dessert for breakfast. The presentation is Instagram-worthy too!",
		avatar: "/images/person.jpg",
		date: "2 months ago",
	},
];

export default function WaffleReviews() {
	return (
		<section className='py-16 bg-yellow-50'>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
				<div className='text-center mb-12'>
					<h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'>
						What Waffle Lovers Say
					</h2>
					<p className='text-lg text-gray-600 max-w-2xl mx-auto'>
						Hear from our customers who can't get enough of our authentic
						Belgian waffles
					</p>
				</div>

				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
					{waffleReviews.slice(0, 3).map((review, index) => (
						<div
							key={index}
							className='animate-fade-in'
							style={{ animationDelay: `${index * 150}ms` }}
						>
							<ReviewCard {...review} />
						</div>
					))}
				</div>

				{/* Additional reviews for larger screens */}
				<div className='hidden lg:grid lg:grid-cols-2 gap-8 mt-8'>
					{waffleReviews.slice(3, 5).map((review, index) => (
						<div
							key={index + 3}
							className='animate-fade-in'
							style={{ animationDelay: `${(index + 3) * 150}ms` }}
						>
							<ReviewCard {...review} />
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
