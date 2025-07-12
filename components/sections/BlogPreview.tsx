import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Calendar, User } from "lucide-react";

export const BlogPreview = () => {
  const posts = [
    {
      title: "The Future of AI-Powered Content Creation",
      excerpt:
        "Discover how artificial intelligence is revolutionizing the way we create and distribute content across digital platforms.",
      author: "Sarah Chen",
      date: "Dec 10, 2024",
      readTime: "5 min read",
      category: "AI & Technology",
    },
    {
      title: "10 Newsletter Design Trends for 2025",
      excerpt:
        "Stay ahead of the curve with these emerging design trends that are shaping the future of email marketing and newsletters.",
      author: "Mike Rodriguez",
      date: "Dec 8, 2024",
      readTime: "7 min read",
      category: "Design",
    },
    {
      title: "Maximizing ROI with Automated Content Workflows",
      excerpt:
        "Learn how to streamline your content creation process and achieve better results with less manual effort.",
      author: "Emma Thompson",
      date: "Dec 5, 2024",
      readTime: "6 min read",
      category: "Business",
    },
  ];

  return (
    <section
      id="blog"
      className="py-20 px-6 bg-gradient-to-br from-blue-50 to-indigo-100"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Latest from Our{" "}
            <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
              Blog
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Insights, tips, and strategies to help you master AI-powered content
            creation
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {posts.map((post, index) => (
            <Card
              key={index}
              className="p-6 bg-white/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="mb-4">
                <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm font-medium">
                  {post.category}
                </span>
              </div>

              <h3 className="text-xl font-bold mb-3 leading-tight">
                {post.title}
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                {post.excerpt}
              </p>

              <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1">
                    <User className="h-4 w-4" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>{post.date}</span>
                  </div>
                </div>
                <span>{post.readTime}</span>
              </div>

              <Button
                variant="ghost"
                className="p-0 h-auto text-orange-600 hover:text-orange-700 font-semibold"
              >
                Read More
                <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button
            size="lg"
            className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-8 py-4 text-lg font-semibold"
          >
            View All Posts
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};
