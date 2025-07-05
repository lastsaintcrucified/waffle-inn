import MenuCard from "./menu-card";

const waffleMenuItems = [
	{
		name: "Classic Belgian Waffle",
		description:
			"Traditional Belgian waffle with butter, maple syrup, and a dusting of powdered sugar",
		price: "$8.99",
		image: "/images/waffle-hero1.jpg",
		badge: "Bestseller" as const,
		rating: 4.9,
	},
	{
		name: "Chocolate Lovers Delight",
		description:
			"Rich chocolate waffle topped with chocolate sauce, whipped cream, and fresh berries",
		price: "$12.99",
		image: "/images/waffle-hero2.jpg",
		badge: "Popular" as const,
		rating: 4.8,
	},
	{
		name: "Strawberry Fields",
		description:
			"Fresh strawberry waffle with strawberry compote, vanilla cream, and mint leaves",
		price: "$11.99",
		image: "/images/waffle-hero1.jpg",
		rating: 4.7,
	},
	{
		name: "Caramel Pecan Crunch",
		description:
			"Buttery waffle with caramel sauce, toasted pecans, and vanilla ice cream",
		price: "$13.99",
		image: "/images/waffle-hero2.jpg",
		badge: "New" as const,
		rating: 4.6,
	},
	{
		name: "Banana Foster Waffle",
		description:
			"Warm waffle with caramelized bananas, rum sauce, and cinnamon whipped cream",
		price: "$14.99",
		image: "/images/waffle-hero1.jpg",
		rating: 4.8,
	},
	{
		name: "Savory Herb Waffle",
		description:
			"Herb-infused waffle with cream cheese, smoked salmon, and fresh dill",
		price: "$16.99",
		image: "/images/waffle-hero1.jpg",
		badge: "New" as const,
		rating: 4.5,
	},
];

export default function WaffleMenu() {
	return (
		<section className='py-16 bg-gradient-to-b from-white to-yellow-50'>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
				<div className='text-center mb-12'>
					<h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'>
						Our Waffle Collection
					</h2>
					<p className='text-lg text-gray-600 max-w-2xl mx-auto'>
						Each waffle is made fresh to order using authentic Belgian recipes
						and premium ingredients
					</p>
				</div>

				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
					{waffleMenuItems.map((item, index) => (
						<div
							key={index}
							className='animate-fade-in'
							style={{ animationDelay: `${index * 100}ms` }}
						>
							<MenuCard {...item} />
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
