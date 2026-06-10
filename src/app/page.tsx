
export default function Home() {
  return (
    <main className="min-h-screen bg-[#070B12] text-white">
      {/* subtle background glow */}
      <div className="pointer-events-none fixed left-[-120px] top-[-120px] h-[320px] w-[320px] rounded-full bg-[#3671C6]/20 blur-[120px]" />
      <div className="pointer-events-none fixed bottom-[-120px] right-[-120px] h-[320px] w-[320px] rounded-full bg-[#3671C6]/10 blur-[120px]" />

      <section className="mx-auto flex min-h-screen max-w-6xl items-center px-8 py-24">
        <div className="max-w-3xl">
          <p className="mb-5 text-sm font-medium tracking-[0.25em] text-[#5FA8FF] uppercase">
            Hi, my name is
          </p>

          <h1 className="text-5xl font-bold tracking-tight text-slate-100 md:text-7xl">
            Dhan Patil.
          </h1>

          <h2 className="mt-3 text-4xl font-bold tracking-tight text-slate-400 md:text-6xl">
            I build Formula 1 analytics & performance software.
          </h2>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-400">
            Aspiring software developer passionate about motorsport analytics,
            iOS/macOS experiences, telemetry systems, and building data-driven
            applications with clean user experiences.
          </p>

          <div className="mt-10 flex items-center gap-8 text-slate-400">

  <a
    href="/Dhan_Patil_Resume.pdf"
    target="_blank"
    className="transition-all duration-300 hover:-translate-y-1 hover:text-[#5FA8FF]"
    aria-label="Resume"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <path d="M14 2v6h6" />
    </svg>
  </a>

  <a
    href="https://github.com/dhan-patil"
    target="_blank"
    className="transition-all duration-300 hover:-translate-y-1 hover:text-[#5FA8FF]"
    aria-label="GitHub"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M12 .5C5.65.5.5 5.65.5 12a11.5 11.5 0 0 0 7.86 10.92c.58.1.79-.25.79-.56v-2.17c-3.2.7-3.88-1.54-3.88-1.54-.53-1.33-1.28-1.69-1.28-1.69-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.56-.29-5.25-1.28-5.25-5.7 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.47.11-3.07 0 0 .96-.31 3.15 1.18a10.93 10.93 0 0 1 5.74 0c2.19-1.49 3.15-1.18 3.15-1.18.62 1.6.23 2.78.11 3.07.73.81 1.18 1.84 1.18 3.1 0 4.43-2.69 5.4-5.26 5.69.41.35.78 1.04.78 2.1v3.12c0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z"/>
    </svg>
  </a>

  <a
    href="https://www.linkedin.com/in/dhanpatil/"
    target="_blank"
    className="transition-all duration-300 hover:-translate-y-1 hover:text-[#5FA8FF]"
    aria-label="LinkedIn"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M4.98 3.5C4.98 4.88 3.86 6 2.48 6S0 4.88 0 3.5 1.12 1 2.48 1s2.5 1.12 2.5 2.5ZM.5 8h4V24h-4V8Zm7 0h3.83v2.18h.05C11.91 8.96 13.56 8 15.9 8 20.27 8 21 10.88 21 14.63V24h-4v-8.07c0-1.92-.03-4.39-2.68-4.39-2.68 0-3.09 2.09-3.09 4.25V24h-4V8Z"/>
    </svg>
  </a>

</div>

          <p className="mt-10 text-sm text-slate-500">
            BCA Student • Open to Tech & Software Roles
          </p>
        </div>
      </section>
    </main>
  );
}