import React from 'react';
import { Sparkles, Calendar, Target, MessageSquare } from 'lucide-react';

export function DashboardLoader() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary rounded-full mix-blend-multiply filter blur-[128px] opacity-10 animate-pulse" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          {/* Header Skeleton */}
          <div className="space-y-4 mb-8 animate-pulse">
            <div className="h-8 w-48 bg-primary/10 rounded-full" />
            <div className="h-12 w-3/4 bg-gray-200 rounded-xl" />
            <div className="h-6 w-1/2 bg-gray-100 rounded-lg" />
          </div>

          {/* Audio Player Skeleton */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-8 animate-pulse">
            <div className="space-y-4">
              <div className="h-8 w-48 bg-gray-100 rounded-lg" />
              <div className="h-2 bg-gray-100 rounded-full" />
              <div className="flex justify-between items-center">
                <div className="flex space-x-4">
                  <div className="h-10 w-10 bg-gray-100 rounded-full" />
                  <div className="h-10 w-10 bg-gray-100 rounded-full" />
                  <div className="h-10 w-10 bg-gray-100 rounded-full" />
                </div>
                <div className="h-10 w-10 bg-gray-100 rounded-full" />
              </div>
            </div>
          </div>

          {/* Strategy Cards Skeleton */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[<Target />, <Calendar />, <MessageSquare />].map((icon, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 animate-pulse">
                <div className="flex items-center justify-between mb-4">
                  <div className="h-6 w-32 bg-gray-100 rounded-lg" />
                  <div className="text-primary/20">{icon}</div>
                </div>
                <div className="space-y-2">
                  <div className="h-4 w-full bg-gray-100 rounded" />
                  <div className="h-4 w-5/6 bg-gray-100 rounded" />
                  <div className="h-4 w-4/6 bg-gray-100 rounded" />
                </div>
              </div>
            ))}
          </div>

          {/* Content Calendar Skeleton */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="p-6 border-b border-gray-200 animate-pulse">
              <div className="h-8 w-48 bg-gray-100 rounded-lg mb-2" />
              <div className="h-4 w-64 bg-gray-100 rounded" />
            </div>

            <div className="divide-y divide-gray-200">
              {[1, 2, 3].map((_, index) => (
                <div key={index} className="p-6 animate-pulse">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="w-16 h-16 bg-gray-100 rounded-xl" />
                      <div className="space-y-2">
                        <div className="h-6 w-32 bg-gray-100 rounded" />
                        <div className="h-4 w-24 bg-gray-100 rounded" />
                      </div>
                    </div>
                    <div className="h-8 w-24 bg-gray-100 rounded-full" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Loading Indicator */}
          <div className="fixed bottom-8 right-8 bg-white rounded-full shadow-lg p-4 animate-bounce">
            <Sparkles className="h-6 w-6 text-primary" />
          </div>
        </div>
      </div>
    </div>
  );
}