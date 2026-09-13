import { useEffect, useRef, useState } from 'react';
import { useParallax } from './hooks/useParallax';

/* ============================================================
   kXai AGENCY DATA
   ============================================================ */
const SERVICES = [
  {
    num: '01',
    title: 'Website Development & Redesign',
    desc: 'Zero-to-one custom web development, high-converting E-Commerce stores, booking appointment platforms, interactive 3D WebGL experiences, and Spotify websites engineered for speed and scale.',
    tags: ['Website Development', 'Website Redesign', 'E-Commerce', 'Booking Appointment', '3D Web', 'Spotify Website'],
    color: '#e11d48',
    topBarGradient: 'linear-gradient(90deg, #e11d48 0%, #f43f5e 50%, #fb7185 100%)',
    gradient: 'linear-gradient(135deg, #ffffff 0%, #fff1f2 60%, #ffe4e6 100%)',
    tagBg: '#ffe4e6',
    tagColor: '#9f1239',
    border: 'rgba(225, 29, 72, 0.3)',
    glow: 'rgba(225, 29, 72, 0.22)',
  },
  {
    num: '02',
    title: 'AI Automation & Custom Chatbots',
    desc: 'Custom conversational AI chatbots and automated workflow engines designed to eliminate manual tasks and boost speed.',
    tags: ['Custom Chatbots', 'AI Automation', 'Workflow Engines'],
    color: '#0891b2',
    topBarGradient: 'linear-gradient(90deg, #0891b2 0%, #06b6d4 50%, #38bdf8 100%)',
    gradient: 'linear-gradient(135deg, #ffffff 0%, #ecfeff 60%, #cffafe 100%)',
    tagBg: '#cffafe',
    tagColor: '#155e75',
    border: 'rgba(8, 145, 178, 0.3)',
    glow: 'rgba(8, 145, 178, 0.22)',
  },
  {
    num: '03',
    title: 'WhatsApp Business Automation',
    desc: 'Automated WhatsApp chat flows, intelligent customer service bots, broadcast triggers, and CRM integrations to nurture leads 24/7.',
    tags: ['WhatsApp Automation', 'Support Bots', 'Lead Generation', 'CRM Integration'],
    color: '#d97706',
    topBarGradient: 'linear-gradient(90deg, #d97706 0%, #f59e0b 50%, #fbbf24 100%)',
    gradient: 'linear-gradient(135deg, #ffffff 0%, #fffbeb 60%, #fef3c7 100%)',
    tagBg: '#fef3c7',
    tagColor: '#92400e',
    border: 'rgba(217, 119, 6, 0.3)',
    glow: 'rgba(217, 119, 6, 0.22)',
  },
  {
    num: '04',
    title: 'Performance Ads Marketing',
    desc: 'High-ROI paid acquisition campaigns on Meta Ads (Facebook & Instagram) and Google Ads with data-backed targeting and funnel scaling.',
    tags: ['Meta Ads', 'Google Ads', 'Paid Media Scaling', 'Conversion Optimization'],
    color: '#7c3aed',
    topBarGradient: 'linear-gradient(90deg, #7c3aed 0%, #8b5cf6 50%, #c4b5fd 100%)',
    gradient: 'linear-gradient(135deg, #ffffff 0%, #f5f3ff 60%, #ede9fe 100%)',
    tagBg: '#ede9fe',
    tagColor: '#5b21b6',
    border: 'rgba(124, 58, 237, 0.3)',
    glow: 'rgba(124, 58, 237, 0.22)',
  },
];

const CASE_STUDIES = [
  {
    year: '2026',
    title: 'Upstreak Engine',
    color: '#C9A227',
    desc: 'Habit-tracking web platform with progress monitoring, telemetry dashboards, and goal streaks to build consistent routines.',
    tag: 'Web Platform · Productivity',
    i: 0,
  },
  {
    year: '2026',
    title: 'Notes Flow Stream',
    color: '#6E8B7A',
    desc: 'Real-time collaborative matrix for teams and academic faculties to stream handwritten notes with live Socket.IO group channels.',
    tag: 'Real-time System · Collaboration',
    i: 1,
  },
  {
    year: '2025',
    title: 'Placement Intelligence',
    color: '#8A6FD1',
    desc: 'Enterprise academic ranking platform tracking placement metrics, achievements, and JWT-authenticated administrator controls.',
    tag: 'Enterprise App · Analytics',
    i: 2,
  },
  {
    year: '2026',
    title: 'kxAI Automation Hub',
    color: '#3B82F6',
    desc: 'Multi-agent AI workflow orchestrator integrating automated lead parsing, content generation, and database sync.',
    tag: 'AI System · Automation',
    i: 3,
  },
];

