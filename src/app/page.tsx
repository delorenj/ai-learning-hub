import Navbar from "@/components/Navbar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

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
          <Card className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardHeader>
              <CardTitle>AI Command Line Tools</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Learn how to set up and use AI from the command line.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardHeader>
              <CardTitle>Project-Based Memory</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Add memory capabilities to your Cursor threads.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardHeader>
              <CardTitle>RAG Applications</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Create and fine-tune Retrieval-Augmented Generation applications.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardHeader>
              <CardTitle>Prompt Engineering</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Implement best practices for prompt engineering.
              </CardDescription>
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