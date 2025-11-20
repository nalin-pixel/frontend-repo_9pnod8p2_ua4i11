import Spline from '@splinetool/react-spline';

function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] pt-20 flex items-center overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-900">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/FduaNp3csZktbOi3/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-900/70 to-slate-900/95 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10 items-center">
        <div className="text-white py-10">
          <span className="inline-flex items-center px-3 py-1 rounded-full bg-blue-600/20 text-blue-300 border border-blue-500/30 text-xs mb-4">Modern • Secure • Scalable</span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
            Your Trusted IT Solutions Partner
          </h1>
          <p className="mt-5 text-slate-300 text-lg max-w-xl">
            We design, implement, and manage end‑to‑end technology solutions that power your business growth with unmatched reliability.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#services" className="px-6 py-3 rounded-md bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-600/20">Explore Services</a>
            <a href="#contact" className="px-6 py-3 rounded-md bg-white/10 hover:bg-white/20 text-white border border-white/20">Request Service</a>
          </div>
          <div className="mt-8 flex items-center gap-6 text-slate-300/80">
            <div>
              <div className="text-3xl font-bold text-white">10+<span className="text-blue-400">Y</span></div>
              <div className="text-xs">Experience</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white">500+<span className="text-blue-400">+</span></div>
              <div className="text-xs">Projects</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white">24/7</div>
              <div className="text-xs">Support</div>
            </div>
          </div>
        </div>

        <div className="relative h-[420px] md:h-[560px] rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/5">
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-cyan-400/10" />
          <div className="absolute -inset-16 opacity-20 blur-3xl bg-[radial-gradient(circle_at_30%_30%,#60a5fa,transparent_40%),radial-gradient(circle_at_70%_70%,#22d3ee,transparent_40%)]" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