const WORK = [
  { num: '01', title: 'The Village Coco', src: '/videos/coco.mp4', length: '0:21' },
  { num: '02', title: 'Varnaam Mind Care', src: '/videos/varnaam.mp4', length: '0:24' },
  { num: '03', title: 'Fitness Trainer', src: '/videos/fitness-trainer.mp4', length: '0:13' },
];

const SKILLS_LIST = [
  { label: 'Build', value: 'Websites, AI Automation, Mobile Apps' },
  { label: 'Grow', value: 'Meta Ads, Google Ads' },
  { label: 'Delivery', value: '12 hours – 7 days' },
  { label: 'Leads', value: '5X more' },
  { label: 'Time & work saved', value: '90%' },
];

const DIRECT_CONTACTS = [
  {
    id: 'whatsapp',
    kind: 'WhatsApp',
    value: '+91 82481 26335',
    action: 'Chat with us',
    href: `https://wa.me/918248126335?text=${encodeURIComponent("Hi kxAI, I'd like to enquire about a project.")}`,
    icon: '/logos/whatsapp.svg',
  },
  {
    id: 'instagram',
    kind: 'Instagram',
    value: '@built_with_kaveyan',
    action: 'See our work',
    href: 'https://www.instagram.com/built_with_kaveyan/',
    icon: '/logos/instagram.svg',
  },
];

const MARQUEE_TEXT = (
  <>
    <b>kxAI</b> · We make every page count · One-time investment, lifetime growth ·{' '}
    <b>kxAI</b> · We make every page count · One-time investment, lifetime growth ·
  </>
);

const CYCLE_WORDS = ['websites', 'AI automations', 'ad campaigns'];

const TECH_LOGOS = [
  { name: 'Claude', file: 'claude' },
  { name: 'ChatGPT', file: 'chatgpt' },
  { name: 'Gemini', file: 'gemini' },
  { name: 'n8n', file: 'n8n' },
  { name: 'React', file: 'react' },
  { name: 'Next.js', file: 'nextjs' },
  { name: 'Node.js', file: 'nodejs' },
  { name: 'Figma', file: 'figma' },
  { name: 'Python', file: 'python' },
  { name: 'HTML5', file: 'html5' },
  { name: 'CSS3', file: 'css3' },
  { name: 'JavaScript', file: 'javascript' },
  { name: 'VS Code', file: 'vscode' },
  { name: 'GitHub', file: 'github' },
  { name: 'MongoDB', file: 'mongodb' },
  { name: 'AWS', file: 'aws' },
  { name: 'Vite', file: 'vite' },
  { name: 'Sass', file: 'sass' },
  { name: 'GitLab', file: 'gitlab' },
  { name: 'PHP', file: 'php' },
  { name: 'Kotlin', file: 'kotlin' },
  { name: 'Angular', file: 'angular' },
  { name: 'Vue', file: 'vue' },
  { name: 'Svelte', file: 'svelte' },
  { name: 'Rust', file: 'rust' },
  { name: 'Webpack', file: 'webpack' },
  { name: 'Bootstrap', file: 'bootstrap' },
  { name: 'Git', file: 'git' },
  { name: 'Bitbucket', file: 'bitbucket' },
  { name: 'Photoshop', file: 'photoshop' },
  { name: 'Illustrator', file: 'illustrator' },
  { name: 'Adobe XD', file: 'xd' },
  { name: 'npm', file: 'npm' },
  { name: 'jQuery', file: 'jquery' },
  { name: 'Pug', file: 'pug' },
  { name: 'Netlify', file: 'netlify' },
  { name: 'Airtable', file: 'airtable' },
  { name: 'Google Analytics', file: 'googleanalytics' },
];

