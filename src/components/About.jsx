function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <p className="text-blue-600 font-medium">About SK Laptop</p>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-slate-900">Your One‑Stop Laptop & IT Partner</h2>
          <p className="mt-4 text-slate-600">
            We provide reliable laptop sales, expert repairs, upgrades, and end‑to‑end IT services. Our mission is to make technology simple, fast, and affordable for everyone — from students to businesses.
          </p>
          <ul className="mt-6 space-y-3 text-slate-700">
            <li className="flex items-start gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-blue-600"></span> Genuine parts and transparent pricing</li>
            <li className="flex items-start gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-blue-600"></span> Same‑day fixes for common issues</li>
            <li className="flex items-start gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-blue-600"></span> Warranty on repairs and devices</li>
          </ul>

          <div className="mt-8 grid grid-cols-3 gap-4">
            <div className="p-4 rounded-xl bg-white border border-slate-200 text-center">
              <div className="text-2xl font-bold text-slate-900">10+Y</div>
              <div className="text-xs text-slate-500">Experience</div>
            </div>
            <div className="p-4 rounded-xl bg-white border border-slate-200 text-center">
              <div className="text-2xl font-bold text-slate-900">500+</div>
              <div className="text-xs text-slate-500">Devices Fixed</div>
            </div>
            <div className="p-4 rounded-xl bg-white border border-slate-200 text-center">
              <div className="text-2xl font-bold text-slate-900">98%</div>
              <div className="text-xs text-slate-500">Satisfaction</div>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="aspect-video rounded-2xl bg-slate-200 overflow-hidden shadow-xl ring-1 ring-slate-200">
            <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1600&auto=format&fit=crop" alt="Store and service desk" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
