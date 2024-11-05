import React, { useState, useEffect, lazy, Suspense } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Sparkles, Calendar, Target, MessageSquare, CheckCircle2, ArrowUpRight, Zap, Users, Instagram } from 'lucide-react';
import { Logo } from '../components/Logo';
import { ServiceCard } from '../components/landing/ServiceCard';
import { ServicesGrid } from '../components/landing/ServicesGrid';
import { ActiveUsersTable } from '../components/landing/ActiveUsersTable';

const DemoModal = lazy(() => import('../components/demo/DemoModal').then(module => ({ default: module.DemoModal })));

export function Landing() {
  const navigate = useNavigate();
  const [isDemoOpen, setIsDemoOpen] = useState(false);
  const [activeUsers, setActiveUsers] = useState(127);
  const [instagramHandle, setInstagramHandle] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveUsers(prev => prev + Math.floor(Math.random() * 3));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleStrategyGeneration = () => {
    if (instagramHandle) {
      localStorage.setItem('instagramHandle', instagramHandle);
    }
    navigate('/collect');
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-b from-blue-50 via-white to-white">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-pulse delay-1000" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-24 md:py-32">
          <div className="flex flex-col items-center text-center relative z-10">
            {/* Logo Animation */}
            <div className="flex flex-col items-center gap-4 mb-8 animate-fade-in-up">
              <div className="w-16 sm:w-20 h-16 sm:h-20 animate-float">
                <Logo />
              </div>
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary font-medium">
                <Sparkles className="h-4 w-4 mr-2" />
                VISIONAI
              </div>
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 animate-fade-in-up delay-100">
              <span className="block mb-2">Generate Your</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-500 to-primary-dark animate-gradient">
                Social Strategy
              </span>
            </h1>

            {/* Subheading */}
            <p className="max-w-2xl mx-auto text-xl sm:text-2xl text-gray-600 mb-10 leading-relaxed px-4 sm:px-0 animate-fade-in-up delay-200">
              Join <span className="font-semibold text-primary">{activeUsers.toLocaleString()}+</span> businesses using AI to create engaging social media strategies that drive real results.
            </p>

            {/* Instagram Handle Input */}
            <div className="w-full max-w-md mb-8 animate-fade-in-up delay-300">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Instagram className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  value={instagramHandle}
                  onChange={(e) => setInstagramHandle(e.target.value)}
                  placeholder="Enter your Instagram handle"
                  className="w-full pl-12 pr-4 py-4 rounded-xl border-2 border-gray-100 focus:border-primary focus:ring-primary transition-all"
                />
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8 w-full sm:w-auto px-4 sm:px-0 animate-fade-in-up delay-400">
              <button
                onClick={handleStrategyGeneration}
                className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-gradient-to-r from-primary to-primary-dark rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-xl shadow-lg overflow-hidden"
              >
                <span className="absolute inset-0 bg-white/20 group-hover:translate-x-full transition-transform duration-500" />
                Generate Your Strategy
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={() => setIsDemoOpen(true)}
                className="group inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-gray-600 hover:text-primary rounded-full transition-all duration-300 border-2 border-gray-200 hover:border-primary hover:shadow-lg"
              >
                Watch Demo
                <ArrowUpRight className="ml-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
              </button>
            </div>

            {/* Live Activity Table - Now below buttons for both mobile and desktop */}
            <div className="w-full max-w-lg mb-10 animate-fade-in-up delay-300">
              <ActiveUsersTable />
            </div>

            {/* Feature Tags */}
            <div className="flex flex-wrap justify-center gap-4 sm:gap-8 animate-fade-in-up delay-500">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 text-primary">
                <Zap className="h-5 w-5" />
                AI-Powered
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 text-primary">
                <Target className="h-5 w-5" />
                Instant Results
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 text-primary">
                <Users className="h-5 w-5" />
                100% Free
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              title="AI-Powered"
              highlight="Strategy"
              description="Our advanced AI analyzes your business data to create tailored social media strategies that drive engagement and growth."
              icon={<Sparkles className="h-8 w-8" />}
            />
            <ServiceCard
              title="Content"
              highlight="Calendar"
              description="Get a comprehensive content calendar with post ideas, optimal timing, and platform-specific recommendations."
              icon={<Calendar className="h-8 w-8" />}
            />
            <ServiceCard
              title="Brand"
              highlight="Voice"
              description="Develop a consistent and compelling brand voice that resonates with your target audience across all platforms."
              icon={<MessageSquare className="h-8 w-8" />}
            />
          </div>
        </div>
      </div>

      {/* AI Capabilities Section */}
      <div className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-4">
              <Sparkles className="h-4 w-4 mr-2" />
              AI Capabilities
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Everything You Need to
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-dark">
                Succeed Online
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Powered by advanced AI to streamline your social media workflow
            </p>
          </div>
          <ServicesGrid />
        </div>
      </div>

      {/* Powered By Section */}
      <div className="py-12 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-center space-y-4">
            <p className="text-sm text-gray-500">Powered by</p>
            <div className="h-8 sm:h-10">
              <Logo />
            </div>
            <span className="text-sm text-gray-500">VISIONREIMAGINE®</span>
          </div>
        </div>
      </div>

      {/* Demo Modal */}
      <Suspense fallback={null}>
        {isDemoOpen && <DemoModal isOpen={isDemoOpen} onClose={() => setIsDemoOpen(false)} />}
      </Suspense>
    </div>
  );
}