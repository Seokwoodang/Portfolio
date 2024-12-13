"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";

interface MediaItem {
  type: "image" | "video";
  url: string;
  thumbnail?: string;
}

interface ProjectMediaSliderProps {
  media: MediaItem[];
  projectName: string;
}

export default function ProjectMediaSlider({
  media,
  projectName,
}: ProjectMediaSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? media.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === media.length - 1 ? 0 : prev + 1));
  };

  if (!media.length) return null;

  const currentMedia = media[currentIndex];
  console.log(currentMedia);

  return (
    <div className="relative w-full h-[400px] md:h-[500px] mb-8">
      <AnimatePresence initial={false} mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 rounded-lg overflow-hidden"
        >
          {currentMedia.type === "image" ? (
            <Image
              src={currentMedia.url}
              alt={`${projectName} ${currentIndex + 1}`}
              fill
              className="object-contain"
              priority
            />
          ) : (
            <div className="relative w-full h-full">
              {!isPlaying && currentMedia.thumbnail && (
                <div className="absolute inset-0 z-10">
                  <Image
                    src={currentMedia.thumbnail}
                    alt={`${projectName} 비디오 썸네일`}
                    fill
                    className="object-contain"
                  />
                  <button
                    onClick={() => setIsPlaying(true)}
                    className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/40 transition-colors group"
                  >
                    <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Play className="w-8 h-8 text-gray-900" />
                    </div>
                  </button>
                </div>
              )}
              {(isPlaying || !currentMedia.thumbnail) && (
                <video
                  key={currentMedia.url}
                  className="w-full h-full object-contain"
                  controls={false}
                  autoPlay={true}
                  onEnded={() => setIsPlaying(false)}
                >
                  <source src={currentMedia.url} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              )}
            </div>
          )}
        </motion.div>
      </AnimatePresence>

      {media.length > 1 && (
        <>
          <button
            onClick={handlePrevious}
            className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
            aria-label="이전"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
            aria-label="다음"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {media.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentIndex(index);
                  setIsPlaying(false);
                }}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentIndex ? "bg-white" : "bg-white/50"
                }`}
                aria-label={`${index + 1}번으로 이동`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
