import { Search, CalendarCheck, HeartPulse } from "lucide-react";

const steps = [
  {
    icon: Search,
    number: "١",
    title: "دوّر على دكتورك",
    description: "اختار من آلاف الدكاترة في كل التخصصات والمدن في مصر.",
  },
  {
    icon: CalendarCheck,
    number: "٢",
    title: "احجز الموعد",
    description: "اختار الوقت المناسب ليك وأكّد حجزك بضغطة واحدة.",
  },
  {
    icon: HeartPulse,
    number: "٣",
    title: "وبالشفا! 💙",
    description: "روح للدكتور واحنا هنفضل نتابع معاك ملفك الصحي.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-16 lg:py-20 bg-card">
      <div className="container-app text-center">
        <h2 className="section-title mb-3">إزاي صحتك بتشتغل؟</h2>
        <p className="section-subtitle mb-12 mx-auto max-w-md">٣ خطوات بس وهتوصل لأحسن رعاية طبية</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, i) => (
            <div key={step.number} className="flex flex-col items-center gap-5">
              <div className="relative">
                <div className="w-24 h-24 rounded-3xl bg-primary/8 flex items-center justify-center transition-transform duration-300 hover:scale-105">
                  <step.icon className="w-10 h-10 text-primary" />
                </div>
                <span className="absolute -top-2 -right-2 w-9 h-9 rounded-full bg-primary text-primary-foreground text-sm font-bold flex items-center justify-center shadow-medium">
                  {step.number}
                </span>
              </div>
              <h3 className="text-lg font-bold text-foreground">{step.title}</h3>
              <p className="text-sm text-muted-foreground max-w-xs leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
