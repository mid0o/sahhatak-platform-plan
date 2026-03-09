import { Link } from "react-router-dom";
import { MapPin, Clock, Star, BriefcaseMedical, CalendarClock } from "lucide-react";
import type { Doctor } from "@/data/doctors";
import RatingStars from "@/components/shared/RatingStars";
import DoctorAvatar from "@/components/shared/DoctorAvatar";
import { formatPrice } from "@/lib/formatters";

interface DoctorCardProps {
  doctor: Doctor;
  variant?: "grid" | "list";
}

export default function DoctorCard({ doctor, variant = "grid" }: DoctorCardProps) {
  if (variant === "list") {
    return (
      <article className="card-hover p-5 lg:p-6 flex flex-col sm:flex-row gap-4 animate-in">
        <div className="flex items-start gap-4 flex-1 min-w-0">
          <DoctorAvatar initials={doctor.initials} color={doctor.avatarColor} size="md" />
          <div className="flex-1 text-right min-w-0">
            <div className="flex items-center gap-2 mb-1 flex-wrap">
              <h3 className="font-bold text-foreground text-lg truncate">{doctor.fullName}</h3>
              {doctor.available && <span className="badge-available">متاح</span>}
            </div>

            <p className="text-sm text-primary font-semibold mb-2">{doctor.specialty}</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-muted-foreground">
              <span className="flex items-center gap-1.5"><BriefcaseMedical className="w-3.5 h-3.5" />{doctor.yearsOfExperience} سنة خبرة</span>
              <span className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5" />{doctor.city}</span>
            </div>

            <div className="mt-2">
              <RatingStars rating={doctor.rating} reviewCount={doctor.reviewCount} />
            </div>

            {doctor.available && doctor.nextAvailableSlot && (
              <p className="text-xs text-success mt-2 flex items-center gap-1.5">
                <CalendarClock className="w-3.5 h-3.5" />
                أقرب موعد: {doctor.nextAvailableSlot}
              </p>
            )}
          </div>
        </div>

        <div className="flex flex-col items-start sm:items-end justify-between gap-3 sm:min-w-[160px]">
          <div className="text-left sm:text-right">
            <span className="text-xs text-muted-foreground">سعر الكشف</span>
            <p className="text-xl font-bold text-primary">{formatPrice(doctor.price)}</p>
          </div>
          <Link to={`/doctors/${doctor.id}`} className="btn-primary text-sm w-full sm:w-auto text-center px-5">
            احجز الآن
          </Link>
        </div>
      </article>
    );
  }

  return (
    <article className="card-hover p-5 flex flex-col h-full">
      <div className="flex items-center gap-3 mb-3">
        <DoctorAvatar initials={doctor.initials} color={doctor.avatarColor} size="md" />
        <div className="text-right flex-1 min-w-0">
          <h3 className="font-bold text-foreground text-sm truncate">{doctor.fullName}</h3>
          <p className="text-xs text-primary mt-0.5 truncate">{doctor.specialty}</p>
        </div>
      </div>

      <div className="space-y-2 text-xs text-muted-foreground mb-3">
        <div className="flex items-center gap-1.5"><BriefcaseMedical className="w-3.5 h-3.5" />{doctor.yearsOfExperience} سنة خبرة</div>
        <div className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5" />{doctor.city}</div>
        <div className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" />{doctor.nextAvailableSlot}</div>
      </div>

      <div className="mb-4">
        <RatingStars rating={doctor.rating} reviewCount={doctor.reviewCount} />
      </div>

      <div className="mt-auto pt-4 border-t border-border flex items-center justify-between gap-2">
        <div>
          <span className="text-xs text-muted-foreground">الكشف</span>
          <p className="text-base font-bold text-primary leading-none mt-0.5">{formatPrice(doctor.price)}</p>
        </div>
        <Link to={`/doctors/${doctor.id}`} className="btn-primary text-xs px-4 py-2.5 whitespace-nowrap">
          احجز الآن
        </Link>
      </div>
    </article>
  );
}
