import React, { useState } from 'react';
import { ArrowRight, Video, Sparkles, Star, TrendingUp, Users, Zap, Calendar, MessageSquare, Target, Play, Shield, Award, CheckCircle2, Clock } from 'lucide-react';
import { YouTubePlayer } from '../components/video/YouTubePlayer';
import { CountdownTimer } from '../components/cta/CountdownTimer';
import { CoursePreview } from '../components/course/CoursePreview';

export function Coaching() {
  const [seatsLeft] = useState(3);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section - Cinematic Style */}
      <div className="relative min-h-[90vh] lg:min-h-screen flex items-center">
        {/* Video Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div 
            className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557682250-33bd709cbe85')] bg-cover bg-center transform scale-105"
            style={{ filter: 'brightness(0.3)' }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-70" />
        </div>

        <div className="relative w-full px-4 sm:px-6 lg:px-8 py-12 sm:py-0">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
              <div className="space-y-8">
                <div className="space-y-6">
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-yellow-500/10 text-yellow-500 text-sm font-medium">
                    <Sparkles className="h-3.5 w-3.5 mr-2" />
                    Premium Masterclass
                  </div>
                  <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold leading-tight">
                    Master the Art of
                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500">
                      Social Media
                    </span>
                  </h1>
                  <p className="text-xl sm:text-2xl text-gray-400 max-w-2xl">
                    Learn the exact strategies and systems used by industry leaders to build powerful social media presence
                  </p>
                </div>

                {/* Instructor Stats */}
                <div className="flex flex-wrap items-center gap-8">
                  <div className="flex items-center gap-4">
                    <div className="h-16 w-16 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 p-0.5">
                      <img 
                        src="https://i.ibb.co/TtbnqBL/440847208-1642563946500441-1560613000995393401-n.jpg" 
                        alt="Sirio Berati"
                        className="rounded-full object-cover w-full h-full"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-medium">Sirio Berati</h3>
                      <p className="text-gray-400">Social Media Expert</p>
                    </div>
                  </div>
                  <div className="hidden sm:block h-12 w-px bg-gray-800" />
                  <div className="space-y-2">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-6 w-6 fill-yellow-500 text-yellow-500" />
                      ))}
                    </div>
                    <p className="text-lg text-gray-400">500+ Success Stories</p>
                  </div>
                </div>

                {/* CTA Section */}
                <div className="space-y-6">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                    <div>
                      <div className="text-4xl font-bold text-yellow-400">$299 <span className="text-xl text-gray-500 line-through">$599</span></div>
                      <CountdownTimer darkMode={true} />
                    </div>
                    <button className="w-full sm:w-auto group relative inline-flex items-center justify-center px-10 py-5 rounded-full bg-yellow-500 text-black font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-xl overflow-hidden text-lg">
                      <span className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-yellow-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <span className="relative flex items-center">
                        Enroll Now
                        <ArrowRight className="ml-2 h-6 w-6 transform group-hover:translate-x-1 transition-transform" />
                      </span>
                    </button>
                  </div>

                  <div className="flex flex-wrap items-center gap-6 text-lg">
                    <span className="inline-flex items-center text-red-400">
                      <Users className="h-5 w-5 mr-2" />
                      Only {seatsLeft} spots left
                    </span>
                    <span className="hidden sm:inline text-gray-600">|</span>
                    <span className="text-gray-400">30-day money-back guarantee</span>
                  </div>
                </div>
              </div>

              {/* Featured Video with Premium Effect */}
              <div className="relative aspect-video lg:aspect-square xl:aspect-video">
                <div className="absolute -inset-4 bg-gradient-to-r from-yellow-500/20 to-yellow-600/20 rounded-2xl transform rotate-2 blur-lg" />
                <div className="absolute -inset-4 bg-gradient-to-r from-yellow-600/20 to-yellow-500/20 rounded-2xl transform -rotate-2 blur-lg" />
                <div className="relative transform hover:scale-105 transition-transform duration-700">
                  <YouTubePlayer 
                    videoId="37OnFjuCDR8"
                    title="Strategy Masterclass Preview"
                    className="rounded-xl shadow-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Course Preview Section - More Compact */}
      <div className="bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <CoursePreview />
        </div>
      </div>

      {/* Success Stories - More Compact */}
      <div className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f')] bg-cover bg-center opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/90 to-black" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Success Stories</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Join hundreds of successful students who have transformed their social media presence
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: "Sarah Johnson",
                role: "Marketing Director",
                company: "TechStart Inc.",
                growth: "156%",
                metric: "Engagement Increase",
                image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
                quote: "The masterclass transformed our social media strategy. We saw incredible growth within just 30 days."
              },
              {
                name: "Michael Chen",
                role: "Founder",
                company: "GrowthLabs",
                growth: "4.2x",
                metric: "Revenue Growth",
                image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
                quote: "Best investment for our startup. Our LinkedIn presence exploded after implementing the strategies."
              },
              {
                name: "Emma Davis",
                role: "Social Media Manager",
                company: "Retail Plus",
                growth: "298%",
                metric: "Follower Growth",
                image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
                quote: "The ROI exceeded our expectations. Clear, actionable insights that actually work."
              }
            ].map((story, index) => (
              <div key={index} className="group relative">
                <div className="absolute -inset-2 bg-gradient-to-r from-yellow-500/0 via-yellow-500/10 to-yellow-500/0 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-700" />
                <div className="relative bg-gray-900 rounded-xl p-6 border border-gray-800 hover:border-yellow-500/50 transition-all duration-500">
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <img 
                        src={story.image} 
                        alt={story.name}
                        className="w-16 h-16 rounded-full object-cover border-2 border-yellow-500/20"
                      />
                      <div>
                        <h3 className="font-bold text-lg">{story.name}</h3>
                        <p className="text-sm text-gray-400">{story.role}</p>
                        <p className="text-sm text-yellow-500">{story.company}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <div className="text-3xl font-bold text-yellow-400">{story.growth}</div>
                      <div className="text-sm text-gray-400">{story.metric}</div>
                    </div>

                    <blockquote className="text-gray-300 italic">"{story.quote}"</blockquote>

                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}