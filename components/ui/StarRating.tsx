interface StarRatingProps {
  rating: number;
  size?: number;
}

export function StarRating({ rating, size = 10 }: StarRatingProps) {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;

  return (
    <div className="flex items-center gap-0.5">
      {[...Array(5)].map((_, i) => {
        if (i < fullStars) {
          return (
            <svg key={i} width={size} height={size} viewBox="0 0 24 24" fill="#FFD700">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
          );
        } else if (i === fullStars && hasHalfStar) {
          return (
            <svg key={i} width={size} height={size} viewBox="0 0 24 24" fill="#FFD700">
              <defs>
                <linearGradient id="half">
                  <stop offset="50%" stopColor="#FFD700" />
                  <stop offset="50%" stopColor="#E5E5E5" />
                </linearGradient>
              </defs>
              <path fill="url(#half)" d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
          );
        } else {
          return (
            <svg key={i} width={size} height={size} viewBox="0 0 24 24" fill="#E5E5E5">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
          );
        }
      })}
    </div>
  );
}
