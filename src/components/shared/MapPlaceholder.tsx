import { MapPin } from "lucide-react";

interface MapPlaceholderProps {
  label?: string;
}

export default function MapPlaceholder({ label }: MapPlaceholderProps) {
  return (
    <div className="w-full h-48 rounded-xl bg-accent/50 border border-border flex flex-col items-center justify-center gap-2 overflow-hidden relative">
      {/* Simple map-like pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="w-full h-full" style={{
          backgroundImage: "linear-gradient(hsl(var(--border)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--border)) 1px, transparent 1px)",
          backgroundSize: "30px 30px",
        }} />
      </div>
      <div className="relative z-10 flex flex-col items-center gap-2">
        <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
          <MapPin className="w-5 h-5 text-primary-foreground" />
        </div>
        {label && <span className="text-sm font-medium text-foreground">{label}</span>}
      </div>
    </div>
  );
}
