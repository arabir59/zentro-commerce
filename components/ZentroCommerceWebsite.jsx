'use client';

export default function ZentroCommerceWebsite() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-white font-sans">
      {/* Header */}
      <header className="border-b border-white/10 backdrop-blur-sm sticky top-0 z-50 bg-slate-950/80">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-r from-cyan-400 to-blue-600 flex items-center justify-center text-xl font-bold shadow-lg shadow-cyan-500/20">
              Z
            </div>
            <div>
              <h1 className="text-2xl font-bold tracking-wide">Zentro Commerce</h1>
              <p className="text-sm text-slate-400">Marketplace Growth & Retail Operations</p>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-8 text-sm text-slate-300">
            <a href="#about" className="hover:text-cyan-400 transition">About</a>
            <a href="#categories" className="hover:text-cyan-400 transition">Categories</a>
            <a href="#partnership" className="hover:text-cyan-400 transition">Partnerships</a>
            <a href="#contact" className="hover:text-cyan-400 transition">Contact</a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 pt-24 pb-20 grid lg:grid-cols-2 gap-14 items-center">
        <div>
          <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-400/20 rounded-full px-4 py-2 text-cyan-300 text-sm mb-6">
            Building Long-Term Retail Partnerships
          </div>

          <h2 className="text-5xl md:text-6xl font-black leading-tight mb-6">
            Building Modern Brands Across Leading Online Marketplaces
          </h2>

          <p className="text-slate-300 text-lg leading-8 mb-8 max-w-2xl">
            Zentro Commerce partners with brands and authorized suppliers to expand product reach, strengthen marketplace visibility, and support scalable e-commerce distribution across the U.S.
          </p>

          <div className="flex flex-wrap gap-4 mb-8">
            <a
              href="#contact"
              className="px-7 py-4 rounded-2xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold shadow-2xl shadow-cyan-500/30 transition duration-300"
            >
              Become a Supplier Partner
            </a>

            <a
              href="#contact"
              className="px-7 py-4 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 text-white font-semibold transition duration-300"
            >
              Contact Our Team
            </a>
          </div>

          <div className="flex flex-wrap gap-3">
            {[
              'Marketplace Focused',
              'Scalable Retail Operations'
            ].map((badge, index) => (
              <div
                key={index}
                className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-slate-300"
              >
                {badge}
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 bg-cyan-500/20 blur-3xl rounded-full"></div>

          <div className="relative bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-md shadow-2xl">
            <div className="grid grid-cols-2 gap-5">
              <div className="bg-slate-900/70 border border-white/10 rounded-2xl p-6">
                <h3 className="text-cyan-400 text-sm mb-2">Business Type</h3>
                <p className="text-xl font-semibold">E-Commerce Retail</p>
              </div>

              <div className="bg-slate-900/70 border border-white/10 rounded-2xl p-6">
                <h3 className="text-cyan-400 text-sm mb-2">Primary Market</h3>
                <p className="text-xl font-semibold">United States</p>
              </div>

              <div className="bg-slate-900/70 border border-white/10 rounded-2xl p-6">
                <h3 className="text-cyan-400 text-sm mb-2">Sales Channels</h3>
                <p className="text-xl font-semibold">Amazon & Retail Platforms</p>
              </div>

              <div className="bg-slate-900/70 border border-white/10 rounded-2xl p-6">
                <h3 className="text-cyan-400 text-sm mb-2">Operational Focus</h3>
                <p className="text-xl font-semibold">Marketplace Expansion</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm mb-4">About Us</p>
            <h3 className="text-4xl font-bold mb-8">Structured Marketplace Operations Built For Scalable Retail Growth</h3>

            <p className="text-slate-300 leading-8 text-lg mb-6">
              Zentro Commerce collaborates with brands, wholesalers, and authorized distributors to support organized marketplace expansion across modern online retail channels. Our operational structure is designed to maintain consistency across sourcing, listings, communication, and catalog management.
            </p>

            <p className="text-slate-400 leading-8 text-lg mb-6">
              We focus on creating efficient workflows that help products gain stronger exposure, cleaner marketplace presentation, and scalable retail visibility across multiple product categories.
            </p>

            <p className="text-slate-400 leading-8 text-lg mb-6">
              Our business model prioritizes operational reliability, supplier coordination, and structured marketplace execution that supports sustainable online retail performance.
            </p>

            <p className="text-slate-400 leading-8 text-lg">
              From inventory coordination to catalog organization, we aim to create a supplier-friendly ecosystem built around transparency, adaptability, and efficient marketplace management.
            </p>
          </div>

          <div className="grid gap-6">
            {[
              {
                title: 'Authorized Wholesale Sourcing',
                desc: 'We work with verified suppliers and established distributors to support compliant and structured product sourcing for online retail marketplaces.'
              },
              {
                title: 'Multi-Channel Expansion',
                desc: 'We are building scalable infrastructure designed to support growth across multiple online retail and marketplace channels.'
              },
              {
                title: 'Inventory & Listing Coordination',
                desc: 'We prioritize organized inventory handling and synchronized product data management to maintain marketplace consistency.'
              },
              {
                title: 'Retail Brand Positioning',
                desc: 'We focus on presenting products in a way that supports stronger customer trust, visibility, and competitive retail positioning.'
              },
              {
                title: 'Reliable Supplier Communication',
                desc: 'Clear communication, responsive coordination, and operational transparency remain central to our supplier relationships.'
              }
            ].map((item, index) => (
              <div key={index} className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-cyan-400/30 transition duration-300">
                <h4 className="text-2xl font-semibold mb-3">{item.title}</h4>
                <p className="text-slate-400 leading-7">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section id="categories" className="bg-white/5 border-y border-white/10 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm mb-4">Product Categories</p>
            <h3 className="text-4xl font-bold">Our Expanding Product Focus</h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              'Beauty & Personal Care',
              'Health & Wellness',
              'Kitchen & Household',
              'Consumer Essentials',
              'Home Products',
              'General Merchandise',
              'Retail Distribution',
              'E-Commerce Goods'
            ].map((item, index) => (
              <div
                key={index}
                className="bg-slate-900/70 border border-white/10 rounded-3xl p-8 hover:border-cyan-400/30 transition"
              >
                <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 border border-cyan-400/20 mb-5 flex items-center justify-center text-cyan-400 text-2xl font-bold">
                  {index + 1}
                </div>

                <h4 className="text-xl font-semibold leading-8">{item}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership */}
      <section id="partnership" className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm mb-4">Supplier Benefits</p>
          <h3 className="text-4xl font-bold mb-6">Built To Support Modern Product Visibility</h3>
          <p className="text-slate-400 text-lg leading-8">
            We aim to create scalable retail opportunities for brands looking to strengthen marketplace visibility and improve online product reach.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-7">
          {[
            {
              title: 'Broader Marketplace Exposure',
              desc: 'We help products reach wider online audiences through organized retail marketplace placement and scalable catalog expansion.'
            },
            {
              title: 'Operational Consistency',
              desc: 'Our workflows prioritize consistent communication, organized product handling, and structured retail operations.'
            },
            {
              title: 'Adaptable Retail Strategy',
              desc: 'We continue building flexible systems designed to adapt alongside changing marketplace trends and category expansion.'
            }
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white/5 border border-white/10 rounded-3xl p-10 hover:-translate-y-1 transition duration-300"
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-cyan-400 to-blue-600 mb-6"></div>
              <h4 className="text-2xl font-semibold mb-4">{item.title}</h4>
              <p className="text-slate-400 leading-8">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="px-6 pb-24">
        <div className="max-w-7xl mx-auto bg-gradient-to-r from-cyan-500/10 to-blue-600/10 border border-cyan-400/20 rounded-[2rem] p-10 md:p-16">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm mb-4">Contact Information</p>
              <h3 className="text-4xl font-bold mb-6">Let's Build A Professional Partnership</h3>

              <p className="text-slate-300 text-lg leading-8">
                For supplier inquiries, business opportunities, and business communication, please contact us directly.
              </p>
            </div>

            <div className="grid gap-5">
              <div className="bg-slate-950/50 border border-white/10 rounded-2xl p-6">
                <p className="text-cyan-400 text-sm mb-2">Business Email</p>
                <p className="text-xl font-semibold">contact@zentrocommercellc.com</p>
              </div>

              <div className="bg-slate-950/50 border border-white/10 rounded-2xl p-6">
                <p className="text-cyan-400 text-sm mb-2">Phone Number</p>
                <p className="text-xl font-semibold">+1 (681) 310-4847</p>
              </div>

              <div className="bg-slate-950/50 border border-white/10 rounded-2xl p-6">
                <p className="text-cyan-400 text-sm mb-2">Business Address</p>
                <p className="text-lg leading-8 text-slate-200">
                  30 N Gould St Ste R <br />
                  Sheridan, WY 82801 <br />
                  United States
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-10 px-6 text-center text-slate-500 text-sm">
        <div className="max-w-7xl mx-auto">
          <p>© 2026 Zentro Commerce LLC. All Rights Reserved.</p>
          <p className="mt-3">
            Professional E-Commerce Retail & Marketplace Operations
          </p>
        </div>
      </footer>
    </div>
  );
}