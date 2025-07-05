import WaffleHero from "@/components/waffle/waffle-hero"
import WaffleMenu from "@/components/waffle/waffle-menu"
import WaffleReviews from "@/components/waffle/waffle-reviews"
import WaffleEvents from "@/components/waffle/waffle-events"
import UpcomingMenu from "@/components/waffle/upcoming-menu"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export const metadata = {
  title: "Waffle Inn - Premium Belgian Waffles | Waffle Shawarma House",
  description:
    "Discover our authentic Belgian waffles made fresh daily. From classic to gourmet varieties, experience the perfect crispy exterior and fluffy interior.",
}

export default function WafflePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <WaffleHero />
      <WaffleMenu />
      <WaffleReviews />
      <WaffleEvents />
      <UpcomingMenu />
      <Footer />
    </div>
  )
}
