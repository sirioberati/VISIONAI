import React, { useState } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

interface LeadCollectionStepProps {
  onSubmit: (data: { email: string; name: string }) => void;
  isSubmitting: boolean;
}

export function LeadCollectionStep({ onSubmit, isSubmitting }: LeadCollectionStepProps) {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitStatus('submitting');

    try {
      // Get existing form data
      const formData = JSON.parse(localStorage.getItem('socialStrategyForm') || '{}');

      // Prepare complete data payload
      const completeData = {
        name,
        email,
        source: window.location.href,
        timestamp: new Date().toISOString(),
        // Business Details
        businessName: formData.businessName || '',
        industry: formData.industry || '',
        description: formData.description || '',
        // Target Market
        demographics: Array.isArray(formData.demographics) ? formData.demographics.join(', ') : '',
        interests: Array.isArray(formData.interests) ? formData.interests.join(', ') : '',
        // Goals
        primaryGoal: formData.primaryGoal || '',
        platforms: Array.isArray(formData.platforms) ? formData.platforms.join(', ') : '',
      };

      // Submit to Google Sheets
      await fetch('https://script.google.com/macros/s/AKfycbyOfQ6SN4W3ei_GeCiZflRdT8Grpz6KUrqsdFM4yxeHu1Av__Az_N3wdt8IsvkUwR27vA/exec', {
        method: 'POST',
        body: JSON.stringify(completeData)
      });

      setSubmitStatus('success');
      onSubmit({ email, name });
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    }
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="max-w-md w-full mx-auto px-4">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
            <Sparkles className="h-8 w-8 text-primary" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-3">Your Strategy is Ready!</h2>
          <p className="text-gray-500">Enter your details to receive your personalized social media strategy.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full rounded-xl border-2 border-gray-100 px-4 py-3 text-gray-900 focus:border-primary focus:ring-primary transition-all"
              placeholder="Enter your name"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-xl border-2 border-gray-100 px-4 py-3 text-gray-900 focus:border-primary focus:ring-primary transition-all"
              placeholder="Enter your email"
              required
            />
          </div>

          <button
            type="submit"
            disabled={submitStatus === 'submitting'}
            className="w-full inline-flex items-center justify-center px-8 py-4 rounded-full bg-primary hover:bg-primary-dark text-white font-medium transition-colors shadow-lg hover:shadow-xl disabled:opacity-50"
          >
            {submitStatus === 'submitting' ? (
              'Generating Your Strategy...'
            ) : (
              <>
                View My Strategy
                <ArrowRight className="ml-2 h-5 w-5" />
              </>
            )}
          </button>

          {submitStatus === 'error' && (
            <p className="text-center text-sm text-red-500">
              There was an error submitting your information. Please try again.
            </p>
          )}

          <p className="text-center text-sm text-gray-500">
            We'll never share your information with third parties.
          </p>
        </form>
      </div>
    </div>
  );
}