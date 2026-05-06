'use client';

import { useState, useEffect, useCallback } from 'react';

export function useCarousel(totalSlides: number, autoAdvanceMs: number = 4000) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const next = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  const prev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  const goTo = useCallback((index: number) => {
    setCurrentIndex(index);
  }, []);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(next, autoAdvanceMs);
    return () => clearInterval(interval);
  }, [isPaused, next, autoAdvanceMs]);

  return {
    currentIndex,
    next,
    prev,
    goTo,
    pause: () => setIsPaused(true),
    resume: () => setIsPaused(false),
  };
}
