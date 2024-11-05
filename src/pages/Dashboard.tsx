import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BarChart3, Calendar, Target, MessageSquare, Download, Share2, ArrowRight, ChevronDown, ChevronUp, Clock, Hash, Users, Plus, Video, Sparkles, Minus } from 'lucide-react';
import { generateSampleStrategy } from '../data/sampleStrategy';
import { AudioPlayer } from '../components/audio/AudioPlayer';
import { PremiumCoachingCTA } from '../components/cta/PremiumCoachingCTA';
import { PDFDownloadLink } from '@react-pdf/renderer';
import { StrategyPDF } from '../components/pdf/StrategyPDF';
import { DashboardLoader } from '../components/loading/DashboardLoader';

export function Dashboard() {
  const navigate = useNavigate();
  const [strategy, setStrategy] = useState<any>(null);
  const [businessInfo, setBusinessInfo] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [expandedDay, setExpandedDay] = useState<string | null>(null);
  const [showNextWeek, setShowNextWeek] = useState(false);
  const [expandedIdea, setExpandedIdea] = useState<string | null>(null);
  const [pdfReady, setPdfReady] = useState(false);

  useEffect(() => {
    const timer = setTimeout(async () => {
      try {
        const formData = JSON.parse(localStorage.getItem('socialStrategyForm') || '{}');
        setBusinessInfo(formData);
        const generatedStrategy = await generateSampleStrategy(formData);
        setStrategy(generatedStrategy);
        setPdfReady(true);
        setLoading(false);
      } catch (error) {
        console.error('Error:', error);
        setLoading(false);
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const toggleDayExpansion = (date: string) => {
    setExpandedDay(expandedDay === date ? null : date);
  };

  const toggleIdeaExpansion = (title: string) => {
    setExpandedIdea(expandedIdea === title ? null : title);
  };

  const audioContent = strategy ? [
    {
      title: 'Mission & Vision',
      text: `${strategy.mission} ${strategy.vision}`
    },
    ...(strategy.contentCalendar || []).map((day: any) => ({
      title: `${day.date} Strategy`,
      text: `On ${day.date}, we focus on ${day.type} content. The main content type is ${day.contentType}, targeting ${day.targetAudience}. The best time to post is ${day.bestTime}. Your hook should be: ${day.hook}`
    }))
  ] : [];

  if (loading) {
    return <DashboardLoader />;
  }

  if (!strategy) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex items-center justify-center p-4">
        <div className="text-center space-y-4">
          <div className="h-12 w-12 mx-auto mb-4 bg-red-100 rounded-xl flex items-center justify-center">
            <span className="text-red-500">!</span>
          </div>
          <p className="text-xl font-semibold text-gray-900">Error Loading Strategy</p>
          <p className="text-gray-500">Please try refreshing the page</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-white">
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary rounded-full mix-blend-multiply filter blur-[128px] opacity-10 animate-pulse" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 relative">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 mb-8">
            <div className="space-y-2">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-2">
                <Sparkles className="h-4 w-4 mr-2" />
                AI-Powered Strategy
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900">Your Social Media Plan</h1>
              <p className="text-lg text-gray-600">Customized strategy based on your business goals</p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <PremiumCoachingCTA />
              <div className="flex gap-4 w-full sm:w-auto">
                <button className="flex-1 sm:flex-none inline-flex items-center justify-center px-4 py-3 rounded-xl border-2 border-gray-200 text-gray-600 hover:border-primary hover:text-primary transition-colors">
                  <Share2 className="h-5 w-5 mr-2" />
                  Share
                </button>
                {pdfReady && (
                  <PDFDownloadLink
                    document={<StrategyPDF strategy={strategy} businessInfo={businessInfo} />}
                    fileName="social-media-strategy.pdf"
                    className="flex-1 sm:flex-none inline-flex items-center justify-center px-6 py-3 rounded-xl bg-primary hover:bg-primary-dark text-white transition-colors shadow-lg hover:shadow-xl"
                  >
                    {({ loading }) => (
                      <>
                        <Download className="h-5 w-5 mr-2" />
                        {loading ? 'Preparing PDF...' : 'Export PDF'}
                      </>
                    )}
                  </PDFDownloadLink>
                )}
              </div>
            </div>
          </div>

          <div className="mb-8">
            <AudioPlayer content={audioContent} />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              {
                title: "Mission Statement",
                content: strategy.mission,
                icon: <Target className="h-6 w-6 text-primary" />
              },
              {
                title: "Vision Statement",
                content: strategy.vision,
                icon: <BarChart3 className="h-6 w-6 text-primary" />
              },
              {
                title: "Content Pillars",
                content: (
                  <ul className="space-y-2 text-gray-600">
                    {strategy.contentPillars.map((pillar: any, index: number) => (
                      <li key={index} className="flex items-center gap-2">
                        <div className="h-1.5 w-1.5 rounded-full bg-primary/60" />
                        {pillar.title}
                      </li>
                    ))}
                  </ul>
                ),
                icon: <MessageSquare className="h-6 w-6 text-primary" />
              }
            ].map((card, index) => (
              <div key={index} className="group bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-100">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-gray-900">{card.title}</h3>
                  {card.icon}
                </div>
                {typeof card.content === 'string' ? (
                  <p className="text-gray-600">{card.content}</p>
                ) : (
                  card.content
                )}
              </div>
            ))}
          </div>

          <div className="bg-white rounded-2xl shadow-sm overflow-hidden border border-gray-100">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Content Calendar</h2>
              <p className="text-gray-500">Your AI-generated content plan for maximum engagement</p>
            </div>

            <div className="divide-y divide-gray-200">
              {strategy.contentCalendar.map((day: any, index: number) => (
                <div key={index} className="group p-4 sm:p-6 hover:bg-gray-50 transition-all duration-300">
                  <div 
                    className="flex items-center justify-between cursor-pointer"
                    onClick={() => toggleDayExpansion(day.date)}
                  >
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary/10 rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform">
                        <Calendar className="h-6 w-6 sm:h-7 sm:w-7 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-lg sm:text-xl font-semibold text-gray-900">{day.date}</h3>
                        <div className="flex items-center space-x-2 text-sm text-gray-500">
                          <Clock className="h-4 w-4" />
                          <span>{day.bestTime}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <span className="hidden sm:inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                        {day.contentType}
                      </span>
                      {expandedDay === day.date ? (
                        <ChevronUp className="h-5 w-5 text-gray-400" />
                      ) : (
                        <ChevronDown className="h-5 w-5 text-gray-400" />
                      )}
                    </div>
                  </div>

                  {expandedDay === day.date && (
                    <div className="mt-6 pl-4 sm:pl-20 space-y-6 animate-fade-in-up">
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        <div className="space-y-4">
                          <h4 className="font-medium text-gray-900">Content Details</h4>
                          <div className="space-y-3 text-gray-600">
                            <p className="flex items-center gap-2">
                              <span className="font-medium text-primary">Hook:</span>
                              {day.hook}
                            </p>
                            <p className="flex items-center gap-2">
                              <span className="font-medium text-primary">CTA:</span>
                              {day.cta}
                            </p>
                            <p className="flex items-center gap-2">
                              <span className="font-medium text-primary">Type:</span>
                              {day.contentType}
                            </p>
                            <p className="flex items-center gap-2">
                              <span className="font-medium text-primary">Platform:</span>
                              {day.platform}
                            </p>
                          </div>
                        </div>
                        <div className="space-y-4">
                          <h4 className="font-medium text-gray-900">Content Structure</h4>
                          <ul className="space-y-2">
                            {day.contentDetails.structure.map((item: string, idx: number) => (
                              <li key={idx} className="flex items-center gap-3 text-gray-600">
                                <div className="h-1.5 w-1.5 rounded-full bg-primary/60" />
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      
                      <div className="space-y-4">
                        <h4 className="font-medium text-gray-900">Content Ideas</h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {day.contentIdeas.map((idea: any, idx: number) => (
                            <div key={idx} className="space-y-2">
                              <button
                                onClick={() => toggleIdeaExpansion(idea.title)}
                                className="flex items-center justify-between w-full p-3 rounded-xl bg-gray-50 group-hover:bg-white transition-colors text-left"
                              >
                                <div className="flex items-center gap-3">
                                  {expandedIdea === idea.title ? (
                                    <Minus className="h-5 w-5 text-primary flex-shrink-0" />
                                  ) : (
                                    <Plus className="h-5 w-5 text-primary flex-shrink-0" />
                                  )}
                                  <span className="text-gray-900 font-medium">{idea.title}</span>
                                </div>
                              </button>
                              
                              {expandedIdea === idea.title && (
                                <div className="p-4 bg-white rounded-xl border border-gray-100 space-y-4 animate-fade-in-up">
                                  <p className="text-gray-600">{idea.description}</p>
                                  
                                  <div className="space-y-2">
                                    <h5 className="font-medium text-gray-900">Outline:</h5>
                                    <ul className="space-y-1">
                                      {idea.outline.map((item: string, i: number) => (
                                        <li key={i} className="flex items-center gap-2 text-gray-600">
                                          <div className="h-1.5 w-1.5 rounded-full bg-primary/60" />
                                          {item}
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                  
                                  <div className="space-y-2">
                                    <h5 className="font-medium text-gray-900">Key Points:</h5>
                                    <ul className="space-y-1">
                                      {idea.keyPoints.map((point: string, i: number) => (
                                        <li key={i} className="flex items-center gap-2 text-gray-600">
                                          <div className="h-1.5 w-1.5 rounded-full bg-primary/60" />
                                          {point}
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                  
                                  <div className="flex items-center justify-between text-sm">
                                    <span className="text-gray-500">Format:</span>
                                    <span className="text-primary font-medium">{idea.format}</span>
                                  </div>
                                  
                                  <div className="flex items-center justify-between text-sm">
                                    <span className="text-gray-500">Expected Engagement:</span>
                                    <span className="text-primary font-medium">{idea.estimatedEngagement}</span>
                                  </div>
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-4 border-t border-gray-200">
                        <div className="flex items-center gap-2">
                          <Hash className="h-4 w-4 text-primary" />
                          <span className="text-sm text-gray-600">{day.hashtags}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Users className="h-4 w-4 text-primary" />
                          <span className="text-sm text-gray-600">{day.targetAudience}</span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="p-6 border-t border-gray-200">
              <button 
                onClick={() => setShowNextWeek(!showNextWeek)}
                className="inline-flex items-center text-primary hover:text-primary-dark font-medium group"
              >
                See next 7 days
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}