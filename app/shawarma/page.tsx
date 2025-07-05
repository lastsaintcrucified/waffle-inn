import ShawarmaHero from "@/components/shawarma/shawarma-hero"
import ShawarmaMenu from "@/components/shawarma/shawarma-menu"
import ShawarmaReviews from "@/components/shawarma/shawarma-reviews"
import ShawarmaEvents from "@/components/shawarma/shawarma-events"
import ShawarmaUpcomingMenu from "@/components/shawarma/shawarma-upcoming-menu"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export const metadata = {
  title: "Shawarma Inn - Authentic Middle Eastern Cuisine | Waffle Shawarma House",
  description:
    "Experience authentic Middle Eastern shawarma made with premium meats and traditional spices. From classic chicken to gourmet beef varieties.",
}

export default function ShawarmaPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <ShawarmaHero />
      <ShawarmaMenu />
      <ShawarmaReviews />
      <ShawarmaEvents />
      <ShawarmaUpcomingMenu />
      <Footer />
    </div>
  )
}
