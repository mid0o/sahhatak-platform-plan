import { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { MapPin, Clock, ChevronLeft, Star, Share2, Heart, GraduationCap, Briefcase, Sun, Moon, CheckCircle2, BriefcaseMedical } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import DoctorAvatar from "@/components/shared/DoctorAvatar";
import RatingStars from "@/components/shared/RatingStars";
import MapPlaceholder from "@/components/shared/MapPlaceholder";
import { doctors } from "@/data/doctors";
import { formatPrice } from "@/lib/formatters";
import { getWeekDates } from "@/lib/formatters";

export default function DoctorProfile() {
  const { id } = useParams();
  const navigate = useNavigate();
  const doctor = doctors.find((d) => d.id === id);
  const [selectedDate, setSelectedDate] = useState(0);
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState("about");
  const weekDates = getWeekDates();

  if (!doctor) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 flex items-center justify-center">
          <div className="empty-state">
            <p className="empty-state-title">لم يتم العثور على الطبيب</p>
          </div>
        </main>
      </div>
    );
  }

  const morningSlots = doctor.timeSlots.filter((s) => s.period === "morning");
  const eveningSlots = doctor.timeSlots.filter((s) => s.period === "evening");

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 bg-background py-6 lg:py-10">
        <div className="container-app">
          <nav className="text-sm text-muted-foreground mb-5 flex items-center gap-1">
            <Link to="/" className="hover:text-primary">الرئيسية</Link>
            <ChevronLeft className="w-3.5 h-3.5" />
            <Link to="/doctors" className="hover:text-primary">بحث الأطباء</Link>
            <ChevronLeft className="w-3.5 h-3.5" />
            <span className="text-foreground font-medium">{doctor.fullName}</span>
          </nav>

          <div className="flex flex-col lg:flex-row gap-6">
            <div className="flex-1 space-y-6">
              <div className="card-base p-6 lg:p-7">
                <div className="flex flex-col sm:flex-row items-start gap-5">
                  <DoctorAvatar initials={doctor.initials} color={doctor.avatarColor} size="lg" />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-2">
                      <h1 className="text-2xl font-bold">{doctor.fullName}</h1>
                      <CheckCircle2 className="w-5 h-5 text-success shrink-0" />
                    </div>
                    <p className="text-sm text-primary font-semibold mb-3">{doctor.title}</p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <BriefcaseMedical className="w-4 h-4" />
                        <span>{doctor.yearsOfExperience}+ سنة خبرة</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <MapPin className="w-4 h-4" />
                        <span>{doctor.city}، {doctor.area}</span>
                      </div>
                    </div>

                    <div className="mt-3">
                      <RatingStars rating={doctor.rating} reviewCount={doctor.reviewCount} />
                    </div>
                  </div>
                </div>

                <div className="flex gap-2 mt-5">
                  <button className="btn-ghost border border-border text-xs"><Share2 className="w-4 h-4" />مشاركة</button>
                  <button className="btn-ghost border border-border text-xs"><Heart className="w-4 h-4" />حفظ</button>
                </div>
              </div>

              <div className="flex gap-1 border-b border-border">
                {[
                  { id: "about", label: "عن الطبيب" },
                  { id: "qualifications", label: "الخبرة والتعليم" },
                  { id: "location", label: "الموقع والعيادة" },
                  { id: "reviews", label: `التقييمات (${doctor.reviewCount})` },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    className={`px-5 py-3.5 text-sm font-medium border-b-2 transition-colors ${
                      activeTab === tab.id ? "border-primary text-primary" : "border-transparent text-muted-foreground hover:text-foreground"
                    }`}
                    onClick={() => setActiveTab(tab.id)}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {activeTab === "about" && (
                <div className="card-base p-6">
                  <h2 className="font-bold text-lg mb-4">نبذة عن الطبيب</h2>
                  <p className="text-sm text-muted-foreground leading-relaxed">{doctor.bio}</p>
                  {doctor.tags.length > 0 && (
                    <>
                      <h3 className="font-semibold text-sm mt-6 mb-3">التخصصات الفرعية</h3>
                      <div className="flex flex-wrap gap-2">
                        {doctor.tags.map((tag) => (
                          <span key={tag} className="badge-specialty">{tag}</span>
                        ))}
                      </div>
                    </>
                  )}
                </div>
              )}

              {activeTab === "qualifications" && (
                <div className="card-base p-6 space-y-5">
                  <h2 className="font-bold text-lg">الخبرات والمؤهلات</h2>
                  {doctor.qualifications.length === 0 ? (
                    <p className="text-sm text-muted-foreground">لا توجد معلومات إضافية</p>
                  ) : (
                    doctor.qualifications.map((q, i) => (
                      <div key={i} className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                          {i === 0 ? <GraduationCap className="w-5 h-5 text-primary" /> : <Briefcase className="w-5 h-5 text-primary" />}
                        </div>
                        <div>
                          <p className="font-semibold text-sm">{q.title}</p>
                          <p className="text-xs text-muted-foreground mt-0.5">{q.institution} • {q.year}</p>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              )}

              {activeTab === "location" && (
                <div className="card-base p-6 space-y-5">
                  <h2 className="font-bold text-lg">موقع العيادة</h2>
                  <p className="text-sm text-muted-foreground flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-primary shrink-0" />
                    {doctor.area}، {doctor.city}
                  </p>
                  <MapPlaceholder label={`مجمع العيادات الطبية، ${doctor.city}`} />
                </div>
              )}

              {activeTab === "reviews" && (
                <div className="card-base p-6 space-y-6">
                  <h2 className="font-bold text-lg">آراء المرضى ({doctor.reviewCount})</h2>
                  {doctor.reviews.length === 0 ? (
                    <p className="text-sm text-muted-foreground">لا توجد تقييمات بعد</p>
                  ) : (
                    doctor.reviews.map((r, i) => (
                      <div key={i} className="flex items-start gap-3 pb-5 border-b border-border last:border-0 last:pb-0">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-sm font-bold text-primary shrink-0">
                          {r.name.charAt(0)}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between mb-1">
                            <h4 className="font-semibold text-sm">{r.name}</h4>
                            <span className="text-xs text-muted-foreground">{r.date}</span>
                          </div>
                          <div className="flex gap-0.5 mb-2">
                            {[1, 2, 3, 4, 5].map((s) => (
                              <Star key={s} className={`w-3.5 h-3.5 ${s <= r.rating ? "fill-warning text-warning" : "text-border"}`} />
                            ))}
                          </div>
                          <p className="text-sm text-muted-foreground leading-relaxed">{r.text}</p>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              )}
            </div>

            <aside className="lg:w-96 shrink-0">
              <div className="card-base p-5 lg:p-6 sticky top-20 space-y-5">
                <h3 className="font-bold text-lg">احجز موعدك الآن</h3>

                <div className="flex items-center gap-1.5">
                  <button className="p-2 rounded-lg border border-border hover:bg-muted"><ChevronLeft className="w-4 h-4" /></button>
                  <div className="flex gap-1.5 flex-1 overflow-x-auto scrollbar-thin">
                    {weekDates.slice(0, 4).map((d, i) => (
                      <button
                        key={i}
                        className={`flex-1 min-w-[70px] flex flex-col items-center py-3 px-2 rounded-xl text-xs transition-all ${
                          selectedDate === i ? "bg-primary text-primary-foreground" : "border border-border hover:border-primary"
                        }`}
                        onClick={() => setSelectedDate(i)}
                      >
                        <span className="text-[10px] opacity-70">{d.day}</span>
                        <span className="text-lg font-bold my-0.5">{d.date}</span>
                        {d.isToday && <span className="text-[10px]">اليوم</span>}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-semibold mb-3 flex items-center gap-2">
                    <Sun className="w-4 h-4 text-warning" /> فترة الصباح
                  </h4>
                  <div className="grid grid-cols-3 gap-2">
                    {morningSlots.slice(0, 6).map((s) => (
                      <button
                        key={s.time}
                        className={`time-slot text-xs ${selectedSlot === s.time ? "selected" : ""} ${!s.available ? "disabled" : ""}`}
                        onClick={() => s.available && setSelectedSlot(s.time)}
                        disabled={!s.available}
                      >
                        {s.time}
                      </button>
                    ))}
                  </div>
                </div>

                {eveningSlots.length > 0 && (
                  <div>
                    <h4 className="text-sm font-semibold mb-3 flex items-center gap-2">
                      <Moon className="w-4 h-4 text-primary" /> فترة المساء
                    </h4>
                    <div className="grid grid-cols-3 gap-2">
                      {eveningSlots.slice(0, 6).map((s) => (
                        <button
                          key={s.time}
                          className={`time-slot text-xs ${selectedSlot === s.time ? "selected" : ""} ${!s.available ? "disabled" : ""}`}
                          onClick={() => s.available && setSelectedSlot(s.time)}
                          disabled={!s.available}
                        >
                          {s.time}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <span className="text-sm text-muted-foreground">رسوم الكشف</span>
                  <span className="text-xl font-bold text-primary">{formatPrice(doctor.price)}</span>
                </div>

                <button
                  className="btn-primary w-full py-3.5"
                  disabled={!selectedSlot}
                  onClick={() => navigate(`/booking/${doctor.id}?date=${selectedDate}&time=${selectedSlot}`)}
                >
                  تأكيد الحجز
                </button>

                <p className="text-xs text-center text-muted-foreground">الدفع يتم في العيادة بعد الكشف</p>
              </div>
            </aside>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
