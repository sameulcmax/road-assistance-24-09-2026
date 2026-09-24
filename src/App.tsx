import { useEffect, useState, type FormEvent, type ReactNode } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  BatteryCharging,
  CarFront,
  Disc3,
  KeyRound,
  Mail,
  MapPin,
  Menu,
  Phone,
  X,
  type LucideIcon,
} from "lucide-react";

const PHONE_DISPLAY = "301-832-6633";
const PHONE_LINK = "tel:+13018326633";
const EMAIL = "NS2LLC@yahoo.com";
const easing = [0.22, 1, 0.36, 1] as const;

const navigation = [
  { label: "HOME", href: "#home" },
  { label: "SERVICES", href: "#services" },
  { label: "ABOUT", href: "#about" },
  { label: "WHY US", href: "#why-us" },
  { label: "CONTACT", href: "#contact" },
];

type Service = {
  number: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  items: string[];
  icon: LucideIcon;
};

const services: Service[] = [
  {
    number: "01",
    title: "MOBILE TIRE SERVICES",
    description: "Professional mobile tire solutions delivered directly to your location.",
    image: "/images/service-tires.jpg",
    imageAlt: "Roadside technician installing a tire on a vehicle using professional equipment",
    items: [
      "New Tire Installation",
      "Used Tire Installation",
      "Flat Tire Repair",
      "Tire Mounting & Balancing",
      "Seasonal Tire Swaps",
      "Tire Pressure Checks",
      "TPMS Services",
    ],
    icon: Disc3,
  },
  {
    number: "02",
    title: "BATTERY SERVICES",
    description: "Reliable battery support when your vehicle won't start.",
    image: "/images/service-battery.jpg",
    imageAlt: "Mobile technician checking a car battery under an open hood at the roadside",
    items: [
      "Battery Jump-Start",
      "Battery Charging",
      "Battery Restoration",
      "New Battery Installation",
      "Battery Delivery Service",
    ],
    icon: BatteryCharging,
  },
  {
    number: "03",
    title: "ROADSIDE ASSISTANCE",
    description: "Fast emergency roadside support when you need immediate help.",
    image: "/images/service-roadside.jpg",
    imageAlt: "Roadside assistance technician helping a driver beside a stopped vehicle",
    items: [
      "Emergency Fuel Delivery",
      "Tire Changes",
      "Vehicle Diagnostics",
      "Roadside Assistance",
      "Emergency Support",
    ],
    icon: CarFront,
  },
  {
    number: "04",
    title: "LOCKOUT SERVICES",
    description: "Locked your keys inside your vehicle? We've got you covered.",
    image: "/images/service-lockout.jpg",
    imageAlt: "Professional roadside technician assisting a driver with a vehicle lockout",
    items: [
      "Fast Response",
      "Safe Vehicle Unlocking",
      "Non-Damaging Entry Methods",
      "Professional Assistance",
    ],
    icon: KeyRound,
  },
];

const benefits = [
  {
    number: "01",
    title: "MOBILE SERVICE",
    description: "Professional assistance comes directly to your location.",
  },
  {
    number: "02",
    title: "PROFESSIONAL EQUIPMENT",
    description: "The right equipment for mobile tire and roadside service.",
  },
  {
    number: "03",
    title: "MULTI-SERVICE SUPPORT",
    description: "Tires, batteries, roadside assistance and lockout services in one place.",
  },
  {
    number: "04",
    title: "LOCAL SERVICE",
    description: "Serving Maryland and surrounding areas.",
  },
];

const steps = [
  { number: "01", title: "CALL", description: "Call NS2LLC Roadside Assistance" },
  {
    number: "02",
    title: "WE COME TO YOU",
    description: "A professional mobile technician comes directly to your location.",
  },
  {
    number: "03",
    title: "BACK ON THE ROAD",
    description: "Get the roadside assistance you need and continue your journey.",
  },
];

function Reveal({ children, className = "", delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const reducedMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reducedMotion ? false : { opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.13 }}
      transition={{ duration: 0.68, delay, ease: easing }}
    >
      {children}
    </motion.div>
  );
}

