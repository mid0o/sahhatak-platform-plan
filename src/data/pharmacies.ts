export interface Medicine {
  id: string;
  name: string;
  scientificName: string;
  description: string;
  price: number;
  imageColor: string;
}

export interface Pharmacy {
  id: string;
  name: string;
  nameEn: string;
  area: string;
  city: string;
  rating: number;
  reviewCount: number;
  distance: number;
  isOpen: boolean;
  openHours: string;
  fridayHours: string;
  description: string;
  phone: string;
  medicines: Medicine[];
  reviews: { name: string; rating: number; text: string; date: string }[];
}

export const medicines: Medicine[] = [
  { id: "m1", name: "بنادول أدفانس", scientificName: "باراسيتامول 500 ملجم", description: "مسكن للآلام وخافض للحرارة", price: 12.5, imageColor: "#E8A834" },
  { id: "m2", name: "فولتارين جل", scientificName: "ديكلوفيناك الصوديوم", description: "مسكن موضعي للآلام", price: 28.0, imageColor: "#2D8B6F" },
  { id: "m3", name: "بنادول إكسترا", scientificName: "باراسيتامول + كافيين", description: "مسكن للآلام وخافض للحرارة - 24 قرص", price: 18.5, imageColor: "#C44D4D" },
  { id: "m4", name: "فيتامين سي 1000 ملجم", scientificName: "حمض الأسكوربيك", description: "أقراص فوارة - 20 قرص", price: 25.0, imageColor: "#E8A834" },
  { id: "m5", name: "معقم بيتول", scientificName: "بوفيدون أيودين", description: "حماية من الجراثيم والبكتيريا - 50 مل", price: 12.75, imageColor: "#4A8B8B" },
  { id: "m6", name: "واقي شمس لاروش بوزيه", scientificName: "عامل حماية 50+", description: "للبشرة الحساسة", price: 145.0, imageColor: "#2D6B8B" },
];

export const pharmacies: Pharmacy[] = [
  {
    id: "p1",
    name: "صيدلية النهدي",
    nameEn: "Al Nahdi Pharmacy",
    area: "حي العليا، الرياض - شارع التحلية",
    city: "الرياض",
    rating: 4.8,
    reviewCount: 200,
    distance: 1.2,
    isOpen: true,
    openHours: "السبت - الخميس: 08:00 ص - 12:00 م",
    fridayHours: "الجمعة: 04:00 م - 12:00 م",
    description: "تعتبر صيدلية النهدي واحدة من أكبر سلاسل الصيدليات في المملكة، توفر مجموعة واسعة من الأدوية، منتجات العناية بالبشرة، والمستلزمات الطبية مع خدمة الاستشارة الصيدلانية المجانية.",
    phone: "920001111",
    medicines: [medicines[0], medicines[2], medicines[3], medicines[4], medicines[5]],
    reviews: [
      { name: "أحمد الشمري", rating: 5, text: "خدمة ممتازة وسريعة جداً. الصيدلي كان متعاوناً للغاية في شرح طريقة استخدام الدواء. المكان نظيف ومنظم.", date: "منذ يومين" },
      { name: "سارة القحطاني", rating: 4, text: "تتوفر لديهم معظم منتجات العناية بالبشرة التي كنت أبحث عنها. السعر كان مناسباً لكن كان هناك قليل من الازدحام عند الكاشير.", date: "منذ أسبوع" },
    ],
  },
  {
    id: "p2",
    name: "صيدلية الدواء",
    nameEn: "Al Dawaa Pharmacy",
    area: "حي الملقا، الرياض",
    city: "الرياض",
    rating: 4.6,
    reviewCount: 85,
    distance: 2.5,
    isOpen: true,
    openHours: "على مدار الساعة",
    fridayHours: "على مدار الساعة",
    description: "صيدلية متكاملة توفر جميع الأدوية والمستلزمات الطبية.",
    phone: "920002222",
    medicines: [medicines[0], medicines[1], medicines[4]],
    reviews: [],
  },
  {
    id: "p3",
    name: "صيدلية الشفاء",
    nameEn: "Al Shifaa Pharmacy",
    area: "حي الروضة، الرياض",
    city: "الرياض",
    rating: 4.5,
    reviewCount: 62,
    distance: 3.0,
    isOpen: false,
    openHours: "08:00 ص - 11:00 م",
    fridayHours: "04:00 م - 11:00 م",
    description: "صيدلية عائلية توفر أدوية بأسعار مناسبة.",
    phone: "920003333",
    medicines: [medicines[1], medicines[2], medicines[3]],
    reviews: [],
  },
  {
    id: "p4",
    name: "صيدلية الرعاية",
    nameEn: "Al Reaya Pharmacy",
    area: "حي النزهة، الرياض",
    city: "الرياض",
    rating: 4.3,
    reviewCount: 45,
    distance: 4.1,
    isOpen: true,
    openHours: "08:00 ص - 10:00 م",
    fridayHours: "مغلق",
    description: "صيدلية متخصصة في الأدوية والمكملات الغذائية.",
    phone: "920004444",
    medicines: [medicines[0], medicines[5]],
    reviews: [],
  },
];
