import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid md:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-9 h-9 rounded-lg bg-blue-600 flex items-center justify-center text-white font-bold">IT</div>
            <span className="text-white font-semibold text-lg">TechSphere</span>
          </div>
          <p className="text-sm text-slate-400">Professional IT services for modern businesses. We build, secure, and scale your digital infrastructure.</p>
          <div className="mt-4 flex items-center gap-3">
            <a href="#" className="p-2 rounded-md bg-white/5 hover:bg-white/10"><Facebook className="w-4 h-4" /></a>
            <a href="#" className="p-2 rounded-md bg-white/5 hover:bg-white/10"><Twitter className="w-4 h-4" /></a>
            <a href="#" className="p-2 rounded-md bg-white/5 hover:bg-white/10"><Instagram className="w-4 h-4" /></a>
            <a href="#" className="p-2 rounded-md bg-white/5 hover:bg-white/10"><Linkedin className="w-4 h-4" /></a>
          </div>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#home" className="hover:text-white">Home</a></li>
            <li><a href="#services" className="hover:text-white">Services</a></li>
            <li><a href="#about" className="hover:text-white">About</a></li>
            <li><a href="#contact" className="hover:text-white">Contact</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-3">Services</h4>
          <ul className="space-y-2 text-sm">
            <li>Web Development</li>
            <li>Network Solutions</li>
            <li>CCTV Security</li>
            <li>Cybersecurity</li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-3">Contact</h4>
          <ul className="space-y-2 text-sm">
            <li>Email: support@techsphere.com</li>
            <li>Phone: +1 (555) 123-4567</li>
            <li>Address: 123 Innovation Drive, San Francisco</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-xs text-slate-400">
        © {new Date().getFullYear()} TechSphere. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
