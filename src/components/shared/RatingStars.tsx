import { Star } from "lucide-react";

interface RatingStarsProps {
  rating: number;
  reviewCount?: number;
  size?: "sm" | "md" | "lg";
}

export default function RatingStars({ rating, reviewCount, size = "sm" }: RatingStarsProps) {
  const starClasses = {
    sm: "w-3.5 h-3.5",
    md: "w-4 h-4",
    lg: "w-5 h-5",
  };

  const textClasses = {
    sm: "text-xs",
    md: "text-sm",
    lg: "text-base",
  };

  return (
    <div className="flex items-center gap-1.5">
      <div className="flex items-center gap-0.5">
        {[1, 2, 3, 4, 5].map((i) => (
          <Star
            key={i}
            className={`${starClasses[size]} ${i <= Math.round(rating) ? "fill-warning text-warning" : "text-border fill-muted"} transition-colors`}
          />
        ))}
      </div>
      <span className={`${textClasses[size]} font-bold text-foreground`}>{rating.toFixed(1)}</span>
      {reviewCount !== undefined && (
        <span className={`${textClasses[size]} text-muted-foreground`}>({reviewCount.toLocaleString("ar-EG")} تقييم)</span>
      )}
    </div>
  );
}
