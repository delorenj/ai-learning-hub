import React from "react";
import Navbar from "@/components/Navbar";

export default function LoadingHowTo() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navbar />
      
      <main className="container mx-auto px-4 py-16">
        <div className="text-center mb-8">
          <div className="h-10 w-64 bg-gray-200 dark:bg-gray-700 rounded-md mx-auto mb-4 animate-pulse"></div>
          <div className="h-6 w-96 bg-gray-200 dark:bg-gray-700 rounded-md mx-auto animate-pulse"></div>
        </div>

        <div className="max-w-4xl mx-auto mb-8">
          <div className="h-10 bg-gray-200 dark:bg-gray-700 rounded-md animate-pulse mb-4"></div>
          <div className="flex gap-2 flex-wrap">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="h-6 w-16 bg-gray-200 dark:bg-gray-700 rounded-full animate-pulse"></div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6 animate-pulse">
              <div className="flex items-center mb-4">
                <div className="h-6 w-6 rounded-full bg-gray-200 dark:bg-gray-700 mr-3"></div>
                <div className="flex-1">
                  <div className="h-5 bg-gray-200 dark:bg-gray-700 rounded-md w-3/4"></div>
                </div>
              </div>
              <div className="space-y-3">
                <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded-md w-full"></div>
                <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded-md w-5/6"></div>
              </div>
              <div className="flex gap-2 my-4">
                <div className="h-5 w-12 bg-gray-200 dark:bg-gray-700 rounded-full"></div>
                <div className="h-5 w-12 bg-gray-200 dark:bg-gray-700 rounded-full"></div>
              </div>
              <div className="h-9 bg-gray-200 dark:bg-gray-700 rounded-md w-full mt-4"></div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
