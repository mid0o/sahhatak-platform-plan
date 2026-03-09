import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Heart, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { Logo } from "@/components/shared/Logo";

const quickLinks = [
  { label: "عن صحتك", path: "/" },
  { label: "دوّر على دكتور", path: "/doctors" },
  { label: "الصيدلية أونلاين", path: "/pharmacies" },
  { label: "المدونة الطبية", path: "#" },
];

const supportLinks = [
  { label: "الأسئلة الشائعة", path: "#" },
  { label: "اتصل بينا", path: "#" },
  { label: "شروط الاستخدام", path: "#" },
  { label: "سياسة الخصوصية", path: "#" },
];

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
];

export default function Footer() {
  return (
    <footer className="bg-foreground text-primary-foreground">
      {/* Main Footer */}
      <div className="container-app py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand Column */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="mb-5">
              <Logo light />
            </div>
            <p className="text-sm opacity-70 leading-relaxed mb-5 max-w-xs">
              أكبر شبكة طبية في مصر 🇪🇬 بنسهّل عليك توصل لأحسن دكاترة ورعاية صحية متميزة... وبالشفا دايماً! 💙
            </p>
            
            {/* Social Links */}
            <div className="flex items-center gap-2">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-9 h-9 rounded-lg bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-5 text-lg">روابط سريعة</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link 
                    to={link.path} 
                    className="text-sm opacity-70 hover:opacity-100 transition-opacity inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-bold mb-5 text-lg">الدعم والمساعدة</h4>
            <ul className="space-y-3">
              {supportLinks.map((link) => (
                <li key={link.label}>
                  <Link 
                    to={link.path} 
                    className="text-sm opacity-70 hover:opacity-100 transition-opacity inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-5 text-lg">تواصل معانا</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-primary-foreground/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <span className="text-sm opacity-70">القاهرة، مصر</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-primary-foreground/10 flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <span className="text-sm opacity-70" dir="ltr">19XXX</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-primary-foreground/10 flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <span className="text-sm opacity-70">support@sehatuk.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container-app py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-sm opacity-60">
            <span>© 2024 منصة صحتك الطبية.</span>
            <span className="hidden sm:inline">جميع الحقوق محفوظة.</span>
          </div>
          <div className="flex items-center gap-1.5 text-sm opacity-60">
            <span>صُنع بـ</span>
            <Heart className="w-3.5 h-3.5 fill-current text-red-400" />
            <span>في مصر 🇪🇬</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
