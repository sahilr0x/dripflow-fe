import Navbar from "@/components/Navigation";
import { Footer } from "@/components/sections/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Calendar, User, Clock, Tag } from "lucide-react";

export default function BlogPage() {
  const featuredPost = {
    title: "The Complete Guide to AI-Powered Newsletter Creation",
    excerpt:
      "Master the art of creating engaging newsletters with artificial intelligence. Learn strategies, best practices, and advanced techniques to transform your content workflow.",
    author: "Sarah Chen",
    date: "Dec 15, 2024",
    readTime: "12 min read",
    category: "AI & Technology",
    image: "/api/placeholder/600/300",
    featured: true,
  };

  const posts = [
    {
      title: "The Future of AI-Powered Content Creation",
      excerpt:
        "Discover how artificial intelligence is revolutionizing the way we create and distribute content across digital platforms.",
      author: "Sarah Chen",
      date: "Dec 10, 2024",
      readTime: "5 min read",
      category: "AI & Technology",
      image: "/api/placeholder/400/200",
    },
    {
      title: "10 Newsletter Design Trends for 2025",
      excerpt:
        "Stay ahead of the curve with these emerging design trends that are shaping the future of email marketing and newsletters.",
      author: "Mike Rodriguez",
      date: "Dec 8, 2024",
      readTime: "7 min read",
      category: "Design",
      image: "/api/placeholder/400/200",
    },
    {
      title: "Maximizing ROI with Automated Content Workflows",
      excerpt:
        "Learn how to streamline your content creation process and achieve better results with less manual effort.",
      author: "Emma Thompson",
      date: "Dec 5, 2024",
      readTime: "6 min read",
      category: "Business",
      image: "/api/placeholder/400/200",
    },
    {
      title: "How to Build an Engaged Email List in 2025",
      excerpt:
        "Proven strategies for growing your email list organically and maintaining high engagement rates in the modern digital landscape.",
      author: "Alex Johnson",
      date: "Dec 3, 2024",
      readTime: "8 min read",
      category: "Marketing",
      image: "/api/placeholder/400/200",
    },
    {
      title: "The Psychology of Newsletter Engagement",
      excerpt:
        "Understanding what makes readers open, click, and share your newsletters. Dive deep into the cognitive triggers that drive engagement.",
      author: "Dr. Lisa Wang",
      date: "Dec 1, 2024",
      readTime: "10 min read",
      category: "Psychology",
      image: "/api/placeholder/400/200",
    },
    {
      title: "Case Study: 500% Growth in Newsletter Subscriptions",
      excerpt:
        "How one startup used AI-powered content creation to dramatically increase their newsletter subscriptions and engagement rates.",
      author: "James Miller",
      date: "Nov 28, 2024",
      readTime: "6 min read",
      category: "Case Study",
      image: "/api/placeholder/400/200",
    },
  ];

  const categories = [
    "All",
    "AI & Technology",
    "Design",
    "Business",
    "Marketing",
    "Psychology",
    "Case Study",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Our{" "}
            <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
              Blog
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Insights, strategies, and expert advice to help you master
            AI-powered content creation and newsletter marketing
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === "All" ? "default" : "outline"}
                className={
                  category === "All"
                    ? "bg-gradient-to-r from-orange-500 to-red-500 text-white"
                    : ""
                }
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="px-6 pb-20">
        <div className="max-w-7xl mx-auto">
          <Card className="p-8 bg-white/80 backdrop-blur-sm border-0 shadow-2xl hover:shadow-3xl transition-all duration-300 mb-16">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <span className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    Featured
                  </span>
                  <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm font-medium">
                    {featuredPost.category}
                  </span>
                </div>

                <h2 className="text-3xl font-bold mb-4 leading-tight">
                  {featuredPost.title}
                </h2>

                <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                  {featuredPost.excerpt}
                </p>

                <div className="flex items-center justify-between text-sm text-gray-500 mb-6">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <User className="h-4 w-4" />
                      <span>{featuredPost.author}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>{featuredPost.date}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>{featuredPost.readTime}</span>
                  </div>
                </div>

                <Button
                  size="lg"
                  className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white"
                >
                  Read Full Article
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>

              <div className="relative">
                <div className="aspect-[4/3] bg-gradient-to-br from-orange-100 to-red-100 rounded-2xl flex items-center justify-center">
                  <div className="text-6xl">📰</div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="px-6 pb-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Latest Articles
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <Card
                key={index}
                className="p-6 bg-white/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="aspect-[16/9] bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg mb-4 flex items-center justify-center">
                  <div className="text-4xl">📊</div>
                </div>

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
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>{post.readTime}</span>
                  </div>
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

          {/* Load More Button */}
          <div className="text-center mt-12">
            <Button
              size="lg"
              variant="outline"
              className="px-8 py-4 text-lg border-2 hover:bg-orange-50 hover:border-orange-200"
            >
              Load More Articles
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="px-6 pb-20">
        <div className="max-w-4xl mx-auto">
          <Card className="p-12 bg-gradient-to-r from-orange-500 to-red-500 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">
              Stay Updated with Our Newsletter
            </h2>
            <p className="text-xl mb-8 text-orange-100">
              Get the latest insights on AI-powered content creation delivered
              to your inbox
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500"
              />
              <Button className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-3 font-semibold">
                Subscribe
              </Button>
            </div>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
}
