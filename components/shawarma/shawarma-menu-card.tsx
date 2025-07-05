"use client"

import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Star, Flame } from "lucide-react"

interface ShawarmaMenuCardProps {
  name: string
  description: string
  price: string
  image: string
  badge?: "New" | "Bestseller" | "Popular" | "Spicy"
  rating?: number
  spiceLevel?: number
  onClick?: () => void
}

export default function ShawarmaMenuCard({
  name,
  description,
  price,
  image,
  badge,
  rating,
  spiceLevel,
  onClick,
}: ShawarmaMenuCardProps) {
  const getBadgeColor = (badgeType: string) => {
    switch (badgeType) {
      case "New":
        return "bg-green-500 text-white hover:bg-green-600"
      case "Bestseller":
        return "bg-red-500 text-white hover:bg-red-600"
      case "Popular":
        return "bg-orange-500 text-white hover:bg-orange-600"
      case "Spicy":
        return "bg-red-600 text-white hover:bg-red-700"
      default:
        return "bg-gray-500 text-white hover:bg-gray-600"
    }
  }

  return (
    <Card
      className="group hover:shadow-xl transition-all duration-300 border-orange-200 hover:border-orange-400 cursor-pointer transform hover:scale-105"
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
        <div className="absolute top-3 left-3 flex gap-2">
          {badge && <Badge className={getBadgeColor(badge)}>{badge}</Badge>}
          {spiceLevel && spiceLevel > 0 && (
            <Badge className="bg-red-500 text-white hover:bg-red-600 flex items-center gap-1">
              <Flame className="h-3 w-3" />
              {Array.from({ length: spiceLevel }, (_, i) => (
                <Flame key={i} className="h-2 w-2" />
              ))}
            </Badge>
          )}
        </div>
        {rating && (
          <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1 flex items-center space-x-1">
            <Star className="h-3 w-3 fill-orange-400 text-orange-400" />
            <span className="text-xs font-medium">{rating}</span>
          </div>
        )}
      </div>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <CardTitle className="text-lg text-gray-900 group-hover:text-orange-700 transition-colors">{name}</CardTitle>
          <span className="text-xl font-bold text-orange-600">{price}</span>
        </div>
      </CardHeader>
      <CardContent className="pt-0">
        <CardDescription className="text-gray-600 line-clamp-2 mb-4">{description}</CardDescription>
        <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-medium" size="sm">
          Add to Cart
        </Button>
      </CardContent>
    </Card>
  )
}
