import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Search, Bell, User, Plus } from "lucide-react";

const navLinks = [
  { label: "الرئيسية", path: "/" },
  { label: "الأطباء", path: "/doctors" },
  { label: "الصيدليات", path: "/pharmacies" },
  { label: "المواعيد", path: "/dashboard" },
  { label: "المقالات الصحية", path: "#" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 bg-card border-b border-border">
      <div className="container-app flex items-center justify-between h-16">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center">
            <Plus className="w-5 h-5 text-primary-foreground" />
          </div>
          <span className="text-xl font-bold text-primary">صحتك</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`nav-link ${isActive(link.path) ? "active" : ""}`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-3">
          <Link to="/login" className="btn-outline text-xs px-4 py-2">
            تسجيل الدخول
          </Link>
          <Link to="/register" className="btn-primary text-xs px-4 py-2">
            إنشاء حساب
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-border bg-card animate-fade-in">
          <nav className="container-app py-4 flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`nav-link block ${isActive(link.path) ? "active" : ""}`}
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <hr className="border-border my-2" />
            <Link to="/login" className="btn-outline text-center text-sm" onClick={() => setMobileOpen(false)}>
              تسجيل الدخول
            </Link>
            <Link to="/register" className="btn-primary text-center text-sm" onClick={() => setMobileOpen(false)}>
              إنشاء حساب
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
