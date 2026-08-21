import { useState } from "react";
import { Link } from "wouter";
import { ArrowRight, ChevronDown, Sparkles } from "lucide-react";
import StoreHeader from "@/components/StoreHeader";
import StoreFooter from "@/components/StoreFooter";

const demoProducts = [
  { name: "Vela Aurora", scent: "Baunilha & âmbar", price: "R$ 00,00", tone: "blush", tag: "DEMO · ACONCHEGO" },
  { name: "Vela Serena", scent: "Lavanda & cedro", price: "R$ 00,00", tone: "sage", tag: "DEMO · PAUSA" },
  { name: "Vela Encontro", scent: "Figo & sândalo", price: "R$ 00,00", tone: "sand", tag: "DEMO · PRESENÇA" },
  { name: "Vela Brisa", scent: "Capim-limão & alecrim", price: "R$ 00,00", tone: "sage", tag: "DEMO · PAUSA" },
  { name: "Vela Terra", scent: "Patchouli & musgo", price: "R$ 00,00", tone: "sand", tag: "DEMO · ACONCHEGO" },
  { name: "Vela Solis", scent: "Bergamota & flor de laranjeira", price: "R$ 00,00", tone: "blush", tag: "DEMO · PRESENÇA" },
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
      <StoreHeader />

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

      <StoreFooter />
    </main>
  );
}
