import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ServiceLinkProps {
  text: string;
}

export function ServiceLink({ text }: ServiceLinkProps) {
  return (
    <div className="group border-b border-gray-200 py-4 hover:border-primary transition-colors">
      <button className="w-full flex items-center justify-between text-left">
        <span className="text-lg group-hover:text-primary transition-colors">{text}</span>
        <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-primary group-hover:translate-x-1 transition-all" />
      </button>
    </div>
  );
}