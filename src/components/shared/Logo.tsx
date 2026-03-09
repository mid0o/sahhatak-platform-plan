import { Shield, Activity } from "lucide-react";

export function Logo({ className = "", light = false }: { className?: string; light?: boolean }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className={`relative flex items-center justify-center w-10 h-10 rounded-xl ${light ? 'bg-white/20' : 'bg-primary/10'} overflow-hidden`}>
        <div className={`absolute inset-0 bg-gradient-to-br ${light ? 'from-white/20 to-transparent' : 'from-primary/20 to-transparent'}`} />
        <Shield className={`absolute w-7 h-7 ${light ? 'text-white/80' : 'text-primary/40'}`} strokeWidth={1.5} />
        <Activity className={`w-5 h-5 z-10 ${light ? 'text-white' : 'text-primary'}`} strokeWidth={2.5} />
      </div>
      <span className={`text-2xl font-black tracking-tighter ${light ? 'text-white' : 'text-primary'}`}>
        صحتك<span className={light ? 'text-white/70' : 'text-primary/60'}>.</span>
      </span>
    </div>
  );
}
