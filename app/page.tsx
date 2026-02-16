"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const steps = [
  {
    title: "Share Vehicle Details",
    text: "Tell us your name, contact info, and vehicle make/model with current condition.",
  },
  {
    title: "Get a Fair Offer",
    text: "Our team sends a clear cash offer with no hidden charges or towing fees.",
  },
  {
    title: "Schedule Pickup",
    text: "Choose a pickup time in Calgary or nearby cities that works best for you.",
  },
  {
    title: "Get Paid on Pickup",
    text: "We inspect, complete paperwork, and pay you immediately when we collect the car.",
  },
];

const testimonials = [
  {
    name: "Emma J.",
    area: "NW Calgary",
    quote:
      "Selling my car was an excellent experience. They gave me a great price and picked up the car the same day. I couldn't believe how easy it was!",
  },
  {
    name: "Peter K.",
    area: "Airdrie",
    quote:
      "The team at Maple Cash For Cars was professional and efficient. I got a quote quickly and sold my car the next day. The cash payment was immediate and the whole process was hassle-free.",
  },
  {
    name: "Lisa M.",
    area: "Okotoks",
    quote:
      "Best experience I had selling a vehicle. Very clear process and fair cash offer.",
  },
  {
    name: "Nadia S.",
    area: "Cochrane",
    quote:
      "Quick response and smooth process. I appreciated the clear offer and easy pickup.",
  },
  {
    name: "Peter L.",
    area: "Chestermere",
    quote:
      "No surprises, just a fair price and fast removal. I'd recommend them to anyone.",
  },
];

const faqs = [
  {
    q: "How fast can I get a cash offer for my car?",
    a: "Most offers are sent the same day after you share your vehicle details. In many cases, we can provide a quote within a few hours.",
  },
  {
    q: "Do you buy junk or non-running vehicles?",
    a: "Yes. We buy running, damaged, and non-running vehicles, including junk cars, and provide free towing in Calgary and surrounding areas.",
  },
  {
    q: "Are there any towing or hidden fees?",
    a: "No. Our quotes are transparent and include pickup. There are no surprise towing charges for standard service areas.",
  },
  {
    q: "What documents do I need to sell my vehicle?",
    a: "A valid photo ID and vehicle ownership documents are usually required. Our team will guide you through exactly what to prepare.",
  },
  {
    q: "Can I upload photos before pickup?",
    a: "Yes. You can attach vehicle photos in the form to help us provide a more accurate initial offer.",
  },
];

const areas = [
  "Calgary",
  "Airdrie",
  "Cochrane",
  "Chestermere",
  "Okotoks",
  "High River",
  "Strathmore",
  "Canmore",
];

