import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function ShawarmaHero() {
	return (
		<section className='relative h-[70vh] md:h-[80vh] overflow-hidden'>
			{/* Background Image */}
			<div className='absolute inset-0'>
				<Image
					src='/images/shawarma-hero1.jpg'
					alt='Authentic Middle Eastern Shawarma'
					fill
					className='object-cover'
					priority
				/>
				<div className='absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent' />
			</div>

			{/* Content */}
			<div className='relative h-full flex items-center'>
				<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full'>
					<div className='max-w-2xl text-center md:text-left'>
						<h1 className='text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 animate-fade-in'>
							Welcome to <span className='text-orange-400'>Shawarma Inn</span>
						</h1>
						<p className='text-xl md:text-2xl text-white/90 mb-8 animate-fade-in-delay'>
							Crave for meat like never before.
						</p>
						<p className='hidden md:block text-lg text-white/80 mb-8 animate-fade-in-delay leading-relaxed'>
							Savor the authentic taste of Middle Eastern cuisine with our
							premium shawarma, made from the finest cuts of meat, marinated in
							traditional spices, and cooked to perfection on our rotating spit
							.
						</p>
						<div className='flex flex-col sm:flex-row gap-4 animate-fade-in-delay-2'>
							<Button
								size='lg'
								className='bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3'
							>
								<Link href='#shawarma-menu'>View Menu</Link>
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
			</div>

			{/* Scroll Indicator */}
			<div className='absolute bottom-0 md:bottom-8 left-1/2 -translate-x-1/2 animate-bounce'>
				<div className='w-4 md:w-6 h-6 md:h-10  border-2 border-white/50 rounded-full flex justify-center'>
					<div className='w-1 h-1 md:h-3 bg-white/50 rounded-full mt-2 animate-pulse'></div>
				</div>
			</div>
		</section>
	);
}
