import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin } from "lucide-react"

interface ShawarmaEventCardProps {
  name: string
  location: string
  date: string
  highlight: string
  image?: string
  status?: "upcoming" | "completed"
}

export default function ShawarmaEventCard({
  name,
  location,
  date,
  highlight,
  image,
  status = "completed",
}: ShawarmaEventCardProps) {
  return (
    <Card className="group hover:shadow-xl transition-all duration-300 border-orange-200 hover:border-orange-400">
      {image && (
        <div className="relative overflow-hidden rounded-t-lg">
          <Image
            src={image || "/placeholder.svg"}
            alt={name}
            width={400}
            height={200}
            className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <Badge
            className={`absolute top-3 right-3 ${
              status === "upcoming"
                ? "bg-green-500 text-white hover:bg-green-600"
                : "bg-orange-500 text-white hover:bg-orange-600"
            }`}
          >
            {status === "upcoming" ? "Upcoming" : "Completed"}
          </Badge>
        </div>
      )}
      <CardHeader>
        <CardTitle className="text-xl text-gray-900 group-hover:text-orange-700 transition-colors">{name}</CardTitle>
        <div className="space-y-2">
          <div className="flex items-center text-gray-600">
            <MapPin className="h-4 w-4 mr-2" />
            <span className="text-sm">{location}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <Calendar className="h-4 w-4 mr-2" />
            <span className="text-sm">{date}</span>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-gray-700 font-medium">{highlight}</CardDescription>
      </CardContent>
    </Card>
  )
}
