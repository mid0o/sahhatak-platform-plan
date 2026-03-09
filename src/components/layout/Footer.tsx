import { Link } from "react-router-dom";
import { Plus, Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="container-app py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-primary-foreground/20 flex items-center justify-center">
                <Plus className="w-4 h-4 text-primary-foreground" />
              </div>
              <span className="text-lg font-bold">صحتك</span>
            </div>
            <p className="text-sm opacity-70 leading-relaxed">
              أكبر شبكة طبية في المملكة والوطن العربي. نسعى لتسهيل الوصول إلى الرعاية الصحية المتميزة للجميع.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">روابط سريعة</h4>
            <ul className="space-y-2 text-sm opacity-70">
              <li><Link to="/" className="hover:opacity-100 transition-opacity">عن صحتك</Link></li>
              <li><Link to="/doctors" className="hover:opacity-100 transition-opacity">ابحث عن طبيب</Link></li>
              <li><Link to="/pharmacies" className="hover:opacity-100 transition-opacity">صيدليتنا أونلاين</Link></li>
              <li><Link to="#" className="hover:opacity-100 transition-opacity">المدونة الطبية</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold mb-4">الدعم والمساعدة</h4>
            <ul className="space-y-2 text-sm opacity-70">
              <li><Link to="#" className="hover:opacity-100 transition-opacity">الأسئلة الشائعة</Link></li>
              <li><Link to="#" className="hover:opacity-100 transition-opacity">اتصل بنا</Link></li>
              <li><Link to="#" className="hover:opacity-100 transition-opacity">شروط الاستخدام</Link></li>
              <li><Link to="#" className="hover:opacity-100 transition-opacity">سياسة الخصوصية</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">تواصل معنا</h4>
            <ul className="space-y-3 text-sm opacity-70">
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 shrink-0" />
                <span>الرياض، المملكة العربية السعودية</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 shrink-0" />
                <span dir="ltr">9200 12345</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 shrink-0" />
                <span>support@sehatuk.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-10 pt-6 text-center text-sm opacity-50">
          © 2024 منصة صحتك الطبية. جميع الحقوق محفوظة.
        </div>
      </div>
    </footer>
  );
}
