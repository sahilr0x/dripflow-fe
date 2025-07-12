import Navbar from "@/components/Navigation";
import { Benefits } from "@/components/sections/Benefits";
import { BlogPreview } from "@/components/sections/BlogPreview";
import { Gallery } from "@/components/sections/Gallery";
import { Hero } from "@/components/sections/Hero";
import { InputForm } from "@/components/sections/InputForm";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <Navbar />
      <Hero />
      <InputForm />
      <Benefits />
      <Gallery />
      <BlogPreview />
      <Footer />
    </div>
  );
}
