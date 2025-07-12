import { Card } from "@/components/ui/card";
import { Clock, DollarSign, Sparkles } from "lucide-react";

export const Benefits = () => {
  const benefits = [
    {
      icon: Clock,
      title: "Save Time",
      description:
        "Generate professional newsletters in seconds, not hours. Our AI does the heavy lifting so you can focus on strategy.",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: DollarSign,
      title: "Cut Costs",
      description:
        "Replace expensive content teams with AI that never sleeps. Reduce newsletter production costs by up to 90%.",
      gradient: "from-green-500 to-emerald-500",
    },
    {
      icon: Sparkles,
      title: "AI Quality",
      description:
        "Advanced AI models ensure your newsletters are engaging, well-structured, and optimized for your audience.",
      gradient: "from-purple-500 to-pink-500",
    },
  ];

  return (
    <section id="features" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Why Choose{" "}
            <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
              Dripflow
            </span>
            ?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transform your content workflow with AI-powered automation that
            delivers results
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Card
              key={index}
              className="p-8 border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-white/80 backdrop-blur-sm"
            >
              <div
                className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${benefit.gradient} flex items-center justify-center mb-6 shadow-lg`}
              >
                <benefit.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">{benefit.title}</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                {benefit.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
