import React from 'react';
import { 
  Sparkles,
  Zap,
  Target,
  MessageSquare,
  BarChart2,
  ArrowRight,
  Calendar
} from 'lucide-react';

const capabilities = [
  {
    icon: <Sparkles className="h-6 w-6" />,
    title: 'AI Content Generation',
    description: 'Generate engaging posts, captions, and hashtags tailored to your brand voice.',
    metrics: {
      label: 'Content Quality',
      value: '98%',
      color: 'from-yellow-400 to-yellow-600'
    }
  },
  {
    icon: <Calendar className="h-6 w-6" />,
    title: 'Smart Scheduling',
    description: "AI determines the optimal posting times based on your audience's activity patterns.",
    metrics: {
      label: 'Engagement Rate',
      value: '3.2x',
      color: 'from-primary to-primary-dark'
    }
  },
  {
    icon: <Target className="h-6 w-6" />,
    title: 'Audience Insights',
    description: 'Deep learning algorithms analyze your audience to optimize content strategy.',
    metrics: {
      label: 'Targeting Accuracy',
      value: '94%',
      color: 'from-yellow-500 to-primary'
    }
  },
  {
    icon: <MessageSquare className="h-6 w-6" />,
    title: 'Brand Voice AI',
    description: 'Maintain consistent messaging across all platforms with AI-powered tone analysis.',
    metrics: {
      label: 'Brand Consistency',
      value: '96%',
      color: 'from-primary to-yellow-500'
    }
  },
  {
    icon: <Zap className="h-6 w-6" />,
    title: 'Trend Detection',
    description: 'Real-time trend analysis to keep your content relevant and engaging.',
    metrics: {
      label: 'Trend Accuracy',
      value: '91%',
      color: 'from-yellow-400 to-primary'
    }
  },
  {
    icon: <BarChart2 className="h-6 w-6" />,
    title: 'Performance Analytics',
    description: 'AI-powered insights to continuously optimize your social media strategy.',
    metrics: {
      label: 'Growth Rate',
      value: '2.8x',
      color: 'from-primary-dark to-primary'
    }
  }
];

export function ServicesGrid() {
  return (
    <div className="relative">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-50/50 -z-10" />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {capabilities.map((capability, index) => (
          <div 
            key={index}
            className="group relative bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100/50 backdrop-blur-sm"
          >
            {/* Icon */}
            <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-gray-50 to-white text-primary mb-4">
              {capability.icon}
            </div>

            {/* Content */}
            <h3 className="text-xl font-semibold mb-3 text-gray-900">
              {capability.title}
            </h3>
            
            <p className="text-gray-600 mb-6">
              {capability.description}
            </p>

            {/* Metrics */}
            <div className="mt-auto">
              <div className="flex items-center justify-between text-sm mb-2">
                <span className="text-gray-500">{capability.metrics.label}</span>
                <span className="font-medium text-primary">{capability.metrics.value}</span>
              </div>
              <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
                <div 
                  className={`h-full bg-gradient-to-r ${capability.metrics.color} w-[96%] animate-progress-pulse`}
                />
              </div>
            </div>

            {/* Hover Effect */}
            <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
              <ArrowRight className="h-5 w-5 text-primary transform group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}