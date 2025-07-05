import Image from "next/image";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock } from "lucide-react";

const upcomingItems = [
	{
		name: "Matcha Green Tea Waffle",
		description:
			"Japanese-inspired waffle with matcha powder, red bean paste, and mochi pieces",
		price: "$15.99",
		image: "/images/upcoming.jpg",
		launchDate: "Coming in August",
	},
	{
		name: "Maple Bacon Crunch",
		description:
			"Sweet and savory combination with maple glaze, crispy bacon bits, and candied pecans",
		price: "$16.99",
		image: "/images/upcoming.jpg",
		launchDate: "Coming in September",
	},
	{
		name: "Tropical Paradise",
		description:
			"Coconut waffle with pineapple compote, toasted coconut flakes, and lime zest",
		price: "$13.99",
		image: "/images/upcoming.jpg",
		launchDate: "Coming in October",
	},
	{
		name: "Pumpkin Spice Supreme",
		description:
			"Seasonal favorite with pumpkin spice waffle, cinnamon cream, and candied walnuts",
		price: "$14.99",
		image: "/images/upcoming.jpg",
		launchDate: "Coming in November",
	},
];

export default function UpcomingMenu() {
	return (
		<section className='py-16 bg-gradient-to-b from-yellow-50 to-orange-50'>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
				<div className='text-center mb-12'>
					<h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'>
						Coming Soon
					</h2>
					<p className='text-lg text-gray-600 max-w-2xl mx-auto'>
						Get excited for our upcoming waffle creations! These innovative
						flavors will be available soon.
					</p>
				</div>

				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
					{upcomingItems.map((item, index) => (
						<div
							key={index}
							className='animate-fade-in'
							style={{ animationDelay: `${index * 100}ms` }}
						>
							<Card className='group hover:shadow-xl transition-all duration-300 border-orange-200 hover:border-orange-400 relative overflow-hidden'>
								{/* Coming Soon Overlay */}
								<div className='absolute inset-0 bg-white/80 backdrop-blur-sm z-10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
									<div className='text-center'>
										<Clock className='h-12 w-12 text-orange-500 mx-auto mb-2' />
										<p className='text-lg font-semibold text-gray-900'>
											{item.launchDate}
										</p>
									</div>
								</div>

								<div className='relative overflow-hidden rounded-t-lg'>
									<Image
										src={item.image || "/placeholder.svg"}
										alt={item.name}
										width={400}
										height={250}
										className='w-full h-48 object-cover filter  group-hover:grayscale-0 transition-all duration-300'
									/>
									<Badge className='absolute top-3 left-3 bg-orange-500 text-white hover:bg-orange-600'>
										Coming Soon
									</Badge>
								</div>

								<CardHeader className='pb-2'>
									<div className='flex justify-between items-start'>
										<CardTitle className='text-lg text-gray-900 group-hover:text-orange-700 transition-colors'>
											{item.name}
										</CardTitle>
										<span className='text-xl font-bold text-orange-600'>
											{item.price}
										</span>
									</div>
								</CardHeader>

								<CardContent className='pt-0'>
									<CardDescription className='text-gray-600 line-clamp-2 mb-4'>
										{item.description}
									</CardDescription>
									<div className='flex items-center text-orange-600'>
										<Clock className='h-4 w-4 mr-2' />
										<span className='text-sm font-medium'>
											{item.launchDate}
										</span>
									</div>
								</CardContent>
							</Card>
						</div>
					))}
				</div>

				{/* Newsletter Signup */}
				<div className='mt-16 text-center'>
					<div className='bg-white rounded-2xl shadow-lg p-8 max-w-2xl mx-auto border border-orange-200'>
						<h3 className='text-2xl font-bold text-gray-900 mb-4'>
							Be the First to Know!
						</h3>
						<p className='text-gray-600 mb-6'>
							Subscribe to our newsletter to get notified when these exciting
							new waffles launch.
						</p>
						<div className='flex flex-col sm:flex-row gap-4 max-w-md mx-auto'>
							<input
								type='email'
								placeholder='Enter your email'
								className='flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent'
							/>
							<button className='bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-2 rounded-lg transition-colors'>
								Subscribe
							</button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
