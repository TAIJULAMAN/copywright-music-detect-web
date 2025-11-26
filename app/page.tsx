import Hero from "@/components/hero";
import HowItWorks from "@/components/how-it-works";
import Features from "@/components/features";
import Pricing from "@/components/pricing";
import Testimonials from "@/components/testimonials";
import Blog from "@/components/blog";
import ImagePart from "@/components/imagePart";

export default function Home() {
  return (
    <main className="w-full">
      <Hero />
      <HowItWorks />
      <Pricing />
      <Features />
      <ImagePart />
      <Testimonials />
      <Blog />
    </main>
  );
}
