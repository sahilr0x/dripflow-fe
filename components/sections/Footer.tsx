import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Flame, Twitter, Github, Linkedin } from "lucide-react";

export const Footer = () => {
  const footerLinks = {
    Product: ["Features", "Pricing", "API", "Documentation", "Changelog"],
    Company: ["About", "Blog", "Careers", "Press", "Partners"],
    Resources: ["Help Center", "Community", "Tutorials", "Webinars", "Status"],
    Legal: ["Privacy", "Terms", "Security", "GDPR", "Cookies"],
  };

  return (
    <footer className="bg-gray-900 text-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Flame className="h-8 w-8 text-orange-500" />
              <span className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                Dripflow
              </span>
            </div>
            <p className="text-gray-400 text-lg mb-8 max-w-md">
              Transform websites into engaging newsletters with AI. Join
              thousands of content creators who trust Dripflow.
            </p>
            <div className="flex gap-4">
              <Button
                variant="ghost"
                size="icon"
                className="text-gray-400 hover:text-white"
              >
                <Twitter className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-gray-400 hover:text-white"
              >
                <Github className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-gray-400 hover:text-white"
              >
                <Linkedin className="h-5 w-5" />
              </Button>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
            <p className="text-gray-400 mb-6">
              Get the latest updates, tips, and exclusive content delivered to
              your inbox.
            </p>
            <div className="flex gap-3">
              <Input
                placeholder="Enter your email"
                className="bg-gray-800 border-gray-700 text-white placeholder-gray-400 flex-1"
              />
              <Button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 px-6">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-semibold mb-4 text-lg">{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 mb-4 md:mb-0">
            © 2024 Dripflow. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-400">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
