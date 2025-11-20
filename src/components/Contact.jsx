import { Mail, Phone, MapPin, Send, MessageCircle } from 'lucide-react';

function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Get In Touch</h2>
          <p className="mt-2 text-slate-600">Were here to help with laptops, repairs, and IT services.</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Contact Cards */}
          <div className="lg:col-span-1 space-y-4">
            <a href="tel:+923238994409" className="block p-4 rounded-xl border border-slate-200 hover:border-blue-300 hover:shadow transition-all">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-blue-600/10 text-blue-700 flex items-center justify-center">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-semibold text-slate-900">Call Us</div>
                  <div className="text-sm text-slate-600">+92 323 8994409</div>
                </div>
              </div>
            </a>
            <a href="https://wa.me/923238994409" target="_blank" rel="noreferrer" className="block p-4 rounded-xl border border-slate-200 hover:border-emerald-300 hover:shadow transition-all">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-emerald-500/10 text-emerald-600 flex items-center justify-center">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-semibold text-slate-900">Chat on WhatsApp</div>
                  <div className="text-sm text-slate-600">Instant response</div>
                </div>
              </div>
            </a>
            <a href="mailto:ahmad78900akram@gmail.com" className="block p-4 rounded-xl border border-slate-200 hover:border-blue-300 hover:shadow transition-all">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-blue-600/10 text-blue-700 flex items-center justify-center">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-semibold text-slate-900">Email</div>
                  <div className="text-sm text-slate-600">ahmad78900akram@gmail.com</div>
                </div>
              </div>
            </a>
            <a href="https://maps.google.com/?q=Rex%20city,%20Ground%20floor,%20SK%20computer" target="_blank" rel="noreferrer" className="block p-4 rounded-xl border border-slate-200 hover:border-blue-300 hover:shadow transition-all">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-blue-600/10 text-blue-700 flex items-center justify-center">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-semibold text-slate-900">Visit Us</div>
                  <div className="text-sm text-slate-600">Rex city, Ground floor, SK computer</div>
                </div>
              </div>
            </a>
          </div>

          {/* Form */}
          <form className="lg:col-span-2 bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-slate-600 mb-1">Name</label>
                <input type="text" className="w-full rounded-md border-slate-300 focus:border-blue-600 focus:ring-blue-600" placeholder="John Doe" />
              </div>
              <div>
                <label className="block text-sm text-slate-600 mb-1">Email</label>
                <input type="email" className="w-full rounded-md border-slate-300 focus:border-blue-600 focus:ring-blue-600" placeholder="you@example.com" />
              </div>
              <div>
                <label className="block text-sm text-slate-600 mb-1">Phone</label>
                <input type="tel" className="w-full rounded-md border-slate-300 focus:border-blue-600 focus:ring-blue-600" placeholder="+92 3xx xxxxxxx" />
              </div>
              <div>
                <label className="block text-sm text-slate-600 mb-1">Subject</label>
                <input type="text" className="w-full rounded-md border-slate-300 focus:border-blue-600 focus:ring-blue-600" placeholder="Repair / Purchase / IT Service" />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm text-slate-600 mb-1">Message</label>
                <textarea rows="4" className="w-full rounded-md border-slate-300 focus:border-blue-600 focus:ring-blue-600" placeholder="Tell us what you need help with..." />
              </div>
            </div>
            <div className="mt-4 flex flex-wrap gap-3">
              <button type="button" className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-blue-600 hover:bg-blue-700 text-white shadow">
                <Send className="w-4 h-4" />
                Submit Request
              </button>
              <a href="tel:+923238994409" className="inline-flex items-center gap-2 px-6 py-3 rounded-md border border-slate-300 text-slate-700 hover:bg-slate-50">
                <Phone className="w-4 h-4" /> Call
              </a>
              <a href="https://wa.me/923238994409" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-6 py-3 rounded-md border border-slate-300 text-slate-700 hover:bg-slate-50">
                <MessageCircle className="w-4 h-4" /> WhatsApp
              </a>
              <a href="https://maps.google.com/?q=Rex%20city,%20Ground%20floor,%20SK%20computer" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-6 py-3 rounded-md border border-slate-300 text-slate-700 hover:bg-slate-50">
                <MapPin className="w-4 h-4" /> Get Directions
              </a>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