function Eyebrow({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return (
    <p className={`eyebrow${light ? " eyebrow-light" : ""}`}>
      <span className="eyebrow-line" aria-hidden="true" />
      {children}
    </p>
  );
}

function Brand({ footer = false }: { footer?: boolean }) {
  return (
    <a className={`brand${footer ? " brand-footer" : ""}`} href="#home" aria-label="NS2LLC Roadside Assistance, home">
      <div className="brand-logo-wrap">
        <img src="/images/logo.png" alt="NS2LLC Roadside Assistance Logo" className="brand-logo-image" />
      </div>
    </a>
  );
}

function ActionLink({
  href,
  children,
  variant = "yellow",
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: "yellow" | "outline" | "dark";
  className?: string;
}) {
  return (
    <a className={`action-link action-${variant} ${className}`} href={href}>
      <span>{children}</span>
      <ArrowUpRight size={18} strokeWidth={2.2} aria-hidden="true" />
    </a>
  );
}


function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  return (
    <>
      <div className="top-bar">
        <div className="site-container top-bar-inner">
          <span className="top-location">
            <span aria-hidden="true" /> MARYLAND &amp; SURROUNDING AREAS
          </span>

          <a href={PHONE_LINK}>{PHONE_DISPLAY}</a>
        </div>
      </div>

      <header className="site-header">
        <div className="site-container header-inner">

          {/* LOGO */}
          <div className="header-brand">
            <Brand />
          </div>

          {/* DESKTOP NAVIGATION */}
          <nav className="desktop-nav" aria-label="Main navigation">
            {navigation.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>

          {/* HEADER ACTIONS */}
          <div className="header-actions">
            <a className="header-call" href={PHONE_LINK}>
              <Phone
                size={15}
                strokeWidth={2.4}
                aria-hidden="true"
              />

              <span className="header-call-desktop">CALL NOW</span>
              <span className="header-call-mobile">CALL</span>
            </a>

            <button
              className="menu-toggle"
              type="button"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation"
              onClick={() => setMenuOpen((open) => !open)}
            >
              {menuOpen ? (
                <X size={25} aria-hidden="true" />
              ) : (
                <Menu size={25} aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {/* MOBILE NAVIGATION */}
        <AnimatePresence>
          {menuOpen && (
            <motion.nav
              id="mobile-navigation"
              className="mobile-nav"
              aria-label="Mobile navigation"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{
                duration: reducedMotion ? 0 : 0.24,
                ease: easing,
              }}
            >
              {navigation.map((item, index) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                >
                  <span>{item.label}</span>
                  <span className="mobile-nav-number">
                    0{index + 1}
                  </span>
                </a>
              ))}
            </motion.nav>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}

function Hero() {
  const reducedMotion = useReducedMotion();
  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.11, delayChildren: 0.12 } },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 22 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: easing } },
  };

  return (
    <section className="hero" id="home" aria-labelledby="hero-title">
      <img
        className="hero-image"
        src="/images/hero-roadside.jpg"
        alt="Roadside technician working beside a stranded vehicle on a highway shoulder"
        fetchPriority="high"
      />
      <div className="hero-shade" aria-hidden="true" />
      <motion.div
        className="site-container hero-content"
        variants={containerVariants}
        initial={reducedMotion ? false : "hidden"}
        animate="visible"
      >
        <motion.p className="hero-status" variants={itemVariants}>
          <span className="status-dot" aria-hidden="true" />24/7 ROADSIDE SUPPORT
        </motion.p>
        <motion.div className="hero-brand-group" variants={itemVariants}>
          <div className="hero-brand-name">NS2<span>LLC</span></div>
          <div className="hero-brand-caption">ROADSIDE ASSISTANCE</div>
        </motion.div>
        <motion.h1 id="hero-title" variants={itemVariants}>
          <span>ROADSIDE HELP.</span>
          <span>WHEN YOU NEED IT MOST.</span>
        </motion.h1>
        <motion.p className="hero-description" variants={itemVariants}>
          Professional mobile tire, battery, lockout and roadside assistance services delivered directly to your location.
        </motion.p>
        <motion.div className="hero-actions" variants={itemVariants}>
          <ActionLink href={PHONE_LINK}>CALL NOW</ActionLink>
          <ActionLink href="#services" variant="outline">OUR SERVICES</ActionLink>
        </motion.div>
        <motion.a className="hero-phone" href={PHONE_LINK} variants={itemVariants}>
          <Phone size={22} strokeWidth={2.1} aria-hidden="true" />
          {PHONE_DISPLAY}
        </motion.a>
      </motion.div>
      <div className="hero-road-line" aria-hidden="true"><span /><span /><span /></div>
    </section>
  );
}

