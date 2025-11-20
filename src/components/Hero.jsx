import Spline from '@splinetool/react-spline';

function Hero() {
  return (
    <section id="home" className="relative min-h-[88vh] pt-28 flex items-center overflow-hidden bg-gradient-to-b from-blue-50 via-white to-white">
      {/* Subtle background visual */}
      <div className="absolute inset-0 opacity-30">
        <Spline scene="https://prod.spline.design/FduaNp3csZktbOi3/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/80 to-white pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10 items-center">
        <div className="py-10">
          <span className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-700 border border-blue-200 text-xs mb-4">Laptop Sales • Repairs • IT Services</span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-slate-900">
            Reliable Laptops & Professional IT Support
          </h1>
          <p className="mt-5 text-slate-600 text-lg max-w-xl">
            SK Laptop offers new and refurbished laptops, expert repairs, upgrades, and end‑to‑end IT services with fast turnaround and honest pricing.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#services" className="px-6 py-3 rounded-md bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-600/20">Explore Services</a>
            <a href="#contact" className="px-6 py-3 rounded-md bg-white hover:bg-slate-50 text-blue-700 border border-blue-200">Contact Now</a>
          </div>
          <div className="mt-8 grid grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-slate-900">10+Y</div>
              <div className="text-xs text-slate-500">Experience</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-slate-900">500+</div>
              <div className="text-xs text-slate-500">Devices Fixed</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-slate-900">24/7</div>
              <div className="text-xs text-slate-500">Support</div>
            </div>
          </div>
        </div>

        <div className="relative h-[420px] md:h-[560px] rounded-2xl overflow-hidden ring-1 ring-blue-200 bg-gradient-to-tr from-blue-50 to-blue-100">
          <div className="absolute -inset-16 opacity-40 blur-3xl bg-[radial-gradient(circle_at_30%_30%,#60a5fa,transparent_40%),radial-gradient(circle_at_70%_70%,#93c5fd,transparent_40%)]" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
