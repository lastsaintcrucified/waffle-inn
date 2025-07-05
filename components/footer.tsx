import Link from "next/link";
import {
	Facebook,
	Instagram,
	MessageCircle,
	MapPin,
	Phone,
	Mail,
} from "lucide-react";

export default function Footer() {
	return (
		<footer className='bg-gray-900 text-white'>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
					{/* Brand */}
					<div className='lg:col-span-2'>
						<div className='flex items-center space-x-2 mb-4'>
							<div className='w-10 h-10 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center'>
								<span className='text-white font-bold text-lg'>WS</span>
							</div>
							<div>
								<h3 className='text-xl font-bold'>
									Waffle-Shawarma <span className='text-xs font-bold'>inn</span>
								</h3>
								<p className='text-yellow-400 text-sm'>Where Cultures Meet</p>
							</div>
						</div>
						<p className='text-gray-300 mb-6 max-w-md'>
							Experience the perfect fusion of Belgian waffles and Middle
							Eastern shawarma. Fresh ingredients, authentic flavors, and
							innovative combinations.
						</p>
						<div className='flex space-x-4'>
							<Link
								href='https://facebook.com'
								className='w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors'
								aria-label='Facebook'
							>
								<Facebook className='h-5 w-5' />
							</Link>
							<Link
								href='https://instagram.com'
								className='w-10 h-10 bg-pink-600 rounded-full flex items-center justify-center hover:bg-pink-700 transition-colors'
								aria-label='Instagram'
							>
								<Instagram className='h-5 w-5' />
							</Link>
							<Link
								href='https://wa.me/5551234567'
								className='w-10 h-10 bg-green-600 rounded-full flex items-center justify-center hover:bg-green-700 transition-colors'
								aria-label='WhatsApp'
							>
								<MessageCircle className='h-5 w-5' />
							</Link>
						</div>
					</div>

					{/* Quick Links */}
					<div>
						<h4 className='text-lg font-semibold mb-4 text-yellow-400'>
							Quick Links
						</h4>
						<ul className='space-y-2'>
							<li>
								<Link
									href='#home'
									className='text-gray-300 hover:text-yellow-400 transition-colors'
								>
									Home
								</Link>
							</li>
							<li>
								<Link
									href='#menu'
									className='text-gray-300 hover:text-yellow-400 transition-colors'
								>
									Menu
								</Link>
							</li>
							<li>
								<Link
									href='#about'
									className='text-gray-300 hover:text-yellow-400 transition-colors'
								>
									About Us
								</Link>
							</li>
							<li>
								<Link
									href='#reviews'
									className='text-gray-300 hover:text-yellow-400 transition-colors'
								>
									Reviews
								</Link>
							</li>
							<li>
								<Link
									href='#location'
									className='text-gray-300 hover:text-yellow-400 transition-colors'
								>
									Location
								</Link>
							</li>
						</ul>
					</div>

					{/* Contact Info */}
					<div>
						<h4 className='text-lg font-semibold mb-4 text-yellow-400'>
							Contact Info
						</h4>
						<ul className='space-y-3'>
							<li className='flex items-center'>
								<MapPin className='h-4 w-4 text-yellow-400 mr-2 flex-shrink-0' />
								<span className='text-gray-300 text-sm'>
									Artilery circle, Halishahar,Ctg
								</span>
							</li>
							<li className='flex items-center'>
								<Phone className='h-4 w-4 text-yellow-400 mr-2 flex-shrink-0' />
								<span className='text-gray-300 text-sm'>(555) 123-4567</span>
							</li>
							<li className='flex items-center'>
								<Mail className='h-4 w-4 text-yellow-400 mr-2 flex-shrink-0' />
								<span className='text-gray-300 text-sm'>
									hello@waffleshawarmahouse.com
								</span>
							</li>
						</ul>
					</div>
				</div>

				{/* Bottom Bar */}
				<div className='border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center'>
					<p className='text-gray-400 text-sm'>
						© 2024 Waffle-Shawarma{" "}
						<span className='text-xs font-bold'>inn</span>. All rights reserved.
					</p>
					<div className='flex space-x-6 mt-4 md:mt-0'>
						<Link
							href='#'
							className='text-gray-400 hover:text-yellow-400 text-sm transition-colors'
						>
							Privacy Policy
						</Link>
						<Link
							href='#'
							className='text-gray-400 hover:text-yellow-400 text-sm transition-colors'
						>
							Terms of Service
						</Link>
					</div>
				</div>
			</div>
		</footer>
	);
}