function Intro() {
  return (
    <section className="intro section-pad" id="about" aria-labelledby="intro-title">
      <div className="site-container intro-grid">
        <Reveal>
          <Eyebrow>ROADSIDE ASSISTANCE, WHERE YOU ARE</Eyebrow>
          <h2 id="intro-title" className="display-title intro-title">STRANDED?<br /><span>WE COME TO YOU.</span></h2>
        </Reveal>
        <Reveal className="intro-aside" delay={0.12}>
          <p>From flat tires and dead batteries to lockouts and emergency roadside situations, NS2LLC Roadside Assistance provides professional mobile assistance directly at your location.</p>
          <a className="text-link" href={PHONE_LINK}>GET ROADSIDE HELP <ArrowUpRight size={20} aria-hidden="true" /></a>
        </Reveal>
      </div>
      <div className="intro-lane" aria-hidden="true"><span /><span /><span /></div>
    </section>
  );
}

function ServiceRow({ service, index }: { service: Service; index: number }) {
  const Icon = service.icon;

  return (
    <article className={`service-row${index % 2 === 1 ? " service-row-reversed" : ""}`}>
      <div className="service-copy">
        <Reveal className="service-copy-inner">
          <div className="service-topline">
            <div className="service-index"><span>{service.number}</span> / 04</div>
            <Icon size={25} strokeWidth={1.7} aria-hidden="true" />
          </div>
          <h3>{service.title}</h3>
          <p className="service-description">{service.description}</p>
          <ul className="service-list">
            {service.items.map((item) => <li key={item}>{item}</li>)}
          </ul>
          <a className="service-link" href={PHONE_LINK}>CALL FOR SERVICE <ArrowUpRight size={19} aria-hidden="true" /></a>
        </Reveal>
      </div>
      <div className="service-media">
        <img src={service.image} alt={service.imageAlt} loading="lazy" />
        <span className="service-media-edge" aria-hidden="true" />
      </div>
    </article>
  );
}

function Services() {
  return (
    <section className="services" id="services" aria-labelledby="services-title">
      <div className="site-container services-heading">
        <Reveal>
          <Eyebrow light>WHAT WE DO</Eyebrow>
          <h2 id="services-title" className="display-title">OUR <span>SERVICES</span></h2>
        </Reveal>
        <Reveal className="services-heading-copy" delay={0.1}>
          <p>Professional roadside solutions delivered directly to your location.</p>
        </Reveal>
      </div>
      <div className="service-rows">
        {services.map((service, index) => <ServiceRow key={service.number} service={service} index={index} />)}
      </div>
    </section>
  );
}

