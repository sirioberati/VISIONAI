import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  highlight: string;
  description: string;
  icon: React.ReactNode;
}

export function ServiceCard({ title, highlight, description, icon }: ServiceCardProps) {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-service hover:shadow-lg transition-shadow">
      <div className="text-primary mb-4">{icon}</div>
      <h3 className="text-2xl font-bold mb-2">
        {title} <span className="text-primary">{highlight}</span>
      </h3>
      <p className="text-gray-600 mb-6">{description}</p>
      <button className="inline-flex items-center text-primary hover:text-primary-dark font-medium">
        Learn more
        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
      </button>
    </div>
  );
}