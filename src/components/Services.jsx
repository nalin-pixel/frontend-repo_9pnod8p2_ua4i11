import { Code2, Network, ShieldCheck, Camera } from 'lucide-react';

const services = [
  {
    icon: Code2,
    title: 'Web Development',
    desc: 'Responsive websites and web apps built with modern stacks for performance and scalability.',
  },
  {
    icon: Network,
    title: 'Network Solutions',
    desc: 'Planning, deployment, and optimization of robust wired and wireless networks.',
  },
  {
    icon: Camera,
    title: 'CCTV Security',
    desc: 'End-to-end surveillance systems with remote monitoring and smart alerts.',
  },
  {
    icon: ShieldCheck,
    title: 'Cybersecurity',
    desc: 'Proactive security audits, threat monitoring, and compliance consulting.',
  },
];

function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Core Services</h2>
          <p className="mt-3 text-slate-600">Solutions engineered for reliability, security, and growth.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-slate-200 p-6 hover:shadow-xl hover:-translate-y-1 transition-all">
              <div className="w-12 h-12 rounded-lg bg-blue-600/10 text-blue-700 flex items-center justify-center mb-4">
                <Icon className="w-6 h-6" />
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">{title}</h3>
              <p className="text-sm text-slate-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
