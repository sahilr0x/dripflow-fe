import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

export const Hero = () => {
  return (
    <section className="pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-medium mb-8">
          <Sparkles className="h-4 w-4" />
          Introducing AI-Powered Newsletter Generation
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
          Turn websites into
          <br />
          <span className="bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 bg-clip-text text-transparent">
            engaging newsletters
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
          Power your content strategy with AI that crawls websites, extracts
          insights, and generates professional newsletters in seconds. No manual
          work required.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <Button
            size="lg"
            className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-8 py-4 text-lg font-semibold shadow-2xl hover:shadow-orange-500/25 transition-all duration-300"
          >
            Start for free (500 credits)
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="px-8 py-4 text-lg border-2 hover:bg-gray-50"
          >
            View Demo
          </Button>
        </div>

        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-red-500/20 blur-3xl"></div>
          <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 p-8 shadow-2xl">
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-6 text-left">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span className="text-gray-400 text-sm ml-4">200 Response</span>
              </div>
              <code className="text-green-400 text-sm">
                {`{
  "status": "success",
  "newsletter": {
    "title": "Weekly Tech Roundup",
    "content": "AI-generated content...",
    "sources": ["tech.com", "startup.io"]
  }
}`}
              </code>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
