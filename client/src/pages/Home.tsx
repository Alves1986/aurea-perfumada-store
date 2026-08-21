import { useState } from "react";
import { Link } from "wouter";
import { ArrowRight, ChevronDown, Instagram, Menu, MessageCircle, Music2, Search, ShoppingBag, Sparkles, X } from "lucide-react";

const logoTop = "/manus-storage/Gemini_Generated_Image_bxe5iebxe5iebxe5-removebg-preview_d5762ebc.png";

const socialLinks = [
  { label: "Instagram", icon: Instagram, href: "/contato?canal=instagram" },
  { label: "TikTok", icon: Music2, href: "/contato?canal=tiktok" },
  { label: "WhatsApp", icon: MessageCircle, href: "/contato?canal=whatsapp" },
];

const demoProducts = [
  { name: "Vela Aurora", scent: "Baunilha & âmbar", price: "R$ 00,00", tone: "blush", tag: "DEMO" },
  { name: "Vela Serena", scent: "Lavanda & cedro", price: "R$ 00,00", tone: "sage", tag: "DEMO" },
  { name: "Vela Encontro", scent: "Figo & sândalo", price: "R$ 00,00", tone: "sand", tag: "DEMO" },
];

const moments = [
  { title: "Relaxar", copy: "A pausa que começa quando você acende uma luz.", symbol: "01" },
  { title: "Presentear", copy: "Um gesto delicado para dizer: pensei em você.", symbol: "02" },
  { title: "Decorar", copy: "Detalhes que transformam a casa sem excessos.", symbol: "03" },
  { title: "Aconchegar", copy: "A atmosfera certa para ficar mais um pouco.", symbol: "04" },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <main className="min-h-screen bg-[#f6f1e9] text-[#382d27]">
      <div className="demo-bar">AMBIENTE DEMO · informações comerciais reais serão configuradas antes da publicação</div>
      <header className="site-header">
        <div className="container header-inner">
          <button className="icon-button mobile-only" aria-label="Abrir menu" onClick={() => setMenuOpen(true)}><Menu size={22} /></button>
          <Link href="/" className="brand-lockup" aria-label="Áurea Perfumada, início">
            <img src={logoTop} alt="Áurea Perfumada" className="brand-logo" />
            <span className="brand-wordmark">Áurea Perfumada</span>
          </Link>
          <nav className="desktop-nav" aria-label="Navegação principal">
            <Link href="/colecoes">Coleções</Link>
            <Link href="/kits">Presentes</Link>
            <Link href="/aromas">Aromas</Link>
            <Link href="/sobre">A marca</Link>
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
          <nav><Link href="/colecoes" onClick={() => setMenuOpen(false)}>Coleções</Link><Link href="/kits" onClick={() => setMenuOpen(false)}>Presentes</Link><Link href="/aromas" onClick={() => setMenuOpen(false)}>Aromas</Link><Link href="/sobre" onClick={() => setMenuOpen(false)}>A marca</Link><Link href="/como-usar" onClick={() => setMenuOpen(false)}>Como usar</Link></nav>
          <div className="mobile-menu-foot">Luz, aroma e presença para os seus momentos.</div>
        </div>
      </div>}

      <section className="hero-section">
        <div className="container hero-grid">
          <div className="hero-copy">
            <div className="eyebrow"><Sparkles size={14} /> feito à mão, pensado nos detalhes</div>
            <h1>Luz, aroma e presença <em>para os seus momentos.</em></h1>
            <p>Velas artesanais feitas para perfumar a casa, decorar com afeto e tornar pequenos rituais mais especiais.</p>
            <div className="hero-actions"><Link className="button button-dark" href="/colecoes">Conhecer velas <ArrowRight size={17} /></Link><Link className="text-link" href="/kits">Escolher um presente <ArrowRight size={16} /></Link></div>
            <div className="hero-note"><span className="note-dot" /> catálogo demonstrativo · produtos reais serão cadastrados pela marca</div>
          </div>
          <div className="hero-art" aria-label="Placeholder para fotografia real de produto"><div className="hero-orb orb-one" /><div className="hero-orb orb-two" /><div className="hero-candle"><span className="candle-flame" /><div className="candle-label">ÁUREA<br /><small>PERFUMADA</small></div></div><div className="art-caption">foto real da marca<br /><strong>a preencher</strong></div></div>
        </div>
      </section>

      <section className="section section-light">
        <div className="container"><div className="section-heading"><div><span className="eyebrow">uma seleção para começar</span><h2>Pequenas luzes,<br /><em>grandes atmosferas.</em></h2></div><Link href="/colecoes" className="text-link desktop-only">Ver todas as velas <ArrowRight size={16} /></Link></div>
          <div className="product-grid">{demoProducts.map((product) => <article className="product-card" key={product.name}><Link href={`/produtos/${product.name.toLowerCase().replaceAll(" ", "-")}`} className={`product-visual ${product.tone}`}><span className="demo-badge">{product.tag}</span><div className="placeholder-candle"><span className="candle-flame small" /><div className="candle-label">ÁUREA</div></div><span className="photo-label">foto de produto<br />a preencher</span></Link><div className="product-info"><div><h3>{product.name}</h3><p>{product.scent}</p></div><strong>{product.price}</strong></div></article>)}</div>
          <Link href="/colecoes" className="text-link mobile-only center-link">Ver todas as velas <ArrowRight size={16} /></Link>
        </div>
      </section>

      <section className="section moment-section"><div className="container"><div className="section-heading centered"><div><span className="eyebrow">encontre o seu momento</span><h2>Uma vela para cada <em>intenção.</em></h2></div></div><div className="moment-grid">{moments.map((moment) => <Link href="/colecoes" className="moment-card" key={moment.title}><span>{moment.symbol}</span><div><h3>{moment.title}</h3><p>{moment.copy}</p></div><ArrowRight size={18} /></Link>)}</div></div></section>

      <section className="section kit-section"><div className="container kit-grid"><div className="kit-art"><div className="kit-circle" /><div className="kit-box"><span>um presente<br />com presença</span></div><span className="photo-label light">placeholder de foto real</span></div><div className="kit-copy"><span className="eyebrow">para presentear sem pressa</span><h2>O cuidado mora<br />nos <em>detalhes.</em></h2><p>Escolha uma composição, escreva uma mensagem e deixe o gesto chegar com a delicadeza que ele merece.</p><Link href="/kits" className="button button-light">Conhecer kits <ArrowRight size={17} /></Link></div></div></section>

      <section className="section aroma-section"><div className="container"><div className="section-heading"><div><span className="eyebrow">um universo para sentir</span><h2>Famílias <em>olfativas.</em></h2></div><Link href="/aromas" className="text-link desktop-only">Explorar aromas <ArrowRight size={16} /></Link></div><div className="aroma-grid"><Link href="/aromas" className="aroma-card aroma-amber"><span>01</span><h3>Ambarados</h3><p>Envolventes, quentes e luminosos.</p></Link><Link href="/aromas" className="aroma-card aroma-green"><span>02</span><h3>Verdes</h3><p>Frescos, botânicos e tranquilos.</p></Link><Link href="/aromas" className="aroma-card aroma-floral"><span>03</span><h3>Florais</h3><p>Delicados, suaves e presentes.</p></Link></div></div></section>

      <section className="section craft-section"><div className="container craft-grid"><div><span className="eyebrow">a beleza do feito à mão</span><h2>Feito à mão,<br /><em>pensado nos detalhes.</em></h2></div><div><p>Cada escolha — do aroma ao acabamento — é uma oportunidade de transformar um objeto em presença. Aqui, o artesanal encontra o contemporâneo em pequenas tiragens e gestos cuidadosos.</p><Link href="/sobre" className="text-link">Conhecer a marca <ArrowRight size={16} /></Link></div></div></section>

      <section className="section faq-section"><div className="container faq-grid"><div><span className="eyebrow">talvez você queira saber</span><h2>Perguntas que<br /><em>acolhem.</em></h2><Link href="/faq" className="text-link">Ver todas as dúvidas <ArrowRight size={16} /></Link></div><div className="faq-list">{["Como escolher um aroma?", "Como cuidar da minha vela?", "Posso enviar como presente?"].map((q, i) => <div className="faq-item" key={q}><button onClick={() => setOpenFaq(openFaq === i ? null : i)} aria-expanded={openFaq === i}><span>{q}</span><ChevronDown size={18} className={openFaq === i ? "rotate" : ""} /></button>{openFaq === i && <p>{i === 0 ? "Use o nosso guia de famílias olfativas como ponto de partida. As descrições são sensoriais e pensadas para ajudar na escolha." : i === 1 ? "Reunimos orientações gerais de segurança e cuidado na página Como usar. Os textos serão revisados pela responsável pela produção." : "A estrutura de presente está preparada para receber as regras reais da marca antes da publicação."}</p>}</div>)}</div></div></section>

      <section className="newsletter-section"><div className="container newsletter-inner"><div><span className="eyebrow">receba novidades com calma</span><h2>Um pouco de luz<br /><em>na sua caixa de entrada.</em></h2></div><form className="newsletter-form" onSubmit={(e) => e.preventDefault()}><label htmlFor="email">Seu melhor e-mail</label><div><input id="email" type="email" placeholder="voce@email.com" /><button className="button button-dark" type="submit">Quero receber <ArrowRight size={17} /></button></div><small>Ao enviar, você concorda com o uso do contato para comunicações da marca. Sem promessa de desconto nesta versão DEMO.</small></form></div></section>

      <footer className="site-footer"><div className="container footer-grid"><div><Link href="/" className="footer-logo-link" aria-label="Áurea Perfumada, início"><img src={logoTop} alt="Áurea Perfumada" className="footer-logo-lockup" /></Link><div className="footer-socials" aria-label="Redes sociais da Áurea Perfumada"><span className="footer-social-label">acompanhe a marca</span><div className="footer-social-list">{socialLinks.map(({ label, icon: Icon, href }) => <a key={label} href={href} className="footer-social-link" aria-label={`${label} — configurar perfil`} title={`${label} — configurar perfil`}><Icon size={17} strokeWidth={1.8} /></a>)}</div></div><p>Velas artesanais para perfumar ambientes, decorar com afeto e tornar pausas cotidianas mais especiais.</p></div><div><h3>Explorar</h3><Link href="/colecoes">Coleções</Link><Link href="/kits">Presentes</Link><Link href="/aromas">Aromas</Link><Link href="/sobre">A marca</Link></div><div><h3>Ajuda</h3><Link href="/como-usar">Como usar</Link><Link href="/entregas">Entregas</Link><Link href="/trocas-e-devolucoes">Trocas e devoluções</Link><Link href="/contato">Contato</Link></div><div><h3>Importante</h3><Link href="/privacidade">Privacidade</Link><Link href="/termos-de-uso">Termos de uso</Link><Link href="/faq">FAQ</Link><span className="footer-demo">ambiente DEMO</span></div></div><div className="container footer-bottom"><span>© 2026 Áurea Perfumada · conteúdo demonstrativo</span><span>Feito com presença.</span></div></footer>
    </main>
  );
}
