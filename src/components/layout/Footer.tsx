import { Link } from "react-router-dom";
import { Plus, Phone, Mail, MapPin, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="container-app py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-5">
              <div className="w-10 h-10 rounded-xl bg-primary-foreground/20 flex items-center justify-center">
                <Plus className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold">صحتك</span>
            </div>
            <p className="text-sm opacity-70 leading-relaxed mb-4">
              أكبر شبكة طبية في مصر 🇪🇬 بنسهّل عليك توصل لأحسن دكاترة ورعاية صحية متميزة... وبالشفا دايماً! 💙
            </p>
            <div className="flex items-center gap-1 text-sm opacity-60">
              <span>صُنع بـ</span>
              <Heart className="w-3.5 h-3.5 fill-current text-red-400" />
              <span>في مصر</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-5">روابط سريعة</h4>
            <ul className="space-y-3 text-sm opacity-70">
              <li><Link to="/" className="hover:opacity-100 transition-opacity">عن صحتك</Link></li>
              <li><Link to="/doctors" className="hover:opacity-100 transition-opacity">دوّر على دكتور</Link></li>
              <li><Link to="/pharmacies" className="hover:opacity-100 transition-opacity">الصيدلية أونلاين</Link></li>
              <li><Link to="#" className="hover:opacity-100 transition-opacity">المدونة الطبية</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-bold mb-5">الدعم والمساعدة</h4>
            <ul className="space-y-3 text-sm opacity-70">
              <li><Link to="#" className="hover:opacity-100 transition-opacity">الأسئلة الشائعة</Link></li>
              <li><Link to="#" className="hover:opacity-100 transition-opacity">اتصل بينا</Link></li>
              <li><Link to="#" className="hover:opacity-100 transition-opacity">شروط الاستخدام</Link></li>
              <li><Link to="#" className="hover:opacity-100 transition-opacity">سياسة الخصوصية</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-5">تواصل معانا</h4>
            <ul className="space-y-4 text-sm opacity-70">
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-primary-foreground/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <span>القاهرة، مصر</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-primary-foreground/10 flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <span dir="ltr">19XXX</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-primary-foreground/10 flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <span>support@sehatuk.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm opacity-50">
          <span>© 2024 منصة صحتك الطبية. جميع الحقوق محفوظة.</span>
          <span>🇪🇬 فخورين إننا مصريين</span>
        </div>
      </div>
    </footer>
  );
}
