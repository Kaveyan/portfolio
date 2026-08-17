import { useEffect, useRef, useState } from 'react';
import { useParallax } from './hooks/useParallax';

/* ============================================================
   DATA
   ============================================================ */
const WORKS = [
  {
    year: '2026',
    title: 'Upstreak',
    color: '#C9A227',
    desc: 'Habit-tracking web app with to-dos, progress monitoring, and streaks to build consistent routines.',
    tag: 'Web App · Productivity',
    i: 0,
  },
  {
    year: '2026',
    title: 'Notes Sharing',
    color: '#6E8B7A',
    desc: 'Collaborative platform for students and faculty to upload and access handwritten notes, with real-time group chat via Socket.IO.',
    tag: 'Web App · Real-time',
    i: 1,
  },
  {
    year: '2025',
    title: 'Student Tracker',
    color: '#8A6FD1',
    desc: 'Tracks and ranks student placement activities, achievements, and projects — with JWT auth and an admin dashboard.',
    tag: 'Web App · Auth',
    i: 2,
  },
];

const EXPERIENCE = [
  {
    when: 'Aug 2026 — Present',
    role: 'Software',
    roleEm: 'Developer',
    company: 'FREELANCE / SELF-DIRECTED',
    desc: 'Building and shipping client websites and internal tools end-to-end — from design to deployed React front ends — while working with Node.js and Express for lightweight backend and API work.',
  },
  {
    when: 'Mar 2026 — Jul 2026',
    role: 'Programming Analyst',
    roleEm: 'Trainee',
    company: 'COGNIZANT',
    desc: 'Worked on developing responsive web applications using React.js. Built reusable UI components, managed application state, integrated REST APIs, and improved user experience with modern frontend practices.',
  },
];

const SKILLS_LIST = [
  { label: 'Interface design', value: 'Figma, other' },
  { label: 'Front-end', value: 'React, WebGL, web design' },
  { label: 'Backend', value: 'Node, APIs, databases' },
  { label: 'DevOps', value: 'CI/CD, containers, cloud' },
];

const MARQUEE_TEXT = (
  <>
    <b>Interaction design</b> · Front-end engineering · Backend · Web design · DevOps ·{' '}
    <b>Interaction design</b> · Front-end engineering · Backend · Web design · DevOps ·
  </>
);

const CYCLE_WORDS = ['websites', 'mobile apps', 'logos', 'AI agents'];

/* ============================================================
   SUBCOMPONENTS
   ============================================================ */

/** Boot overlay */
function Boot() {
  const [done, setDone] = useState(false);
  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const t = setTimeout(() => setDone(true), reduceMotion ? 0 : 1000);
    return () => clearTimeout(t);
  }, []);
  return (
    <div className={`boot${done ? ' done' : ''}`} aria-hidden="true">
      <div className="boot-mark">
        BOOTING<div className="bar" />KAVEYAN.DEV
      </div>
    </div>
  );
}

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
    const targets = document.querySelectorAll('a, .entry, button');
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

