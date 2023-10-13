import Navbar from "@/components/ui/Navbar";
import AboutSection from "@/components/views/AboutSection";
import BestDeals from "@/components/views/BestDeals";
import BestItems from "@/components/views/BestItems";
import DownloadAppSection from "@/components/views/DownloadAppSection";
import FaqSection from "@/components/views/FaqSection";
import HeroSection from "@/components/views/HeroSection";
import HowItWorksSection from "@/components/views/HowItWorksSection";
import LatestBlogs from "@/components/views/LatestBlogs";
import TestimonialSection from "@/components/views/TestimonialSection";
import TopFeatures from "@/components/views/TopFeatures";

export default function Home() {
  return (
    <div className=" overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <TopFeatures />
      <BestDeals />
      <BestItems />
      <AboutSection />
      <HowItWorksSection />
      <DownloadAppSection />
      <LatestBlogs />
      <TestimonialSection />
      <FaqSection />
    </div>
  )
}
