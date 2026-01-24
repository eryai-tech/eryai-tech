'use client';

import { useState, useEffect } from 'react';

const translations = {
  no: {
    nav: { problem: "Problem", solution: "Løsning", story: "Hvorfor vi", cta: "Kom i gang" },
    hero: {
      badge: "Bygget av kundeservice-folk, for kundeservice-folk",
      title1: "Kundeservice som",
      titleHighlight: "faktisk løser",
      title2: "problemet",
      subtitle: "90% av supporthenvendelser er repeterende støy. Vi automatiserer dem – på svensk, norsk, dansk – så teamet ditt kan fokusere på det som faktisk krever mennesker.",
      cta1: "Se live demo",
      cta2: "Book discovery call"
    },
    problem: {
      label: "Problemet",
      title: "Ditt supportteam drukner i støy",
      subtitle: "Jeg har jobbet i kundeservice. Jeg vet hvordan det føles: 8 timer med \"Hva er åpningstidene?\", \"Glemt passord\", \"Hvor er min ordre?\" – mens de viktige sakene ligger og venter.",
      stat1: "av henvendelser er repeterende spørsmål",
      stat2: "spilder agenter daglig på \"copy-paste\" svar",
      stat3: "årlig kostnad per agent (nordisk lønn)"
    },
    solution: {
      label: "Løsningen",
      title: "AI som forstår nordiske kunder",
      subtitle: "Ikke enda en generisk chatbot. Ery AI er bygget for nordiske SMB – trent på hvordan skandinaver faktisk kommuniserer, med støtte for svensk, norsk og dansk.",
      chat: { title: "Chat", desc: "Instant svar på nettsiden din. Lærer fra hver samtale. Eskalerer til menneske når det trengs." },
      email: { title: "E-post", desc: "Automatisk håndtering av support-e-post. Svarer på vanlige spørsmål, ruter viktige saker videre." },
      phone: { title: "Telefon", desc: "AI-drevet telefonsvarer som forstår norsk. Tar imot bestillinger, booker møter, svarer på FAQ." }
    },
    story: {
      label: "Hvorfor vi",
      quote: "\"Jeg har jobbet i kundeservice og tech-selskaper (startups og enterprise). Jeg har sett begge sider: frustrasjonen av repeterende arbeid OG hvilken effekt riktig automatisering kan ha. Ery AI er ikke bygget av AI-bros som aldri har jobbet support – det er bygget av noen som faktisk forstår smerten.\"",
      author: "Ex-kundeservice, startup-veteran"
    },
    cta: {
      title: "Klar til å kutte støyen?",
      subtitle: "Book en 20 min discovery call – vi viser deg hvordan Ery AI passer ditt team.",
      placeholder: "din@bedrift.no",
      button: "Book discovery call"
    },
    footer: { contact: "Kontakt", copy: "© 2026 Ery AI · Bygget for nordiske SMB" },
    alerts: { success: "Takk! Vi kontakter deg på {email} innen 24 timer.", error: "Vennligst skriv inn en gyldig e-postadresse" }
  },
  sv: {
    nav: { problem: "Problem", solution: "Lösning", story: "Varför vi", cta: "Kom igång" },
    hero: {
      badge: "Byggd av kundservice-folk, för kundservice-folk",
      title1: "Kundservice som",
      titleHighlight: "faktiskt löser",
      title2: "problemet",
      subtitle: "90% av supportärenden är repetitiva störningar. Vi automatiserar dem – på svenska, norska, danska – så ditt team kan fokusera på det som faktiskt kräver människor.",
      cta1: "Se live demo",
      cta2: "Boka discovery call"
    },
    problem: {
      label: "Problemet",
      title: "Ditt supportteam drunknar i brus",
      subtitle: "Jag har arbetat inom kundservice. Jag vet hur det känns: 8 timmar med \"Vad är öppettiderna?\", \"Glömt lösenord\", \"Var är min order?\" – medan de viktiga ärendena ligger och väntar.",
      stat1: "av förfrågningar är repetitiva frågor",
      stat2: "slösar agenter dagligen på \"copy-paste\" svar",
      stat3: "årlig kostnad per agent (nordisk lön)"
    },
    solution: {
      label: "Lösningen",
      title: "AI som förstår nordiska kunder",
      subtitle: "Inte ännu en generisk chatbot. Ery AI är byggd för nordiska SMB – tränad på hur skandinaver faktiskt kommunicerar, med stöd för svenska, norska och danska.",
      chat: { title: "Chat", desc: "Omedelbara svar på din webbplats. Lär sig från varje samtal. Eskalerar till människa vid behov." },
      email: { title: "E-post", desc: "Automatisk hantering av support-mail. Svarar på vanliga frågor, dirigerar viktiga ärenden vidare." },
      phone: { title: "Telefon", desc: "AI-driven telefonsvarare som förstår svenska. Tar emot beställningar, bokar möten, svarar på FAQ." }
    },
    story: {
      label: "Varför vi",
      quote: "\"Jag har arbetat inom kundservice och tech-bolag (startups och enterprise). Jag har sett båda sidor: frustrationen av repetitivt arbete OCH vilken effekt rätt automatisering kan ha. Ery AI är inte byggd av AI-bros som aldrig jobbat support – den är byggd av någon som faktiskt förstår smärtan.\"",
      author: "Ex-kundservice, startup-veteran"
    },
    cta: {
      title: "Redo att skära bort bruset?",
      subtitle: "Boka ett 20 min discovery call – vi visar dig hur Ery AI passar ditt team.",
      placeholder: "din@foretag.se",
      button: "Boka discovery call"
    },
    footer: { contact: "Kontakt", copy: "© 2026 Ery AI · Byggd för nordiska SMB" },
    alerts: { success: "Tack! Vi kontaktar dig på {email} inom 24 timmar.", error: "Vänligen ange en giltig e-postadress" }
  },
  da: {
    nav: { problem: "Problem", solution: "Løsning", story: "Hvorfor os", cta: "Kom i gang" },
    hero: {
      badge: "Bygget af kundeservice-folk, til kundeservice-folk",
      title1: "Kundeservice som",
      titleHighlight: "faktisk løser",
      title2: "problemet",
      subtitle: "90% af supporthenvendelser er gentagne støj. Vi automatiserer dem – på svensk, norsk, dansk – så dit team kan fokusere på det, der faktisk kræver mennesker.",
      cta1: "Se live demo",
      cta2: "Book discovery call"
    },
    problem: {
      label: "Problemet",
      title: "Dit supportteam drukner i støj",
      subtitle: "Jeg har arbejdet i kundeservice. Jeg ved, hvordan det føles: 8 timer med \"Hvad er åbningstiderne?\", \"Glemt adgangskode\", \"Hvor er min ordre?\" – mens de vigtige sager ligger og venter.",
      stat1: "af henvendelser er gentagne spørgsmål",
      stat2: "spilder agenter dagligt på \"copy-paste\" svar",
      stat3: "årlig omkostning per agent (nordisk løn)"
    },
    solution: {
      label: "Løsningen",
      title: "AI som forstår nordiske kunder",
      subtitle: "Ikke endnu en generisk chatbot. Ery AI er bygget til nordiske SMV'er – trænet i, hvordan skandinaver faktisk kommunikerer, med support for svensk, norsk og dansk.",
      chat: { title: "Chat", desc: "Øjeblikkelige svar på din hjemmeside. Lærer fra hver samtale. Eskalerer til menneske, når det er nødvendigt." },
      email: { title: "E-mail", desc: "Automatisk håndtering af support-e-mails. Svarer på almindelige spørgsmål, dirigerer vigtige sager videre." },
      phone: { title: "Telefon", desc: "AI-drevet telefonsvar, der forstår dansk. Modtager bestillinger, booker møder, svarer på FAQ." }
    },
    story: {
      label: "Hvorfor os",
      quote: "\"Jeg har arbejdet i kundeservice og tech-virksomheder (startups og enterprise). Jeg har set begge sider: frustrationen ved gentaget arbejde OG hvilken effekt den rigtige automatisering kan have. Ery AI er ikke bygget af AI-bros, der aldrig har arbejdet support – det er bygget af nogen, der faktisk forstår smerten.\"",
      author: "Ex-kundeservice, startup-veteran"
    },
    cta: {
      title: "Klar til at skære støjen væk?",
      subtitle: "Book et 20 min discovery call – vi viser dig, hvordan Ery AI passer til dit team.",
      placeholder: "din@virksomhed.dk",
      button: "Book discovery call"
    },
    footer: { contact: "Kontakt", copy: "© 2026 Ery AI · Bygget til nordiske SMV'er" },
    alerts: { success: "Tak! Vi kontakter dig på {email} inden for 24 timer.", error: "Venligst indtast en gyldig e-mailadresse" }
  },
  en: {
    nav: { problem: "Problem", solution: "Solution", story: "Why us", cta: "Get started" },
    hero: {
      badge: "Built by customer service people, for customer service people",
      title1: "Customer service that",
      titleHighlight: "actually solves",
      title2: "the problem",
      subtitle: "90% of support inquiries are repetitive noise. We automate them – in Swedish, Norwegian, Danish – so your team can focus on what actually requires humans.",
      cta1: "See live demo",
      cta2: "Book discovery call"
    },
    problem: {
      label: "The Problem",
      title: "Your support team is drowning in noise",
      subtitle: "I've worked in customer service. I know how it feels: 8 hours of \"What are the opening hours?\", \"Forgot password\", \"Where's my order?\" – while the important cases are waiting.",
      stat1: "of inquiries are repetitive questions",
      stat2: "agents waste daily on \"copy-paste\" answers",
      stat3: "annual cost per agent (Nordic salary)"
    },
    solution: {
      label: "The Solution",
      title: "AI that understands Nordic customers",
      subtitle: "Not another generic chatbot. Ery AI is built for Nordic SMBs – trained on how Scandinavians actually communicate, with support for Swedish, Norwegian, and Danish.",
      chat: { title: "Chat", desc: "Instant answers on your website. Learns from every conversation. Escalates to human when needed." },
      email: { title: "Email", desc: "Automatic handling of support emails. Answers common questions, routes important cases forward." },
      phone: { title: "Phone", desc: "AI-powered phone answering that understands Nordic languages. Takes orders, books meetings, answers FAQs." }
    },
    story: {
      label: "Why us",
      quote: "\"I've worked in customer service and tech companies (startups and enterprise). I've seen both sides: the frustration of repetitive work AND the impact proper automation can have. Ery AI isn't built by AI-bros who never worked support – it's built by someone who actually understands the pain.\"",
      author: "Ex-customer service, startup veteran"
    },
    cta: {
      title: "Ready to cut the noise?",
      subtitle: "Book a 20 min discovery call – we'll show you how Ery AI fits your team.",
      placeholder: "your@company.com",
      button: "Book discovery call"
    },
    footer: { contact: "Contact", copy: "© 2026 Ery AI · Built for Nordic SMBs" },
    alerts: { success: "Thanks! We'll contact you at {email} within 24 hours.", error: "Please enter a valid email address" }
  }
};

