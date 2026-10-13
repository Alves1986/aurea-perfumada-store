import { useState } from "react";
import { Link } from "wouter";
import { ArrowRight, ArrowUp, Check, Copy, Instagram, MessageCircle, Music2, Share2 } from "lucide-react";

const logoTop = "/favicon.svg";
const socialLinks = [
  { label: "Instagram", icon: Instagram, href: "https://www.instagram.com/aurea.perfumada" },
  { label: "TikTok", icon: Music2, href: "https://www.tiktok.com/@aurea.perfumada" },
  { label: "WhatsApp", icon: MessageCircle, href: "https://api.whatsapp.com/send/?phone=42991534011&text&type=phone_number&app_absent=0" },
];

export default function StoreFooter() {
  const [shareState, setShareState] = useState<"idle" | "copied" | "error">("idle");
  const [toastMessage, setToastMessage] = useState("");

  const sharePage = async () => {
    const shareData = { title: "Áurea Perfumada", text: "Luz, aroma e presença para os seus momentos.", url: window.location.href };
    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else if (navigator.clipboard) {
        await navigator.clipboard.writeText(shareData.url);
        setShareState("copied");
        setToastMessage("Link copiado com cuidado.");
        window.setTimeout(() => { setShareState("idle"); setToastMessage(""); }, 2600);
      } else {
        setShareState("error");
        setToastMessage("Não foi possível compartilhar agora.");
        window.setTimeout(() => { setShareState("idle"); setToastMessage(""); }, 2800);
      }
    } catch (error) {
      if (error instanceof DOMException && error.name === "AbortError") return;
      setShareState("error");
      setToastMessage("Não foi possível compartilhar agora.");
      window.setTimeout(() => { setShareState("idle"); setToastMessage(""); }, 2800);
    }
  };

  const goToTop = () => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reducedMotion ? "auto" : "smooth" });
  };

  return <>
    <footer className="site-footer"><div className="container footer-grid"><div><Link href="/" className="footer-logo-link" aria-label="Áurea Perfumada, início"><img src={logoTop} alt="Áurea Perfumada" className="footer-logo-lockup" /></Link><div className="footer-socials" aria-label="Redes sociais da Áurea Perfumada"><span className="footer-social-label">Siga nossas redes</span><div className="footer-social-list">{socialLinks.map(({ label, icon: Icon, href }) => <a key={label} href={href} className="footer-social-link" aria-label={`${label} — perfil oficial`} title={`${label} — perfil oficial`} target="_blank" rel="noreferrer"><Icon size={17} strokeWidth={1.8} /></a>)}<button type="button" className="footer-social-link footer-share-button" onClick={sharePage} aria-label={shareState === "copied" ? "Link copiado" : shareState === "error" ? "Compartilhamento indisponível" : "Compartilhar página"} title={shareState === "copied" ? "Link copiado" : shareState === "error" ? "Compartilhamento indisponível" : "Compartilhar página"}>{shareState === "copied" ? <Check size={17} strokeWidth={2} /> : <Share2 size={17} strokeWidth={1.8} />}</button></div><span className={`footer-share-status${shareState === "error" ? " is-error" : ""}`} aria-live="polite">{shareState === "copied" ? <><Copy size={12} /> Link copiado</> : shareState === "error" ? "Não foi possível compartilhar" : ""}</span></div><p>Velas artesanais para perfumar ambientes, decorar com afeto e tornar pausas cotidianas mais especiais.</p></div><div><h3>Explorar</h3><Link href="/colecoes">Coleções</Link><Link href="/kits">Presentes</Link><Link href="/aromas">Aromas</Link><Link href="/sobre">A marca</Link></div><div><h3>Ajuda</h3><Link href="/como-usar">Como usar</Link><Link href="/entregas">Entregas</Link><Link href="/trocas-e-devolucoes">Trocas e devoluções</Link><Link href="/contato">Contato</Link></div><div><h3>Importante</h3><Link href="/privacidade">Privacidade</Link><Link href="/termos-de-uso">Termos de uso</Link><Link href="/faq">FAQ</Link><span className="footer-demo">ambiente DEMO</span></div></div><div className="container footer-bottom"><span>© 2026 Áurea Perfumada · conteúdo demonstrativo</span><span>Feito com presença.</span><button type="button" className="back-to-top" onClick={goToTop}><ArrowUp size={14} /> Voltar ao topo</button></div></footer>
    <div className={`site-toast${toastMessage ? " is-visible" : ""}`} role="status" aria-live="polite" aria-atomic="true">{toastMessage}</div>
  </>;
}
