/* eslint-disable react/no-unescaped-entities */
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

interface ReviewCardProps {
	name: string;
	rating: number;
	comment: string;
	avatar?: string;
	date?: string;
}

export default function ReviewCard({
	name,
	rating,
	comment,
	avatar,
	date,
}: ReviewCardProps) {
	return (
		<Card className='h-full hover:shadow-lg transition-all duration-300 border-yellow-200 hover:border-yellow-400'>
			<CardContent className='p-6'>
				<div className='flex items-center mb-4'>
					<Avatar className='h-12 w-12 mr-4'>
						<AvatarImage
							src={avatar || "/placeholder.svg"}
							alt={name}
						/>
						<AvatarFallback className='bg-yellow-100 text-yellow-700 font-semibold'>
							{name
								.split(" ")
								.map((n) => n[0])
								.join("")}
						</AvatarFallback>
					</Avatar>
					<div className='flex-1'>
						<h4 className='font-semibold text-gray-900'>{name}</h4>
						{date && <p className='text-sm text-gray-500'>{date}</p>}
					</div>
				</div>

				<div className='flex items-center mb-4'>
					{[...Array(5)].map((_, i) => (
						<Star
							key={i}
							className={`h-4 w-4 ${
								i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
							}`}
						/>
					))}
					<span className='ml-2 text-sm font-medium text-gray-600'>
						{rating}/5
					</span>
				</div>

				<p className='text-gray-600 italic leading-relaxed'>"{comment}"</p>
			</CardContent>
		</Card>
	);
}