export default function Home() {
  const [lang, setLang] = useState('no');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [email, setEmail] = useState('');

  const t = translations[lang];

  useEffect(() => {
    const saved = localStorage.getItem('eryai-lang');
    if (saved && translations[saved]) {
      setLang(saved);
    } else {
      const browserLang = navigator.language?.toLowerCase().split('-')[0];
      if (browserLang === 'sv') setLang('sv');
      else if (browserLang === 'da') setLang('da');
      else if (browserLang === 'en') setLang('en');
    }
  }, []);

  const changeLang = (newLang) => {
    setLang(newLang);
    localStorage.setItem('eryai-lang', newLang);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    document.body.style.overflow = mobileMenuOpen ? '' : 'hidden';
  };

  const submitWaitlist = () => {
    if (email && email.includes('@')) {
      alert(t.alerts.success.replace('{email}', email));
      setEmail('');
    } else {
      alert(t.alerts.error);
    }
  };

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    if (mobileMenuOpen) toggleMobileMenu();
  };

  return (
    <>
      {/* Mobile Overlay */}
      <div 
        className={`mobile-overlay ${mobileMenuOpen ? 'active' : ''}`} 
        onClick={toggleMobileMenu}
      />

      {/* Mobile Menu */}
      <div className={`mobile-menu ${mobileMenuOpen ? 'active' : ''}`}>
        <ul>
          <li><a onClick={() => scrollTo('problem')}>{t.nav.problem}</a></li>
          <li><a onClick={() => scrollTo('solution')}>{t.nav.solution}</a></li>
          <li><a onClick={() => scrollTo('story')}>{t.nav.story}</a></li>
          <li><a href="https://demo.eryai.tech" target="_blank" rel="noopener noreferrer">Demo</a></li>
          <li><a className="nav-cta" onClick={() => scrollTo('waitlist')}>{t.nav.cta}</a></li>
          <li className="lang-switcher">
            <select value={lang} onChange={(e) => changeLang(e.target.value)}>
              <option value="no">🇳🇴 NO</option>
              <option value="sv">🇸🇪 SV</option>
              <option value="da">🇩🇰 DA</option>
              <option value="en">🇬🇧 EN</option>
            </select>
          </li>
        </ul>
      </div>

      {/* Navigation */}
      <nav>
        <div className="container">
          <div className="logo">ery<span>.ai</span></div>
          <button className={`hamburger ${mobileMenuOpen ? 'active' : ''}`} onClick={toggleMobileMenu} aria-label="Menu">
            <span></span>
            <span></span>
            <span></span>
          </button>
          <ul>
            <li><a onClick={() => scrollTo('problem')}>{t.nav.problem}</a></li>
            <li><a onClick={() => scrollTo('solution')}>{t.nav.solution}</a></li>
            <li><a onClick={() => scrollTo('story')}>{t.nav.story}</a></li>
            <li><a href="https://demo.eryai.tech" target="_blank" rel="noopener noreferrer">Demo</a></li>
            <li><a className="nav-cta" onClick={() => scrollTo('waitlist')}>{t.nav.cta}</a></li>
            <li className="lang-switcher">
              <select value={lang} onChange={(e) => changeLang(e.target.value)}>
                <option value="no">🇳🇴 NO</option>
                <option value="sv">🇸🇪 SV</option>
                <option value="da">🇩🇰 DA</option>
                <option value="en">🇬🇧 EN</option>
              </select>
            </li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-badge">
            <span className="dot"></span>
            <span>{t.hero.badge}</span>
          </div>
          <h1>
            {t.hero.title1} <span className="highlight">{t.hero.titleHighlight}</span> {t.hero.title2}
          </h1>
          <p className="hero-subtitle">{t.hero.subtitle}</p>
          <div className="hero-ctas">
            <a href="https://demo.eryai.tech" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              {t.hero.cta1} →
            </a>
            <a onClick={() => scrollTo('waitlist')} className="btn btn-secondary">
              {t.hero.cta2}
            </a>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="problem" id="problem">
        <div className="container">
          <div className="section-label">{t.problem.label}</div>
          <h2 className="section-title">{t.problem.title}</h2>
          <p className="section-subtitle">{t.problem.subtitle}</p>
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-number">73%</div>
              <div className="stat-label">{t.problem.stat1}</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">4.2t</div>
              <div className="stat-label">{t.problem.stat2}</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">€180k</div>
              <div className="stat-label">{t.problem.stat3}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="solution" id="solution">
        <div className="container">
          <div className="section-label">{t.solution.label}</div>
          <h2 className="section-title">{t.solution.title}</h2>
          <p className="section-subtitle">{t.solution.subtitle}</p>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">💬</div>
              <h3>{t.solution.chat.title}</h3>
              <p>{t.solution.chat.desc}</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📧</div>
              <h3>{t.solution.email.title}</h3>
              <p>{t.solution.email.desc}</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📞</div>
              <h3>{t.solution.phone.title}</h3>
              <p>{t.solution.phone.desc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="story" id="story">
        <div className="container">
          <div className="section-label">{t.story.label}</div>
          <div className="story-content">
            <p className="story-quote">{t.story.quote}</p>
            <p className="story-author">
              <strong>Eric Shabaj</strong> · Founder, Ery AI · {t.story.author}
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section" id="waitlist">
        <div className="container">
          <div className="cta-box">
            <h2>{t.cta.title}</h2>
            <p>{t.cta.subtitle}</p>
            <div className="cta-form">
              <input 
                type="email" 
                placeholder={t.cta.placeholder}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && submitWaitlist()}
              />
              <button onClick={submitWaitlist}>{t.cta.button}</button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="container">
          <div className="footer-content">
            <div className="logo">ery<span>.ai</span></div>
            <ul className="footer-links">
              <li><a href="https://demo.eryai.tech" target="_blank" rel="noopener noreferrer">Demo</a></li>
              <li><a href="mailto:eric@eryai.tech">{t.footer.contact}</a></li>
              <li><a onClick={() => scrollTo('waitlist')}>Waitlist</a></li>
            </ul>
          </div>
          <div className="footer-copy">{t.footer.copy}</div>
        </div>
      </footer>
    </>
  );
}
