import ShawarmaEventCard from "./shawarma-event-card";

const shawarmaEvents = [
	{
		name: "Middle Eastern Food Festival 2024",
		location: "Washington Square Park, NYC",
		date: "April 12-14, 2024",
		highlight:
			"Awarded 'Most Authentic Shawarma' by festival judges and served over 8,000 customers",
		image: "/images/shop-2.jpg",
		status: "completed" as const,
	},
	{
		name: "Halal Food Expo",
		location: "Jacob K. Javits Convention Center",
		date: "May 18-20, 2024",
		highlight:
			"Showcased our traditional cooking methods and introduced our new lamb shawarma to industry professionals",
		image: "/images/shop-2.jpg",
		status: "completed" as const,
	},
	{
		name: "International Street Food Championship",
		location: "Coney Island Boardwalk",
		date: "August 15-17, 2024",
		highlight:
			"Competing for the 'Best Middle Eastern Dish' award with our signature mixed meat platter",
		image: "/images/shop-2.jpg",
		status: "upcoming" as const,
	},
];

export default function ShawarmaEvents() {
	return (
		<section className='py-16 bg-white'>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
				<div className='text-center mb-12'>
					<h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'>
						Events & Recognition
					</h2>
					<p className='text-lg text-gray-600 max-w-2xl mx-auto'>
						Join us at food festivals and cultural events where we celebrate
						authentic Middle Eastern cuisine
					</p>
				</div>

				{/* Timeline Layout for Desktop */}
				<div className='hidden lg:block'>
					<div className='relative'>
						{/* Timeline Line */}
						<div className='absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-orange-200'></div>

						{shawarmaEvents.map((event, index) => (
							<div
								key={index}
								className={`flex items-center mb-12 ${
									index % 2 === 0 ? "flex-row" : "flex-row-reverse"
								}`}
							>
								<div className={`w-1/2 ${index % 2 === 0 ? "pr-8" : "pl-8"}`}>
									<div
										className='animate-fade-in'
										style={{ animationDelay: `${index * 200}ms` }}
									>
										<ShawarmaEventCard {...event} />
									</div>
								</div>
								<div className='w-4 h-4 bg-orange-500 rounded-full border-4 border-white shadow-lg z-10'></div>
								<div className='w-1/2'></div>
							</div>
						))}
					</div>
				</div>

				{/* Card Layout for Mobile/Tablet */}
				<div className='lg:hidden grid grid-cols-1 md:grid-cols-2 gap-8'>
					{shawarmaEvents.map((event, index) => (
						<div
							key={index}
							className='animate-fade-in'
							style={{ animationDelay: `${index * 150}ms` }}
						>
							<ShawarmaEventCard {...event} />
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
