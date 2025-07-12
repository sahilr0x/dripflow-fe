import Navbar from "@/components/Navigation";
import { Pricing } from "@/components/sections/Pricing";
import { Footer } from "@/components/sections/Footer";

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <Navbar />
      <div className="pt-20">
        <Pricing />
      </div>
      <Footer />
    </div>
  );
}
