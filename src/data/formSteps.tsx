import React from 'react';
import { Building2, Users, ShoppingBag, Palette, Target, Share2, Lightbulb } from 'lucide-react';
import { FormStep } from '../types/form';

export const formSteps: FormStep[] = [
  {
    id: 'business-details',
    title: 'Business Details',
    subtitle: 'Tell us about your business',
    icon: <Building2 className="h-5 w-5" />,
    fields: [
      {
        id: 'businessName',
        label: 'Business Name',
        type: 'text',
        placeholder: 'Enter your business name',
        required: true,
      },
      {
        id: 'industry',
        label: 'Industry/Niche',
        type: 'select',
        options: [
          { label: 'Technology', value: 'technology' },
          { label: 'E-commerce', value: 'ecommerce' },
          { label: 'Healthcare', value: 'healthcare' },
          { label: 'Education', value: 'education' },
          { label: 'Food & Beverage', value: 'food' },
          { label: 'Fashion', value: 'fashion' },
          { label: 'Other', value: 'other' },
        ],
        required: true,
        tooltip: 'Select the industry that best describes your business',
      },
      {
        id: 'description',
        label: 'Business Description',
        type: 'textarea',
        placeholder: 'Briefly describe what your business does',
        required: true,
      }
    ],
  },
  {
    id: 'target-market',
    title: 'Target Market',
    subtitle: 'Define your ideal customer',
    icon: <Users className="h-5 w-5" />,
    fields: [
      {
        id: 'demographics',
        label: 'Demographics',
        type: 'checkbox',
        options: [
          { label: '18-24', value: '18-24' },
          { label: '25-34', value: '25-34' },
          { label: '35-44', value: '35-44' },
          { label: '45-54', value: '45-54' },
          { label: '55+', value: '55+' },
        ],
        tooltip: 'Select all age ranges that apply to your target audience',
      },
      {
        id: 'interests',
        label: 'Interests & Lifestyle',
        type: 'tags',
        placeholder: 'Add interests (e.g., fitness, technology, travel)',
        tooltip: 'Enter interests one at a time and press Enter',
      }
    ],
  },
  {
    id: 'goals',
    title: 'Social Media Goals',
    subtitle: 'What do you want to achieve?',
    icon: <Target className="h-5 w-5" />,
    fields: [
      {
        id: 'primaryGoal',
        label: 'Primary Goal',
        type: 'select',
        options: [
          { label: 'Increase Brand Awareness', value: 'awareness' },
          { label: 'Generate Leads', value: 'leads' },
          { label: 'Drive Sales', value: 'sales' },
          { label: 'Improve Customer Service', value: 'service' },
          { label: 'Build Community', value: 'community' },
        ],
        required: true,
      },
      {
        id: 'platforms',
        label: 'Preferred Platforms',
        type: 'checkbox',
        options: [
          { label: 'Instagram', value: 'instagram' },
          { label: 'Twitter/X', value: 'twitter' },
          { label: 'LinkedIn', value: 'linkedin' },
          { label: 'TikTok', value: 'tiktok' },
          { label: 'Facebook', value: 'facebook' },
        ],
      }
    ],
  }
];

export const defaultFormData = {
  businessName: '',
  industry: '',
  description: '',
  demographics: [],
  interests: [],
  primaryGoal: '',
  platforms: [],
};