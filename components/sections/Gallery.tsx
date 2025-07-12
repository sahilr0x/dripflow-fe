import { Card } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

export const Gallery = () => {
  const examples = [
    {
      input: "tech.startup.com",
      output: "Weekly Tech Digest",
      description: "Startup news and trends",
    },
    {
      input: "finance.blog.io",
      output: "Market Insights Weekly",
      description: "Financial market analysis",
    },
    {
      input: "health.wellness.org",
      output: "Wellness Wednesday",
      description: "Health tips and research",
    },
  ];

  return (
    <section
      id="gallery"
      className="py-20 px-6 bg-gradient-to-br from-gray-50 to-slate-100"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            From Website to{" "}
            <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
              Newsletter
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how our AI transforms raw website content into polished,
            engaging newsletters
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {examples.map((example, index) => (
            <div key={index} className="flex flex-col items-center">
              <Card className="w-full p-6 mb-4 border-2 border-dashed border-gray-300 bg-white/50">
                <div className="text-center">
                  <div className="w-12 h-12 bg-gray-200 rounded-lg mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl">🌐</span>
                  </div>
                  <h3 className="font-mono text-lg text-gray-700">
                    {example.input}
                  </h3>
                  <p className="text-sm text-gray-500 mt-2">
                    {example.description}
                  </p>
                </div>
              </Card>

              <div className="flex items-center justify-center my-4">
                <ArrowRight className="h-8 w-8 text-orange-500" />
              </div>

              <Card className="w-full p-6 bg-gradient-to-br from-orange-50 to-red-50 border-2 border-orange-200 shadow-lg">
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl">📧</span>
                  </div>
                  <h3 className="font-bold text-lg text-gray-900">
                    {example.output}
                  </h3>
                  <p className="text-sm text-gray-600 mt-2">
                    AI-generated newsletter
                  </p>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
