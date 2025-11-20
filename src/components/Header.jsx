import { useState } from 'react';
import { Menu, X, Phone, Mail, MessageCircle } from 'lucide-react';

function Header() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Services', href: '#services' },
    { label: 'About Us', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Top information bar */}
      <div className="hidden md:block bg-slate-900 text-slate-100 text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-10 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <a href="tel:+923238994409" className="inline-flex items-center gap-2 hover:text-white">
              <Phone className="w-4 h-4 text-blue-400" /> +92 323 8994409
            </a>
            <a href="mailto:ahmad78900akram@gmail.com" className="inline-flex items-center gap-2 hover:text-white">
              <Mail className="w-4 h-4 text-blue-400" /> ahmad78900akram@gmail.com
            </a>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="https://wa.me/923238994409"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-500 hover:bg-emerald-600 text-white"
            >
              <MessageCircle className="w-4 h-4" /> WhatsApp
            </a>
            <a
              href="tel:+923238994409"
              className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-600 hover:bg-blue-700 text-white"
            >
              <Phone className="w-4 h-4" /> Call Now
            </a>
          </div>
        </div>
      </div>

      {/* Main navbar */}
      <div className="bg-white/90 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-16 flex items-center justify-between">
            <a href="#home" className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-lg bg-blue-600 flex items-center justify-center text-white font-bold shadow-lg">SK</div>
              <span className="text-slate-900 font-semibold text-lg">SK Laptop</span>
            </a>

            <nav className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} className="text-slate-700 hover:text-blue-600 transition-colors">
                  {item.label}
                </a>
              ))}
            </nav>

            <div className="hidden md:flex items-center gap-3">
              <a href="tel:+923238994409" className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-blue-600 text-white shadow hover:bg-blue-700 transition-colors">
                <Phone className="w-4 h-4" />
                Call Now
              </a>
            </div>

            <button className="md:hidden p-2 rounded-md border border-slate-200" onClick={() => setOpen((v) => !v)} aria-label="Toggle menu">
              {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

          {open && (
            <div className="md:hidden pb-4 animate-in fade-in slide-in-from-top-2">
              <div className="flex flex-col gap-2">
                {navItems.map((item) => (
                  <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="px-3 py-2 rounded-md text-slate-700 hover:bg-slate-100">
                    {item.label}
                  </a>
                ))}
                <a href="https://wa.me/923238994409" target="_blank" rel="noreferrer" onClick={() => setOpen(false)} className="px-3 py-2 rounded-md bg-emerald-500 text-white text-center inline-flex items-center justify-center gap-2">
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp
                </a>
                <a href="tel:+923238994409" onClick={() => setOpen(false)} className="px-3 py-2 rounded-md bg-blue-600 text-white text-center inline-flex items-center justify-center gap-2">
                  <Phone className="w-4 h-4" />
                  Call Now
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
