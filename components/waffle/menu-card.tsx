"use client"

import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Star } from "lucide-react"

interface MenuCardProps {
  name: string
  description: string
  price: string
  image: string
  badge?: "New" | "Bestseller" | "Popular"
  rating?: number
  onClick?: () => void
}

export default function MenuCard({ name, description, price, image, badge, rating, onClick }: MenuCardProps) {
  const getBadgeColor = (badgeType: string) => {
    switch (badgeType) {
      case "New":
        return "bg-green-500 text-white hover:bg-green-600"
      case "Bestseller":
        return "bg-red-500 text-white hover:bg-red-600"
      case "Popular":
        return "bg-yellow-500 text-black hover:bg-yellow-600"
      default:
        return "bg-gray-500 text-white hover:bg-gray-600"
    }
  }

  return (
    <Card
      className="group hover:shadow-xl transition-all duration-300 border-yellow-200 hover:border-yellow-400 cursor-pointer transform hover:scale-105"
      onClick={onClick}
    >
      <div className="relative overflow-hidden rounded-t-lg">
        <Image
          src={image || "/placeholder.svg"}
          alt={name}
          width={400}
          height={250}
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
        />
        {badge && <Badge className={`absolute top-3 left-3 ${getBadgeColor(badge)}`}>{badge}</Badge>}
        {rating && (
          <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1 flex items-center space-x-1">
            <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
            <span className="text-xs font-medium">{rating}</span>
          </div>
        )}
      </div>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <CardTitle className="text-lg text-gray-900 group-hover:text-yellow-700 transition-colors">{name}</CardTitle>
          <span className="text-xl font-bold text-yellow-600">{price}</span>
        </div>
      </CardHeader>
      <CardContent className="pt-0">
        <CardDescription className="text-gray-600 line-clamp-2 mb-4">{description}</CardDescription>
        <Button className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-medium" size="sm">
          Add to Cart
        </Button>
      </CardContent>
    </Card>
  )
}
