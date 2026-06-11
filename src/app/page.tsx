'use client';

import { useEffect, useState } from 'react';

export default function Home() {
  const [activeSection, setActiveSection] = useState('about');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (window.location.hash) {
      window.history.replaceState(null, '', window.location.pathname);
      window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
    }

    const sections = document.querySelectorAll('section[id]');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-25% 0px -25% 0px',
        threshold: 0.15,
      }
    );

    sections.forEach((section) => observer.observe(section));

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      observer.disconnect();
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <main className="relative min-h-screen overflow-hidden scroll-smooth bg-[#070B12] text-slate-200">
      <div
        className="pointer-events-none fixed inset-0 z-0 transition duration-300"
        style={{
          background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(64,99,216,0.12), transparent 80%)`,
        }}
      />
      <div className="relative z-10 mx-auto flex max-w-7xl gap-16 px-6 lg:px-24">
        {/* Fixed Left Panel */}
        <aside className="lg:fixed lg:top-0 lg:left-0 lg:flex lg:h-screen lg:w-[42%] lg:flex-col lg:justify-between lg:px-24 lg:py-24">
          <div>
            <p className="mb-5 text-sm font-medium uppercase tracking-[0.25em] text-[#4063D8]">
              Hi, my name is
            </p>

            <h1 className="text-5xl font-bold tracking-tight text-slate-100 md:text-7xl">
              Dhan Patil.
            </h1>

            <p className="mt-6 max-w-md text-base leading-7 text-slate-400">
              Aspiring software developer passionate about motorsport
              analytics, iOS/macOS experiences, telemetry systems, and
              building data-driven applications with clean user experiences.
            </p>
            <a
              href="/Dhan_Patil_Resume.pdf"
              target="_blank"
              className="mt-6 inline-flex items-center rounded-full border border-slate-800 bg-slate-900/40 px-5 py-2 text-sm font-medium text-slate-300 transition-all duration-300 hover:-translate-y-1 hover:border-slate-700 hover:bg-slate-800/60 hover:text-slate-100"
            >
              Resume ↗
            </a>

            <nav className="mt-16 hidden lg:block">
              <ul className="space-y-6 text-sm font-medium uppercase tracking-[0.2em]">
                <li>
                  <a
                    href="/#about"
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById('about')?.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start',
                      });
                    }}
                    className={`group flex items-center gap-4 transition duration-300 ${activeSection === 'about' ? 'text-slate-100' : 'text-slate-500 hover:text-slate-200'}`}
                  >
                    <span
                      className={`h-px transition-all duration-300 ${activeSection === 'about' ? 'w-16 bg-slate-100' : 'w-8 bg-slate-600 group-hover:w-16 group-hover:bg-slate-200'}`}
                    />
                    About
                  </a>
                </li>

                <li>
                  <a
                    href="/#projects"
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById('projects')?.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start',
                      });
                    }}
                    className={`group flex items-center gap-4 transition duration-300 ${activeSection === 'projects' ? 'text-slate-100' : 'text-slate-500 hover:text-slate-200'}`}
                  >
                    <span
                      className={`h-px transition-all duration-300 ${activeSection === 'projects' ? 'w-16 bg-slate-100' : 'w-8 bg-slate-600 group-hover:w-16 group-hover:bg-slate-200'}`}
                    />
                    Projects
                  </a>
                </li>

                <li>
                  <a
                    href="/#contact"
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById('contact')?.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start',
                      });
                    }}
                    className={`group flex items-center gap-4 transition duration-300 ${activeSection === 'contact' ? 'text-slate-100' : 'text-slate-500 hover:text-slate-200'}`}
                  >
                    <span
                      className={`h-px transition-all duration-300 ${activeSection === 'contact' ? 'w-16 bg-slate-100' : 'w-8 bg-slate-600 group-hover:w-16 group-hover:bg-slate-200'}`}
                    />
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          <div className="mt-12 flex items-center gap-5 pb-10 text-slate-400 lg:pb-0">

            <a
              href="https://github.com/dhan-patil"
              target="_blank"
              className="text-slate-400 transition-all duration-300 hover:-translate-y-1 hover:text-slate-100"
              aria-label="GitHub"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 .5C5.65.5.5 5.65.5 12a11.5 11.5 0 0 0 7.86 10.92c.58.1.79-.25.79-.56v-2.17c-3.2.7-3.88-1.54-3.88-1.54-.53-1.33-1.28-1.69-1.28-1.69-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.56-.29-5.25-1.28-5.25-5.7 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.47.11-3.07 0 0 .96-.31 3.15 1.18a10.93 10.93 0 0 1 5.74 0c2.19-1.49 3.15-1.18 3.15-1.18.62 1.6.23 2.78.11 3.07.73.81 1.18 1.84 1.18 3.1 0 4.43-2.69 5.4-5.26 5.69.41.35.78 1.04.78 2.1v3.12c0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z"/>
              </svg>
            </a>

            <a
              href="https://www.linkedin.com/in/dhanpatil/"
              target="_blank"
              className="text-slate-400 transition-all duration-300 hover:-translate-y-1 hover:text-slate-100"
              aria-label="LinkedIn"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                <path d="M4.98 3.5C4.98 4.88 3.86 6 2.48 6S0 4.88 0 3.5 1.12 1 2.48 1s2.5 1.12 2.5 2.5ZM.5 8h4V24h-4V8Zm7 0h3.83v2.18h.05C11.91 8.96 13.56 8 15.9 8 20.27 8 21 10.88 21 14.63V24h-4v-8.07c0-1.92-.03-4.39-2.68-4.39-2.68 0-3.09 2.09-3.09 4.25V24h-4V8Z"/>
              </svg>
            </a>
          </div>
        </aside>

        {/* Scrollable Right Side */}
        <section className="w-full py-24 lg:ml-[48%] lg:w-[52%]">
          <section id="about" className="mb-32 scroll-mt-24">
            <h3 className="mb-8 text-sm font-semibold uppercase tracking-[0.2em] text-slate-300 lg:hidden">
              About
            </h3>

            <div className="space-y-6 text-slate-400 leading-8">
              <p className="max-w-2xl text-base leading-8 text-slate-300">
                I build Formula 1 analytics & performance software.
              </p>
              <p>
                I enjoy building software that combines data, interaction,
                and performance-focused experiences.
              </p>

              <p>
                My interest lies in motorsport analytics, telemetry systems,
                and creating products that make complex Formula 1 data easier
                to understand.
              </p>

              <p>
                Currently, I am focused on building Formula 1-related
                software experiences like F1A and F1TL while continuing to
                expand my skills across modern software development.
              </p>
            </div>
          </section>

          <section id="projects" className="mb-32 scroll-mt-24">
            <h3 className="mb-8 text-lg font-bold uppercase tracking-[0.15em] text-slate-100">
              Projects
            </h3>

            <div className="space-y-6">
              <a
                href="https://github.com/dhan-patil/f1a-formula1-analytics"
                target="_blank"
                className="group block rounded-3xl border border-slate-800/70 bg-slate-900/30 p-7 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-slate-700 hover:bg-slate-900/50"
              >
                <h4 className="text-xl font-semibold text-slate-100 transition-colors duration-300 group-hover:text-[#4063D8]">
                  F1A
                </h4>
                <p className="mt-3 leading-7 text-slate-400">
                  Formula 1 race performance insights and telemetry analysis
                  software focused on understanding why one driver performed
                  better than another through race context, replay systems,
                  and analytical workflows.
                </p>
                <p className="mt-4 text-sm text-slate-500">
                  SwiftUI • Swift • Xcode • APIs
                </p>
              </a>

              <a
                href="https://github.com/dhan-patil/f1tl-ios"
                target="_blank"
                className="group block rounded-3xl border border-slate-800/70 bg-slate-900/30 p-7 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-slate-700 hover:bg-slate-900/50"
              >
                <h4 className="text-xl font-semibold text-slate-100 transition-colors duration-300 group-hover:text-[#4063D8]">
                  F1TL
                </h4>
                <p className="mt-3 leading-7 text-slate-400">
                  A Formula 1 historical timeline application for iOS that
                  allows users to explore season progression, standings, and
                  race-by-race championship changes.
                </p>
                <p className="mt-4 text-sm text-slate-500">
                  SwiftUI • Swift • REST API
                </p>
              </a>
              <a
                href="https://github.com/dhan-patil/trackdelta-f1-telemetry"
                target="_blank"
                className="group block rounded-3xl border border-slate-800/70 bg-slate-900/30 p-7 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-slate-700 hover:bg-slate-900/50"
              >
                <h4 className="text-xl font-semibold text-slate-100 transition-colors duration-300 group-hover:text-[#4063D8]">
                  TrackDelta
                </h4>
                <p className="mt-3 leading-7 text-slate-400">
                  A Python-based Formula 1 telemetry analysis project focused on race
                  performance insights, lap comparisons, and understanding driver
                  performance through telemetry and data-driven analysis.
                </p>
                <p className="mt-4 text-sm text-slate-500">
                  Python • FastF1 • Telemetry Analysis • Data Visualization
                </p>
              </a>
            </div>
          </section>

          <section id="contact" className="min-h-[50vh] scroll-mt-24 pb-24">
            <h3 className="mb-8 text-lg font-bold uppercase tracking-[0.15em] text-slate-100">
              Contact
            </h3>

            <p className="max-w-lg text-slate-400 leading-8">
              Interested in collaborating, discussing Formula 1 analytics,
              or working together? Feel free to reach out.
            </p>

            <div className="mt-10">
              <p className="text-sm uppercase tracking-[0.2em] text-slate-500">
                Email
              </p>

              <a
                href="mailto:pdhandd@gmail.com"
                className="mt-3 inline-block text-base font-medium text-slate-300 transition hover:text-[#4063D8]"
              >
                pdhandd@gmail.com
              </a>
            </div>
          </section>
        </section>
      </div>
    </main>
  );
}