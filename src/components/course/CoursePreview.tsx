import React, { useState } from 'react';
import { Play, Lock, Clock, Star, CheckCircle2, ArrowRight } from 'lucide-react';

const modules = [
  {
    title: "The Foundation",
    subtitle: "Master the Core Principles",
    description: "Learn the fundamental strategies that drive social media success",
    duration: "3h 45m",
    lessons: [
      { title: "The Psychology of Social Media", duration: "45m", free: true },
      { title: "Building Your Brand DNA", duration: "55m", free: true },
      { title: "Content That Converts", duration: "45m", free: false },
      { title: "Platform Selection Strategy", duration: "40m", free: false },
    ]
  },
  {
    title: "Content Creation",
    subtitle: "Craft Compelling Stories",
    description: "Transform your ideas into engaging social media content",
    duration: "4h 20m",
    lessons: [
      { title: "Visual Storytelling Mastery", duration: "60m", free: true },
      { title: "Writing for Social Media", duration: "45m", free: true },
      { title: "Video Content Excellence", duration: "55m", free: false },
      { title: "Advanced Content Frameworks", duration: "50m", free: false },
    ]
  },
  {
    title: "Growth & Engagement",
    subtitle: "Scale Your Presence",
    description: "Implement proven strategies to grow your following",
    duration: "4h 15m",
    lessons: [
      { title: "Organic Growth Techniques", duration: "55m", free: false },
      { title: "Community Building", duration: "45m", free: false },
      { title: "Engagement Optimization", duration: "50m", free: false },
      { title: "Viral Content Triggers", duration: "45m", free: false },
    ]
  },
  {
    title: "Monetization",
    subtitle: "Generate Revenue",
    description: "Turn your social media presence into a profitable business",
    duration: "4h 30m",
    lessons: [
      { title: "Business Model Design", duration: "60m", free: false },
      { title: "Product Launch Strategy", duration: "45m", free: false },
      { title: "Influencer Partnerships", duration: "55m", free: false },
      { title: "Revenue Optimization", duration: "50m", free: false },
    ]
  },
  {
    title: "Analytics & Scale",
    subtitle: "Measure & Optimize",
    description: "Use data to refine and scale your strategy",
    duration: "3h 50m",
    lessons: [
      { title: "Key Metrics Mastery", duration: "45m", free: false },
      { title: "Data-Driven Decisions", duration: "50m", free: false },
      { title: "Scaling Systems", duration: "45m", free: false },
      { title: "Advanced Analytics", duration: "50m", free: false },
    ]
  }
];

