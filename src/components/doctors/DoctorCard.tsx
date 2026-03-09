import { Link } from "react-router-dom";
import { MapPin, Clock } from "lucide-react";
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
      <div className="card-hover p-5 flex flex-col sm:flex-row gap-4">
        <div className="flex items-start gap-4 flex-1">
          <div className="order-last sm:order-first">
            <DoctorAvatar initials={doctor.initials} color={doctor.avatarColor} size="md" />
          </div>
          <div className="flex-1 text-right">
            <div className="flex items-center gap-2 mb-1">
              <h3 className="font-bold text-foreground text-lg">{doctor.name}</h3>
              {doctor.available && <span className="badge-available">موقق</span>}
            </div>
            <p className="text-sm text-primary font-medium">{doctor.specialty}</p>
            <div className="flex items-center gap-3 mt-2 text-xs text-muted-foreground">
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5" />
                {doctor.city}، {doctor.area}
              </span>
              <RatingStars rating={doctor.rating} reviewCount={doctor.reviewCount} />
            </div>
            <p className="text-sm text-muted-foreground mt-2 line-clamp-2">{doctor.bio}</p>
            {doctor.tags.length > 0 && (
              <div className="flex flex-wrap gap-1.5 mt-3">
                {doctor.tags.slice(0, 3).map((tag) => (
                  <span key={tag} className="badge-specialty">{tag}</span>
                ))}
              </div>
            )}
          </div>
        </div>
        <div className="flex flex-col items-start sm:items-end justify-between gap-3 sm:min-w-[140px]">
          <div className="text-left sm:text-right">
            <span className="text-xs text-muted-foreground">سعر الكشف</span>
            <p className="text-lg font-bold text-primary">{formatPrice(doctor.price)}</p>
          </div>
          {doctor.available && (
            <div className="flex items-center gap-1 text-xs text-success">
              <Clock className="w-3.5 h-3.5" />
              <span>متاح اليوم: {doctor.nextSlot}</span>
            </div>
          )}
          <Link to={`/doctors/${doctor.id}`} className="btn-primary text-xs w-full sm:w-auto text-center">
            احجز الآن
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="card-hover p-5 flex flex-col items-center text-center">
      <DoctorAvatar initials={doctor.initials} color={doctor.avatarColor} size="md" />
      <h3 className="font-bold text-foreground mt-3">{doctor.name}</h3>
      <p className="text-sm text-primary mt-1">{doctor.specialty}</p>
      <RatingStars rating={doctor.rating} reviewCount={doctor.reviewCount} />
      <div className="flex items-center gap-1 mt-2 text-xs text-muted-foreground">
        <MapPin className="w-3 h-3" />
        <span>{doctor.city}</span>
      </div>
      <div className="mt-3 pt-3 border-t border-border w-full flex items-center justify-between">
        <span className="text-sm font-bold text-primary">{formatPrice(doctor.price)}</span>
        <Link to={`/doctors/${doctor.id}`} className="btn-primary text-xs px-4 py-1.5">
          احجز الآن
        </Link>
      </div>
    </div>
  );
}