/** Tile anchor points in % of the hero — kept clear of the headline, nav and kx glyph */
const LOGO_SLOTS: [number, number][] = [
  [5, 18], [15, 34], [24, 14], [33, 29], [43, 16], [52, 33], [60, 17],
  [64, 33], [58, 46], [95, 68], [56, 90], [70, 88], [84, 90], [95, 86],
];
const LOGO_SLOTS_MOBILE: [number, number][] = [
  [10, 14], [34, 11], [18, 27], [40, 22], [10, 38], [30, 36], [56, 50], [82, 50],
];

/* ============================================================
   SUBCOMPONENTS
   ============================================================ */



/** Scroll progress bar */
function Progress() {
  const [pct, setPct] = useState(0);
  useEffect(() => {
    const update = () => {
      const h = document.documentElement;
      setPct((h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100);
    };
    document.addEventListener('scroll', update, { passive: true });
    update();
    return () => document.removeEventListener('scroll', update);
  }, []);
  return <div className="progress" style={{ width: `${pct}%` }} />;
}

/** Custom cursor */
function Cursor() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const hasHover = window.matchMedia('(hover:hover)').matches;
    if (reduceMotion || !hasHover) { if (ref.current) ref.current.style.display = 'none'; return; }
    const el = ref.current!;
    const onMove = (e: MouseEvent) => {
      el.style.left = e.clientX + 'px';
      el.style.top = e.clientY + 'px';
    };
    window.addEventListener('mousemove', onMove);
    const targets = document.querySelectorAll('a, .entry, button, .service-card, .pill-btn');
    const enter = () => el.classList.add('hovering');
    const leave = () => el.classList.remove('hovering');
    targets.forEach(t => { t.addEventListener('mouseenter', enter); t.addEventListener('mouseleave', leave); });
    return () => {
      window.removeEventListener('mousemove', onMove);
      targets.forEach(t => { t.removeEventListener('mouseenter', enter); t.removeEventListener('mouseleave', leave); });
    };
  }, []);
  return <div className="cursor" ref={ref} />;
}

/** Header / Nav */
function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onResize = () => { if (window.innerWidth > 640) setOpen(false); };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const close = () => setOpen(false);

  return (
    <header ref={headerRef} className={`${scrolled ? 'scrolled' : ''}${open ? ' open' : ''}`}>
      <div className="nav-scrim" onClick={close} />
      <nav className="wrap">
        <div className="logo">kx<span className="ai-accent">AI</span><span className="logo-dot">.</span></div>
        <div className="navlinks" id="navLinks">
          <a href="#services" onClick={close}>Services</a>
          <a href="#work" onClick={close}>Work</a>
          <a href="#about" onClick={close}>Why kxAI</a>
          <a href="#contact" onClick={close}>Enquiry</a>
        </div>
        <button
          className="navtoggle"
          onClick={() => setOpen(o => !o)}
          aria-label="Toggle menu"
          aria-expanded={open}
          aria-controls="navLinks"
        >
          <span className="bars"><span /><span /><span /></span>
        </button>
      </nav>
    </header>
  );
}

/** Rotating cycle words in hero */
function CycleWords() {
  const [idx, setIdx] = useState(0);
  const [leaving, setLeaving] = useState<number | null>(null);
  const cycleRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = cycleRef.current;
    if (!el) return;
    const sizeIt = () => {
      const words = el.querySelectorAll<HTMLElement>('.cycle-word');
      let max = 0;
      words.forEach(w => { max = Math.max(max, w.getBoundingClientRect().width); });
      el.style.minWidth = Math.ceil(max) + 'px';
    };
    if (document.fonts?.ready) document.fonts.ready.then(sizeIt);
    else sizeIt();
    window.addEventListener('load', sizeIt);
    window.addEventListener('resize', sizeIt);
    return () => { window.removeEventListener('load', sizeIt); window.removeEventListener('resize', sizeIt); };
  }, []);

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) return;
    const timer = setInterval(() => {
      setLeaving(idx);
      setIdx(i => (i + 1) % CYCLE_WORDS.length);
      const t = setTimeout(() => setLeaving(null), 500);
      return () => clearTimeout(t);
    }, 2200);
    return () => clearInterval(timer);
  }, [idx]);

  return (
    <span className="cycle" ref={cycleRef}>
      {CYCLE_WORDS.map((word, i) => (
        <span
          key={word}
          className={`cycle-word${i === idx ? ' is-active' : ''}${i === leaving ? ' is-leaving' : ''}`}
        >
          {word}
        </span>
      ))}
    </span>
  );
}

