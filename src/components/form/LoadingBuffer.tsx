import React from 'react';
import { Sparkles } from 'lucide-react';

export function LoadingBuffer() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="max-w-md w-full mx-auto px-4 text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6 animate-pulse">
          <Sparkles className="h-8 w-8 text-primary" />
        </div>
        
        <h2 className="text-3xl font-bold text-gray-900 mb-3">Generating Your Strategy</h2>
        <p className="text-gray-500 mb-8">Our AI is analyzing your business data and crafting a personalized social media strategy...</p>
        
        {/* Loading Animation */}
        <div className="space-y-4">
          <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
            <div 
              className="h-full bg-primary animate-[loading_2s_ease-in-out_infinite]"
              style={{
                width: '90%',
                animation: 'loading 2s ease-in-out infinite',
                background: 'linear-gradient(to right, #1E90FF, #1873CC)',
              }}
            />
          </div>
          
          <div className="flex justify-center gap-8 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary/40 animate-pulse" />
              Analyzing Data
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary/40 animate-pulse" />
              Creating Strategy
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary/40 animate-pulse" />
              Optimizing Content
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}