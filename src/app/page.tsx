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

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="/Dhan_Patil_Resume.pdf"
              target="_blank"
              className="rounded-md border border-[#3671C6] px-6 py-3 text-sm font-medium text-[#5FA8FF] transition hover:bg-[#3671C6]/10"
            >
              View Resume
            </a>

            <a
              href="https://github.com/dhan-patil"
              target="_blank"
              className="rounded-md border border-slate-700 px-6 py-3 text-sm font-medium text-slate-300 transition hover:border-[#3671C6] hover:text-[#5FA8FF]"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/dhanpatil/"
              target="_blank"
              className="rounded-md border border-slate-700 px-6 py-3 text-sm font-medium text-slate-300 transition hover:border-[#3671C6] hover:text-[#5FA8FF]"
            >
              LinkedIn
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