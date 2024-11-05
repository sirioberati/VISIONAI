import React from 'react';
import { Check } from 'lucide-react';

interface StepIndicatorProps {
  currentStep: number;
  totalSteps: number;
  title: string;
}

export function StepIndicator({ currentStep, totalSteps, title }: StepIndicatorProps) {
  return (
    <div className="flex items-center justify-between mb-8">
      <div className="space-y-1">
        <h2 className="text-2xl font-bold text-white">{title}</h2>
        <p className="text-white/60">Step {currentStep + 1} of {totalSteps}</p>
      </div>
      <div className="flex items-center space-x-2">
        {Array.from({ length: totalSteps }).map((_, index) => (
          <div
            key={index}
            className={`w-8 h-8 rounded-full flex items-center justify-center ${
              index < currentStep
                ? 'bg-primary text-white'
                : index === currentStep
                ? 'bg-primary/20 text-primary border-2 border-primary'
                : 'bg-white/5 text-white/60'
            }`}
          >
            {index < currentStep ? (
              <Check className="h-4 w-4" />
            ) : (
              <span className="text-sm">{index + 1}</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}