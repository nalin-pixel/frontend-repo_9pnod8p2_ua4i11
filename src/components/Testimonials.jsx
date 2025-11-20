function Testimonials() {
  const logos = [
    'https://upload.wikimedia.org/wikipedia/commons/a/ab/Apple-logo.png',
    'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg',
    'https://upload.wikimedia.org/wikipedia/commons/2/24/Lenovo_logo_2015.svg',
    'https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg',
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Trusted by leading teams</h2>
          <p className="mt-3 text-slate-600">We deliver results for startups, SMEs, and enterprises.</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 items-center">
          {logos.map((src, i) => (
            <div key={i} className="h-12 grayscale opacity-80 hover:opacity-100 transition-opacity flex items-center justify-center">
              <img src={src} alt="Client logo" className="max-h-12 object-contain" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
