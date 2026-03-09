interface DoctorAvatarProps {
  initials: string;
  color: string;
  size?: "sm" | "md" | "lg";
}

export default function DoctorAvatar({ initials, color, size = "md" }: DoctorAvatarProps) {
  const sizeClasses = {
    sm: "w-12 h-12 text-sm",
    md: "w-20 h-20 text-lg",
    lg: "w-28 h-28 text-2xl",
  };

  return (
    <div
      className={`${sizeClasses[size]} rounded-full flex items-center justify-center font-bold text-primary-foreground shrink-0`}
      style={{ backgroundColor: color }}
    >
      {initials}
    </div>
  );
}