/** Floating tech logos — drift, swap places with neighbours, and rotate through the full set */
function LogoCloud() {
  const [mobile, setMobile] = useState(() => window.matchMedia('(max-width: 640px)').matches);
  const [placed, setPlaced] = useState(() => LOGO_SLOTS.map((_, i) => i));
  const [leaving, setLeaving] = useState<number | null>(null);
  const placedRef = useRef(placed);
  placedRef.current = placed;
  const slots = mobile ? LOGO_SLOTS_MOBILE : LOGO_SLOTS;

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 640px)');
    const onChange = () => setMobile(mq.matches);
    mq.addEventListener('change', onChange);
    TECH_LOGOS.forEach(({ file }) => { new Image().src = `/logos/${file}.svg`; });
    return () => mq.removeEventListener('change', onChange);
  }, []);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    let step = 0;
    let fadeTimer = 0;
    const timer = window.setInterval(() => {
      const count = slots.length;
      if (step++ % 2 === 0) {
        // Swap two nearby tiles so they glide past each other
        const a = Math.floor(Math.random() * count);
        const near = slots
          .map((s, i) => i)
          .filter(i => i !== a && Math.hypot(slots[i][0] - slots[a][0], slots[i][1] - slots[a][1]) < 28);
        const b = near.length ? near[Math.floor(Math.random() * near.length)] : (a + 1) % count;
        setPlaced(prev => {
          const next = [...prev];
          [next[a], next[b]] = [next[b], next[a]];
          return next;
        });
      } else {
        // Fade one tile out and bring in a logo that isn't on screen
        const current = placedRef.current;
        const slot = Math.floor(Math.random() * count);
        const hidden = TECH_LOGOS.map((_, i) => i).filter(i => !current.includes(i));
        const incoming = hidden[Math.floor(Math.random() * hidden.length)];
        setLeaving(current[slot]);
        fadeTimer = window.setTimeout(() => {
          setPlaced(prev => prev.map((logo, i) => (i === slot ? incoming : logo)));
          setLeaving(null);
        }, 450);
      }
    }, 2400);
    return () => { clearInterval(timer); clearTimeout(fadeTimer); };
  }, [slots]);

  // Stable DOM order (by logo) so swaps animate instead of re-inserting nodes
  const tiles = placed
    .slice(0, slots.length)
    .map((logo, slot) => ({ logo, slot }))
    .sort((a, b) => a.logo - b.logo);

  return (
    <div className="logo-cloud" aria-hidden="true">
      {tiles.map(({ logo, slot }) => (
        <div
          key={TECH_LOGOS[logo].file}
          className={`logo-tile${leaving === logo ? ' is-leaving' : ''}`}
          style={{ left: `${slots[slot][0]}%`, top: `${slots[slot][1]}%` }}
          title={TECH_LOGOS[logo].name}
        >
          <div
            className="logo-float"
            style={{ animationDuration: `${5 + (logo % 4)}s`, animationDelay: `${-((logo * 1.3) % 6)}s` }}
          >
            <img src={`/logos/${TECH_LOGOS[logo].file}.svg`} alt="" draggable={false} />
          </div>
        </div>
      ))}
    </div>
  );
}

/** Hero section */
function Hero({ heroBgRef, heroContentRef }: { heroBgRef: React.RefObject<HTMLDivElement | null>; heroContentRef: React.RefObject<HTMLDivElement | null> }) {
  return (
    <section className="hero wrap" style={{ borderTop: 'none' }}>
      <div className="hero-bg" ref={heroBgRef as React.RefObject<HTMLDivElement>}>
        <div className="grid" />
        <div className="glyph-float"><div className="glyph">kx</div></div>
        <LogoCloud />
      </div>
      <div className="hero-content" ref={heroContentRef as React.RefObject<HTMLDivElement>}>
        <h1 className="name">
          <span className="line">
            <span style={{ animationDelay: '0.05s' }}>
              kx<span className="ai-accent">AI</span>.
            </span>
          </span>
        </h1>
        <p className="hero-role" style={{ animationDelay: '0.4s' }}>
          We build <CycleWords /><br />
          that grow your business · <span className="highlight-text">One-time investment</span>, lifetime growth
        </p>
        <div className="hero-meta" style={{ animationDelay: '0.68s' }}>
          <div>Specialization<b>Web & AI</b></div>
          <div>Turnaround<b>12h – 7d Delivery</b></div>
        </div>
      </div>
    </section>
  );
}

