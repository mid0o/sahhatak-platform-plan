import { Link } from "react-router-dom";
import { MapPin, Clock, MapPinned, Pill } from "lucide-react";
import { pharmacies } from "@/data/pharmacies";
import { formatDistance } from "@/lib/formatters";

export default function NearbyPharmacies() {
  return (
    <section className="py-14 lg:py-18">
      <div className="container-app">
        <div className="section-header flex items-end justify-between gap-4">
          <div className="text-right">
            <h2 className="section-title">صيدليات قريبة منك</h2>
            <p className="section-subtitle">قارن الأسعار والتوفر قبل الطلب من الصيدلية الأقرب.</p>
          </div>
          <Link to="/pharmacies" className="btn-outline text-xs px-4 py-2.5 whitespace-nowrap">
            <MapPinned className="w-4 h-4" />
            استعرض الصيدليات
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {pharmacies.slice(0, 4).map((pharmacy) => (
            <Link key={pharmacy.id} to={`/pharmacies/${pharmacy.id}`} className="card-hover p-5 flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <Pill className="w-6 h-6 text-primary" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-bold text-foreground truncate">{pharmacy.name}</h3>
                <p className="text-xs text-muted-foreground truncate mb-1.5">{pharmacy.location}</p>
                <div className="flex items-center gap-3 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1"><MapPin className="w-3 h-3" />{formatDistance(pharmacy.distance ?? 0)}</span>
                  <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{pharmacy.openHours}</span>
                </div>
              </div>
              <span className={pharmacy.isOpen ? "badge-available" : "badge-unavailable"}>
                {pharmacy.isOpen ? "مفتوح" : "مغلق"}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
