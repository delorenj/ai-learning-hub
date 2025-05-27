import React from "react";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { FileQuestion } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navbar />
      
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-md mx-auto text-center">
          <FileQuestion className="h-24 w-24 text-primary mx-auto mb-6" />
          
          <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            Guide Not Found
          </h1>
          
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            Sorry, we could not find the how-to guide you are looking for. It may have been moved or deleted.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/howto">
              <Button>
                Browse All Guides
              </Button>
            </Link>
            
            <Link href="/">
              <Button variant="outline">
                Return Home
              </Button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
