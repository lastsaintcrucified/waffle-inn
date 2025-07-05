import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import MenuSection from "@/components/menu-section";
import AboutUs from "@/components/about-us";
import ReviewSection from "@/components/review-section";
import Footer from "@/components/footer";
import MapSection from "@/components/map-section";

export default function Home() {
	return (
		<div className='min-h-screen bg-white'>
			<Navbar />
			<Hero />
			<MenuSection />
			<AboutUs />
			<ReviewSection />
			<MapSection />
			<Footer />
		</div>
	);
}
