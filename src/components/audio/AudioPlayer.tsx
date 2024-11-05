import React, { useState, useEffect } from 'react';
import { Play, Pause, SkipForward, SkipBack, Volume2, VolumeX } from 'lucide-react';

interface AudioPlayerProps {
  content: {
    title: string;
    text: string;
  }[];
  onComplete?: () => void;
}

export function AudioPlayer({ content, onComplete }: AudioPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0);
  
  // Initialize speech synthesis
  const [synthesis, setSynthesis] = useState<SpeechSynthesis | null>(null);
  const [utterance, setUtterance] = useState<SpeechSynthesisUtterance | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setSynthesis(window.speechSynthesis);
    }
  }, []);

  useEffect(() => {
    if (synthesis && content[currentIndex]) {
      const newUtterance = new SpeechSynthesisUtterance(content[currentIndex].text);
      newUtterance.rate = 1;
      newUtterance.pitch = 1;
      newUtterance.volume = isMuted ? 0 : 1;

      newUtterance.onend = () => {
        if (currentIndex < content.length - 1) {
          setCurrentIndex(prev => prev + 1);
        } else {
          setIsPlaying(false);
          onComplete?.();
        }
      };

      newUtterance.onboundary = (event) => {
        const text = content[currentIndex].text;
        setProgress((event.charIndex / text.length) * 100);
      };

      setUtterance(newUtterance);

      return () => {
        synthesis.cancel();
      };
    }
  }, [currentIndex, content, synthesis, isMuted, onComplete]);

  const togglePlayPause = () => {
    if (synthesis && utterance) {
      if (isPlaying) {
        synthesis.pause();
      } else {
        if (synthesis.paused) {
          synthesis.resume();
        } else {
          synthesis.speak(utterance);
        }
      }
      setIsPlaying(!isPlaying);
    }
  };

  const stopPlaying = () => {
    if (synthesis) {
      synthesis.cancel();
      setIsPlaying(false);
      setProgress(0);
    }
  };

  const handleNext = () => {
    stopPlaying();
    if (currentIndex < content.length - 1) {
      setCurrentIndex(prev => prev + 1);
    }
  };

  const handlePrevious = () => {
    stopPlaying();
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
    }
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
    if (utterance) {
      utterance.volume = isMuted ? 1 : 0;
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
      {/* Title Section */}
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-gray-900">
          {content[currentIndex]?.title || 'Audio Player'}
        </h3>
        <p className="text-sm text-gray-500">
          Section {currentIndex + 1} of {content.length}
        </p>
      </div>

      {/* Progress Bar */}
      <div className="relative h-2 bg-gray-100 rounded-full mb-4 overflow-hidden">
        <div 
          className="absolute h-full bg-primary rounded-full transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Controls */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <button
            onClick={handlePrevious}
            disabled={currentIndex === 0}
            className="p-2 rounded-full hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <SkipBack className="h-5 w-5 text-gray-600" />
          </button>

          <button
            onClick={togglePlayPause}
            className="p-3 rounded-full bg-primary text-white hover:bg-primary-dark transition-colors"
          >
            {isPlaying ? (
              <Pause className="h-5 w-5" />
            ) : (
              <Play className="h-5 w-5" />
            )}
          </button>

          <button
            onClick={handleNext}
            disabled={currentIndex === content.length - 1}
            className="p-2 rounded-full hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <SkipForward className="h-5 w-5 text-gray-600" />
          </button>
        </div>

        <button
          onClick={toggleMute}
          className="p-2 rounded-full hover:bg-gray-100 transition-colors"
        >
          {isMuted ? (
            <VolumeX className="h-5 w-5 text-gray-600" />
          ) : (
            <Volume2 className="h-5 w-5 text-gray-600" />
          )}
        </button>
      </div>
    </div>
  );
}