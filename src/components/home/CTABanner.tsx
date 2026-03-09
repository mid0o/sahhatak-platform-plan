import { Link } from "react-router-dom";
import { ArrowLeft, Sparkles } from "lucide-react";

export default function CTABanner() {
  return (
    <section className="py-16 lg:py-20">
      <div className="container-app">
        <div className="relative rounded-3xl overflow-hidden p-10 lg:p-16 text-center" style={{ background: "var(--gradient-cta)" }}>
          {/* Decorative */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-white/5" />
            <div className="absolute -bottom-16 -right-16 w-48 h-48 rounded-full bg-white/5" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-white/[0.02]" />
          </div>

          <div className="relative">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6 text-white/90 text-sm font-medium border border-white/10">
              <Sparkles className="w-4 h-4" />
              <span>انضم لأكتر من مليون مستخدم</span>
            </div>
            
            <h2 className="text-2xl lg:text-4xl font-extrabold text-white mb-4 tracking-tight">
              ابدأ رحلتك لحياة صحية أحسن
            </h2>
            <p className="text-base lg:text-lg text-white/70 mb-10 max-w-lg mx-auto leading-relaxed">
              صحتك بين إيديك... احجز دكتورك دلوقتي وبالشفا! 💙
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/doctors"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-8 py-4 text-sm font-bold text-primary transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
              >
                احجز موعدك دلوقتي
                <ArrowLeft className="w-4 h-4" />
              </Link>
              <Link
                to="/register"
                className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-white/30 px-8 py-4 text-sm font-semibold text-white transition-all duration-200 hover:bg-white/10"
              >
                سجّل حساب مجاني
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