function WhyUs() {
  return (
    <section className="why-us section-pad" id="why-us" aria-labelledby="why-title">
      <div className="site-container why-grid">
        <div className="why-left">
          <Reveal>
            <Eyebrow light>WHY CHOOSE NS2LLC</Eyebrow>
            <h2 id="why-title" className="display-title">ROAD READY.<br /><span>HELP READY.</span></h2>
          </Reveal>
          <Reveal className="why-photo" delay={0.1}>
            <img
              src="/images/roadside-equipment.jpg"
              alt="Professional tire and roadside assistance equipment organized in a mobile service van"
              loading="lazy"
            />
            <span className="why-photo-corner" aria-hidden="true" />
          </Reveal>
        </div>
        <div className="benefits">
          {benefits.map((benefit, index) => (
            <Reveal className="benefit" key={benefit.number} delay={index * 0.07}>
              <span className="benefit-number">{benefit.number}</span>
              <div>
                <h3>{benefit.title}</h3>
                <p>{benefit.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function VisualBreak() {
  return (
    <section className="visual-break" aria-labelledby="visual-break-title">
      <img src="/images/roadside-van.jpg" alt="Mobile roadside service van parked on a highway shoulder with safety cones" loading="lazy" />
      <div className="visual-break-shade" aria-hidden="true" />
      <div className="site-container visual-break-content">
        <Reveal>
          <Eyebrow light>NS2LLC ROADSIDE ASSISTANCE</Eyebrow>
          <h2 id="visual-break-title" className="display-title">WHEN THE ROAD STOPS YOU,<br /><span>WE KEEP YOU <em>MOVING.</em></span></h2>
        </Reveal>
      </div>
      <div className="visual-break-stripe" aria-hidden="true" />
    </section>
  );
}

function Process() {
  const reducedMotion = useReducedMotion();

  return (
    <section className="process section-pad" aria-labelledby="process-title">
      <div className="site-container">
        <Reveal className="process-heading">
          <Eyebrow>HOW IT WORKS</Eyebrow>
          <h2 id="process-title" className="display-title">A SIMPLE WAY <span>FORWARD.</span></h2>
        </Reveal>
        <div className="process-timeline">
          <div className="timeline-track" aria-hidden="true" />
          <motion.div
            className="timeline-progress"
            aria-hidden="true"
            initial={reducedMotion ? false : { scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.1, ease: easing }}
          />
          {steps.map((step) => (
            <div className="process-step" key={step.number}>
              <span className="process-number">{step.number}</span>
              <span className="process-marker" aria-hidden="true" />
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Coverage() {
  return (
    <section className="coverage" aria-labelledby="coverage-title">
      <img src="/images/highway-coverage.jpg" alt="Aerial view of highway roads through a wooded landscape at dusk" loading="lazy" />
      <div className="coverage-shade" aria-hidden="true" />
      <div className="site-container coverage-grid">
        <Reveal className="coverage-main">
          <Eyebrow light>WHERE WE WORK</Eyebrow>
          <h2 id="coverage-title" className="display-title">SERVING MARYLAND<br /><span>&amp; SURROUNDING AREAS</span></h2>
          <p>Mobile roadside assistance delivered directly to customers throughout Maryland and surrounding areas.</p>
        </Reveal>
        <Reveal className="coverage-regions" delay={0.13}>
          <span className="coverage-regions-label"><MapPin size={16} aria-hidden="true" /> SERVICE FOCUS</span>
          <div><span>WASHINGTON DC</span><ArrowRight size={18} aria-hidden="true" /></div>
          <div><span>MARYLAND</span><ArrowRight size={18} aria-hidden="true" /></div>
          <div><span>NORTHERN VIRGINIA</span><ArrowRight size={18} aria-hidden="true" /></div>
        </Reveal>
      </div>
    </section>
  );
}

function EmergencyCta() {
  return (
    <section className="emergency-cta" aria-labelledby="emergency-title">
      <div className="site-container emergency-grid">
        <Reveal>
          <Eyebrow light>ROADSIDE HELP STARTS WITH A CALL</Eyebrow>
          <h2 id="emergency-title" className="display-title">STRANDED<br /><span>ON THE ROAD?</span></h2>
          <p>Get professional roadside assistance delivered directly to your location.</p>
        </Reveal>
        <Reveal className="emergency-contact" delay={0.1}>
          <a className="emergency-number" href={PHONE_LINK}>{PHONE_DISPLAY}</a>
          <ActionLink href={PHONE_LINK}>CALL NS2LLC NOW</ActionLink>
        </Reveal>
      </div>
    </section>
  );
}

function Contact() {
  const [draftOpened, setDraftOpened] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;

    const values = new FormData(form);
    const name = String(values.get("name") ?? "");
    const phone = String(values.get("phone") ?? "");
    const email = String(values.get("email") ?? "");
    const service = String(values.get("service") ?? "");
    const message = String(values.get("message") ?? "");
    const subject = `Roadside assistance request - ${service}`;
    const body = [
      `Name: ${name}`,
      `Phone: ${phone}`,
      `Email: ${email}`,
      `Service needed: ${service}`,
      "",
      `Message: ${message}`,
    ].join("\n");

    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setDraftOpened(true);
  }

  return (
    <section className="contact section-pad" id="contact" aria-labelledby="contact-title">
      <div className="site-container contact-grid">
        <Reveal className="contact-info">
          <Eyebrow>GET IN TOUCH</Eyebrow>
          <h2 id="contact-title" className="display-title">NEED ROADSIDE<br /><span>ASSISTANCE?</span></h2>
          <p className="contact-company">NS2LLC Roadside Assistance</p>
          <div className="contact-details">
            <div className="contact-detail">
              <Phone size={21} strokeWidth={1.8} aria-hidden="true" />
              <div><span>CALL</span><a href={PHONE_LINK}>{PHONE_DISPLAY}</a></div>
            </div>
            <div className="contact-detail">
              <Mail size={21} strokeWidth={1.8} aria-hidden="true" />
              <div><span>EMAIL</span><a href={`mailto:${EMAIL}`}>{EMAIL}</a></div>
            </div>
            <div className="contact-detail">
              <MapPin size={21} strokeWidth={1.8} aria-hidden="true" />
              <div><span>SERVICE AREA</span><p>Maryland &amp; Surrounding Areas</p></div>
            </div>
          </div>
        </Reveal>
        <Reveal className="contact-form-wrap" delay={0.1}>
          <form className="contact-form" onSubmit={handleSubmit} onChange={() => setDraftOpened(false)}>
            <div className="form-header">
              <span>EMAIL REQUEST</span>
              <ArrowUpRight size={22} aria-hidden="true" />
            </div>
            <div className="form-grid">
              <div className="form-field">
                <label htmlFor="contact-name">NAME *</label>
                <input id="contact-name" name="name" type="text" autoComplete="name" placeholder="Your name" required />
              </div>
              <div className="form-field">
                <label htmlFor="contact-phone">PHONE *</label>
                <input id="contact-phone" name="phone" type="tel" autoComplete="tel" placeholder="Your phone number" required />
              </div>
              <div className="form-field">
                <label htmlFor="contact-email">EMAIL *</label>
                <input id="contact-email" name="email" type="email" autoComplete="email" placeholder="Your email address" required />
              </div>
              <div className="form-field">
                <label htmlFor="contact-service">SERVICE NEEDED *</label>
                <select id="contact-service" name="service" defaultValue="" required>
                  <option value="" disabled>Select a service</option>
                  {services.map((service) => <option key={service.number} value={service.title}>{service.title}</option>)}
                </select>
              </div>
              <div className="form-field form-field-wide">
                <label htmlFor="contact-message">MESSAGE *</label>
                <textarea id="contact-message" name="message" rows={3} placeholder="Tell us what you need and where you are" required />
              </div>
            </div>
            <button className="action-link action-yellow form-submit" type="submit">
              <span>REQUEST ASSISTANCE</span><ArrowUpRight size={18} strokeWidth={2.2} aria-hidden="true" />
            </button>
            <p className="form-note">Opens a pre-filled email draft. For immediate assistance, please call.</p>
            {draftOpened && <p className="form-feedback" role="status">Your email draft should open in your email app. Please send it there to complete your request.</p>}
          </form>
        </Reveal>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="site-container footer-main">
        <div className="footer-brand-col">
          <Brand footer />
          <p>Professional mobile tire, battery, lockout and roadside assistance services.</p>
        </div>
        <div className="footer-nav-col">
          <h2>NAVIGATION</h2>
          <nav aria-label="Footer navigation">
            {navigation.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}
          </nav>
        </div>
        <div className="footer-contact-col">
          <h2>CONTACT</h2>
          <a className="footer-phone" href={PHONE_LINK}>{PHONE_DISPLAY}</a>
          <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
          <p>Maryland &amp; Surrounding Areas</p>
        </div>
      </div>
      <div className="site-container footer-bottom">
        <span>&copy; 2026 NS2LLC Roadside Assistance. All Rights Reserved.</span>
        <a href="#home">BACK TO TOP <ArrowUpRight size={15} aria-hidden="true" /></a>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <Header />
      <main id="main-content">
        <Hero />
        <Intro />
        <Services />
        <WhyUs />
        <VisualBreak />
        <Process />
        <Coverage />
        <EmergencyCta />
        <Contact />
      </main>
      <Footer />
    </>
  );
} 