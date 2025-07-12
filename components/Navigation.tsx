import { Button } from "@/components/ui/button";
import { Flame } from "lucide-react";

export const Navigation = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Flame className="h-8 w-8 text-orange-500" />
            <span className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
              Dripflow
            </span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <a
              href="#features"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Features
            </a>
            <a
              href="#pricing"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Pricing
            </a>
            <a
              href="#gallery"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Gallery
            </a>
            <a
              href="#blog"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Blog
            </a>
          </div>

          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              className="text-gray-600 hover:text-gray-900"
            >
              Sign In
            </Button>
            <Button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white shadow-lg">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};
