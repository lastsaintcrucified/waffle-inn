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
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

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
								Waffle-Shawarma <span className='text-xs font-bold'>inn</span>
							</h1>
							<p className='text-xs text-yellow-600 -mt-1'>House</p>
						</div>
					</Link>

					{/* Desktop Navigation */}
					<div className='hidden md:flex items-center space-x-8'>
						<NavigationMenu>
							<NavigationMenuList>
								<NavigationMenuItem>
									<Link
										href='#home'
										className='text-gray-700 hover:text-yellow-600 transition-colors font-medium'
									>
										Home
									</Link>
								</NavigationMenuItem>
								<NavigationMenuItem>
									<NavigationMenuTrigger className='text-gray-700 hover:text-yellow-600 transition-colors font-medium'>
										Menu
									</NavigationMenuTrigger>
									<NavigationMenuContent>
										<div className='grid w-48 p-2'>
											<NavigationMenuLink asChild>
												<Link
													href='#waffles'
													className='block px-4 py-2 text-sm text-gray-700 hover:bg-yellow-50 hover:text-yellow-600 rounded-md transition-colors'
												>
													Waffles
												</Link>
											</NavigationMenuLink>
											<NavigationMenuLink asChild>
												<Link
													href='#shawarma'
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
								className='md:hidden'
							>
								<Menu className='h-6 w-6' />
							</Button>
						</SheetTrigger>
						<SheetContent
							side='right'
							className='w-80'
						>
							<div className='flex flex-col space-y-4 mt-8'>
								<Link
									href='#home'
									className='text-lg font-medium text-gray-700 hover:text-yellow-600 transition-colors'
									onClick={() => setIsOpen(false)}
								>
									Home
								</Link>
								<div className='space-y-2'>
									<p className='text-lg font-medium text-gray-700'>Menu</p>
									<div className='pl-4 space-y-2'>
										<Link
											href='#waffles'
											className='block text-gray-600 hover:text-yellow-600 transition-colors'
											onClick={() => setIsOpen(false)}
										>
											Waffles
										</Link>
										<Link
											href='#shawarma'
											className='block text-gray-600 hover:text-yellow-600 transition-colors'
											onClick={() => setIsOpen(false)}
										>
											Shawarma
										</Link>
									</div>
								</div>
								<Link
									href='#about'
									className='text-lg font-medium text-gray-700 hover:text-yellow-600 transition-colors'
									onClick={() => setIsOpen(false)}
								>
									About Us
								</Link>
								<Link
									href='#reviews'
									className='text-lg font-medium text-gray-700 hover:text-yellow-600 transition-colors'
									onClick={() => setIsOpen(false)}
								>
									Reviews
								</Link>
								<Link
									href='#location'
									className='text-lg font-medium text-gray-700 hover:text-yellow-600 transition-colors'
									onClick={() => setIsOpen(false)}
								>
									Location
								</Link>
							</div>
						</SheetContent>
					</Sheet>
				</div>
			</div>
		</nav>
	);
}
