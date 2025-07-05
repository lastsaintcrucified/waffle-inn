import EventCard from "./event-card";

const waffleEvents = [
	{
		name: "Brussels Food Festival 2024",
		location: "Central Park, New York",
		date: "March 15-17, 2024",
		highlight:
			"Won 'Best Authentic Belgian Waffle' award with over 50,000 visitors trying our waffles",
		image: "/images/shop.jpg",
		status: "completed" as const,
	},
	{
		name: "International Waffle Day Celebration",
		location: "Times Square, New York",
		date: "March 25, 2024",
		highlight:
			"Served over 2,000 free waffle samples and raised $5,000 for local food banks",
		image: "/images/shop.jpg",
		status: "completed" as const,
	},
	{
		name: "Summer Food Truck Festival",
		location: "Brooklyn Bridge Park",
		date: "July 20-22, 2024",
		highlight:
			"Featured our new savory waffle line with live cooking demonstrations",
		image: "/images/shop.jpg",
		status: "upcoming" as const,
	},
];

export default function WaffleEvents() {
	return (
		<section className='py-16 bg-white'>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
				<div className='text-center mb-12'>
					<h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'>
						Events & Festivals
					</h2>
					<p className='text-lg text-gray-600 max-w-2xl mx-auto'>
						Join us at food festivals and special events where we share our
						passion for authentic Belgian waffles
					</p>
				</div>

				{/* Timeline Layout for Desktop */}
				<div className='hidden lg:block'>
					<div className='relative'>
						{/* Timeline Line */}
						<div className='absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-yellow-200'></div>

						{waffleEvents.map((event, index) => (
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
										<EventCard {...event} />
									</div>
								</div>
								<div className='w-4 h-4 bg-yellow-500 rounded-full border-4 border-white shadow-lg z-10'></div>
								<div className='w-1/2'></div>
							</div>
						))}
					</div>
				</div>

				{/* Card Layout for Mobile/Tablet */}
				<div className='lg:hidden grid grid-cols-1 md:grid-cols-2 gap-8'>
					{waffleEvents.map((event, index) => (
						<div
							key={index}
							className='animate-fade-in'
							style={{ animationDelay: `${index * 150}ms` }}
						>
							<EventCard {...event} />
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
