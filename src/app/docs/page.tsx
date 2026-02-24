"use client";

import { useState } from "react";
import Link from "next/link";

// Icons
const GTMIcon = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
  </svg>
);

const MarketingIcon = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
  </svg>
);

const BrandIcon = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
  </svg>
);

const AssetsIcon = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
  </svg>
);

const PitchIcon = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
  </svg>
);

const DownloadIcon = () => (
  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
  </svg>
);

const ExternalLinkIcon = () => (
  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
  </svg>
);

const sections = [
  { id: "gtm", label: "GTM Plan", icon: GTMIcon },
  { id: "marketing", label: "Marketing", icon: MarketingIcon },
  { id: "brand", label: "Brand", icon: BrandIcon },
  { id: "assets", label: "Assets", icon: AssetsIcon },
  { id: "pitch", label: "Pitch Deck", icon: PitchIcon },
];

export default function DocsPage() {
  const [activeSection, setActiveSection] = useState("gtm");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[var(--bg-primary)]">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-[var(--bg-surface)] border-b border-[var(--border)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-2">
              <span className="font-serif text-xl text-[var(--accent-terracotta)]">KeepClose</span>
              <span className="text-[var(--text-tertiary)]">— Documentation</span>
            </Link>
            <div className="hidden md:flex items-center gap-4">
              <Link href="/" className="text-sm text-[var(--text-secondary)] hover:text-[var(--accent-terracotta)]">
                Live Site
              </Link>
              <a 
                href="https://github.com/ashtalksai/keepclose" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm text-[var(--text-secondary)] hover:text-[var(--accent-terracotta)] flex items-center gap-1"
              >
                GitHub <ExternalLinkIcon />
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Tab Navigation */}
      <nav className="md:hidden sticky top-16 z-40 bg-[var(--bg-surface)] border-b border-[var(--border)] overflow-x-auto">
        <div className="flex">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => setActiveSection(section.id)}
              className={`flex-shrink-0 px-4 py-3 text-sm font-medium border-b-2 transition-colors ${
                activeSection === section.id
                  ? "border-[var(--accent-terracotta)] text-[var(--accent-terracotta)]"
                  : "border-transparent text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
              }`}
            >
              {section.label}
            </button>
          ))}
        </div>
      </nav>

      <div className="max-w-7xl mx-auto flex">
        {/* Desktop Sidebar */}
        <aside className="hidden md:block w-64 flex-shrink-0 border-r border-[var(--border)] min-h-[calc(100vh-4rem)] sticky top-16">
          <nav className="p-4 space-y-2">
            {sections.map((section) => {
              const Icon = section.icon;
              return (
                <button
                  key={section.id}
                  onClick={() => setActiveSection(section.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-all ${
                    activeSection === section.id
                      ? "bg-[var(--accent-terracotta)] text-white"
                      : "text-[var(--text-secondary)] hover:bg-[var(--bg-secondary)] hover:text-[var(--text-primary)]"
                  }`}
                >
                  <Icon />
                  <span className="font-medium">{section.label}</span>
                </button>
              );
            })}
            <hr className="my-4 border-[var(--border)]" />
            <Link 
              href="/"
              className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-[var(--text-secondary)] hover:bg-[var(--bg-secondary)] hover:text-[var(--text-primary)]"
            >
              Live Site
            </Link>
            <a 
              href="https://github.com/ashtalksai/keepclose"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-[var(--text-secondary)] hover:bg-[var(--bg-secondary)] hover:text-[var(--text-primary)]"
            >
              GitHub <ExternalLinkIcon />
            </a>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6 md:p-8 max-w-4xl">
          {activeSection === "gtm" && <GTMSection />}
          {activeSection === "marketing" && <MarketingSection />}
          {activeSection === "brand" && <BrandSection />}
          {activeSection === "assets" && <AssetsSection />}
          {activeSection === "pitch" && <PitchSection />}
        </main>
      </div>
    </div>
  );
}

function GTMSection() {
  return (
    <section className="space-y-8">
      <div>
        <h1 className="font-serif text-3xl md:text-4xl text-[var(--text-primary)] mb-4">Go-to-Market Plan</h1>
        <p className="text-[var(--text-secondary)] text-lg">Launch strategy for KeepClose — AI co-organizer for women&apos;s groups</p>
      </div>

      {/* Executive Summary */}
      <div className="bg-gradient-to-br from-[var(--accent-terracotta)] to-[var(--accent-sage)] rounded-2xl p-6 md:p-8 text-white">
        <h2 className="text-xl font-bold mb-4">Executive Summary</h2>
        <p className="text-white/90 mb-6">
          KeepClose launches targeting burned-out women&apos;s group organizers (book clubs, mom groups) with an AI co-organizer 
          that prevents the 70% group death rate within 6 months.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white/10 rounded-xl p-4">
            <div className="text-2xl font-bold">$2.8B</div>
            <div className="text-sm text-white/70">TAM</div>
          </div>
          <div className="bg-white/10 rounded-xl p-4">
            <div className="text-2xl font-bold">5M+</div>
            <div className="text-sm text-white/70">Organizers</div>
          </div>
          <div className="bg-white/10 rounded-xl p-4">
            <div className="text-2xl font-bold">200</div>
            <div className="text-sm text-white/70">Groups Month 6</div>
          </div>
          <div className="bg-white/10 rounded-xl p-4">
            <div className="text-2xl font-bold">$20K</div>
            <div className="text-sm text-white/70">ARR Target</div>
          </div>
        </div>
      </div>

      {/* Target Audience */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-[var(--bg-surface)] rounded-2xl p-6 border border-[var(--border)]">
          <h3 className="font-semibold text-lg mb-4 text-[var(--accent-terracotta)]">Primary Target</h3>
          <ul className="space-y-3 text-[var(--text-secondary)]">
            <li className="flex items-start gap-2">
              <span className="text-[var(--accent-sage)]">•</span>
              Women aged 30-50 organizing social groups
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[var(--accent-sage)]">•</span>
              Book club leaders, mom group coordinators
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[var(--accent-sage)]">•</span>
              Burned-out founders carrying all the admin
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[var(--accent-sage)]">•</span>
              Tech comfortable but not power users
            </li>
          </ul>
        </div>
        <div className="bg-[var(--bg-surface)] rounded-2xl p-6 border border-[var(--border)]">
          <h3 className="font-semibold text-lg mb-4 text-[var(--accent-terracotta)]">Pain Point</h3>
          <blockquote className="italic text-[var(--text-secondary)] border-l-4 border-[var(--accent-sage)] pl-4">
            &quot;I&apos;ve been running our book club for 3 years. It all falls to me — the scheduling, the 
            reminders, the chasing. I&apos;m exhausted.&quot;
          </blockquote>
          <p className="mt-4 text-sm text-[var(--text-tertiary)]">— Sarah, book club organizer</p>
        </div>
      </div>

      {/* Channels */}
      <div className="bg-[var(--bg-surface)] rounded-2xl p-6 border border-[var(--border)]">
        <h3 className="font-semibold text-lg mb-6 text-[var(--text-primary)]">Distribution Channels</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { channel: "Facebook Groups", focus: "Book club organizers, mom groups", priority: "PRIMARY" },
            { channel: "Reddit", focus: "r/bookclub, r/mommit, r/parenting", priority: "ORGANIC" },
            { channel: "Pinterest", focus: "Event planning SEO long-tail", priority: "SEO" },
            { channel: "LinkedIn", focus: "Corporate ERG organizers", priority: "B2B" },
            { channel: "Referral Program", focus: "1 organizer = 8-12 members", priority: "VIRAL" },
          ].map((item, i) => (
            <div key={i} className="p-4 rounded-xl bg-[var(--bg-secondary)]">
              <div className="flex items-center justify-between mb-2">
                <span className="font-medium">{item.channel}</span>
                <span className="text-xs px-2 py-1 rounded-full bg-[var(--accent-terracotta)] text-white">{item.priority}</span>
              </div>
              <p className="text-sm text-[var(--text-secondary)]">{item.focus}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Timeline */}
      <div className="bg-[var(--bg-surface)] rounded-2xl p-6 border border-[var(--border)]">
        <h3 className="font-semibold text-lg mb-6 text-[var(--text-primary)]">90-Day Timeline</h3>
        <div className="space-y-4">
          {[
            { phase: "Phase 1: Beta", time: "Weeks 1-4", goals: "20 struggling groups, free for 3 months, document attendance improvement" },
            { phase: "Phase 2: Organic", time: "Months 2-3", goals: "Launch in Facebook mom groups, referral program activation" },
            { phase: "Phase 3: Scale", time: "Months 4-6", goals: "200 groups, $20K ARR, content marketing ramp" },
          ].map((phase, i) => (
            <div key={i} className="flex gap-4 items-start">
              <div className="w-3 h-3 rounded-full bg-[var(--accent-terracotta)] mt-2 flex-shrink-0" />
              <div className="flex-1 pb-4 border-b border-[var(--border)] last:border-0">
                <div className="flex flex-wrap gap-2 items-center mb-1">
                  <span className="font-medium">{phase.phase}</span>
                  <span className="text-xs text-[var(--text-tertiary)]">{phase.time}</span>
                </div>
                <p className="text-sm text-[var(--text-secondary)]">{phase.goals}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pricing */}
      <div className="bg-[var(--bg-surface)] rounded-2xl p-6 border border-[var(--border)]">
        <h3 className="font-semibold text-lg mb-6 text-[var(--text-primary)]">Pricing Strategy</h3>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="p-4 rounded-xl bg-[var(--bg-secondary)]">
            <div className="text-sm text-[var(--text-tertiary)] mb-1">Free</div>
            <div className="text-2xl font-bold text-[var(--text-primary)]">$0</div>
            <div className="text-sm text-[var(--text-secondary)] mt-2">1 group, basic features</div>
          </div>
          <div className="p-4 rounded-xl bg-[var(--accent-terracotta)] text-white">
            <div className="text-sm text-white/70 mb-1">Pro</div>
            <div className="text-2xl font-bold">$7.99/mo</div>
            <div className="text-sm text-white/80 mt-2">Per organizer, unlimited groups</div>
          </div>
          <div className="p-4 rounded-xl bg-[var(--bg-secondary)]">
            <div className="text-sm text-[var(--text-tertiary)] mb-1">Group Plan</div>
            <div className="text-2xl font-bold text-[var(--text-primary)]">$99/year</div>
            <div className="text-sm text-[var(--text-secondary)] mt-2">Whole group up to 12 members</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function MarketingSection() {
  return (
    <section className="space-y-8">
      <div>
        <h1 className="font-serif text-3xl md:text-4xl text-[var(--text-primary)] mb-4">Marketing Plan</h1>
        <p className="text-[var(--text-secondary)] text-lg">Positioning, messaging, and content strategy</p>
      </div>

      {/* Positioning */}
      <div className="bg-[var(--bg-surface)] rounded-2xl p-6 md:p-8 border border-[var(--border)]">
        <h2 className="text-xl font-semibold mb-6 text-[var(--text-primary)]">Positioning Statement</h2>
        <div className="space-y-4 text-lg">
          <p><span className="text-[var(--accent-terracotta)] font-medium">For</span> burned-out women&apos;s group organizers</p>
          <p><span className="text-[var(--accent-terracotta)] font-medium">Who</span> carry all the mental load of scheduling, reminders, and chasing RSVPs</p>
          <p><span className="text-[var(--accent-terracotta)] font-medium">KeepClose</span> is an AI co-organizer</p>
          <p><span className="text-[var(--accent-terracotta)] font-medium">That</span> tracks engagement, sends personalized nudges, and remembers preferences</p>
          <p><span className="text-[var(--accent-terracotta)] font-medium">Unlike</span> scheduling tools that just find times</p>
          <p><span className="text-[var(--accent-terracotta)] font-medium">We</span> focus on keeping groups ALIVE, not just scheduled</p>
        </div>
      </div>

      {/* Tagline */}
      <div className="bg-gradient-to-r from-[var(--accent-terracotta)] to-[var(--accent-sage)] rounded-2xl p-8 text-center">
        <p className="text-white/80 mb-2">Tagline</p>
        <h2 className="font-serif text-3xl md:text-4xl text-white">&quot;You don&apos;t have to do this alone.&quot;</h2>
      </div>

      {/* Messaging Pillars */}
      <div className="grid md:grid-cols-3 gap-6">
        {[
          { title: "Relief", message: "\"You don't have to chase RSVPs anymore.\"", desc: "Acknowledging organizer burnout as real emotional labor" },
          { title: "Intelligence", message: "\"AI that remembers what you forget.\"", desc: "Jenny can't do Tuesdays? We remember forever." },
          { title: "Connection", message: "\"Keep the group alive, not just scheduled.\"", desc: "Engagement-first, not calendar-first" },
        ].map((pillar, i) => (
          <div key={i} className="bg-[var(--bg-surface)] rounded-2xl p-6 border border-[var(--border)]">
            <h3 className="font-semibold text-lg text-[var(--accent-terracotta)] mb-3">{pillar.title}</h3>
            <p className="text-[var(--text-primary)] font-medium mb-2">{pillar.message}</p>
            <p className="text-sm text-[var(--text-secondary)]">{pillar.desc}</p>
          </div>
        ))}
      </div>

      {/* Brand Voice */}
      <div className="bg-[var(--bg-surface)] rounded-2xl p-6 border border-[var(--border)]">
        <h3 className="font-semibold text-lg mb-6 text-[var(--text-primary)]">Brand Voice</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="text-[var(--accent-sage)] font-medium mb-3">✓ We Are</h4>
            <ul className="space-y-2 text-[var(--text-secondary)]">
              <li>• Supportive co-host who gets it</li>
              <li>• Empathetic, not preachy</li>
              <li>• Quiet intelligence working in background</li>
              <li>• Celebrating small wins</li>
            </ul>
          </div>
          <div>
            <h4 className="text-[var(--alert-red)] font-medium mb-3">✗ We&apos;re Not</h4>
            <ul className="space-y-2 text-[var(--text-secondary)]">
              <li>• Corporate productivity tool</li>
              <li>• Demanding or guilt-tripping</li>
              <li>• Feature-heavy dashboards</li>
              <li>• Calendar grids everywhere</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Content Calendar */}
      <div className="bg-[var(--bg-surface)] rounded-2xl p-6 border border-[var(--border)]">
        <h3 className="font-semibold text-lg mb-6 text-[var(--text-primary)]">Content Strategy</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-[var(--border)]">
                <th className="text-left py-3 px-4 font-medium text-[var(--text-tertiary)]">Channel</th>
                <th className="text-left py-3 px-4 font-medium text-[var(--text-tertiary)]">Frequency</th>
                <th className="text-left py-3 px-4 font-medium text-[var(--text-tertiary)]">Content Type</th>
              </tr>
            </thead>
            <tbody className="text-[var(--text-secondary)]">
              <tr className="border-b border-[var(--border)]">
                <td className="py-3 px-4">Blog</td>
                <td className="py-3 px-4">Weekly</td>
                <td className="py-3 px-4">SEO articles: &quot;How to Keep Book Club Alive&quot;</td>
              </tr>
              <tr className="border-b border-[var(--border)]">
                <td className="py-3 px-4">LinkedIn</td>
                <td className="py-3 px-4">3x/week</td>
                <td className="py-3 px-4">Founder story, organizing tips, wins</td>
              </tr>
              <tr className="border-b border-[var(--border)]">
                <td className="py-3 px-4">Instagram</td>
                <td className="py-3 px-4">4x/week</td>
                <td className="py-3 px-4">Carousels, engagement tips, testimonials</td>
              </tr>
              <tr>
                <td className="py-3 px-4">Email</td>
                <td className="py-3 px-4">5-part series</td>
                <td className="py-3 px-4">Welcome sequence + milestone celebrations</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

function BrandSection() {
  return (
    <section className="space-y-8">
      <div>
        <h1 className="font-serif text-3xl md:text-4xl text-[var(--text-primary)] mb-4">Brand Guidelines</h1>
        <p className="text-[var(--text-secondary)] text-lg">Visual identity and design system for KeepClose</p>
      </div>

      {/* Color Palette */}
      <div className="bg-[var(--bg-surface)] rounded-2xl p-6 border border-[var(--border)]">
        <h3 className="font-semibold text-lg mb-6 text-[var(--text-primary)]">Color Palette</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <div className="rounded-xl overflow-hidden">
            <div className="h-24 bg-[#d4725f]" />
            <div className="p-3 bg-[var(--bg-secondary)]">
              <div className="font-medium">Terracotta</div>
              <div className="text-sm text-[var(--text-tertiary)] font-mono">#d4725f</div>
            </div>
          </div>
          <div className="rounded-xl overflow-hidden">
            <div className="h-24 bg-[#7a9588]" />
            <div className="p-3 bg-[var(--bg-secondary)]">
              <div className="font-medium">Sage Green</div>
              <div className="text-sm text-[var(--text-tertiary)] font-mono">#7a9588</div>
            </div>
          </div>
          <div className="rounded-xl overflow-hidden">
            <div className="h-24 bg-[#faf8f5]" />
            <div className="p-3 bg-[var(--bg-secondary)]">
              <div className="font-medium">Warm Cream</div>
              <div className="text-sm text-[var(--text-tertiary)] font-mono">#faf8f5</div>
            </div>
          </div>
          <div className="rounded-xl overflow-hidden">
            <div className="h-24 bg-[#e8b968]" />
            <div className="p-3 bg-[var(--bg-secondary)]">
              <div className="font-medium">Warm Yellow</div>
              <div className="text-sm text-[var(--text-tertiary)] font-mono">#e8b968</div>
            </div>
          </div>
          <div className="rounded-xl overflow-hidden">
            <div className="h-24 bg-[#2d2721]" />
            <div className="p-3 bg-[var(--bg-secondary)]">
              <div className="font-medium">Deep Brown</div>
              <div className="text-sm text-[var(--text-tertiary)] font-mono">#2d2721</div>
            </div>
          </div>
          <div className="rounded-xl overflow-hidden">
            <div className="h-24 bg-[#6b6258]" />
            <div className="p-3 bg-[var(--bg-secondary)]">
              <div className="font-medium">Muted Brown</div>
              <div className="text-sm text-[var(--text-tertiary)] font-mono">#6b6258</div>
            </div>
          </div>
        </div>
      </div>

      {/* Typography */}
      <div className="bg-[var(--bg-surface)] rounded-2xl p-6 border border-[var(--border)]">
        <h3 className="font-semibold text-lg mb-6 text-[var(--text-primary)]">Typography</h3>
        <div className="space-y-6">
          <div>
            <p className="text-sm text-[var(--text-tertiary)] mb-2">Display — Instrument Serif</p>
            <p className="font-serif text-4xl">You don&apos;t have to do this alone</p>
          </div>
          <div>
            <p className="text-sm text-[var(--text-tertiary)] mb-2">Body — Plus Jakarta Sans</p>
            <p className="text-lg">Your co-organizer that remembers everything, nudges quietly, and keeps your group thriving.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4">
            <div>
              <span className="text-xs text-[var(--text-tertiary)]">H1</span>
              <p className="font-serif text-3xl">48px</p>
            </div>
            <div>
              <span className="text-xs text-[var(--text-tertiary)]">H2</span>
              <p className="font-serif text-2xl">36px</p>
            </div>
            <div>
              <span className="text-xs text-[var(--text-tertiary)]">Body</span>
              <p className="text-base">16px</p>
            </div>
            <div>
              <span className="text-xs text-[var(--text-tertiary)]">Small</span>
              <p className="text-sm">14px</p>
            </div>
          </div>
        </div>
      </div>

      {/* Components */}
      <div className="bg-[var(--bg-surface)] rounded-2xl p-6 border border-[var(--border)]">
        <h3 className="font-semibold text-lg mb-6 text-[var(--text-primary)]">Components</h3>
        <div className="space-y-8">
          {/* Buttons */}
          <div>
            <p className="text-sm text-[var(--text-tertiary)] mb-4">Buttons</p>
            <div className="flex flex-wrap gap-4">
              <button className="px-6 py-3 bg-[var(--accent-terracotta)] text-white rounded-lg font-medium hover:bg-[var(--accent-terracotta-hover)] transition-colors">
                Primary Button
              </button>
              <button className="px-6 py-3 border-2 border-[var(--accent-sage)] text-[var(--accent-sage)] rounded-lg font-medium hover:bg-[var(--accent-sage)] hover:text-white transition-colors">
                Secondary Button
              </button>
              <button className="px-6 py-3 text-[var(--accent-terracotta)] underline font-medium">
                Text Link
              </button>
            </div>
          </div>
          {/* Badges */}
          <div>
            <p className="text-sm text-[var(--text-tertiary)] mb-4">Member Status Badges</p>
            <div className="flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#6d9a7f]/20 text-[#6d9a7f] text-sm">
                <span className="w-2 h-2 rounded-full bg-[#6d9a7f]" /> Active
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#e8b968]/20 text-[#e8b968] text-sm">
                <span className="w-2 h-2 rounded-full bg-[#e8b968]" /> Quiet
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#c85a50]/20 text-[#c85a50] text-sm">
                <span className="w-2 h-2 rounded-full bg-[#c85a50]" /> Missing
              </span>
            </div>
          </div>
          {/* Cards */}
          <div>
            <p className="text-sm text-[var(--text-tertiary)] mb-4">Cards</p>
            <div className="max-w-sm bg-[var(--bg-primary)] rounded-xl p-4 border border-[var(--border)]">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-[var(--accent-sage)]" />
                <div>
                  <p className="font-medium">Sarah Johnson</p>
                  <p className="text-sm text-[var(--text-tertiary)]">Book club organizer</p>
                </div>
              </div>
              <p className="text-[var(--text-secondary)] text-sm">Attended 8/10 events • Last seen 2 days ago</p>
            </div>
          </div>
        </div>
      </div>

      {/* Design Principles */}
      <div className="bg-[var(--bg-surface)] rounded-2xl p-6 border border-[var(--border)]">
        <h3 className="font-semibold text-lg mb-6 text-[var(--text-primary)]">Design Principles</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div>
              <h4 className="font-medium text-[var(--accent-terracotta)] mb-2">Warm & Approachable</h4>
              <p className="text-sm text-[var(--text-secondary)]">Earth tones, soft corners (8-12px radius), friendly typography</p>
            </div>
            <div>
              <h4 className="font-medium text-[var(--accent-terracotta)] mb-2">Feed-First Dashboard</h4>
              <p className="text-sm text-[var(--text-secondary)]">Show stories, not spreadsheets. Timeline of activity, not calendar grids.</p>
            </div>
          </div>
          <div className="space-y-4">
            <div>
              <h4 className="font-medium text-[var(--accent-terracotta)] mb-2">People-Focused</h4>
              <p className="text-sm text-[var(--text-secondary)]">Member cards with engagement status, not just names in a list.</p>
            </div>
            <div>
              <h4 className="font-medium text-[var(--accent-terracotta)] mb-2">Supportive Copy</h4>
              <p className="text-sm text-[var(--text-secondary)]">&quot;You don&apos;t have to do this alone&quot; — empathy, not productivity guilt.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function AssetsSection() {
  const assets = [
    { name: "Logo", dimensions: "500x500", file: "logo.png", url: "https://drive.google.com/file/d/1sFRVy2CItyK0hugaiVr6At7QxdJ_68fo/view" },
    { name: "Favicon", dimensions: "32x32", file: "favicon.png", url: "https://drive.google.com/file/d/1vCSqKOFa6Kqwfr6Ee2FHBQzxFVdoSCmj/view" },
    { name: "OG Image", dimensions: "1200x630", file: "og-image.png", url: "https://drive.google.com/file/d/1qGnpq06W9PlP-RV3RJH5B2KqVO_MYlV4/view" },
    { name: "LinkedIn Banner", dimensions: "1584x396", file: "linkedin-banner.png", url: "https://drive.google.com/file/d/1rZRNRTd-ZR7B7D1pEhkhhSBJZKjsnn6g/view" },
    { name: "Twitter Header", dimensions: "1500x500", file: "twitter-header.png", url: "https://drive.google.com/file/d/1yc583W8uTKeOCZjvH7gi8zrfmtfYj44K/view" },
    { name: "Social Media Card", dimensions: "1200x630", file: "social-card.png", url: "https://drive.google.com/file/d/1L8TLT0ex1xa0bCLv2t_Z5-Ljgmny_SLB/view" },
    { name: "Instagram Post", dimensions: "1080x1080", file: "instagram-post.png", url: "https://drive.google.com/file/d/1RF9_tgUqISc3YuqM4N9VmS7Q1uGqY_4N/view" },
  ];

  return (
    <section className="space-y-8">
      <div>
        <h1 className="font-serif text-3xl md:text-4xl text-[var(--text-primary)] mb-4">Brand Assets</h1>
        <p className="text-[var(--text-secondary)] text-lg">Download logos, banners, and social media assets</p>
      </div>

      {/* Download All */}
      <a 
        href="https://drive.google.com/drive/folders/1aBathQVZnQ_5PVQG86dpH5twOPaY059-"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-between p-6 bg-gradient-to-r from-[var(--accent-terracotta)] to-[var(--accent-sage)] rounded-2xl text-white hover:opacity-90 transition-opacity"
      >
        <div>
          <h3 className="font-semibold text-lg">Download All Assets</h3>
          <p className="text-white/80 text-sm">Google Drive folder with all brand assets</p>
        </div>
        <DownloadIcon />
      </a>

      {/* Asset Grid */}
      <div className="grid md:grid-cols-2 gap-6">
        {assets.map((asset, i) => (
          <div key={i} className="bg-[var(--bg-surface)] rounded-2xl overflow-hidden border border-[var(--border)]">
            <div className="h-40 bg-gradient-to-br from-[var(--accent-terracotta)]/20 to-[var(--accent-sage)]/20 flex items-center justify-center">
              <div className="text-center">
                <p className="font-medium text-[var(--text-primary)]">{asset.name}</p>
                <p className="text-xs text-[var(--text-tertiary)]">{asset.dimensions}</p>
              </div>
            </div>
            <div className="p-4 flex items-center justify-between">
              <div>
                <p className="font-medium text-sm">{asset.file}</p>
              </div>
              <a 
                href={asset.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-1.5 bg-[var(--accent-terracotta)] text-white text-sm rounded-lg hover:bg-[var(--accent-terracotta-hover)] transition-colors"
              >
                <DownloadIcon /> Download
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Usage Guidelines */}
      <div className="bg-[var(--bg-surface)] rounded-2xl p-6 border border-[var(--border)]">
        <h3 className="font-semibold text-lg mb-6 text-[var(--text-primary)]">Usage Guidelines</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="text-[var(--accent-sage)] font-medium mb-3">✓ Do</h4>
            <ul className="space-y-2 text-sm text-[var(--text-secondary)]">
              <li>• Use the logo with adequate clear space</li>
              <li>• Keep the terracotta/sage color palette</li>
              <li>• Maintain warm, supportive tone in copy</li>
              <li>• Use on light cream backgrounds</li>
            </ul>
          </div>
          <div>
            <h4 className="text-[var(--alert-red)] font-medium mb-3">✗ Don&apos;t</h4>
            <ul className="space-y-2 text-sm text-[var(--text-secondary)]">
              <li>• Stretch or distort the logo</li>
              <li>• Use corporate blue/gray colors</li>
              <li>• Add shadows or effects to logo</li>
              <li>• Use on busy background images</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function PitchSection() {
  return (
    <section className="space-y-8">
      <div>
        <h1 className="font-serif text-3xl md:text-4xl text-[var(--text-primary)] mb-4">Pitch Deck</h1>
        <p className="text-[var(--text-secondary)] text-lg">Investment presentation for KeepClose</p>
      </div>

      {/* External Link */}
      <Link 
        href="/pitch"
        className="flex items-center justify-between p-6 bg-gradient-to-r from-[var(--accent-terracotta)] to-[var(--accent-sage)] rounded-2xl text-white hover:opacity-90 transition-opacity"
      >
        <div>
          <h3 className="font-semibold text-lg">View Full Pitch Deck</h3>
          <p className="text-white/80 text-sm">Interactive presentation with animations</p>
        </div>
        <ExternalLinkIcon />
      </Link>

      {/* Deck Overview */}
      <div className="bg-[var(--bg-surface)] rounded-2xl p-6 border border-[var(--border)]">
        <h3 className="font-semibold text-lg mb-6 text-[var(--text-primary)]">Deck Overview</h3>
        <div className="space-y-4">
          {[
            { slide: 1, title: "Problem", content: "70% of women's groups die within 6 months due to organizer burnout" },
            { slide: 2, title: "Solution", content: "AI co-organizer that tracks engagement, not just schedules" },
            { slide: 3, title: "Market", content: "$2.8B TAM, 5M+ group organizers in US alone" },
            { slide: 4, title: "Product", content: "Feed-first dashboard, AI nudges, preference memory" },
            { slide: 5, title: "Traction", content: "82% of beta groups still meeting after 6 months" },
            { slide: 6, title: "Business Model", content: "Freemium: Free → $7.99/mo Pro → $99/year Group" },
            { slide: 7, title: "Competition", content: "vs Bookclubs (manual), WhenAvailable (just scheduling)" },
            { slide: 8, title: "GTM Strategy", content: "Facebook Groups, Reddit, Pinterest SEO, Referrals" },
            { slide: 9, title: "Financials", content: "Year 1: $200K, Year 2: $1M, Year 5: $20M" },
            { slide: 10, title: "The Ask", content: "$500K pre-seed for product, marketing, operations" },
          ].map((slide) => (
            <div key={slide.slide} className="flex gap-4 items-start p-4 rounded-xl bg-[var(--bg-secondary)]">
              <div className="w-8 h-8 rounded-full bg-[var(--accent-terracotta)] text-white flex items-center justify-center text-sm font-bold flex-shrink-0">
                {slide.slide}
              </div>
              <div>
                <h4 className="font-medium text-[var(--text-primary)]">{slide.title}</h4>
                <p className="text-sm text-[var(--text-secondary)]">{slide.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Key Metrics */}
      <div className="bg-[var(--bg-surface)] rounded-2xl p-6 border border-[var(--border)]">
        <h3 className="font-semibold text-lg mb-6 text-[var(--text-primary)]">Key Investment Metrics</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="p-4 rounded-xl bg-[var(--bg-secondary)] text-center">
            <div className="text-2xl font-bold text-[var(--accent-terracotta)]">11.6x</div>
            <div className="text-sm text-[var(--text-tertiary)]">LTV:CAC</div>
          </div>
          <div className="p-4 rounded-xl bg-[var(--bg-secondary)] text-center">
            <div className="text-2xl font-bold text-[var(--accent-terracotta)]">$500K</div>
            <div className="text-sm text-[var(--text-tertiary)]">Pre-seed Ask</div>
          </div>
          <div className="p-4 rounded-xl bg-[var(--bg-secondary)] text-center">
            <div className="text-2xl font-bold text-[var(--accent-terracotta)]">$20M</div>
            <div className="text-sm text-[var(--text-tertiary)]">Year 5 Revenue</div>
          </div>
          <div className="p-4 rounded-xl bg-[var(--bg-secondary)] text-center">
            <div className="text-2xl font-bold text-[var(--accent-terracotta)]">82%</div>
            <div className="text-sm text-[var(--text-tertiary)]">Retention Rate</div>
          </div>
        </div>
      </div>
    </section>
  );
}
