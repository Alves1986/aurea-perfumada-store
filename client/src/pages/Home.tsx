import { useState } from "react";
import { Link } from "wouter";
import { ArrowRight, ChevronDown, Heart, Leaf, Sparkles, Truck } from "lucide-react";
import StoreHeader from "@/components/StoreHeader";
import StoreFooter from "@/components/StoreFooter";

const demoProducts = [
  { slug: "vela-aurora", name: "Vela Aurora", scent: "Baunilha & âmbar", price: "R$ 00,00", tone: "blush", tag: "Aconchego", note: "quente · luminosa", image: "/product-aurora.jpg" },
  { slug: "vela-serena", name: "Vela Serena", scent: "Lavanda & cedro", price: "R$ 00,00", tone: "sage", tag: "Pausa", note: "fresca · amadeirada", image: "/product-serena.jpg" },
  { slug: "vela-encontro", name: "Vela Encontro", scent: "Figo & sândalo", price: "R$ 00,00", tone: "sand", tag: "Presença", note: "envolvente · elegante", image: "/product-encontro.jpg" },
];

const moments = [
  { title: "Relaxar", copy: "Uma pausa que começa quando você acende uma luz.", symbol: "01", href: "/colecoes/pausa" },
  { title: "Presentear", copy: "Um gesto delicado para dizer: pensei em você.", symbol: "02", href: "/kits" },
  { title: "Decorar", copy: "Detalhes que transformam a casa sem excessos.", symbol: "03", href: "/colecoes/presenca" },
  { title: "Aconchegar", copy: "A atmosfera certa para ficar mais um pouco.", symbol: "04", href: "/colecoes/aconchego" },
];

