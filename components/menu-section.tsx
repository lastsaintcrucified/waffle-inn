/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
} from "@/components/ui/dialog";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Star, Clock } from "lucide-react";

const waffleMenu = [
	{
		id: 1,
		name: "Classic Belgian Waffle",
		description: "Traditional Belgian waffle with butter and maple syrup",
		price: "$8.99",
		image: "/images/waffle-hero2.jpg",
		popular: true,
		prepTime: "8-10 min",
		rating: 4.8,
		ingredients: [
			"Belgian waffle batter",
			"Pure maple syrup",
			"Fresh butter",
			"Powdered sugar",
		],
		nutritionInfo: "Calories: 420, Protein: 8g, Carbs: 65g, Fat: 15g",
		allergens: ["Gluten", "Dairy", "Eggs"],
	},
	{
		id: 2,
		name: "Chocolate Delight",
		description:
			"Waffle topped with chocolate sauce, whipped cream, and berries",
		price: "$12.99",
		image: "/images/waffle-hero1.jpg",
		popular: false,
		prepTime: "10-12 min",
		rating: 4.6,
		ingredients: [
			"Belgian waffle",
			"Dark chocolate sauce",
			"Fresh whipped cream",
			"Mixed berries",
			"Mint leaves",
		],
		nutritionInfo: "Calories: 580, Protein: 10g, Carbs: 78g, Fat: 24g",
		allergens: ["Gluten", "Dairy", "Eggs"],
	},
	{
		id: 3,
		name: "Savory Chicken Waffle",
		description: "Crispy fried chicken on a waffle with honey mustard",
		price: "$15.99",
		image: "/images/waffle-hero2.jpg",
		popular: true,
		prepTime: "15-18 min",
		rating: 4.9,
		ingredients: [
			"Belgian waffle",
			"Crispy fried chicken breast",
			"Honey mustard sauce",
			"Fresh herbs",
		],
		nutritionInfo: "Calories: 720, Protein: 35g, Carbs: 55g, Fat: 32g",
		allergens: ["Gluten", "Dairy", "Eggs"],
	},
];

const shawarmaMenu = [
	{
		id: 4,
		name: "Chicken Shawarma",
		description:
			"Tender chicken with garlic sauce, pickles, and fresh vegetables",
		price: "$11.99",
		image: "/images/shawarma-hero1.jpg",
		popular: true,
		prepTime: "12-15 min",
		rating: 4.7,
		ingredients: [
			"Marinated chicken",
			"Garlic sauce",
			"Pickles",
			"Tomatoes",
			"Lettuce",
			"Pita bread",
		],
		nutritionInfo: "Calories: 520, Protein: 28g, Carbs: 45g, Fat: 22g",
		allergens: ["Gluten", "Dairy"],
	},
	{
		id: 5,
		name: "Beef Shawarma",
		description: "Marinated beef with tahini sauce and Mediterranean spices",
		price: "$13.99",
		image: "/images/shawarma-hero2.jpg",
		popular: false,
		prepTime: "12-15 min",
		rating: 4.5,
		ingredients: [
			"Marinated beef",
			"Tahini sauce",
			"Red onions",
			"Parsley",
			"Tomatoes",
			"Pita bread",
		],
		nutritionInfo: "Calories: 580, Protein: 32g, Carbs: 42g, Fat: 26g",
		allergens: ["Gluten", "Sesame"],
	},
	{
		id: 6,
		name: "Mixed Shawarma Platter",
		description: "Combination of chicken and beef with rice and salad",
		price: "$18.99",
		image: "/images/shawarma-hero1.jpg",
		popular: true,
		prepTime: "18-20 min",
		rating: 4.8,
		ingredients: [
			"Chicken shawarma",
			"Beef shawarma",
			"Basmati rice",
			"Mediterranean salad",
			"Hummus",
			"Pita bread",
		],
		nutritionInfo: "Calories: 820, Protein: 45g, Carbs: 68g, Fat: 35g",
		allergens: ["Gluten", "Dairy", "Sesame"],
	},
];

