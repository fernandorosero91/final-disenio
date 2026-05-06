'use client';

import Image from 'next/image';
import { useState } from 'react';

interface ImageGalleryProps {
  images: string[];
  title: string;
}

export function ImageGallery({ images, title }: ImageGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);

  return (
    <div className="w-full max-w-[500px]">
      {/* Main Image */}
      <div
        className="relative w-full aspect-square bg-white rounded-lg mb-4 overflow-hidden cursor-zoom-in"
        onMouseEnter={() => setIsZoomed(true)}
        onMouseLeave={() => setIsZoomed(false)}
      >
        <Image
          src={images[selectedIndex]}
          alt={title}
          fill
          sizes="500px"
          className={`object-contain transition-transform duration-300 ${
            isZoomed ? 'scale-150' : 'scale-100'
          }`}
          priority
        />
      </div>

      {/* Thumbnails */}
      <div className="flex gap-2 overflow-x-auto">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setSelectedIndex(index)}
            className={`flex-shrink-0 w-[70px] h-[70px] rounded border-2 overflow-hidden transition-all ${
              index === selectedIndex
                ? 'border-[var(--color-header-blue)]'
                : 'border-transparent hover:border-gray-300'
            }`}
          >
            <Image
              src={image}
              alt={`${title} - view ${index + 1}`}
              width={70}
              height={70}
              className="object-contain w-full h-full"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
