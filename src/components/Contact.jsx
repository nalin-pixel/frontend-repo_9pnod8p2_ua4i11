import { Mail, Phone, MapPin, Send } from 'lucide-react';

function Contact() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10">
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Get a Quote</h2>
          <p className="mt-3 text-slate-600">Tell us about your project and we’ll get back within 24 hours.</p>

          <div className="mt-8 space-y-4">
            <div className="flex items-center gap-3 text-slate-700">
              <Phone className="w-5 h-5 text-blue-600" />
              <span>+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center gap-3 text-slate-700">
              <Mail className="w-5 h-5 text-blue-600" />
              <span>support@techsphere.com</span>
            </div>
            <div className="flex items-center gap-3 text-slate-700">
              <MapPin className="w-5 h-5 text-blue-600" />
              <span>123 Innovation Drive, Suite 200, San Francisco, CA</span>
            </div>
          </div>
        </div>

        <form className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-slate-600 mb-1">Name</label>
              <input type="text" className="w-full rounded-md border-slate-300 focus:border-blue-600 focus:ring-blue-600" placeholder="John Doe" />
            </div>
            <div>
              <label className="block text-sm text-slate-600 mb-1">Email</label>
              <input type="email" className="w-full rounded-md border-slate-300 focus:border-blue-600 focus:ring-blue-600" placeholder="you@example.com" />
            </div>
            <div className="sm:col-span-2">
              <label className="block text-sm text-slate-600 mb-1">Service</label>
              <select className="w-full rounded-md border-slate-300 focus:border-blue-600 focus:ring-blue-600">
                <option>Web Development</option>
                <option>Network Solutions</option>
                <option>CCTV Security</option>
                <option>Cybersecurity</option>
              </select>
            </div>
            <div className="sm:col-span-2">
              <label className="block text-sm text-slate-600 mb-1">Message</label>
              <textarea rows="4" className="w-full rounded-md border-slate-300 focus:border-blue-600 focus:ring-blue-600" placeholder="Tell us about your needs..." />
            </div>
          </div>
          <button type="button" className="mt-4 inline-flex items-center gap-2 px-6 py-3 rounded-md bg-blue-600 hover:bg-blue-700 text-white shadow">
            <Send className="w-4 h-4" />
            Submit Request
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
