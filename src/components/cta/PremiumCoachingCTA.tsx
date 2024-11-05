import React from 'react';
import { Video, Star, Users, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export function PremiumCoachingCTA() {
  const navigate = useNavigate();

  return (
    <div className="relative group">
      {/* Animated background effect */}
      <div className="absolute -inset-1 bg-gradient-to-r from-gold-light via-gold to-gold-dark rounded-2xl blur-lg opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-gradient"></div>
      
      <div className="relative flex flex-col sm:flex-row items-center gap-4 bg-gradient-to-r from-white to-gray-50 p-4 rounded-xl border border-gold/20 shadow-gold hover:shadow-xl transition-all duration-300">
        <div className="flex-1 space-y-2">
          <div className="flex items-center gap-2">
            <div className="flex -space-x-2">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-gradient-to-r from-gold-light to-gold flex items-center justify-center">
                  <Users className="h-4 w-4 text-white" />
                </div>
              ))}
            </div>
            <span className="text-sm text-gray-600">
              12 experts joined this week
            </span>
          </div>

          <h3 className="text-xl font-bold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-gold-dark">
              Expert Strategy Session
            </span>
          </h3>
          
          <div className="flex items-center gap-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-gold text-gold" />
              ))}
            </div>
            <span className="text-sm text-gray-600">
              4.9/5 from 200+ sessions
            </span>
          </div>
        </div>

        <button 
          onClick={() => navigate('/coaching')}
          className="group/btn relative inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-gold-light to-gold hover:from-gold hover:to-gold-dark text-gray-900 font-medium transition-all duration-300 shadow-gold hover:shadow-lg hover:scale-105 transform"
        >
          <Video className="h-5 w-5" />
          Book Free Session
          <ArrowRight className="h-5 w-5 group-hover/btn:translate-x-1 transition-transform" />
          
          {/* Floating tag */}
          <div className="absolute -top-3 -right-2 bg-primary text-white text-xs px-2 py-1 rounded-full shadow-lg">
            Limited Time
          </div>
        </button>
      </div>
    </div>
  );
}