/** Reveal-on-scroll wrapper */
function Reveal({ children, className = '', style }: { children: React.ReactNode; className?: string; style?: React.CSSProperties }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { el.classList.add('in'); io.disconnect(); }
    }, { threshold: 0.15 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return <div ref={ref} className={`reveal ${className}`} style={style}>{children}</div>;
}

/** Services section with colorful cards and section scroll stacking effect */
function ServicesSection() {
  return (
    <section id="services" className="wrap services-wrap">
      <Reveal className="section-head">
        <div>
          <h2 className="section-title">Services.</h2>
        </div>
      </Reveal>

      <div className="services-stack">
        {SERVICES.map((s, idx) => (
          <div
            key={s.num}
            className="service-card-sticky"
            style={{
              top: `calc(100px + ${idx * 30}px)`,
              zIndex: idx + 1,
            }}
          >
            <div
              className="service-card colorful-card"
              style={{
                background: s.gradient,
                borderColor: s.border,
                boxShadow: `0 15px 35px -10px ${s.glow}, 0 4px 12px rgba(0,0,0,0.03)`,
              }}
            >
              <div
                className="card-top-bar"
                style={{ background: s.topBarGradient }}
              />
              <div className="card-content-inner">
                <div className="card-header-row">
                  <div className="service-num" style={{ color: s.color }}>
                    {s.num} // SERVICE
                  </div>
                  <div
                    className="card-color-badge"
                    style={{
                      background: s.tagBg,
                      color: s.tagColor,
                      border: `1px solid ${s.border}`,
                    }}
                  >
                    <span
                      className="badge-dot"
                      style={{ background: s.color, boxShadow: `0 0 8px ${s.color}` }}
                    />
                    kxAI Spec
                  </div>
                </div>

                <h3 className="service-title" style={{ color: '#09090b', marginTop: '0.5rem' }}>
                  {s.title}
                </h3>
                <p className="service-desc">{s.desc}</p>

                <div className="service-tags">
                  {s.tags.map(t => (
                    <span
                      key={t}
                      className="service-tag colorful-tag"
                      style={{
                        background: s.tagBg,
                        color: s.tagColor,
                        border: `1px solid ${s.border}`,
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/** Video card — silent, plays while on screen */
function WorkVideoCard({ item, active }: { item: (typeof WORK)[number]; active: boolean }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const userPaused = useRef(false);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = true;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const io = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) video.pause();
      else if (!reduceMotion && !userPaused.current) video.play().catch(() => {});
    }, { threshold: 0.4 });
    io.observe(video);
    return () => io.disconnect();
  }, []);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    userPaused.current = !video.paused;
    if (video.paused) video.play().catch(() => {});
    else video.pause();
  };

  return (
    <article className={`work-card${active ? ' is-active' : ''}`}>
      <div className="work-media">
        <video
          ref={videoRef}
          src={item.src}
          muted
          loop
          playsInline
          preload="metadata"
          onPlay={() => setPlaying(true)}
          onPause={() => setPlaying(false)}
          onClick={togglePlay}
          aria-label={`${item.title} video`}
        />
        <div className="work-controls">
          <button type="button" className="work-ctrl" onClick={togglePlay} aria-label={`${playing ? 'Pause' : 'Play'} ${item.title}`}>
            {playing ? 'Pause' : 'Play'}
          </button>
        </div>
      </div>
      <div className="work-info">
        <span className="service-num">{item.num} // PROJECT</span>
        <h3 className="work-title">{item.title}</h3>
        <span className="work-length">{item.length}</span>
      </div>
    </article>
  );
}

/** Our Work — vertical scroll drives a pinned horizontal track of video cards */
function WorkSection() {
  const pinRef = useRef<HTMLDivElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const barRef = useRef<HTMLSpanElement>(null);
  const [active, setActive] = useState(0);
  const cardCount = WORK.length + 1;

  useEffect(() => {
    const pin = pinRef.current;
    const sticky = stickyRef.current;
    const track = trackRef.current;
    if (!pin || !sticky || !track) return;

    // Reduced motion: no pinning, the track becomes a native swipe/scroll row
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      pin.classList.add('is-static');
      return;
    }

    let distance = 0;
    let ticking = false;

    const update = () => {
      const scrollable = pin.offsetHeight - sticky.offsetHeight;
      const top = pin.getBoundingClientRect().top;
      const p = scrollable > 0 ? Math.min(Math.max(-top / scrollable, 0), 1) : 0;
      track.style.transform = `translate3d(${-p * distance}px, 0, 0)`;
      if (barRef.current) barRef.current.style.transform = `scaleX(${p})`;
      setActive(Math.round(p * (cardCount - 1)));
      ticking = false;
    };

    const measure = () => {
      distance = Math.max(0, track.offsetWidth - sticky.clientWidth);
      pin.style.height = `${sticky.offsetHeight + distance}px`;
      update();
    };

    const onScroll = () => {
      if (!ticking) { requestAnimationFrame(update); ticking = true; }
    };

    const ro = new ResizeObserver(measure);
    ro.observe(sticky);
    ro.observe(track);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      ro.disconnect();
      window.removeEventListener('scroll', onScroll);
      pin.style.height = '';
      track.style.transform = '';
    };
  }, [cardCount]);

  const pad = (n: number) => String(n).padStart(2, '0');

  return (
    <section id="work" aria-labelledby="work-heading">
      <div className="work-pin" ref={pinRef}>
        <div className="work-sticky" ref={stickyRef}>
          <div className="wrap work-head">
            <h2 className="section-title" id="work-heading">Our Work.</h2>
            <div className="work-meta">
              <span>{pad(Math.min(active, WORK.length - 1) + 1)} / {pad(WORK.length)}</span>
              <span className="work-bar"><span ref={barRef} /></span>
              <span>Scroll →</span>
            </div>
          </div>
          <div className="work-viewport">
            <div className="work-track" ref={trackRef}>
              {WORK.map((item, i) => (
                <WorkVideoCard key={item.src} item={item} active={active === i} />
              ))}
              <a href="#contact" className={`work-card work-cta${active === WORK.length ? ' is-active' : ''}`}>
                <span className="service-num">{pad(cardCount)} // NEXT</span>
                <span className="work-cta-title">Your project<br /><em>could be next.</em></span>
                <span className="work-cta-link">Start with kxAI →</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/** About section */
function AboutSection() {
  const skillsRef = useRef<HTMLDivElement>(null);

  // Stats slide in from the right one at a time as the list scrolls up the screen
  useEffect(() => {
    const list = skillsRef.current;
    if (!list) return;
    const rows = Array.from(list.children) as HTMLElement[];
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      rows.forEach(row => row.classList.add('is-in'));
      return;
    }
    let shown = 0;
    const onScroll = () => {
      const top = list.getBoundingClientRect().top;
      const due = rows.filter((_, i) => top < window.innerHeight * (0.85 - i * 0.08)).length;
      for (let i = shown; i < due; i++) {
        rows[i].style.transitionDelay = `${(i - shown) * 120}ms`;
        rows[i].classList.add('is-in');
      }
      shown = Math.max(shown, due);
      if (shown === rows.length) window.removeEventListener('scroll', onScroll);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section id="about" className="wrap">
      <Reveal className="section-head">
        <div>
          <h2 className="section-title about-title">Why kx<span className="ai-accent">AI</span>.</h2>
        </div>
      </Reveal>
      <Reveal className="about-grid">
        <div className="about-copy">
          <p>We convert your visitors into leads — and generate <span className="highlight-text">5X more</span> of them.</p>
          <p>A good-looking website isn't enough. Every page, chatbot and ad we build has one goal: turning the people who find you into leads you can close.</p>
          <p>Then we automate your business. WhatsApp replies, follow-ups and everyday workflows run on their own, cutting <span className="highlight-text">90%</span> of the time and work it takes to keep things moving.</p>
        </div>
        <div className="skills" ref={skillsRef}>
          {SKILLS_LIST.map((s) => (
            <div key={s.label} className="skill-row"><span>{s.label}</span><span>{s.value}</span></div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}

/** Interactive Contact / Project Inquiry section */
function ContactSection() {
  const [selectedService, setSelectedService] = useState('Website Development');
  const [selectedBudget, setSelectedBudget] = useState('$5k - $15k');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [projectBrief, setProjectBrief] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [showAdminInquiries, setShowAdminInquiries] = useState(false);
  const [savedInquiries, setSavedInquiries] = useState<any[]>([]);

  useEffect(() => {
    try {
      const stored = JSON.parse(localStorage.getItem('kxai_inquiries') || '[]');
      setSavedInquiries(stored);
    } catch {
      setSavedInquiries([]);
    }
  }, [formSubmitted, showAdminInquiries]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const inquiry = {
      id: Date.now(),
      name,
      email,
      service: selectedService,
      budget: selectedBudget,
      message: projectBrief,
      date: new Date().toLocaleString(),
    };

    // Save to localStorage as local backup
    try {
      const existing = JSON.parse(localStorage.getItem('kxai_inquiries') || '[]');
      const updated = [inquiry, ...existing];
      localStorage.setItem('kxai_inquiries', JSON.stringify(updated));
      setSavedInquiries(updated);
    } catch (err) {
      console.error('Failed to save inquiry to local storage', err);
    }

    // Email delivery via Web3Forms API
    try {
      const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || '';
      
      if (accessKey) {
        await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify({
            access_key: accessKey,
            name,
            email,
            subject: `New Inquiry from ${name} - ${selectedService}`,
            service: selectedService,
            budget: selectedBudget,
            message: projectBrief,
            from_name: 'kxAI Portfolio Inquiry'
          })
        });
      }
    } catch (err) {
      console.error('Error delivering email inquiry:', err);
    } finally {
      setIsSubmitting(false);
      setFormSubmitted(true);
    }
  };

  const clearInquiries = () => {
    localStorage.removeItem('kxai_inquiries');
    setSavedInquiries([]);
  };

  return (
    <section id="contact" className="wrap">
      <Reveal className="section-head">
        <div>
          <h2 className="section-title">Enquiry.</h2>
        </div>
      </Reveal>

      <Reveal className="contact-cta">
        From first click to final sale,<br />
        we make every page count.<br />
        <em>Start with kxAI.</em>
      </Reveal>

      <Reveal className="inquiry-wrapper">
        {formSubmitted ? (
          <div className="form-success-msg">
            <div style={{ fontSize: '1.2rem', fontWeight: 600, color: '#16a34a', marginBottom: '0.5rem' }}>
              ✓ Inquiry Received Successfully!
            </div>
            <p style={{ color: 'var(--paper-dim)', margin: 0, lineHeight: 1.6 }}>
              Thank you, <strong>{name || 'there'}</strong>. Your project brief for <strong>{selectedService}</strong> ({selectedBudget}) has been submitted. A kxAI engineer will review your inquiry and email you back at <strong>{email}</strong> within 24 hours.
            </p>
            <button
              type="button"
              className="pill-btn"
              style={{ marginTop: '1.5rem' }}
              onClick={() => {
                setFormSubmitted(false);
                setName('');
                setEmail('');
                setProjectBrief('');
              }}
            >
              ← Submit Another Inquiry
            </button>
          </div>
        ) : (
          <form className="inquiry-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="form-label">01 // Select Desired Service</label>
              <div className="pills-group">
                {[
                  'Website Development',
                  'Website Redesign',
                  'E-Commerce',
                  'Booking Appointment',
                  '3D Web & WebGL',
                  'Spotify Website',
                  'Chat Bot',
                  'AI Automation',
                  'WhatsApp Automation',
                  'Ads Marketing (Meta & Google)',
                ].map(s => (
                  <button
                    key={s}
                    type="button"
                    className={`pill-btn ${selectedService === s ? 'selected' : ''}`}
                    onClick={() => setSelectedService(s)}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">02 // Project Budget Range</label>
              <div className="pills-group">
                {['< $5k', '$5k - $15k', '$15k - $30k', '$30k+'].map(b => (
                  <button
                    key={b}
                    type="button"
                    className={`pill-btn ${selectedBudget === b ? 'selected' : ''}`}
                    onClick={() => setSelectedBudget(b)}
                  >
                    {b}
                  </button>
                ))}
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">03 // Your Contact Information</label>
              <input
                type="text"
                className="form-input"
                placeholder="Your Name or Company"
                value={name}
                onChange={e => setName(e.target.value)}
                required
              />
              <input
                type="email"
                className="form-input"
                placeholder="Your Email Address"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label">04 // Project Brief / Objectives</label>
              <textarea
                className="form-textarea"
                placeholder="Tell us about your project goals, scope, timeline, or key technical requirements..."
                value={projectBrief}
                onChange={e => setProjectBrief(e.target.value)}
                required
              />
            </div>

            <button type="submit" className="submit-btn" disabled={isSubmitting}>
              {isSubmitting ? 'Sending Inquiry...' : 'Send Project Brief →'}
            </button>
          </form>
        )}
      </Reveal>

      <Reveal className="direct-contact">
        <span className="direct-label">Or reach us directly</span>
        {DIRECT_CONTACTS.map(c => (
          <a
            key={c.id}
            href={c.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`direct-card direct-${c.id}`}
          >
            <span className="direct-icon"><img src={c.icon} alt="" /></span>
            <span className="direct-text">
              <span className="direct-kind">{c.kind}</span>
              <span className="direct-value">{c.value}</span>
              <span className="direct-action">{c.action} →</span>
            </span>
          </a>
        ))}
      </Reveal>

      {/* Admin / Saved Inquiries viewer */}
      <Reveal className="contact-row" style={{ marginTop: '3rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', flexWrap: 'wrap', gap: '1rem' }}>
          <div className="contact-socials">
            <a href="https://x.com" target="_blank" rel="noopener noreferrer">X / Twitter</a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="mailto:hello@kxai.dev">hello@kxai.dev</a>
          </div>

          <button
            type="button"
            className="pill-btn"
            style={{ fontSize: '0.75rem', opacity: 0.8 }}
            onClick={() => setShowAdminInquiries(!showAdminInquiries)}
          >
            📋 {showAdminInquiries ? 'Hide Admin Submissions' : `View Local Inquiries (${savedInquiries.length})`}
          </button>
        </div>

        {showAdminInquiries && (
          <div style={{ width: '100%', marginTop: '1.5rem', background: 'rgba(9, 9, 11, 0.04)', padding: '1.5rem', borderRadius: '16px', border: '1px solid var(--line)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
              <h4 style={{ margin: 0, fontFamily: 'JetBrains Mono', fontSize: '0.9rem' }}>
                LOCAL INQUIRIES LOG ({savedInquiries.length})
              </h4>
              {savedInquiries.length > 0 && (
                <button
                  onClick={clearInquiries}
                  style={{ background: 'none', border: 'none', color: '#e11d48', cursor: 'pointer', fontSize: '0.8rem', fontFamily: 'JetBrains Mono' }}
                >
                  Clear All Log
                </button>
              )}
            </div>

            {savedInquiries.length === 0 ? (
              <p style={{ color: 'var(--paper-dim)', fontSize: '0.85rem' }}>No submitted inquiries found in local storage yet. Submit the form above to test!</p>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {savedInquiries.map((inq: any) => (
                  <div key={inq.id} style={{ background: '#fff', padding: '1rem', borderRadius: '10px', border: '1px solid rgba(0,0,0,0.08)', fontSize: '0.85rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 600, color: '#09090b', marginBottom: '0.3rem' }}>
                      <span>{inq.name} ({inq.email})</span>
                      <span style={{ fontSize: '0.75rem', color: '#666' }}>{inq.date}</span>
                    </div>
                    <div style={{ color: '#0891b2', fontSize: '0.8rem', fontWeight: 500, marginBottom: '0.4rem' }}>
                      {inq.service} • {inq.budget}
                    </div>
                    <div style={{ color: '#374151', whiteSpace: 'pre-wrap' }}>
                      {inq.message}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </Reveal>
    </section>
  );
}

/** Footer */
function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="foot-note">© 2026 kxAI. All rights reserved.</div>
        <div className="foot-note">Minimalist AI & Web Systems Studio.</div>
      </div>
    </footer>
  );
}

/** Marquee strip */
function Marquee() {
  return (
    <div className="marquee">
      <div className="marquee-track">
        <span>{MARQUEE_TEXT}</span>
        <span aria-hidden="true">{MARQUEE_TEXT}</span>
      </div>
    </div>
  );
}

/* ============================================================
   APP ROOT
   ============================================================ */
export default function App() {
  const { heroBgRef, heroContentRef } = useParallax();

  return (
    <>
      <Progress />
      <Cursor />
      <Header />
      <Hero heroBgRef={heroBgRef} heroContentRef={heroContentRef} />
      <Marquee />
      <ServicesSection />
      <WorkSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </>
  );
}
