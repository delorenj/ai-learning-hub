import Navbar from "@/components/Navbar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Terminal, Brain, Database, Lightbulb } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Welcome to the Triumph AI Hub
          </h1>
          <p className="text-xl text-gray-600">
            Your source of guides, and a place to share ideas.
          </p>
        </div>

        {/* TODO: pull content from HowToGrid.md */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <Card className="hover:shadow-lg transition-all duration-300 hover:scale-[1.02] group">
            <CardHeader className="flex flex-row items-center space-y-0 pb-2">
              <Terminal className="h-6 w-6 text-blue-600 mr-3" />
              <div className="flex-1">
                <CardTitle className="flex items-center justify-between">
                  AI Command Line Tools
                  <Badge variant="secondary">New</Badge>
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription className="mb-4">
                Learn how to set up and use AI from the command line.
              </CardDescription>
              <Button variant="ghost" className="w-full justify-between group-hover:bg-blue-50">
                Get Started
                <ArrowRight className="h-4 w-4" />
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-all duration-300 hover:scale-[1.02] group">
            <CardHeader className="flex flex-row items-center space-y-0 pb-2">
              <Brain className="h-6 w-6 text-purple-600 mr-3" />
              <div className="flex-1">
                <CardTitle className="flex items-center justify-between">
                  Project-Based Memory
                  <Badge variant="secondary">Popular</Badge>
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription className="mb-4">
                Add memory capabilities to your Cursor threads.
              </CardDescription>
              <Button variant="ghost" className="w-full justify-between group-hover:bg-purple-50">
                Learn More
                <ArrowRight className="h-4 w-4" />
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-all duration-300 hover:scale-[1.02] group">
            <CardHeader className="flex flex-row items-center space-y-0 pb-2">
              <Database className="h-6 w-6 text-green-600 mr-3" />
              <div className="flex-1">
                <CardTitle>RAG Applications</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription className="mb-4">
                Create and fine-tune Retrieval-Augmented Generation applications.
              </CardDescription>
              <Button variant="ghost" className="w-full justify-between group-hover:bg-green-50">
                Explore
                <ArrowRight className="h-4 w-4" />
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-all duration-300 hover:scale-[1.02] group">
            <CardHeader className="flex flex-row items-center space-y-0 pb-2">
              <Lightbulb className="h-6 w-6 text-yellow-600 mr-3" />
              <div className="flex-1">
                <CardTitle>Prompt Engineering</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription className="mb-4">
                Implement best practices for prompt engineering.
              </CardDescription>
              <Button variant="ghost" className="w-full justify-between group-hover:bg-yellow-50">
                Start Learning
                <ArrowRight className="h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </main>

      <footer className="mt-16 py-8 border-t border-gray-200">
        <div className="container mx-auto px-4 text-center text-gray-600">
          <p>AI Workflow Workshop © 2025</p>
        </div>
      </footer>
    </div>
  );
}