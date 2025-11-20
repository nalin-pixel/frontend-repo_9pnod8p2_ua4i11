function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">About Us</h2>
          <p className="mt-4 text-slate-600">
            We are a team of engineers and problem‑solvers delivering end‑to‑end IT services. From planning to maintenance, we build secure, scalable, and future‑ready systems that let you focus on what matters most: your business.
          </p>
          <div className="mt-8 grid grid-cols-3 gap-4">
            <div className="p-4 rounded-xl bg-white border border-slate-200 text-center">
              <div className="text-2xl font-bold text-slate-900">10+Y</div>
              <div className="text-xs text-slate-500">Experience</div>
            </div>
            <div className="p-4 rounded-xl bg-white border border-slate-200 text-center">
              <div className="text-2xl font-bold text-slate-900">500+</div>
              <div className="text-xs text-slate-500">Projects</div>
            </div>
            <div className="p-4 rounded-xl bg-white border border-slate-200 text-center">
              <div className="text-2xl font-bold text-slate-900">98%</div>
              <div className="text-xs text-slate-500">Satisfaction</div>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="aspect-video rounded-2xl bg-slate-200 overflow-hidden shadow-xl ring-1 ring-slate-200">
            <img src="https://images.unsplash.com/photo-1552581234-26160f608093?q=80&w=1600&auto=format&fit=crop" alt="Team at work" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
