import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, Search, ShoppingBag, X } from "lucide-react";

const logoTop = "/manus-storage/Gemini_Generated_Image_bxe5iebxe5iebxe5-removebg-preview_d5762ebc.png";

const navItems = [
  { href: "/colecoes", label: "Coleções" },
  { href: "/kits", label: "Presentes" },
  { href: "/aromas", label: "Aromas" },
  { href: "/sobre", label: "A marca" },
];

export default function StoreHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [location] = useLocation();
  const isActive = (href: string) => location === href || (href === "/colecoes" && location.startsWith("/produtos/"));

  return (
    <>
      <header className="site-header">
        <div className="container header-inner">
          <button className="icon-button mobile-only" aria-label="Abrir menu" onClick={() => setMenuOpen(true)}><Menu size={22} /></button>
          <Link href="/" className="brand-lockup" aria-label="Áurea Perfumada, início">
            <img src={logoTop} alt="Áurea Perfumada" className="brand-logo" />
            <span className="brand-wordmark">Áurea Perfumada</span>
          </Link>
          <nav className="desktop-nav" aria-label="Navegação principal">
            {navItems.map((item) => <Link key={item.href} href={item.href} className={isActive(item.href) ? "active" : undefined} aria-current={isActive(item.href) ? "page" : undefined}>{item.label}</Link>)}
          </nav>
          <div className="header-actions">
            <button className="icon-button" aria-label="Buscar"><Search size={20} /></button>
            <Link href="/carrinho" className="cart-link" aria-label="Carrinho"><ShoppingBag size={20} /><span>0</span></Link>
          </div>
        </div>
      </header>

      {menuOpen && <div className="mobile-menu-overlay" role="dialog" aria-modal="true" aria-label="Menu principal">
        <div className="mobile-menu">
          <div className="mobile-menu-top"><span>Menu</span><button className="icon-button" onClick={() => setMenuOpen(false)} aria-label="Fechar menu"><X size={22} /></button></div>
          <nav>{[...navItems, { href: "/como-usar", label: "Como usar" }].map((item) => <Link key={item.href} href={item.href} onClick={() => setMenuOpen(false)} className={isActive(item.href) ? "active" : undefined} aria-current={isActive(item.href) ? "page" : undefined}>{item.label}</Link>)}</nav>
          <div className="mobile-menu-foot">Luz, aroma e presença para os seus momentos.</div>
        </div>
      </div>}
    </>
  );
}
