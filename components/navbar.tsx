"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
	Sheet,
	SheetContent,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet";

export default function Navbar() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<nav className='sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-yellow-100 shadow-sm'>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
				<div className='flex justify-between items-center h-16'>
					{/* Logo */}
					<Link
						href='/'
						className='flex items-center space-x-2'
					>
						<div className='w-10 h-10 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center'>
							<span className='text-white font-bold text-lg'>WS</span>
						</div>
						<div className='hidden sm:block'>
							<h1 className='text-xl font-bold text-gray-900'>
								Inn <span className='text-xs font-bold'>-Food Corp.</span>
							</h1>
							<p className='text-xs text-yellow-600 -mt-1'>Food Junction</p>
						</div>
					</Link>

					{/* Desktop Navigation */}
					<div className='hidden md:flex items-center space-x-8 '>
						<NavigationMenu>
							<NavigationMenuList className='gap-4'>
								<NavigationMenuItem>
									<Link
										href='/'
										className='text-gray-700 hover:text-yellow-600 transition-colors font-medium'
									>
										Home
									</Link>
								</NavigationMenuItem>
								<NavigationMenuItem>
									<NavigationMenuTrigger className='text-gray-700 hover:text-yellow-600 transition-colors font-medium'>
										Food hubs
									</NavigationMenuTrigger>
									<NavigationMenuContent>
										<div className='grid w-48 p-2'>
											<NavigationMenuLink asChild>
												<Link
													href='/waffles'
													className='block px-4 py-2 text-sm text-gray-700 hover:bg-yellow-50 hover:text-yellow-600 rounded-md transition-colors'
												>
													Waffles
												</Link>
											</NavigationMenuLink>
											<NavigationMenuLink asChild>
												<Link
													href='/shawarma'
													className='block px-4 py-2 text-sm text-gray-700 hover:bg-yellow-50 hover:text-yellow-600 rounded-md transition-colors'
												>
													Shawarma
												</Link>
											</NavigationMenuLink>
										</div>
									</NavigationMenuContent>
								</NavigationMenuItem>
								<NavigationMenuItem>
									<Link
										href='#about'
										className='text-gray-700 hover:text-yellow-600 transition-colors font-medium'
									>
										About Us
									</Link>
								</NavigationMenuItem>
								<NavigationMenuItem>
									<Link
										href='#reviews'
										className='text-gray-700 hover:text-yellow-600 transition-colors font-medium'
									>
										Reviews
									</Link>
								</NavigationMenuItem>
								<NavigationMenuItem>
									<Link
										href='#location'
										className='text-gray-700 hover:text-yellow-600 transition-colors font-medium'
									>
										Location
									</Link>
								</NavigationMenuItem>
							</NavigationMenuList>
						</NavigationMenu>
					</div>

					{/* Mobile menu button */}
					<Sheet
						open={isOpen}
						onOpenChange={setIsOpen}
					>
						<SheetTrigger asChild>
							<Button
								variant='ghost'
								size='icon'
								className=' md:hidden'
							>
								<Menu className='h-6 w-6' />
							</Button>
						</SheetTrigger>
						<SheetContent
							side='right'
							className='w-80 bg-white border-l border-gray-200 overflow-y-scroll'
							aria-describedby={undefined}
						>
							<SheetTitle className='hidden'>None</SheetTitle>
							{/* Doodle Background - Full Coverage */}
							<div className='absolute inset-0 opacity-30 pointer-events-none overflow-hidden'>
								{/* Top Section Doodles */}
								<div className='absolute top-20 left-12 w-12 h-12 border-2 border-yellow-500 rounded-full'>
									<div className='absolute inset-2 border border-yellow-500 rounded-full'></div>
									<div className='absolute top-1/2 left-0 right-0 h-px bg-yellow-500 transform -translate-y-px'></div>
									<div className='absolute top-0 bottom-0 left-1/2 w-px bg-yellow-500 transform -translate-x-px'></div>
									<div className='absolute top-1/4 left-1/4 right-1/4 h-px bg-yellow-500'></div>
									<div className='absolute top-3/4 left-1/4 right-1/4 h-px bg-yellow-500'></div>
								</div>

								<div className='absolute top-16 right-16 w-14 h-6 border-2 border-orange-500 rounded-full opacity-60'>
									<div className='absolute inset-1 border border-orange-500 rounded-full'></div>
									<div className='absolute top-1/2 left-2 right-2 h-px bg-orange-500'></div>
								</div>

								<div className='absolute top-32 left-4 w-12 h-5 border-2 border-orange-500 rounded-full opacity-50'>
									<div className='absolute inset-1 border border-orange-500 rounded-full'></div>
									<div className='absolute top-1/2 left-1 right-1 h-px bg-orange-500'></div>
								</div>

								{/* Middle Section Doodles */}
								<div className='absolute top-48 right-8 w-16 h-16 border-2 border-yellow-500 rounded-full opacity-60'>
									<div className='absolute inset-3 border border-yellow-500 rounded-full'></div>
									<div className='absolute top-1/2 left-0 right-0 h-px bg-yellow-500 transform -translate-y-px'></div>
									<div className='absolute top-0 bottom-0 left-1/2 w-px bg-yellow-500 transform -translate-x-px'></div>
									<div className='absolute top-1/4 left-1/4 right-1/4 h-px bg-yellow-500'></div>
									<div className='absolute top-3/4 left-1/4 right-1/4 h-px bg-yellow-500'></div>
								</div>

								<div className='absolute top-64 right-12 w-10 h-4 border-2 border-orange-500 rounded-full opacity-40'>
									<div className='absolute inset-1 border border-orange-500 rounded-full'></div>
								</div>

								<div className='absolute top-80 left-8 w-10 h-10 border-2 border-yellow-500 rounded-full opacity-40'>
									<div className='absolute inset-2 border border-yellow-500 rounded-full'></div>
									<div className='absolute top-1/2 left-0 right-0 h-px bg-yellow-500 transform -translate-y-px'></div>
									<div className='absolute top-0 bottom-0 left-1/2 w-px bg-yellow-500 transform -translate-x-px'></div>
								</div>

								<div className='absolute top-96 right-6 w-12 h-5 border-2 border-orange-500 rounded-full opacity-55'>
									<div className='absolute inset-1 border border-orange-500 rounded-full'></div>
									<div className='absolute top-1/2 left-1 right-1 h-px bg-orange-500'></div>
								</div>

								{/* Lower Section Doodles */}
								<div className='absolute top-112 left-16 w-14 h-14 border-2 border-yellow-500 rounded-full opacity-50'>
									<div className='absolute inset-2 border border-yellow-500 rounded-full'></div>
									<div className='absolute top-1/2 left-0 right-0 h-px bg-yellow-500 transform -translate-y-px'></div>
									<div className='absolute top-0 bottom-0 left-1/2 w-px bg-yellow-500 transform -translate-x-px'></div>
									<div className='absolute top-1/4 left-1/4 right-1/4 h-px bg-yellow-500'></div>
									<div className='absolute top-3/4 left-1/4 right-1/4 h-px bg-yellow-500'></div>
								</div>

								<div className='absolute bottom-48 left-12 w-16 h-7 border-2 border-orange-500 rounded-full opacity-70'>
									<div className='absolute inset-1 border border-orange-500 rounded-full'></div>
									<div className='absolute top-1/2 left-2 right-2 h-px bg-orange-500'></div>
								</div>

								<div className='absolute bottom-32 right-12 w-14 h-14 border-2 border-yellow-500 rounded-full opacity-50'>
									<div className='absolute inset-2 border border-yellow-500 rounded-full'></div>
									<div className='absolute top-1/2 left-0 right-0 h-px bg-yellow-500 transform -translate-y-px'></div>
									<div className='absolute top-0 bottom-0 left-1/2 w-px bg-yellow-500 transform -translate-x-px'></div>
								</div>

								<div className='absolute bottom-20 right-6 w-12 h-5 border-2 border-orange-500 rounded-full opacity-45'>
									<div className='absolute inset-1 border border-orange-500 rounded-full'></div>
								</div>

								<div className='absolute bottom-16 left-8 w-10 h-10 border-2 border-yellow-500 rounded-full opacity-35'>
									<div className='absolute inset-2 border border-yellow-500 rounded-full'></div>
									<div className='absolute top-1/2 left-0 right-0 h-px bg-yellow-500 transform -translate-y-px'></div>
									<div className='absolute top-0 bottom-0 left-1/2 w-px bg-yellow-500 transform -translate-x-px'></div>
								</div>

								{/* Additional Middle Doodles */}
								<div className='absolute top-40 left-20 w-8 h-8 border-2 border-yellow-500 rounded-full opacity-30'>
									<div className='absolute inset-1 border border-yellow-500 rounded-full'></div>
									<div className='absolute top-1/2 left-0 right-0 h-px bg-yellow-500'></div>
									<div className='absolute top-0 bottom-0 left-1/2 w-px bg-yellow-500'></div>
								</div>

								<div className='absolute top-72 right-20 w-10 h-4 border-2 border-orange-500 rounded-full opacity-35'>
									<div className='absolute inset-1 border border-orange-500 rounded-full'></div>
								</div>

								<div className='absolute top-104 right-4 w-8 h-8 border-2 border-yellow-500 rounded-full opacity-25'>
									<div className='absolute inset-1 border border-yellow-500 rounded-full'></div>
									<div className='absolute top-1/2 left-0 right-0 h-px bg-yellow-500'></div>
									<div className='absolute top-0 bottom-0 left-1/2 w-px bg-yellow-500'></div>
								</div>

								<div className='absolute bottom-40 left-4 w-12 h-5 border-2 border-orange-500 rounded-full opacity-40'>
									<div className='absolute inset-1 border border-orange-500 rounded-full'></div>
									<div className='absolute top-1/2 left-1 right-1 h-px bg-orange-500'></div>
								</div>

								{/* Decorative dots scattered throughout */}
								<div className='absolute top-24 left-6 w-1 h-1 bg-yellow-500 rounded-full opacity-60'></div>
								<div className='absolute top-36 right-10 w-1 h-1 bg-orange-500 rounded-full opacity-50'></div>
								<div className='absolute top-56 right-4 w-1 h-1 bg-orange-500 rounded-full opacity-60'></div>
								<div className='absolute top-68 left-14 w-1 h-1 bg-yellow-500 rounded-full opacity-45'></div>
								<div className='absolute top-88 right-14 w-1 h-1 bg-orange-500 rounded-full opacity-55'></div>
								<div className='absolute top-100 left-6 w-1 h-1 bg-yellow-500 rounded-full opacity-40'></div>
								<div className='absolute bottom-60 right-8 w-1 h-1 bg-orange-500 rounded-full opacity-50'></div>
								<div className='absolute bottom-44 left-20 w-1 h-1 bg-yellow-500 rounded-full opacity-45'></div>
								<div className='absolute bottom-28 right-16 w-1 h-1 bg-orange-500 rounded-full opacity-55'></div>
								<div className='absolute bottom-12 left-12 w-1 h-1 bg-yellow-500 rounded-full opacity-40'></div>
								<div className='absolute top-44 left-2 w-1 h-1 bg-orange-500 rounded-full opacity-35'></div>
								<div className='absolute top-76 right-2 w-1 h-1 bg-yellow-500 rounded-full opacity-45'></div>
								<div className='absolute top-92 left-24 w-1 h-1 bg-orange-500 rounded-full opacity-40'></div>
								<div className='absolute bottom-36 right-2 w-1 h-1 bg-yellow-500 rounded-full opacity-50'></div>
								<div className='absolute bottom-8 left-16 w-1 h-1 bg-orange-500 rounded-full opacity-35'></div>

								{/* Small waffle and shawarma elements */}
								<div className='absolute top-60 left-2 w-6 h-6 border border-yellow-500 rounded-full opacity-25'>
									<div className='absolute top-1/2 left-0 right-0 h-px bg-yellow-500'></div>
									<div className='absolute top-0 bottom-0 left-1/2 w-px bg-yellow-500'></div>
								</div>

								<div className='absolute top-84 right-24 w-8 h-3 border border-orange-500 rounded-full opacity-30'></div>

								<div className='absolute bottom-52 left-20 w-6 h-6 border border-yellow-500 rounded-full opacity-20'>
									<div className='absolute top-1/2 left-0 right-0 h-px bg-yellow-500'></div>
									<div className='absolute top-0 bottom-0 left-1/2 w-px bg-yellow-500'></div>
								</div>

								<div className='absolute bottom-24 right-20 w-10 h-4 border border-orange-500 rounded-full opacity-35'></div>
							</div>

							{/* Menu Content */}
							<div className='relative z-20 flex flex-col space-y-3 mt-8 p-4'>
								<div className='text-center mb-4'>
									<div className='w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-2'>
										<span className='text-white font-bold text-lg'>WS</span>
									</div>
									<h2 className='text-lg font-bold text-gray-900'>
										Inn-Food Corp.
									</h2>
								</div>

								<Link
									href='/'
									className='text-lg font-medium text-gray-700 hover:text-yellow-600 transition-colors py-1 px-4 rounded-lg hover:bg-yellow-50'
									onClick={() => setIsOpen(false)}
								>
									🏠 Home
								</Link>

								<div className='space-y-1'>
									<p className='text-md font-medium text-gray-700 px-4'>
										🍽️ Food Hubs
									</p>
									<div className='pl-4 space-y-2'>
										<Link
											href='/waffles'
											className='block text-gray-600 hover:text-yellow-600 transition-colors py-2 px-4 rounded-lg hover:bg-yellow-50'
											onClick={() => setIsOpen(false)}
										>
											🧇 Waffles
										</Link>
										<Link
											href='/shawarma'
											className='block text-gray-600 hover:text-orange-600 transition-colors py-1 px-4 rounded-lg hover:bg-orange-50'
											onClick={() => setIsOpen(false)}
										>
											🥙 Shawarma
										</Link>
									</div>
								</div>

								<Link
									href='#about'
									className='text-md font-medium text-gray-700 hover:text-yellow-600 transition-colors py-1 px-4 rounded-lg hover:bg-yellow-50'
									onClick={() => setIsOpen(false)}
								>
									ℹ️ About Us
								</Link>

								<Link
									href='#reviews'
									className='text-md font-medium text-gray-700 hover:text-yellow-600 transition-colors py-1 px-4 rounded-lg hover:bg-yellow-50'
									onClick={() => setIsOpen(false)}
								>
									⭐ Reviews
								</Link>

								<Link
									href='#location'
									className='text-md font-medium text-gray-700 hover:text-yellow-600 transition-colors py-1 px-4 rounded-lg hover:bg-yellow-50'
									onClick={() => setIsOpen(false)}
								>
									📍 Location
								</Link>

								{/* Call to Action */}
								<div className='mt-1 pt-1 border-t border-gray-200'>
									<Button className='w-full bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white font-semibold py-3'>
										<Link href='#menu'>Order Now</Link>
									</Button>
								</div>
							</div>
						</SheetContent>
					</Sheet>
				</div>
			</div>
		</nav>
	);
}
