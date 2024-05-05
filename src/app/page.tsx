import FeatureCourse from "@/components/FeatureCourse";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Instructors from "@/components/Instructors";
import TestimonialCards from "@/components/TestimonialCards";
import UpcomingWebinars from "@/components/UpcomingWebinars";
import WhyChooseUS from "@/components/WhyChooseUS";
import Image from "next/image";

export default function Home() {
  return (
<main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
<HeroSection/>
<FeatureCourse/>
<WhyChooseUS/>
<TestimonialCards/>
<UpcomingWebinars/>
<Instructors/>
<Footer/>
</main>
    );
}