export default function Home() {
  const [files, setFiles] = useState<File[]>([]);
  const [fileError, setFileError] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");
  const testimonialRef = useRef<HTMLDivElement | null>(null);
  const [visibleCount, setVisibleCount] = useState(3);
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [translateX, setTranslateX] = useState<number>(0);
  const dragState = useRef<{
    isDragging: boolean;
    startX: number;
    startTranslate: number;
  }>({
    isDragging: false,
    startX: 0,
    startTranslate: 0,
  });

  const validateFiles = (
    fileList: FileList | null,
    existing: File[] = []
  ): { ok: boolean; files: File[]; warning?: string; error?: string } => {
    const maxFiles = 3;
    const maxSize = 5 * 1024 * 1024;
    const incoming = Array.from(fileList || []) as File[];

    if (incoming.length === 0) {
      return { ok: true, files: [] };
    }

    const availableSlots = Math.max(0, maxFiles - existing.length);
    const clipped = incoming.slice(0, availableSlots);

    for (const f of clipped) {
      if (!f.type.startsWith("image/")) {
        return { ok: false, error: "Only image files are allowed.", files: [] };
      }
      if (f.size > maxSize) {
        return { ok: false, error: "Each image must be 5MB or less.", files: [] };
      }
    }

    const trimmed = incoming.length > clipped.length;
    return {
      ok: true,
      files: clipped,
      warning: trimmed ? "Only 3 images are allowed. Extra files were ignored." : "",
    };
  };

  const handleFiles = (fileList: FileList | null) => {
    const result = validateFiles(fileList, files);
    if (!result.ok) {
      setFileError(result.error ?? "");
      return;
    }
    setFileError(result.warning || "");
    setFiles((prev) => [...prev, ...result.files]);
  };

  const onDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    handleFiles(e.dataTransfer.files);
  };

  const onDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const removeFile = (index: number) => {
    const next = files.filter((_, i) => i !== index);
    setFiles(next);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isSubmitting) return;
    setIsSubmitting(true);
    setSubmitMessage("");

    const form = e.currentTarget;
    const data = new FormData(form);
    files.forEach((file) => data.append("images", file));

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: data,
      });
      if (!res.ok) throw new Error("Failed");
      setSubmitMessage("Thanks! Your request has been sent.");
      form.reset();
      setFiles([]);
    } catch (err) {
      setSubmitMessage("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    const nodes = Array.from(document.querySelectorAll("[data-animate]"));
    if (nodes.length === 0) return;

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target;
          const anim = el.getAttribute("data-animate") || "";
          el.classList.add("animate__animated");
          anim.split(" ").forEach((cls) => {
            if (cls) el.classList.add(cls);
          });
          obs.unobserve(el);
        });
      },
      { threshold: 0.18 }
    );

    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const node = testimonialRef.current;
    if (!node) return;

    const interval = setInterval(() => {
      setCarouselIndex((prev) => {
        const maxIndex = Math.max(0, testimonials.length - visibleCount);
        return prev >= maxIndex ? 0 : prev + 1;
      });
    }, 10000);

    return () => clearInterval(interval);
  }, [visibleCount]);

  useEffect(() => {
    const updateVisible = () => {
      if (window.innerWidth < 640) {
        setVisibleCount(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCount(2);
      } else {
        setVisibleCount(3);
      }
    };

    updateVisible();
    window.addEventListener("resize", updateVisible);
    return () => window.removeEventListener("resize", updateVisible);
  }, []);

  useEffect(() => {
    const maxIndex = Math.max(0, testimonials.length - visibleCount);
    if (carouselIndex > maxIndex) setCarouselIndex(0);
  }, [carouselIndex, visibleCount]);

  useEffect(() => {
    const node = testimonialRef.current;
    if (!node) return;
    if (dragState.current.isDragging) return;
    const step = node.clientWidth / visibleCount;
    setTranslateX(-carouselIndex * step);
  }, [carouselIndex, visibleCount]);

  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    const node = testimonialRef.current;
    if (!node) return;
    dragState.current.isDragging = true;
    dragState.current.startX = e.clientX;
    dragState.current.startTranslate = translateX;
    node.setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!dragState.current.isDragging) return;
    const delta = e.clientX - dragState.current.startX;
    setTranslateX(dragState.current.startTranslate + delta);
  };

  const onPointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    const node = testimonialRef.current;
    if (!node) return;
    dragState.current.isDragging = false;
    node.releasePointerCapture(e.pointerId);

    const step = node.clientWidth / visibleCount;
    const maxIndex = Math.max(0, testimonials.length - visibleCount);
    const delta = translateX - dragState.current.startTranslate;
    const threshold = step * 0.25;
    if (delta <= -threshold && carouselIndex < maxIndex) {
      setCarouselIndex(carouselIndex + 1);
    } else if (delta >= threshold && carouselIndex > 0) {
      setCarouselIndex(carouselIndex - 1);
    } else {
      setCarouselIndex(carouselIndex);
    }
  };

  return (
    <div className="bg-white text-slate-900">
      <section className="hero-redgreen relative overflow-hidden reveal" data-animate="animate__fadeIn">
        <Image
          src="/images/hero-bg.jpg"
          alt="Maple Cash for Cars Calgary"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="hero-mask" />
        <div className="funky-blob funky-blob-red" aria-hidden="true" />
        <div className="funky-blob funky-blob-green" aria-hidden="true" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 pb-16 pt-8 md:px-8 lg:px-12 lg:pb-24 lg:pt-12">
          <div className="mb-10 flex items-center justify-between rounded-xl border border-white/20 bg-black/25 px-4 py-3 backdrop-blur-sm reveal" data-animate="animate__fadeInDown">
            <a href="/" className="flex items-center gap-3">
              <Image src="/images/maple-cash-for-cars.png" alt="Maple Cash for Cars" width={220} height={66} />
            </a>
            <a href="tel:+10000000000" className="topbar-call reveal" data-animate="animate__fadeInDown" aria-label="Call now">
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M4 5.5c0-.8.7-1.5 1.5-1.5h2.2c.7 0 1.2.4 1.4 1l.8 2.6c.2.6 0 1.3-.5 1.7l-1.2 1c1.1 2.2 2.9 4 5.1 5.1l1-1.2c.4-.5 1.1-.7 1.7-.5l2.6.8c.6.2 1 .7 1 1.4v2.2c0 .8-.7 1.5-1.5 1.5H18C10.8 20 4 13.2 4 5.5Z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>

          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center">
            <div className="space-y-6 text-white">
              <h1 className="max-w-xl text-4xl font-extrabold leading-tight md:text-5xl lg:text-6xl reveal" data-animate="animate__fadeInUp">
                Turn Your Unwanted Car into <span className="text-[var(--brand-green)]">Cash</span>
              </h1>
              <p className="max-w-xl text-lg text-slate-100 reveal" data-animate="animate__fadeInUp">
                We buy used, old, damaged, and junk vehicles. Quick pickup,
                same-day offers, and a clear process from quote to payment.
              </p>
              <div className="flex flex-wrap gap-4 reveal" data-animate="animate__fadeInUp">
                <a href="#lead-form" className="btn btn-red">
                  Get Cash Offer
                </a>
                <a href="#services" className="btn btn-outline-white">
                  View Services
                </a>
              </div>

              <div className="graphic-strip reveal" data-animate="animate__fadeInUp">
                <div className="graphic-chip">
                  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M3 12h18M12 3v18" stroke="currentColor" strokeWidth="2"/></svg>
                  <span>Same Day Pickup</span>
                </div>
                <div className="graphic-chip">
                  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M4 15l5-5 4 4 7-7" stroke="currentColor" strokeWidth="2"/><path d="M14 7h6v6" stroke="currentColor" strokeWidth="2"/></svg>
                  <span>Top Dollar Value</span>
                </div>
                <div className="graphic-chip">
                  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M4 12h16" stroke="currentColor" strokeWidth="2"/><circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="2"/></svg>
                  <span>Free Towing</span>
                </div>
              </div>
            </div>

            <form
              id="lead-form"
              className="rounded-2xl border-2 border-[var(--brand-green)] bg-white p-6 shadow-[0_18px_50px_rgba(0,0,0,0.35)] md:p-8 reveal"
              data-animate="animate__fadeInUp"
              onSubmit={handleSubmit}
            >
              <h2 className="mb-1 text-3xl font-black text-[var(--brand-red)] reveal" data-animate="animate__fadeInUp">Get a Free Cash Offer</h2>
              <p className="mb-5 text-sm text-slate-600 reveal" data-animate="animate__fadeInUp">Fill in your details and we will contact you shortly.</p>

              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div>
                  <label className="mb-1 block text-sm font-semibold text-slate-700" htmlFor="name">Name</label>
                  <input id="name" name="name" required className="field" type="text" placeholder="Full name" />
                </div>
                <div>
                  <label className="mb-1 block text-sm font-semibold text-slate-700" htmlFor="email">Email</label>
                  <input id="email" name="email" required className="field" type="email" placeholder="you@email.com" />
                </div>
                <div>
                  <label className="mb-1 block text-sm font-semibold text-slate-700" htmlFor="phone">Phone</label>
                  <input id="phone" name="phone" required className="field" type="tel" placeholder="(000) 000-0000" />
                </div>
                <div>
                  <label className="mb-1 block text-sm font-semibold text-slate-700" htmlFor="vehicle">Vehicle Make Model</label>
                  <input id="vehicle" name="vehicle" required className="field" type="text" placeholder="Enter vehicle details" />
                </div>
              </div>

              <div className="mt-4">
                <label className="mb-1 block text-sm font-semibold text-slate-700" htmlFor="city">City</label>
                <input id="city" name="city" required className="field" type="text" placeholder="Tell us your city/area" />
              </div>

              <div className="mt-4">
                <label className="mb-1 block text-sm font-semibold text-slate-700" htmlFor="message">Message</label>
                <textarea id="message" name="message" rows={3} className="field" placeholder="Vehicle condition, mileage, pickup area, reason to sell" />
              </div>

              <div className="mt-4">
                <label className="mb-1 block text-sm font-semibold text-slate-700" htmlFor="photo">Photo Upload (Optional)</label>
                <div
                  className="dropzone"
                  onDrop={onDrop}
                  onDragOver={onDragOver}
                >
                  <input
                    id="photo"
                    name="photo"
                    type="file"
                    accept="image/*"
                    multiple
                    className="dropzone-input"
                    onChange={(e) => handleFiles(e.target.files)}
                  />
                  <div className="dropzone-content">
                    <div className="dropzone-icon">+</div>
                    <div>
                      <div className="dropzone-title">Drop up to 3 photos</div>
                      <div className="dropzone-sub">
                        PNG or JPG, max 5MB each
                      </div>
                    </div>
                  </div>
                </div>
                {fileError ? (
                  <p className="mt-2 text-sm text-[var(--brand-red)]">{fileError}</p>
                ) : null}
                {files.length > 0 ? (
                  <ul className="file-list">
                    {files.map((f, i) => (
                      <li key={`${f.name}-${f.size}-${i}`}>
                        <span>{f.name}</span>
                        <button type="button" onClick={() => removeFile(i)}>
                          Remove
                        </button>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>

              <button type="submit" className="btn btn-red mt-5 w-full reveal" data-animate="animate__fadeInUp">
                {isSubmitting ? "Sending..." : "Submit"}
              </button>
              {submitMessage ? (
                <p className="mt-3 text-sm text-slate-600">{submitMessage}</p>
              ) : null}
            </form>
          </div>
        </div>

        <svg className="section-divider" viewBox="0 0 1200 120" preserveAspectRatio="none" aria-hidden="true">
          <path d="M0,64 C180,140 320,0 520,52 C700,100 840,40 1200,84 L1200,120 L0,120 Z" />
        </svg>
      </section>

      <section className="bg-white px-4 py-16 md:px-8 lg:px-12 reveal" data-animate="animate__fadeInUp animate__slow">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 lg:grid-cols-2">
          <div>
            <p className="text-sm font-bold uppercase tracking-wide text-[var(--brand-green)]">Why Maple Cash for Cars</p>
            <h2 className="mt-3 text-4xl font-black leading-tight text-slate-900">
              Simple Process. <span className="text-[var(--brand-red)]">Fair Price.</span> Zero Headache.
            </h2>
            <p className="mt-5 text-lg text-slate-700">
              We make selling your vehicle easy in Calgary. No classifieds, no
              no-shows, and no waiting weeks for payment.
            </p>
            <p className="mt-3 text-lg text-slate-700">
              Whether your car is running or not, we provide a clear offer, free
              pickup, and instant payment.
            </p>
          </div>
          <div className="relative">
            <Image
              src="/images/sell-my-car.png"
              alt="Vehicle pickup in Calgary"
              width={900}
              height={700}
              className="h-[430px] w-full rounded-2xl object-cover"
            />
          </div>
        </div>
      </section>

      <section id="services" className="section-green-tint px-4 py-16 md:px-8 lg:px-12 reveal" data-animate="animate__fadeInUp animate__slow">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-center text-4xl font-black text-slate-900">Our Services</h2>
          <p className="mt-3 text-center section-sub text-lg text-slate-700">Cash for Cars and Junk Car Removal across Calgary</p>

          <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-2">
            <article className="service-card service-card-red">
              <Image src="/images/cash-for-cars.png" alt="Cash for cars" width={900} height={700} className="h-72 w-full object-cover" />
              <div className="p-7">
                <h3 className="text-2xl font-black text-[var(--brand-red)]">Cash for Cars</h3>
                <p className="mt-3 text-slate-700">
                  We buy all makes and models in almost any condition and pay fair
                  cash on pickup.
                </p>
              </div>
            </article>

            <article className="service-card service-card-green">
              <Image src="/images/junk-car-removal.jpeg" alt="Junk car removal" width={900} height={700} className="h-72 w-full object-cover" />
              <div className="p-7">
                <h3 className="text-2xl font-black text-[var(--brand-green)]">Junk Car Removal</h3>
                <p className="mt-3 text-slate-700">
                  Free towing and responsible removal of scrap and non-running
                  vehicles from your location.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="process-block px-4 py-16 md:px-8 lg:px-12 reveal" data-animate="animate__fadeInUp animate__slow">
        <div className="mx-auto max-w-7xl">
          <div className="process-hero reveal" data-animate="animate__fadeInUp">
            <h2>How We Work</h2>
            <p className="section-sub">
              Simple, fast, and transparent steps to sell your vehicle for cash in
              Calgary.
            </p>
          </div>
          <div className="process-grid reveal" data-animate="animate__fadeInUp animate__delay-1s">
            {steps.map((step, index) => (
              <article key={step.title} className="process-card">
                <div className={`process-number ${index % 2 === 0 ? "process-green" : "process-blue"}`}>
                  {String(index + 1)}
                </div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
          <div className="process-cta reveal" data-animate="animate__fadeInUp animate__delay-1s">
            <a className="btn btn-outline-dark" href="tel:+10000000000">Call Us Now</a>
          </div>
        </div>
      </section>

      <section className="section-red-tint px-4 py-16 md:px-8 lg:px-12 reveal" data-animate="animate__fadeInUp animate__slow">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-center text-4xl font-black text-slate-900">Testimonials</h2>
          <p className="mt-2 text-center section-sub text-slate-700">Real feedback from Calgary vehicle owners.</p>
          <div
            className="testimonial-carousel"
            ref={testimonialRef}
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={onPointerUp}
            onPointerLeave={onPointerUp}
          >
            <button
              className="carousel-btn prev"
              type="button"
              aria-label="Previous testimonials"
              onClick={() =>
                setCarouselIndex((prev) =>
                  prev === 0 ? Math.max(0, testimonials.length - visibleCount) : prev - 1
                )
              }
            >
              ‹
            </button>
            <button
              className="carousel-btn next"
              type="button"
              aria-label="Next testimonials"
              onClick={() =>
                setCarouselIndex((prev) => {
                  const maxIndex = Math.max(0, testimonials.length - visibleCount);
                  return prev >= maxIndex ? 0 : prev + 1;
                })
              }
            >
              ›
            </button>
            <div
              className="testimonial-track"
              style={{ transform: `translateX(${translateX}px)` }}
            >
              {testimonials.map((item, i) => (
                <article
                  key={`${item.name}-${i}`}
                  className={`testimonial-card ${i % 2 === 0 ? "testimonial-green" : "testimonial-red"}`}
                  style={{ flex: `0 0 ${100 / visibleCount}%` }}
                >
                  <p className="text-slate-700">&ldquo;{item.quote}&rdquo;</p>
                  <div className="testimonial-bottom">
                    <div className="testimonial-avatar" aria-hidden="true">
                      {item.name.slice(0, 1)}
                    </div>
                    <div>
                      <h3>{item.name}</h3>
                      <p>{item.area}</p>
                    </div>
                  </div>
                  <div className="testimonial-stars" aria-hidden="true">★★★★★</div>
                </article>
              ))}
            </div>
            <div className="carousel-dots">
              {Array.from({
                length: Math.max(1, testimonials.length - visibleCount + 1),
              }).map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  aria-label={`Go to testimonials ${idx + 1}`}
                  className={idx === carouselIndex ? "active" : ""}
                  onClick={() => setCarouselIndex(idx)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="cta-dark px-4 py-16 md:px-8 lg:px-12 reveal" data-animate="animate__fadeInUp animate__slow">
        <div className="mx-auto max-w-6xl text-center">
          <p className="cta-eyebrow">We Have 8+ Years of Experience</p>
          <h2 className="cta-title">
            Choose us for a fast, straightforward way to sell your vehicle in
            Calgary and surrounding areas.
          </h2>
          <div className="cta-actions">
            <a className="btn btn-red" href="tel:+10000000000">Call Us Now</a>
            <a className="btn btn-outline-white" href="#lead-form">Get a Quote</a>
          </div>
        </div>
        <div className="cta-panel">
          <div className="cta-panel-left">
            <p className="cta-panel-sub">Whether running or not</p>
            <h3>
              We buy everything and pay between
              <span>$200 - $20,000</span>
            </h3>
          </div>
          <div className="cta-panel-list">
            <ul>
              <li>SUVs, Crossovers</li>
              <li>Cars, Sedans, Hatchbacks</li>
              <li>Pickup Trucks, Vans</li>
            </ul>
            <ul>
              <li>Buses, Minivans</li>
              <li>Commercial Trucks</li>
              <li>And all other types</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-16 md:px-8 lg:px-12 reveal" data-animate="animate__fadeInUp animate__slow">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-center text-4xl font-black text-slate-900">FAQs</h2>
          <p className="mt-2 text-center text-slate-700">Common questions about selling your vehicle with us.</p>
          <div className="mt-8 space-y-3">
            {faqs.map((item, idx) => (
              <details key={item.q} className={`faq-item ${idx % 2 === 0 ? "faq-green" : "faq-red"}`}>
                <summary>{item.q}</summary>
                <p>{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="section-green-tint px-4 py-16 md:px-8 lg:px-12 reveal" data-animate="animate__fadeInUp animate__slow">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-center text-4xl font-black text-slate-900">Areas We Serve</h2>
          <p className="mt-2 text-center section-sub text-slate-700">Calgary and surrounding cities</p>
          <div className="areas-grid">
            <ul className="areas-list">
              {areas.map((area) => (
                <li key={area}>{area}</li>
              ))}
            </ul>
            <div className="">
              <Image
                src="/images/alberta-map.jpg"
                alt="Alberta service map"
                width={520}
                height={520}
              />
            </div>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="footer-inner">
          <div className="footer-brand">
            <Image src="/images/maple-cash-for-cars.png" alt="Maple Cash for Cars" width={200} height={60} />
            <p>Fast, straightforward cash offers for vehicles across Calgary and surrounding areas.</p>
          </div>
          <div className="footer-links">
            <h4>Contact</h4>
            <a href="tel:+10000000000">(000) 000-0000</a>
            <span>Calgary, AB</span>
          </div>
          <div className="footer-links">
            <h4>Services</h4>
            <span>Cash for Cars</span>
            <span>Junk Car Removal</span>
            <span>Free Towing</span>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Maple Cash for Cars. All rights reserved.</span>
        </div>
      </footer>

      <a className="floating-call" href="tel:+10000000000" aria-label="Call now">
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M4 5.5c0-.8.7-1.5 1.5-1.5h2.2c.7 0 1.2.4 1.4 1l.8 2.6c.2.6 0 1.3-.5 1.7l-1.2 1c1.1 2.2 2.9 4 5.1 5.1l1-1.2c.4-.5 1.1-.7 1.7-.5l2.6.8c.6.2 1 .7 1 1.4v2.2c0 .8-.7 1.5-1.5 1.5H18C10.8 20 4 13.2 4 5.5Z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </a>
    </div>
  );
}
