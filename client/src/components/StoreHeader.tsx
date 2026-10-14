import { useEffect, useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, Search, ShoppingBag, X } from "lucide-react";

const logoTop = "/logo-aurea-cropped.png";

const navItems = [
  { href: "/colecoes", label: "Coleções" },
  { href: "/kits", label: "Presentes" },
  { href: "/aromas", label: "Aromas" },
  { href: "/sobre", label: "A marca" },
];

export default function StoreHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuRendered, setMenuRendered] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [location] = useLocation();
  const isActive = (href: string) => location === href || (href === "/colecoes" && (location.startsWith("/produtos/") || location.startsWith("/colecoes/")));
  const openMenu = () => { setMenuRendered(true); window.setTimeout(() => setMenuOpen(true), 10); };
  const closeMenu = () => { setMenuOpen(false); window.setTimeout(() => setMenuRendered(false), 220); };

  useEffect(() => {
    const readCart = () => {
      try { setCartCount(Number(JSON.parse(localStorage.getItem("aurea-cart") || "{}").quantity) || 0); } catch { setCartCount(0); }
    };
    readCart();
    window.addEventListener("storage", readCart);
    return () => window.removeEventListener("storage", readCart);
  }, [location]);

  return (
    <>
      <header className="site-header">
        <div className="container header-inner">
          <button className="icon-button mobile-only" aria-label="Abrir menu" onClick={openMenu}><Menu size={22} /></button>
          <Link href="/" className="brand-lockup" aria-label="Áurea Perfumada, início">
            <img src={logoTop} alt="Áurea Perfumada" className="brand-logo-wide" />
          </Link>
          <nav className="desktop-nav" aria-label="Navegação principal">
            {navItems.map((item) => <Link key={item.href} href={item.href} className={isActive(item.href) ? "active" : undefined} aria-current={isActive(item.href) ? "page" : undefined}>{item.label}</Link>)}
          </nav>
          <div className="header-actions">
            <Link href="/colecoes" className="icon-button" aria-label="Buscar e explorar produtos"><Search size={20} /></Link>
            <Link href="/carrinho" className="cart-link" aria-label={`Carrinho com ${cartCount} ${cartCount === 1 ? "item" : "itens"}`}><ShoppingBag size={20} /><span>{cartCount}</span></Link>
          </div>
        </div>
      </header>

      {menuRendered && <div className={`mobile-menu-overlay${menuOpen ? " is-open" : ""}`} role="dialog" aria-modal="true" aria-label="Menu principal">
        <div className={`mobile-menu${menuOpen ? " is-open" : ""}`}>
          <div className="mobile-menu-top"><span>Menu</span><button className="icon-button" onClick={closeMenu} aria-label="Fechar menu"><X size={22} /></button></div>
          <nav>{[...navItems, { href: "/como-usar", label: "Como usar" }].map((item) => <Link key={item.href} href={item.href} onClick={closeMenu} className={isActive(item.href) ? "active" : undefined} aria-current={isActive(item.href) ? "page" : undefined}>{item.label}</Link>)}</nav>
          <div className="mobile-menu-foot">Luz, aroma e presença para os seus momentos.</div>
        </div>
      </div>}
    </>
  );
}
