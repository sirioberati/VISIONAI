import React from 'react';
import { X } from 'lucide-react';

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function DemoModal({ isOpen, onClose }: DemoModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex min-h-screen items-center justify-center p-4">
        {/* Backdrop */}
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
          onClick={onClose}
        />

        {/* Modal */}
        <div className="relative w-full max-w-4xl rounded-2xl bg-white p-6 shadow-xl">
          <button
            onClick={onClose}
            className="absolute right-4 top-4 text-gray-400 hover:text-gray-600"
          >
            <X className="h-6 w-6" />
          </button>

          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">See VISIONAI in Action</h2>
            
            {/* Demo Video Container */}
            <div className="aspect-video w-full rounded-xl bg-gray-100 overflow-hidden">
              <div className="flex h-full items-center justify-center">
                <div className="text-center">
                  <div className="mb-4 animate-pulse">
                    <div className="mx-auto h-16 w-16 rounded-full bg-primary/20 p-4">
                      <svg className="h-full w-full text-primary" viewBox="0 0 24 24">
                        <path
                          fill="currentColor"
                          d="M8 5v14l11-7z"
                        />
                      </svg>
                    </div>
                  </div>
                  <p className="text-gray-500">Demo video coming soon!</p>
                  <p className="text-sm text-gray-400">Experience our AI-powered social media strategy builder</p>
                </div>
              </div>
            </div>

            {/* Key Features */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              <div className="rounded-lg bg-gray-50 p-4">
                <h3 className="font-medium text-gray-900">Smart Analysis</h3>
                <p className="text-sm text-gray-500">AI-powered business data analysis for targeted strategies</p>
              </div>
              <div className="rounded-lg bg-gray-50 p-4">
                <h3 className="font-medium text-gray-900">Content Calendar</h3>
                <p className="text-sm text-gray-500">Automated content planning and scheduling</p>
              </div>
              <div className="rounded-lg bg-gray-50 p-4">
                <h3 className="font-medium text-gray-900">Brand Voice</h3>
                <p className="text-sm text-gray-500">Consistent messaging across all platforms</p>
              </div>
            </div>

            {/* CTA */}
            <div className="flex justify-center">
              <button
                onClick={onClose}
                className="inline-flex items-center rounded-full bg-primary px-6 py-3 text-white hover:bg-primary-dark"
              >
                Try It Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}