const faqs = [
  ["Como escolher um aroma?", "Comece pelo momento que você quer criar. Nosso guia sensorial organiza as famílias olfativas para deixar a escolha mais intuitiva."],
  ["Como cuidar da minha vela?", "Superfície estável, chama sempre sob supervisão e pavio aparado conforme a orientação da marca. Reunimos todos os cuidados em um guia simples."],
  ["Posso enviar como presente?", "Sim — a experiência de presente está sendo estruturada para receber mensagem, composição e regras reais da marca."],
];

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <main className="min-h-screen bg-[#f6f1e9] text-[#382d27]">
      <div className="demo-bar">AMBIENTE DEMO · catálogo, preços e políticas reais serão configurados antes da publicação</div>
      <StoreHeader />

      <section className="hero-section hero-editorial">
        <div className="container hero-grid">
          <div className="hero-copy">
            <div className="eyebrow"><Sparkles size={14} /> feito à mão, pensado nos detalhes</div>
            <h1>Luz, aroma e presença <em>para os seus momentos.</em></h1>
            <p>Velas artesanais feitas para perfumar a casa, decorar com afeto e transformar pequenos rituais em memórias.</p>
            <div className="hero-actions"><Link className="button button-dark" href="/colecoes">Conhecer velas <ArrowRight size={17} /></Link><Link className="text-link" href="/kits">Escolher um presente <ArrowRight size={16} /></Link></div>
            <div className="hero-proof"><span><Heart size={14} /> feito em pequenas tiragens</span><span><Leaf size={14} /> aromas para sentir</span></div>
          </div>
          <div className="hero-art hero-photo-art" aria-label="Vela artesanal Áurea Perfumada em cenário editorial"><div className="hero-photo-glow" /><img src="/hero-aurea.jpg" alt="Vela artesanal em cenário de luz quente e materiais naturais" /><div className="art-caption">o ritual começa<br /><strong>na primeira chama</strong></div></div>
        </div>
      </section>

      <section className="trust-strip" aria-label="Diferenciais da marca"><div className="container trust-grid"><div><Sparkles size={18} /><span><strong>Artesanal</strong><small>feito com cuidado</small></span></div><div><Leaf size={18} /><span><strong>Sensorial</strong><small>aromas com intenção</small></span></div><div><Heart size={18} /><span><strong>Afetivo</strong><small>para viver e presentear</small></span></div><div><Truck size={18} /><span><strong>Experiência</strong><small>do clique ao ritual</small></span></div></div></section>

      <section className="section section-light">
        <div className="container"><div className="section-heading"><div><span className="eyebrow">uma seleção para começar</span><h2>Pequenas luzes,<br /><em>grandes atmosferas.</em></h2></div><Link href="/colecoes" className="text-link desktop-only">Ver todas as velas <ArrowRight size={16} /></Link></div>
          <div className="product-grid home-product-grid">{demoProducts.map((product) => <article className="product-card" key={product.name}><Link href={`/produtos/${product.slug}`} className={`product-visual ${product.tone} product-photo-link`}><img src={product.image} alt={`${product.name} — vela artesanal`} className="product-photo" /><span className="photo-scrim" /><span className="collection-badge">{product.tag}</span><span className="photo-label photo-label-on-image">ver detalhes</span></Link><div className="product-info"><div><h3>{product.name}</h3><p>{product.scent}</p><small>{product.note}</small></div><strong>{product.price}</strong></div></article>)}</div>
          <Link href="/colecoes" className="text-link mobile-only center-link">Ver todas as velas <ArrowRight size={16} /></Link>
        </div>
      </section>

      <section className="section moment-section"><div className="container"><div className="section-heading centered"><div><span className="eyebrow">encontre o seu momento</span><h2>Uma vela para cada <em>intenção.</em></h2></div></div><div className="moment-grid">{moments.map((moment) => <Link href={moment.href} className="moment-card" key={moment.title}><span>{moment.symbol}</span><div><h3>{moment.title}</h3><p>{moment.copy}</p></div><ArrowRight size={18} /></Link>)}</div></div></section>

      <section className="section kit-section"><div className="container kit-grid"><div className="kit-art kit-photo-art"><img src="/kit-aurea.jpg" alt="Composição de presente com velas artesanais" /><span className="photo-label light">foto real da composição a preencher</span></div><div className="kit-copy"><span className="eyebrow">para presentear sem pressa</span><h2>O cuidado mora<br />nos <em>detalhes.</em></h2><p>Escolha uma composição, escreva uma mensagem e deixe o gesto chegar com a delicadeza que ele merece.</p><Link href="/kits" className="button button-light">Conhecer kits <ArrowRight size={17} /></Link></div></div></section>

      <section className="section aroma-section"><div className="container"><div className="section-heading"><div><span className="eyebrow">um universo para sentir</span><h2>Famílias <em>olfativas.</em></h2></div><Link href="/aromas" className="text-link desktop-only">Explorar aromas <ArrowRight size={16} /></Link></div><div className="aroma-grid"><Link href="/aromas" className="aroma-card aroma-amber"><span>01 · envolventes</span><h3>Ambarados</h3><p>Quentes, luminosos e acolhedores.</p></Link><Link href="/aromas" className="aroma-card aroma-green"><span>02 · frescos</span><h3>Verdes</h3><p>Botânicos, leves e tranquilos.</p></Link><Link href="/aromas" className="aroma-card aroma-floral"><span>03 · delicados</span><h3>Florais</h3><p>Suaves, presentes e afetivos.</p></Link></div></div></section>

      <section className="section craft-section"><div className="container craft-grid"><div className="craft-photo"><img src="/craft-aurea.jpg" alt="Processo artesanal de produção de vela" /><span>o feito à mão<br /><strong>tem outro tempo</strong></span></div><div><span className="eyebrow">a beleza do feito à mão</span><h2>Feito à mão,<br /><em>pensado nos detalhes.</em></h2><p>Cada escolha — do aroma ao acabamento — é uma oportunidade de transformar um objeto em presença. Aqui, o artesanal encontra o contemporâneo em pequenas tiragens e gestos cuidadosos.</p><Link href="/sobre" className="text-link">Conhecer a marca <ArrowRight size={16} /></Link></div></div></section>

      <section className="section faq-section"><div className="container faq-grid"><div><span className="eyebrow">talvez você queira saber</span><h2>Perguntas que<br /><em>acolhem.</em></h2><Link href="/faq" className="text-link">Ver todas as dúvidas <ArrowRight size={16} /></Link></div><div className="faq-list">{faqs.map(([q, answer], i) => <div className="faq-item" key={q}><button onClick={() => setOpenFaq(openFaq === i ? null : i)} aria-expanded={openFaq === i}><span>{q}</span><ChevronDown size={18} className={openFaq === i ? "rotate" : ""} /></button>{openFaq === i && <p>{answer}</p>}</div>)}</div></div></section>

      <section className="newsletter-section"><div className="container newsletter-inner"><div><span className="eyebrow">receba novidades com calma</span><h2>Um pouco de luz<br /><em>na sua caixa de entrada.</em></h2></div><form className="newsletter-form" onSubmit={(e) => e.preventDefault()}><label htmlFor="email">Seu melhor e-mail</label><div><input id="email" type="email" placeholder="voce@email.com" /><button className="button button-dark" type="submit">Quero receber <ArrowRight size={17} /></button></div><small>Ao enviar, você concorda com o uso do contato para comunicações da marca. Sem promessa de desconto nesta versão DEMO.</small></form></div></section>
      <StoreFooter />
    </main>
  );
}
