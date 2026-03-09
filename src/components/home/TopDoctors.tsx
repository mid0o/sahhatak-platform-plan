import { Link } from "react-router-dom";
import { doctors } from "@/data/doctors";
import DoctorCard from "@/components/doctors/DoctorCard";
import { Star } from "lucide-react";

export default function TopDoctors() {
  return (
    <section className="py-16 lg:py-20 bg-card">
      <div className="container-app">
        <div className="flex items-end justify-between mb-10">
          <div className="text-right">
            <div className="inline-flex items-center gap-2 text-primary text-sm font-medium mb-2">
              <Star className="w-4 h-4 fill-current" />
              <span>الأعلى تقييماً</span>
            </div>
            <h2 className="section-title">أحسن دكاترة في مصر</h2>
            <p className="section-subtitle">دكاترة شاطرين وموثوقين من آلاف المرضى</p>
          </div>
          <Link to="/doctors" className="text-sm font-semibold text-primary hover:text-primary-light transition-colors whitespace-nowrap">
            شوف الكل ←
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {doctors.slice(0, 4).map((doc) => (
            <DoctorCard key={doc.id} doctor={doc} variant="grid" />
          ))}
        </div>
      </div>
    </section>
  );
}
