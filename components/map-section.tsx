"use client";

import dynamic from "next/dynamic";
import { Button } from "./ui/button";

const LeafletMap = dynamic(() => import("../components/LeafletMap"), {
	ssr: false,
});

export default function MapSection() {
	return (
		<section
			id='location'
			className='py-16 bg-white'
		>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
				<div className='text-center mb-12'>
					<h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'>
						Visit Us Today
					</h2>
					<p className='text-lg text-gray-600 max-w-2xl mx-auto'>
						Come experience the perfect fusion of flavors at our welcoming
						location
					</p>
				</div>

				<div className='relative overflow-hidden border'>
					<LeafletMap />
					{/* Explore link */}
					<div className='mt-4 text-center pt-0 py-4'>
						<Button className='text-blue-600  text-lg hover:text-blue-700 p-0 bg-transparent border-0 shadow-none hover:bg-transparent hover:cursor-pointer'>
							Explore the Area
						</Button>
					</div>
				</div>
			</div>
		</section>
	);
}
