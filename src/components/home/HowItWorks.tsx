import { Search, CalendarCheck, HeartPulse, ArrowLeft } from "lucide-react";

const steps = [
  {
    icon: Search,
    number: "١",
    title: "ابحث عن الطبيب المناسب",
    description: "استخدم الفلاتر الذكية حسب التخصص والمدينة والتقييم للوصول للطبيب الأنسب.",
  },
  {
    icon: CalendarCheck,
    number: "٢",
    title: "اختر الموعد",
    description: "شاهد المواعيد المتاحة مباشرة واحجز في دقيقة واحدة بدون مكالمات.",
  },
  {
    icon: HeartPulse,
    number: "٣",
    title: "تابع صحتك بسهولة",
    description: "إدارة مواعيدك وسجلك الطبي ومراجعاتك من لوحة تحكم واحدة.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-14 lg:py-18 bg-card">
      <div className="container-app">
        <div className="text-center section-header">
          <h2 className="section-title mb-3">كيف تعمل منصة صحتك؟</h2>
          <p className="section-subtitle mx-auto">تجربة حجز طبية بسيطة وواضحة في ٣ خطوات فقط.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {steps.map((step, i) => (
            <div key={step.number} className="card-interactive p-6 text-center relative">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <step.icon className="w-8 h-8 text-primary" />
              </div>
              <span className="inline-flex w-7 h-7 rounded-full bg-primary text-primary-foreground text-xs font-bold items-center justify-center mb-3">
                {step.number}
              </span>
              <h3 className="text-lg font-bold mb-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>

              {i < steps.length - 1 && (
                <ArrowLeft className="hidden md:block absolute -left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-border" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
