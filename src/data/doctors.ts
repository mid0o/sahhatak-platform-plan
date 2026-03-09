export interface Doctor {
  id: string;
  name: string;
  specialty: string;
  specialtyId: string;
  title: string;
  rating: number;
  reviewCount: number;
  price: number;
  city: string;
  area: string;
  experience: number;
  bio: string;
  gender: "male" | "female";
  available: boolean;
  nextSlot: string;
  avatarColor: string;
  initials: string;
  tags: string[];
  qualifications: { title: string; institution: string; year: string }[];
  timeSlots: { time: string; available: boolean; period: "morning" | "evening" }[];
  reviews: { name: string; rating: number; text: string; date: string }[];
}

export const doctors: Doctor[] = [
  {
    id: "1",
    name: "د. محمد خالد العتيبي",
    specialty: "أخصائي أمراض القلب والقسطرة التداخلية",
    specialtyId: "heart",
    title: "استشاري جراحة القلب والأوعية الدموية",
    rating: 4.9,
    reviewCount: 120,
    price: 350,
    city: "الرياض",
    area: "حي السليمانية",
    experience: 15,
    bio: "د. محمد خالد العتيبي هو استشاري متميز في جراحة القلب مع خبرة تزيد عن 15 عاماً في علاج الحالات المعقدة وجراحة المناظير. حصل على زمالة جراحة القلب من الكلية الملكية للجراحين، ويتخصص في إجراء عمليات القلب المفتوح المعقدة وجراحات الصمامات.",
    gender: "male",
    available: true,
    nextSlot: "05:00 م",
    avatarColor: "#1B5A8A",
    initials: "م.خ",
    tags: ["مشاكل الآن", "أنبوب صدرية", "جهد قلب", "تخطيط قلب"],
    qualifications: [
      { title: "دكتوراه في جراحة القلب والأوعية الدموية", institution: "جامعة الملك سعود", year: "2008" },
      { title: "رئيس قسم جراحة القلب", institution: "مستشفى التخصصي", year: "2015 - الحالي" },
    ],
    timeSlots: [
      { time: "09:00 ص", available: true, period: "morning" },
      { time: "09:30 ص", available: true, period: "morning" },
      { time: "10:00 ص", available: true, period: "morning" },
      { time: "10:30 ص", available: true, period: "morning" },
      { time: "11:00 ص", available: false, period: "morning" },
      { time: "01:00 م", available: true, period: "evening" },
      { time: "01:30 م", available: true, period: "evening" },
      { time: "02:00 م", available: true, period: "evening" },
      { time: "02:30 م", available: false, period: "evening" },
      { time: "03:00 م", available: true, period: "evening" },
      { time: "03:30 م", available: true, period: "evening" },
      { time: "04:00 م", available: true, period: "evening" },
    ],
    reviews: [
      { name: "سارة الأحمد", rating: 5, text: "طبيب حاذق جداً ومتاز في تشخيصه. أجرى لي عملية جراحية وكانت ناجحة بكل المقاييس. أنصح به بشدة.", date: "قبل أسبوع" },
      { name: "عبدالعزيز الفهد", rating: 5, text: "التعامل راقي جداً والعيادة مجهزة بأفضل الأدوات. الدكتور يسمع للمريض بشكل جيد جداً.", date: "قبل شهر" },
    ],
  },
  {
    id: "2",
    name: "د. سارة فهد بن سلمان",
    specialty: "استشاري جراحة القلب والأوعية الدموية",
    specialtyId: "heart",
    title: "استشارية جراحة القلب",
    rating: 4.9,
    reviewCount: 850,
    price: 500,
    city: "الرياض",
    area: "حي الملقا",
    experience: 12,
    bio: "متخصصة في جراحات القلب المفتوح وتغيير الصمامات، حاصلة على الزمالة الكندية في جراحة القلب.",
    gender: "female",
    available: true,
    nextSlot: "09:00 ص",
    avatarColor: "#2D8B6F",
    initials: "س.ف",
    tags: ["جراحة مناظير", "أمراض الصمامات"],
    qualifications: [
      { title: "زمالة كندية في جراحة القلب", institution: "جامعة تورنتو", year: "2012" },
    ],
    timeSlots: [
      { time: "09:00 ص", available: true, period: "morning" },
      { time: "10:00 ص", available: true, period: "morning" },
      { time: "11:00 ص", available: true, period: "morning" },
      { time: "02:00 م", available: true, period: "evening" },
      { time: "03:00 م", available: false, period: "evening" },
    ],
    reviews: [
      { name: "نورة العلي", rating: 5, text: "دكتورة ممتازة جداً ومتعاونة. تشرح كل شيء بالتفصيل.", date: "قبل 3 أيام" },
    ],
  },
  {
    id: "3",
    name: "د. ياسر محمود",
    specialty: "جراحة العظام",
    specialtyId: "bones",
    title: "استشاري جراحة العظام",
    rating: 4.7,
    reviewCount: 95,
    price: 400,
    city: "الرياض",
    area: "حي العليا",
    experience: 18,
    bio: "خبرة واسعة في جراحة العظام والمفاصل الصناعية.",
    gender: "male",
    available: true,
    nextSlot: "10:30 ص",
    avatarColor: "#8B5A2D",
    initials: "ي.م",
    tags: ["مفاصل صناعية", "جراحة العمود الفقري"],
    qualifications: [],
    timeSlots: [
      { time: "10:00 ص", available: true, period: "morning" },
      { time: "10:30 ص", available: true, period: "morning" },
      { time: "11:00 ص", available: true, period: "morning" },
    ],
    reviews: [],
  },
  {
    id: "4",
    name: "د. ليلى حسن",
    specialty: "أخصائية طب الأطفال",
    specialtyId: "children",
    title: "استشارية طب الأطفال",
    rating: 4.8,
    reviewCount: 210,
    price: 150,
    city: "جدة",
    area: "حي الروضة",
    experience: 10,
    bio: "طبيبة أطفال متخصصة في الأمراض المعدية والتطعيمات.",
    gender: "female",
    available: true,
    nextSlot: "11:00 ص",
    avatarColor: "#6B4C8A",
    initials: "ل.ح",
    tags: ["أمراض معدية", "تطعيمات"],
    qualifications: [],
    timeSlots: [
      { time: "09:00 ص", available: true, period: "morning" },
      { time: "11:00 ص", available: true, period: "morning" },
      { time: "01:00 م", available: true, period: "evening" },
    ],
    reviews: [],
  },
  {
    id: "5",
    name: "د. سارة الأحمد",
    specialty: "استشاري طب الأسنان",
    specialtyId: "teeth",
    title: "استشارية طب الأسنان",
    rating: 4.9,
    reviewCount: 173,
    price: 200,
    city: "الرياض",
    area: "حي النخيل",
    experience: 8,
    bio: "متخصصة في تجميل الأسنان والتقويم.",
    gender: "female",
    available: true,
    nextSlot: "02:00 م",
    avatarColor: "#2D6B8B",
    initials: "س.أ",
    tags: ["تجميل أسنان", "تقويم"],
    qualifications: [],
    timeSlots: [
      { time: "10:00 ص", available: true, period: "morning" },
      { time: "02:00 م", available: true, period: "evening" },
      { time: "03:00 م", available: true, period: "evening" },
    ],
    reviews: [],
  },
  {
    id: "6",
    name: "د. خالد بن عبدالله",
    specialty: "جراحة العظام",
    specialtyId: "bones",
    title: "استشاري جراحة العظام",
    rating: 4.8,
    reviewCount: 156,
    price: 250,
    city: "الرياض",
    area: "حي الورود",
    experience: 14,
    bio: "متخصص في جراحة المفاصل والكسور المعقدة.",
    gender: "male",
    available: true,
    nextSlot: "04:30 م",
    avatarColor: "#5A7B2D",
    initials: "خ.ع",
    tags: ["مفاصل", "كسور"],
    qualifications: [],
    timeSlots: [
      { time: "09:00 ص", available: true, period: "morning" },
      { time: "04:30 م", available: true, period: "evening" },
    ],
    reviews: [],
  },
];
