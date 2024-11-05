import React from 'react';
import { TrendingUp, Users, Zap } from 'lucide-react';

export function ValueMetrics() {
  return (
    <div className="grid grid-cols-3 gap-4">
      <div className="text-center p-4 bg-primary/5 rounded-xl">
        <div className="flex justify-center mb-2">
          <TrendingUp className="h-6 w-6 text-primary" />
        </div>
        <div className="font-bold text-2xl text-gray-900">347%</div>
        <div className="text-sm text-gray-600">Avg. Growth</div>
      </div>
      
      <div className="text-center p-4 bg-primary/5 rounded-xl">
        <div className="flex justify-center mb-2">
          <Users className="h-6 w-6 text-primary" />
        </div>
        <div className="font-bold text-2xl text-gray-900">5,000+</div>
        <div className="text-sm text-gray-600">Community Members</div>
      </div>
      
      <div className="text-center p-4 bg-primary/5 rounded-xl">
        <div className="flex justify-center mb-2">
          <Zap className="h-6 w-6 text-primary" />
        </div>
        <div className="font-bold text-2xl text-gray-900">24/7</div>
        <div className="text-sm text-gray-600">AI Support</div>
      </div>
    </div>
  );
}