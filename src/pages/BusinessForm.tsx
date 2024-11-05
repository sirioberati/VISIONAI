import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, ArrowLeft, Sparkles, Target, Users, MessageSquare } from 'lucide-react';
import { FormField } from '../components/form/FormField';
import { ProgressBar } from '../components/form/ProgressBar';
import { formSteps, defaultFormData } from '../data/formSteps';
import { FormData } from '../types/form';
import { LeadCollectionStep } from '../components/form/LeadCollectionStep';
import { LoadingBuffer } from '../components/form/LoadingBuffer';

export function BusinessForm() {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<FormData>(defaultFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showLeadCollection, setShowLeadCollection] = useState(false);
  const [showLoadingBuffer, setShowLoadingBuffer] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const savedData = localStorage.getItem('socialStrategyForm');
    if (savedData) {
      setFormData(JSON.parse(savedData));
    }
  }, []);

  const handleFieldChange = (fieldId: string, value: any) => {
    const newFormData = { ...formData, [fieldId]: value };
    setFormData(newFormData);
    localStorage.setItem('socialStrategyForm', JSON.stringify(newFormData));
  };

  const handleNext = async () => {
    if (currentStep < formSteps.length - 1) {
      setCurrentStep(prev => prev + 1);
    } else {
      setShowLoadingBuffer(true);
      setTimeout(() => {
        setShowLoadingBuffer(false);
        setShowLeadCollection(true);
      }, 3000);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const handleLeadSubmit = async (leadData: { email: string; name: string }) => {
    setIsSubmitting(true);
    try {
      const finalData = { ...formData, ...leadData };
      localStorage.setItem('socialStrategyForm', JSON.stringify(finalData));
      navigate('/dashboard');
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (showLoadingBuffer) {
    return <LoadingBuffer />;
  }

  if (showLeadCollection) {
    return <LeadCollectionStep onSubmit={handleLeadSubmit} isSubmitting={isSubmitting} />;
  }

  const currentStepData = formSteps[currentStep];
  const progress = ((currentStep + 1) / formSteps.length) * 100;

  const stepIcons = {
    'business-details': <Target className="h-5 w-5" />,
    'target-market': <Users className="h-5 w-5" />,
    'goals': <MessageSquare className="h-5 w-5" />
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-white">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary rounded-full mix-blend-multiply filter blur-[128px] opacity-10 animate-pulse" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-[128px] opacity-10 animate-pulse delay-1000" />

      <div className="max-w-4xl mx-auto px-4 py-6 sm:py-12 relative">
        {/* Progress Section */}
        <div className="mb-6 sm:mb-12 space-y-4">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center space-x-2 text-sm text-gray-500">
              <span className="font-medium text-primary">Step {currentStep + 1}</span>
              <span>of</span>
              <span>{formSteps.length}</span>
            </div>
            <span className="text-sm font-medium text-primary">{progress}% Complete</span>
          </div>
          <ProgressBar currentStep={currentStep} totalSteps={formSteps.length} />
        </div>

        {/* Form Card */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4 sm:p-8 space-y-6 sm:space-y-8">
          {/* Step Header */}
          <div className="text-center space-y-4">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary font-medium">
              <Sparkles className="h-4 w-4 mr-2" />
              {currentStepData.title}
            </div>
            <h1 className="text-2xl sm:text-4xl font-bold text-gray-900">{currentStepData.subtitle}</h1>
            <div className="flex justify-center">
              <div className="w-16 h-1 bg-primary rounded-full" />
            </div>
          </div>

          {/* Form Fields */}
          <div className="space-y-6">
            {currentStepData.fields.map((field) => (
              <div key={field.id} className="animate-fade-in-up">
                <FormField
                  field={field}
                  value={formData[field.id]}
                  onChange={(value) => handleFieldChange(field.id, value)}
                />
              </div>
            ))}
          </div>

          {/* Navigation Buttons - Fixed at bottom on mobile */}
          <div className="fixed sm:relative bottom-0 left-0 right-0 bg-white border-t border-gray-100 p-4 sm:p-0 sm:border-0">
            <div className="flex justify-between items-center max-w-4xl mx-auto">
              <button
                onClick={handleBack}
                className={`inline-flex items-center px-4 sm:px-6 py-3 rounded-xl text-gray-600 hover:text-primary transition-colors ${
                  currentStep === 0 ? 'opacity-50 cursor-not-allowed' : ''
                }`}
                disabled={currentStep === 0}
              >
                <ArrowLeft className="h-5 w-5 mr-2" />
                Back
              </button>
              <button
                onClick={handleNext}
                className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 rounded-xl bg-primary hover:bg-primary-dark text-white font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                {currentStep === formSteps.length - 1 ? (
                  <>
                    Generate Strategy
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </>
                ) : (
                  <>
                    Continue
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Step Indicators - Hidden on mobile */}
        <div className="hidden sm:block mt-12">
          <div className="flex justify-between">
            {formSteps.map((step, index) => (
              <div
                key={step.id}
                className={`flex items-center ${
                  index === currentStep
                    ? 'text-primary'
                    : index < currentStep
                    ? 'text-gray-400'
                    : 'text-gray-300'
                }`}
              >
                <div className={`
                  w-10 h-10 rounded-full flex items-center justify-center
                  ${index === currentStep ? 'bg-primary/10 ring-2 ring-primary/20' : 'bg-gray-50'}
                  ${index < currentStep ? 'bg-primary/5' : ''}
                `}>
                  {stepIcons[step.id as keyof typeof stepIcons]}
                </div>
                <div className={`hidden sm:block ml-3 ${
                  index === currentStep ? 'text-gray-900' : 'text-gray-500'
                }`}>
                  <p className="text-sm font-medium">{step.title}</p>
                  <p className="text-xs">{step.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}