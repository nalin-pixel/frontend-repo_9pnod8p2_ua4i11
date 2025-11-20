import { Laptop, Wrench, Cpu, Network, Camera, ShieldCheck } from 'lucide-react';

const services = [
  {
    icon: Laptop,
    title: 'Laptop Sales & Upgrades',
    desc: 'New and refurbished laptops with RAM/SSD upgrades and genuine parts.',
  },
  {
    icon: Wrench,
    title: 'Repair & Maintenance',
    desc: 'Diagnostics, motherboard, keyboard, battery, and screen replacements.',
  },
  {
    icon: Cpu,
    title: 'Software & OS Setup',
    desc: 'Licensed Windows, drivers, antivirus, and essential productivity tools.',
  },
  {
    icon: Network,
    title: 'Networking Solutions',
    desc: 'Wi‑Fi coverage planning, routers, switches, and small office networks.',
  },
  {
    icon: Camera,
    title: 'CCTV & Surveillance',
    desc: 'Cameras, NVR/DVR setup, remote monitoring, and maintenance.',
  },
  {
    icon: ShieldCheck,
    title: 'Data Backup & Security',
    desc: 'Data recovery, backup solutions, and cyber‑security hardening.',
  },
];

function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Our Services</h2>
          <p className="mt-3 text-slate-600 max-w-2xl mx-auto">Everything you need for laptops and IT under one roof — quick service, honest pricing, and trusted support.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-slate-200 p-6 hover:shadow-xl hover:-translate-y-1 transition-all bg-white">
              <div className="w-12 h-12 rounded-lg bg-blue-600/10 text-blue-700 flex items-center justify-center mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">
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
