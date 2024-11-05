import React from 'react';
import { Sparkles, Zap, Brain, Rocket } from 'lucide-react';

export function AIShowcase() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-gray-50 to-white py-24">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]" />
      
      {/* Glowing Orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-yellow-200 rounded-full mix-blend-multiply filter blur-[128px] opacity-30 animate-pulse" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary rounded-full mix-blend-multiply filter blur-[128px] opacity-30 animate-pulse delay-1000" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-yellow-100/50 text-yellow-700 font-medium text-sm mb-8">
            <Sparkles className="h-4 w-4 mr-2" />
            AI-Powered Content Creation
          </div>
          
          <h2 className="text-5xl sm:text-6xl font-bold mb-6 leading-tight">
            Create Content at
            <span className="relative mx-4">
              <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
                Warp Speed
              </span>
              <span className="absolute inset-x-0 bottom-0 h-4 bg-yellow-200/30 -rotate-1" />
            </span>
          </h2>
          
          <p className="text-xl text-gray-600">
            Our AI analyzes millions of successful posts to generate engaging content that resonates with your audience
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <Brain className="h-8 w-8" />,
              title: "Smart Analysis",
              description: "AI-powered content optimization that learns from top-performing posts",
              color: "from-yellow-400/10 to-yellow-500/10",
              iconColor: "text-yellow-500"
            },
            {
              icon: <Zap className="h-8 w-8" />,
              title: "Lightning Fast",
              description: "Generate a month's worth of content in under 5 minutes",
              color: "from-primary/10 to-primary-dark/10",
              iconColor: "text-primary"
            },
            {
              icon: <Rocket className="h-8 w-8" />,
              title: "Performance Driven",
              description: "Data-backed strategies that drive real engagement",
              color: "from-yellow-500/10 to-primary/10",
              iconColor: "text-yellow-600"
            }
          ].map((feature, index) => (
            <div 
              key={index}
              className="relative group"
            >
              {/* Card */}
              <div className="relative h-full bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                {/* Icon */}
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${feature.color} ${feature.iconColor} mb-6`}>
                  {feature.icon}
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold mb-4 group-hover:text-yellow-600 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>

                {/* Metrics */}
                <div className="mt-8 pt-6 border-t border-gray-100">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">Success Rate</span>
                    <span className="font-medium text-yellow-600">98%</span>
                  </div>
                  <div className="mt-2 h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-yellow-400 to-yellow-600 w-[98%] animate-pulse"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-3 gap-8 max-w-3xl mx-auto text-center">
          {[
            { value: "1M+", label: "Posts Generated" },
            { value: "10x", label: "Faster Creation" },
            { value: "312%", label: "Avg. Engagement" }
          ].map((stat, index) => (
            <div key={index} className="space-y-2">
              <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-yellow-600">
                {stat.value}
              </div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}