export default function MenuSection() {
	type MenuItem = {
		id: number;
		name: string;
		description: string;
		price: string;
		image: string;
		popular: boolean;
		prepTime: string;
		rating: number;
		ingredients: string[];
		nutritionInfo: string;
		allergens: string[];
	};
	interface MenuTableProps {
		items: MenuItem[];
		category: string;
	}

	const [isModalOpen, setIsModalOpen] = useState(false);
	const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);

	const handleRowClick = (item: MenuItem) => {
		setSelectedItem(item);
		setIsModalOpen(true);
	};

	const MenuTable = ({ items, category }: MenuTableProps) => (
		<div className='overflow-hidden rounded-lg border border-yellow-200 shadow-lg'>
			<Table>
				<TableHeader>
					<TableRow className='bg-gradient-to-r from-yellow-50 to-orange-50 hover:from-yellow-100 hover:to-orange-100'>
						<TableHead className='w-20'>Image</TableHead>
						<TableHead className='font-semibold text-gray-900'>Item</TableHead>
						<TableHead className='hidden md:table-cell font-semibold text-gray-900'>
							Description
						</TableHead>
						<TableHead className='text-center font-semibold text-gray-900'>
							Rating
						</TableHead>
						<TableHead className='text-center font-semibold text-gray-900'>
							Time
						</TableHead>
						<TableHead className='text-right font-semibold text-gray-900'>
							Price
						</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					{items.map((item: any, index: any) => (
						<TableRow
							key={item.id}
							className='cursor-pointer transition-all duration-300 hover:bg-gradient-to-r hover:from-yellow-50 hover:to-orange-50 hover:shadow-md transform hover:scale-[1.02] group animate-fade-in'
							style={{ animationDelay: `${index * 100}ms` }}
							onClick={() => handleRowClick(item)}
						>
							<TableCell className='p-2'>
								<div className='relative w-16 h-16 rounded-lg overflow-hidden shadow-md group-hover:shadow-lg transition-shadow'>
									<Image
										src={item.image || "/placeholder.svg"}
										alt={item.name}
										fill
										className='object-cover group-hover:scale-110 transition-transform duration-300'
									/>
								</div>
							</TableCell>
							<TableCell>
								<div className='flex items-center space-x-2'>
									<div>
										<p className='font-semibold text-gray-900 group-hover:text-yellow-700 transition-colors'>
											{item.name}
										</p>
										{item.popular && (
											<Badge className='mt-1 bg-yellow-500 text-black hover:bg-yellow-600 text-xs'>
												Popular
											</Badge>
										)}
									</div>
								</div>
							</TableCell>
							<TableCell className='hidden md:table-cell'>
								<p className='text-gray-600 text-sm line-clamp-2'>
									{item.description}
								</p>
							</TableCell>
							<TableCell className='text-center'>
								<div className='flex items-center justify-center space-x-1'>
									<Star className='h-4 w-4 fill-yellow-400 text-yellow-400' />
									<span className='text-sm font-medium'>{item.rating}</span>
								</div>
							</TableCell>
							<TableCell className='text-center'>
								<div className='flex items-center justify-center space-x-1'>
									<Clock className='h-4 w-4 text-gray-500' />
									<span className='text-sm text-gray-600'>{item.prepTime}</span>
								</div>
							</TableCell>
							<TableCell className='text-right'>
								<span className='text-lg font-bold text-yellow-600'>
									{item.price}
								</span>
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</div>
	);

	return (
		<section
			id='menu'
			className='py-16 bg-gradient-to-b from-yellow-50 to-white'
		>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
				<div className='text-center mb-12'>
					<h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'>
						Our Delicious Menu
					</h2>
					<p className='text-lg text-gray-600 max-w-2xl mx-auto'>
						Discover the perfect fusion of Belgian waffles and Middle Eastern
						shawarma
					</p>
				</div>

				<Tabs
					defaultValue='waffles'
					className='w-full'
				>
					<TabsList className='grid w-full grid-cols-2 mb-8 bg-white border border-yellow-200'>
						<TabsTrigger
							value='waffles'
							className='data-[state=active]:bg-yellow-500 data-[state=active]:text-black font-semibold'
						>
							Belgian Waffles
						</TabsTrigger>
						<TabsTrigger
							value='shawarma'
							className='data-[state=active]:bg-orange-500 data-[state=active]:text-white font-semibold'
						>
							Premium Shawarma
						</TabsTrigger>
					</TabsList>

					<TabsContent
						value='waffles'
						className='space-y-4'
					>
						<MenuTable
							items={waffleMenu}
							category='waffles'
						/>
					</TabsContent>

					<TabsContent
						value='shawarma'
						className='space-y-4'
					>
						<MenuTable
							items={shawarmaMenu}
							category='shawarma'
						/>
					</TabsContent>
				</Tabs>

				{/* Item Detail Modal */}
				<Dialog
					open={isModalOpen}
					onOpenChange={setIsModalOpen}
				>
					<DialogContent className='max-w-2xl max-h-[90vh] overflow-y-auto'>
						{selectedItem && (
							<>
								<DialogHeader>
									<DialogTitle className='text-2xl font-bold text-gray-900 flex flex-col items-center justify-between'>
										{selectedItem.popular && (
											<Badge className='mb-1 text-xs bg-yellow-500 text-black hover:bg-yellow-600'>
												Popular Choice
											</Badge>
										)}
										{selectedItem.name}
									</DialogTitle>
									<DialogDescription className='text-lg text-gray-600'>
										{selectedItem.description}
									</DialogDescription>
								</DialogHeader>

								<div className='space-y-6'>
									{/* Image */}
									<div className='relative w-full h-64 rounded-lg overflow-hidden shadow-lg'>
										<Image
											src={selectedItem.image || "/placeholder.svg"}
											alt={selectedItem.name}
											fill
											className='object-cover'
										/>
									</div>

									{/* Price and Rating */}
									<div className='flex justify-between items-center'>
										<div className='text-3xl font-bold text-yellow-600'>
											{selectedItem.price}
										</div>
										<div className='flex items-center space-x-4'>
											<div className='flex items-center space-x-1'>
												<Star className='h-5 w-5 fill-yellow-400 text-yellow-400' />
												<span className='font-semibold'>
													{selectedItem.rating}
												</span>
											</div>
											<div className='flex items-center space-x-1'>
												<Clock className='h-5 w-5 text-gray-500' />
												<span className='text-gray-600'>
													{selectedItem.prepTime}
												</span>
											</div>
										</div>
									</div>

									{/* Ingredients */}
									<div>
										<h4 className='font-semibold text-gray-900 mb-2'>
											Ingredients:
										</h4>
										<div className='flex flex-wrap gap-2'>
											{selectedItem.ingredients.map((ingredient, index) => (
												<Badge
													key={index}
													variant='outline'
													className='border-yellow-300 text-gray-700'
												>
													{ingredient}
												</Badge>
											))}
										</div>
									</div>

									{/* Nutrition Info */}
									<div>
										<h4 className='font-semibold text-gray-900 mb-2'>
											Nutrition Information:
										</h4>
										<p className='text-gray-600 bg-gray-50 p-3 rounded-lg'>
											{selectedItem.nutritionInfo}
										</p>
									</div>

									{/* Allergens */}
									<div>
										<h4 className='font-semibold text-gray-900 mb-2'>
											Allergens:
										</h4>
										<div className='flex flex-wrap gap-2'>
											{selectedItem.allergens.map((allergen, index) => (
												<Badge
													key={index}
													variant='destructive'
													className='bg-red-100 text-red-800 hover:bg-red-200'
												>
													{allergen}
												</Badge>
											))}
										</div>
									</div>

									{/* Action Buttons */}
									<div className='flex space-x-4 pt-4'>
										<Button className='flex-1 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold'>
											Add to Cart
										</Button>
										<Button
											variant='outline'
											className='flex-1 border-yellow-500 text-yellow-600 hover:bg-yellow-50 bg-transparent'
										>
											Customize Order
										</Button>
									</div>
								</div>
							</>
						)}
					</DialogContent>
				</Dialog>
			</div>
		</section>
	);
}
