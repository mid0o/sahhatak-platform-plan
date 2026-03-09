import { useState, useMemo } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { SlidersHorizontal, ChevronLeft, Search, ArrowUpDown, Star, BriefcaseMedical } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import DoctorCard from "@/components/doctors/DoctorCard";
import { doctors } from "@/data/doctors";
import { specialties, cities } from "@/data/specialties";

type SortOption = "rating" | "price_asc" | "price_desc" | "experience";

export default function DoctorSearch() {
  const [searchParams] = useSearchParams();
  const [selectedSpecialty, setSelectedSpecialty] = useState(searchParams.get("specialty") || "");
  const [selectedCity, setSelectedCity] = useState(searchParams.get("city") || "");
  const [priceRange, setPriceRange] = useState(500);
  const [selectedGender, setSelectedGender] = useState("all");
  const [minRating, setMinRating] = useState(0);
  const [minExperience, setMinExperience] = useState(0);
  const [sortBy, setSortBy] = useState<SortOption>("rating");
  const [showFilters, setShowFilters] = useState(false);
  const [nameQuery, setNameQuery] = useState("");

  const filtered = useMemo(() => {
    const result = doctors.filter((d) => {
      if (selectedSpecialty && d.specialtyId !== selectedSpecialty) return false;
      if (selectedCity && d.city !== selectedCity) return false;
      if (d.price > priceRange) return false;
      if (selectedGender !== "all" && d.gender !== selectedGender) return false;
      if (minRating > 0 && d.rating < minRating) return false;
      if (minExperience > 0 && d.yearsOfExperience < minExperience) return false;
      if (nameQuery && !d.fullName.toLowerCase().includes(nameQuery.toLowerCase()) && !d.specialty.toLowerCase().includes(nameQuery.toLowerCase())) return false;
      return true;
    });

    result.sort((a, b) => {
      if (sortBy === "price_asc") return a.price - b.price;
      if (sortBy === "price_desc") return b.price - a.price;
      if (sortBy === "experience") return b.yearsOfExperience - a.yearsOfExperience;
      return b.rating - a.rating;
    });

    return result;
  }, [selectedSpecialty, selectedCity, priceRange, selectedGender, minRating, minExperience, sortBy, nameQuery]);

  const specName = specialties.find((s) => s.id === selectedSpecialty)?.name;

  const clearFilters = () => {
    setSelectedSpecialty("");
    setSelectedCity("");
    setPriceRange(500);
    setSelectedGender("all");
    setMinRating(0);
    setMinExperience(0);
    setNameQuery("");
    setSortBy("rating");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 bg-background py-6 lg:py-10">
        <div className="container-app">
          <nav className="text-sm text-muted-foreground mb-4 flex items-center gap-1">
            <Link to="/" className="hover:text-primary">الرئيسية</Link>
            <ChevronLeft className="w-3.5 h-3.5" />
            <span className="text-foreground font-medium">البحث عن طبيب</span>
          </nav>

          <div className="card-base p-5 lg:p-6 mb-6 text-right">
            <h1 className="text-2xl font-bold text-foreground">
              نتائج البحث{specName ? ` عن ${specName}` : ""}{selectedCity ? ` في ${selectedCity}` : ""}
            </h1>
            <p className="text-sm text-muted-foreground mt-1">تم العثور على {filtered.length} طبيب متاح للحجز</p>

            <div className="relative mt-4">
              <Search className="absolute top-1/2 -translate-y-1/2 right-3.5 w-4 h-4 text-muted-foreground" />
              <input
                className="input-field pr-10"
                placeholder="ابحث باسم الطبيب أو التخصص"
                value={nameQuery}
                onChange={(e) => setNameQuery(e.target.value)}
              />
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-6">
            <aside className={`lg:w-72 shrink-0 ${showFilters ? "block" : "hidden lg:block"}`}>
              <div className="card-base p-5 sticky top-20 space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-foreground flex items-center gap-2">
                    <SlidersHorizontal className="w-4 h-4" /> التصفية
                  </h3>
                  <button className="text-xs text-primary hover:underline" onClick={clearFilters}>مسح الكل</button>
                </div>

                <div>
                  <h4 className="text-sm font-semibold mb-2">التخصص</h4>
                  <select className="select-field text-sm" value={selectedSpecialty} onChange={(e) => setSelectedSpecialty(e.target.value)}>
                    <option value="">الكل</option>
                    {specialties.map((s) => <option key={s.id} value={s.id}>{s.name}</option>)}
                  </select>
                </div>

                <div>
                  <h4 className="text-sm font-semibold mb-2">المدينة</h4>
                  <select className="select-field text-sm" value={selectedCity} onChange={(e) => setSelectedCity(e.target.value)}>
                    <option value="">الكل</option>
                    {cities.map((c) => <option key={c} value={c}>{c}</option>)}
                  </select>
                </div>

                <div>
                  <h4 className="text-sm font-semibold mb-2">السعر حتى {priceRange} ج.م</h4>
                  <input type="range" min="50" max="500" value={priceRange} onChange={(e) => setPriceRange(Number(e.target.value))} className="w-full accent-primary" />
                </div>

                <div>
                  <h4 className="text-sm font-semibold mb-2 flex items-center gap-1"><Star className="w-4 h-4" /> التقييم الأدنى</h4>
                  <div className="grid grid-cols-4 gap-2">
                    {[0, 3, 4, 4.5].map((r) => (
                      <button key={r} onClick={() => setMinRating(r)} className={`pill-interactive ${minRating === r ? "active" : ""}`}>
                        {r === 0 ? "الكل" : `${r}+`}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-semibold mb-2 flex items-center gap-1"><BriefcaseMedical className="w-4 h-4" /> سنوات الخبرة</h4>
                  <div className="grid grid-cols-3 gap-2">
                    {[0, 5, 10, 15].map((y) => (
                      <button key={y} onClick={() => setMinExperience(y)} className={`pill-interactive ${minExperience === y ? "active" : ""}`}>
                        {y === 0 ? "الكل" : `${y}+`}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </aside>

            <div className="flex-1 space-y-4">
              <div className="flex flex-col sm:flex-row gap-2 sm:items-center sm:justify-between">
                <button className="lg:hidden btn-outline text-sm w-full sm:w-auto" onClick={() => setShowFilters(!showFilters)}>
                  <SlidersHorizontal className="w-4 h-4" />
                  {showFilters ? "إخفاء الفلاتر" : "عرض الفلاتر"}
                </button>

                <div className="flex items-center gap-2">
                  <ArrowUpDown className="w-4 h-4 text-muted-foreground" />
                  <select className="select-field text-sm py-2.5" value={sortBy} onChange={(e) => setSortBy(e.target.value as SortOption)}>
                    <option value="rating">الأعلى تقييماً</option>
                    <option value="experience">الأكثر خبرة</option>
                    <option value="price_asc">السعر: الأقل أولاً</option>
                    <option value="price_desc">السعر: الأعلى أولاً</option>
                  </select>
                </div>
              </div>

              {filtered.length === 0 ? (
                <div className="card-base p-10 text-center empty-state">
                  <div className="empty-state-icon"><Search className="w-8 h-8 text-muted-foreground" /></div>
                  <p className="empty-state-title">لا توجد نتائج مطابقة</p>
                  <p className="empty-state-description">جرّب تقليل الفلاتر أو تغيير كلمات البحث.</p>
                </div>
              ) : (
                filtered.map((doc) => <DoctorCard key={doc.id} doctor={doc} variant="list" />)
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