/** Site header / nav */
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
        <div className="logo">KAVEYAN<span>.</span></div>
        <div className="navlinks" id="navLinks">
          <a href="#work" onClick={close}>Work</a>
          <a href="#experience" onClick={close}>Experience</a>
          <a href="#about" onClick={close}>About</a>
          <a href="#contact" onClick={close}>Contact</a>
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

  // Resize cycle container to widest word
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

  // Rotate words
  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) return;
    const timer = setInterval(() => {
      setLeaving(prev => idx);
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

/** Hero section */
function Hero({ heroBgRef, heroContentRef }: { heroBgRef: React.RefObject<HTMLDivElement | null>; heroContentRef: React.RefObject<HTMLDivElement | null> }) {
  return (
    <section className="hero wrap" style={{ borderTop: 'none' }}>
      <div className="hero-bg" ref={heroBgRef as React.RefObject<HTMLDivElement>}>
        <div className="grid" />
        <div className="glyph-float"><div className="glyph">K</div></div>
      </div>
      <div className="hero-content" ref={heroContentRef as React.RefObject<HTMLDivElement>}>
        <h1 className="name">
          <span className="line"><span style={{ animationDelay: '0.05s' }}>Kaveyan.</span></span>
        </h1>
        <p className="hero-role" style={{ animationDelay: '0.4s' }}>
          I design and develop <CycleWords />
        </p>
        <div className="hero-meta" style={{ animationDelay: '0.68s' }}>
          <div>Based in<b>Chennai, India</b></div>
          <div>Currently<b>Freelance</b></div>
          <div>Focus<b>Development</b></div>
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

/** Work section */
function WorkSection() {
  return (
    <section id="work" className="wrap">
      <Reveal className="section-head">
        <div>
          <div className="eyebrow"></div>
          <h2 className="section-title">A short log,<br />not a long list.</h2>
        </div>
        <p style={{ maxWidth: '32ch', color: 'var(--paper-dim)', fontSize: '0.92rem' }}>
          Three projects that shaped how I think about the space between an idea and its interface.
        </p>
      </Reveal>
      <div className="ledger">
        {WORKS.map((w) => (
          <Reveal key={w.title} className="entry" style={{ '--i': w.i } as React.CSSProperties}>
            <span className="year">{w.year}</span>
            <span className="title">
              <span className="swatch" style={{ background: w.color }} />
              {w.title}
            </span>
            <span className="desc">{w.desc}</span>
            <span className="tag">{w.tag}</span>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/** Experience section */
function ExperienceSection() {
  return (
    <section id="experience" className="wrap">
      <Reveal className="section-head">
        <div>
          <div className="eyebrow"></div>
          <h2 className="section-title">Where I've<br />put in the work.</h2>
        </div>
      </Reveal>
      <div className="exp-list">
        {EXPERIENCE.map((e) => (
          <Reveal key={e.company} className="exp-entry">
            <div className="exp-when">{e.when}</div>
            <div>
              <div className="exp-role">{e.role} <em>{e.roleEm}</em></div>
              <span className="exp-company">{e.company}</span>
              <p className="exp-desc">{e.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/** About section */
function AboutSection() {
  return (
    <section id="about" className="wrap">
      <Reveal className="section-head">
        <div className="eyebrow">About</div>
      </Reveal>
      <Reveal className="about-grid">
        <div className="about-copy">
          <p>I'm a Computer Science Engineering graduate with a strong passion for building scalable and efficient software solutions.</p>
          <p>I specialize in JavaScript, React.js, Node.js, and Express.js, with a strong focus on frontend development and web design.</p>
          <p>I enjoy creating modern, responsive, user-friendly websites with clean UI, intuitive layouts, and reusable components.</p>
        </div>
        <div className="skills">
          {SKILLS_LIST.map((s) => (
            <div key={s.label}><span>{s.label}</span><span>{s.value}</span></div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}

/** Contact section */
function ContactSection() {
  return (
    <section id="contact" className="wrap">
      <Reveal className="contact-avail">
        <span className="avail-dot" />
        Available for new projects
      </Reveal>

      <Reveal className="contact-cta">
        Got something worth<br />
        building well?<br />
        <em>Let's talk.</em>
      </Reveal>

      <Reveal className="contact-row">
        <div className="contact-socials">
          <a href="https://x.com/BKaveyan11886" target="_blank" rel="noopener noreferrer">X / Twitter</a>
          <a href="https://www.instagram.com/_kaveyan/" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="https://www.linkedin.com/in/kaveyan/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
      </Reveal>
    </section>
  );
}

/** Footer */
function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="foot-note">© 2026 Kaveyan. Built by hand.</div>
        <div className="foot-note">Designed &amp; developed with care.</div>
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
      <Boot />
      <Progress />
      <Cursor />
      <Header />
      <Hero heroBgRef={heroBgRef} heroContentRef={heroContentRef} />
      <Marquee />
      <WorkSection />
      <ExperienceSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </>
  );
}
