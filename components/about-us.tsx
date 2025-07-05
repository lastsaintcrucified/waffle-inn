import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Clock, Users, Award, Heart } from "lucide-react";

export default function AboutUs() {
	return (
		<section
			id='about'
			className='py-16 bg-white'
		>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
				<div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
					{/* Content */}
					<div>
						<h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-6'>
							About Waffle Shawarma House
						</h2>
						<p className='text-lg text-gray-600 mb-6'>
							Born from a passion for culinary fusion, Waffle Shawarma House
							brings together the best of Belgian waffle-making traditions with
							authentic Middle Eastern shawarma techniques.
						</p>
						<p className='text-lg text-gray-600 mb-8'>
							Our unique concept celebrates the art of combining crispy, golden
							waffles with tender, perfectly seasoned shawarma meats, creating
							an unforgettable dining experience that bridges cultures through
							food.
						</p>

						{/* Stats */}
						<div className='grid grid-cols-2 gap-6'>
							<Card className='border-yellow-200'>
								<CardContent className='p-6 text-center'>
									<Clock className='h-8 w-8 text-yellow-600 mx-auto mb-2' />
									<h3 className='text-2xl font-bold text-gray-900'>5+</h3>
									<p className='text-gray-600'>Years Serving</p>
								</CardContent>
							</Card>
							<Card className='border-orange-200'>
								<CardContent className='p-6 text-center'>
									<Users className='h-8 w-8 text-orange-600 mx-auto mb-2' />
									<h3 className='text-2xl font-bold text-gray-900'>10K+</h3>
									<p className='text-gray-600'>Happy Customers</p>
								</CardContent>
							</Card>
						</div>
					</div>

					{/* Image */}
					<div className='relative'>
						<div className='relative h-96 rounded-2xl overflow-hidden shadow-2xl'>
							<Image
								src='/images/shop.jpg'
								alt='Restaurant interior'
								fill
								className='object-cover'
							/>
						</div>
						<div className='absolute -bottom-6 -left-6 bg-yellow-400 p-4 md:p-6 rounded-2xl shadow-lg'>
							<Award className='h-8 w-8 text-black mb-2' />
							<p className='text-black font-semibold text-sm md:text-lg'>
								Best Fusion
							</p>
							<p className='text-black text-xs md:text-sm'>
								Restaurant 2025(CTG)
							</p>
						</div>
					</div>
				</div>

				{/* Values */}
				<div className='mt-16'>
					<h3 className='text-2xl md:text-3xl font-bold text-center text-gray-900 mb-12'>
						Our Values
					</h3>
					<div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
						<Card className='text-center border-yellow-200 hover:border-yellow-400 transition-colors'>
							<CardContent className='p-8'>
								<Heart className='h-12 w-12 text-yellow-600 mx-auto mb-4' />
								<h4 className='text-xl font-semibold text-gray-900 mb-3'>
									Quality First
								</h4>
								<p className='text-gray-600'>
									We use only the finest ingredients and traditional cooking
									methods to ensure every bite is perfect.
								</p>
							</CardContent>
						</Card>
						<Card className='text-center border-orange-200 hover:border-orange-400 transition-colors'>
							<CardContent className='p-8'>
								<Users className='h-12 w-12 text-orange-600 mx-auto mb-4' />
								<h4 className='text-xl font-semibold text-gray-900 mb-3'>
									Community
								</h4>
								<p className='text-gray-600'>
									We believe food brings people together and strive to create a
									welcoming space for all.
								</p>
							</CardContent>
						</Card>
						<Card className='text-center border-red-200 hover:border-red-400 transition-colors'>
							<CardContent className='p-8'>
								<Award className='h-12 w-12 text-red-600 mx-auto mb-4' />
								<h4 className='text-xl font-semibold text-gray-900 mb-3'>
									Innovation
								</h4>
								<p className='text-gray-600'>
									We constantly explore new flavors and combinations while
									respecting culinary traditions.
								</p>
							</CardContent>
						</Card>
					</div>
				</div>
			</div>
		</section>
	);
}
