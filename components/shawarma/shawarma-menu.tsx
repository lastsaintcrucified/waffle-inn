import ShawarmaMenuCard from "./shawarma-menu-card";

const shawarmaMenuItems = [
	{
		name: "Classic Chicken Shawarma",
		description:
			"Tender marinated chicken with garlic sauce, pickles, tomatoes, and fresh lettuce in warm pita",
		price: "$11.99",
		image: "/images/shawarma-hero1.jpg",
		badge: "Bestseller" as const,
		rating: 4.9,
		spiceLevel: 1,
	},
	{
		name: "Premium Beef Shawarma",
		description:
			"Slow-cooked marinated beef with tahini sauce, red onions, parsley, and Mediterranean spices",
		price: "$13.99",
		image: "/images/shawarma-hero2.jpg",
		badge: "Popular" as const,
		rating: 4.8,
		spiceLevel: 2,
	},
	{
		name: "Mixed Meat Platter",
		description:
			"Combination of chicken and beef shawarma served with rice, salad, hummus, and warm pita bread",
		price: "$18.99",
		image: "/images/shawarma-hero1.jpg",
		rating: 4.7,
		spiceLevel: 1,
	},
	{
		name: "Lamb Shawarma Deluxe",
		description:
			"Premium lamb marinated in aromatic spices, served with mint yogurt sauce and grilled vegetables",
		price: "$16.99",
		image: "/images/shawarma-hero2.jpg",
		badge: "New" as const,
		rating: 4.6,
		spiceLevel: 2,
	},
	{
		name: "Spicy Chicken Supreme",
		description:
			"Extra spicy chicken shawarma with hot sauce, jalapeños, and pepper jack cheese in crispy pita",
		price: "$14.99",
		image: "/images/shawarma-hero1.jpg",
		badge: "Spicy" as const,
		rating: 4.8,
		spiceLevel: 3,
	},
	{
		name: "Vegetarian Shawarma",
		description:
			"Grilled halloumi, roasted vegetables, hummus, and tahini sauce wrapped in fresh pita bread",
		price: "$10.99",
		image: "/images/shawarma-hero2.jpg",
		badge: "New" as const,
		rating: 4.5,
		spiceLevel: 0,
	},
];

export default function ShawarmaMenu() {
	return (
		<section className='py-16 bg-gradient-to-b from-white to-orange-50'>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
				<div className='text-center mb-12'>
					<h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'>
						Our Shawarma Collection
					</h2>
					<p className='text-lg text-gray-600 max-w-2xl mx-auto'>
						Authentic Middle Eastern flavors prepared with traditional
						techniques and premium ingredients
					</p>
				</div>

				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
					{shawarmaMenuItems.map((item, index) => (
						<div
							key={index}
							className='animate-fade-in'
							style={{ animationDelay: `${index * 100}ms` }}
						>
							<ShawarmaMenuCard {...item} />
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
