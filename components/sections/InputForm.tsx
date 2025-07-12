"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link, Upload, Image, MessageSquare, Send } from "lucide-react";
import { useState } from "react";

export const InputForm = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => setIsLoading(false), 2000);
  };

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Multi-Modal Input</h2>
          <p className="text-xl text-gray-600">
            Choose your content source and let AI do the rest
          </p>
        </div>

        <Card className="p-8 shadow-2xl border-0 bg-white/80 backdrop-blur-sm">
          <Tabs defaultValue="url" className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-8">
              <TabsTrigger value="url" className="flex items-center gap-2">
                <Link className="h-4 w-4" />
                URL
              </TabsTrigger>
              <TabsTrigger value="file" className="flex items-center gap-2">
                <Upload className="h-4 w-4" />
                File
              </TabsTrigger>
              <TabsTrigger value="image" className="flex items-center gap-2">
                <Image className="h-4 w-4" />
                Image
              </TabsTrigger>
              <TabsTrigger value="text" className="flex items-center gap-2">
                <MessageSquare className="h-4 w-4" />
                Text
              </TabsTrigger>
            </TabsList>

            <form onSubmit={handleSubmit}>
              <TabsContent value="url" className="space-y-4">
                <Input
                  placeholder="https://example.com"
                  className="h-14 text-lg border-2 focus:border-orange-500"
                />
                <Textarea
                  placeholder="Additional instructions for the AI (optional)"
                  className="min-h-24 border-2 focus:border-orange-500"
                />
              </TabsContent>

              <TabsContent value="file" className="space-y-4">
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-12 text-center hover:border-orange-500 transition-colors">
                  <Upload className="h-12 w-12 mx-auto mb-4 text-gray-400" />
                  <p className="text-lg text-gray-600">
                    Drop your file here or click to browse
                  </p>
                  <p className="text-sm text-gray-400 mt-2">
                    Supports PDF, DOC, TXT, CSV
                  </p>
                </div>
              </TabsContent>

              <TabsContent value="image" className="space-y-4">
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-12 text-center hover:border-orange-500 transition-colors">
                  <Image className="h-12 w-12 mx-auto mb-4 text-gray-400" />
                  <p className="text-lg text-gray-600">
                    Upload an image to extract content
                  </p>
                  <p className="text-sm text-gray-400 mt-2">
                    Supports JPG, PNG, WEBP
                  </p>
                </div>
              </TabsContent>

              <TabsContent value="text" className="space-y-4">
                <Textarea
                  placeholder="Paste your content here..."
                  className="min-h-48 text-lg border-2 focus:border-orange-500"
                />
              </TabsContent>

              <Button
                type="submit"
                size="lg"
                disabled={isLoading}
                className="w-full mt-6 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white h-14 text-lg font-semibold"
              >
                {isLoading ? (
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    Generating Newsletter...
                  </div>
                ) : (
                  <>
                    Generate Newsletter
                    <Send className="ml-2 h-5 w-5" />
                  </>
                )}
              </Button>
            </form>
          </Tabs>
        </Card>
      </div>
    </section>
  );
};