export function CoursePreview() {
  const [activeModule, setActiveModule] = useState(0);
  const [showAllModules, setShowAllModules] = useState(false);

  return (
    <div className="bg-black text-white">
      {/* Module Selection - Mobile Dropdown */}
      <div className="lg:hidden px-4 py-6">
        <select 
          value={activeModule}
          onChange={(e) => setActiveModule(Number(e.target.value))}
          className="w-full bg-gray-900 text-white border border-gray-800 rounded-lg px-4 py-3"
        >
          {modules.map((module, index) => (
            <option key={index} value={index}>
              Module {index + 1}: {module.title}
            </option>
          ))}
        </select>
      </div>

      {/* Current Module Preview */}
      <div className="relative min-h-[500px] lg:h-[600px] overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(https://images.unsplash.com/photo-1661956602116-aa6865609028?auto=format&fit=crop&q=80)`,
          }}
        >
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
        </div>

        {/* Content */}
        <div className="relative h-full flex items-center py-8 lg:py-0">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Left Column */}
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-xl bg-yellow-500/20 flex items-center justify-center">
                    <Play className="h-6 w-6 text-yellow-500" />
                  </div>
                  <div>
                    <div className="text-yellow-500 font-medium">Module {activeModule + 1}</div>
                    <h2 className="text-2xl lg:text-3xl font-bold">{modules[activeModule].title}</h2>
                  </div>
                </div>
                
                <p className="text-lg lg:text-xl text-gray-300">{modules[activeModule].subtitle}</p>
                <p className="text-gray-400 text-sm lg:text-base">{modules[activeModule].description}</p>
                
                <div className="flex items-center gap-6 text-sm lg:text-base">
                  <div className="flex items-center gap-2">
                    <Clock className="h-5 w-5 text-yellow-500" />
                    <span>{modules[activeModule].duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Star className="h-5 w-5 text-yellow-500" />
                    <span>4.9/5 Rating</span>
                  </div>
                </div>

                <button className="w-full sm:w-auto group relative inline-flex items-center justify-center px-8 py-4 rounded-xl bg-yellow-500 text-black font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-xl overflow-hidden">
                  <span className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-yellow-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="relative flex items-center">
                    Start Learning Now
                    <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
                  </span>
                </button>
              </div>

              {/* Right Column - Lessons */}
              <div className="bg-gray-900/50 backdrop-blur-md rounded-2xl p-4 lg:p-6 border border-gray-800">
                <div className="space-y-3 lg:space-y-4">
                  {modules[activeModule].lessons.map((lesson, index) => (
                    <div 
                      key={index}
                      className="group flex items-center justify-between p-3 lg:p-4 rounded-xl bg-gray-800/50 hover:bg-gray-800 transition-colors"
                    >
                      <div className="flex items-center gap-3 lg:gap-4">
                        <div className={`h-8 w-8 lg:h-10 lg:w-10 rounded-lg ${lesson.free ? 'bg-yellow-500/20' : 'bg-gray-700'} flex items-center justify-center`}>
                          {lesson.free ? (
                            <Play className="h-4 w-4 lg:h-5 lg:w-5 text-yellow-500" />
                          ) : (
                            <Lock className="h-4 w-4 lg:h-5 lg:w-5 text-gray-400" />
                          )}
                        </div>
                        <div>
                          <h3 className="font-medium text-sm lg:text-base">{lesson.title}</h3>
                          <p className="text-xs lg:text-sm text-gray-400">{lesson.duration}</p>
                        </div>
                      </div>
                      {lesson.free && (
                        <span className="px-2 lg:px-3 py-1 rounded-full text-xs font-medium bg-yellow-500/10 text-yellow-500">
                          Preview
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Module Navigation - Desktop */}
      <div className="hidden lg:block bg-gray-900 border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-5 divide-x divide-gray-800">
            {modules.map((module, index) => (
              <button
                key={index}
                onClick={() => setActiveModule(index)}
                className={`p-6 text-left transition-colors ${
                  activeModule === index 
                    ? 'bg-gray-800' 
                    : 'hover:bg-gray-800/50'
                }`}
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-400">Module {index + 1}</span>
                    <span className="text-sm text-gray-400">{module.duration}</span>
                  </div>
                  <h3 className="font-medium">{module.title}</h3>
                  <p className="text-sm text-gray-400">{module.subtitle}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Module List - Mobile Accordion */}
      <div className="lg:hidden bg-gray-900 border-t border-gray-800">
        <div className="max-w-6xl mx-auto">
          <button
            onClick={() => setShowAllModules(!showAllModules)}
            className="w-full px-4 py-3 flex items-center justify-between text-gray-300 hover:bg-gray-800/50"
          >
            <span className="font-medium">View All Modules</span>
            <ArrowRight className={`h-5 w-5 transform transition-transform ${showAllModules ? 'rotate-90' : ''}`} />
          </button>
          
          {showAllModules && (
            <div className="divide-y divide-gray-800">
              {modules.map((module, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setActiveModule(index);
                    setShowAllModules(false);
                  }}
                  className={`w-full p-4 text-left ${
                    activeModule === index ? 'bg-gray-800' : ''
                  }`}
                >
                  <div className="space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-400">Module {index + 1}</span>
                      <span className="text-sm text-gray-400">{module.duration}</span>
                    </div>
                    <h3 className="font-medium">{module.title}</h3>
                    <p className="text-sm text-gray-400">{module.subtitle}</p>
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}