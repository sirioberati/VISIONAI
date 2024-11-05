import { format } from 'date-fns';
import { educationalContentIdeas, behindTheScenesIdeas, productShowcaseIdeas, communityEngagementIdeas, expertInsightsIdeas } from './contentIdeas';

const generatePrompt = (formData: any) => {
  return `Create a detailed social media strategy for a ${formData.industry || 'business'} named "${formData.businessName || 'the business'}" with the following details:

Business Description: ${formData.description || 'Not provided'}
Target Demographics: ${Array.isArray(formData.demographics) ? formData.demographics.join(', ') : 'Not specified'}
Target Interests: ${Array.isArray(formData.interests) ? formData.interests.join(', ') : 'Not specified'}
Primary Goal: ${formData.primaryGoal || 'Not specified'}
Preferred Platforms: ${Array.isArray(formData.platforms) ? formData.platforms.join(', ') : 'Not specified'}`;
};

// Fallback strategy when API is not available
const getFallbackStrategy = (formData: any) => {
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
  const platforms = ['Instagram', 'LinkedIn', 'Twitter', 'Facebook'];
  const contentTypes = ['Educational', 'Behind-the-Scenes', 'Product Showcase', 'Community Engagement'];
  const bestTimes = ['9:00 AM', '12:00 PM', '3:00 PM', '5:00 PM', '7:00 PM'];

  return {
    mission: `To help ${formData.businessName || 'businesses'} achieve sustainable growth through strategic social media presence`,
    vision: `To become the leading ${formData.industry || 'industry'} voice by delivering consistent value to our audience`,
    contentPillars: [
      {
        title: 'Educational Content',
        description: 'Share industry insights and expertise',
        examples: ['How-to guides', 'Tips and tricks', 'Industry trends']
      },
      {
        title: 'Brand Story',
        description: 'Showcase company culture and values',
        examples: ['Team spotlights', 'Behind-the-scenes', 'Company milestones']
      },
      {
        title: 'Community Engagement',
        description: 'Build and nurture community relationships',
        examples: ['Q&A sessions', 'User-generated content', 'Community challenges']
      }
    ],
    contentCalendar: days.map((day, index) => ({
      date: day,
      type: contentTypes[index % contentTypes.length],
      contentType: 'Mixed Media',
      platform: platforms[index % platforms.length],
      bestTime: bestTimes[index % bestTimes.length],
      hashtags: '#GrowthStrategy #SocialMedia #DigitalMarketing',
      targetAudience: formData.demographics?.join(', ') || 'General audience',
      hook: 'Transform your social media presence with proven strategies',
      cta: 'Click to learn more about our approach',
      contentDetails: {
        type: 'Educational',
        structure: [
          'Introduction to the topic',
          'Key points and insights',
          'Practical examples',
          'Action steps',
          'Engagement question'
        ]
      },
      contentIdeas: [
        ...educationalContentIdeas.slice(0, 2),
        ...behindTheScenesIdeas.slice(0, 1),
        ...productShowcaseIdeas.slice(0, 1)
      ]
    }))
  };
};

export const generateSampleStrategy = async (formData: any) => {
  try {
    // Check if we have a valid API key
    const apiKey = import.meta.env.VITE_OPENAI_API_KEY;
    
    if (!apiKey || apiKey.includes('proj-') || apiKey.includes('placeholder')) {
      console.log('Using fallback strategy due to missing or invalid API key');
      return getFallbackStrategy(formData);
    }

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "system",
            content: "You are an expert social media strategist. Create detailed, actionable strategies with specific content ideas, hooks, and engagement tactics."
          },
          {
            role: "user",
            content: generatePrompt(formData)
          }
        ],
        temperature: 0.7,
        max_tokens: 2500
      })
    });

    if (!response.ok) {
      console.log('API request failed, using fallback strategy');
      return getFallbackStrategy(formData);
    }

    const data = await response.json();
    
    try {
      const strategy = JSON.parse(data.choices[0].message.content);
      return strategy;
    } catch (parseError) {
      console.log('Error parsing API response, using fallback strategy');
      return getFallbackStrategy(formData);
    }
  } catch (error) {
    console.log('Strategy generation error, using fallback strategy');
    return getFallbackStrategy(formData);
  }
}