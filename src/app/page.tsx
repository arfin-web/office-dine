import Navbar from "@/components/ui/Navbar";
import BestDeals from "@/components/views/BestDeals";
import BestItems from "@/components/views/BestItems";
import HeroSection from "@/components/views/HeroSection";

export default function Home() {
  return (
    <div className=" overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <BestDeals />
      <BestItems />
    </div>
  )
}
