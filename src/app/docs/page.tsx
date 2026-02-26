"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { 
  BarChart3, 
  Target, 
  Megaphone, 
  Palette, 
  Presentation,
  ExternalLink,
  Github,
  Menu,
  X,
  CheckCircle2,
  XCircle,
  TrendingUp,
  Users,
  DollarSign,
  Clock,
  MessageSquare,
  Zap,
  Heart,
  Calendar,
  Bell,
  Star,
  AlertTriangle
} from "lucide-react";

const sections = [
  { id: "research", label: "Research", icon: BarChart3 },
  { id: "gtm", label: "GTM Plan", icon: Target },
  { id: "marketing", label: "Marketing", icon: Megaphone },
  { id: "brand", label: "Brand", icon: Palette },
  { id: "pitch", label: "Pitch Deck", icon: Presentation, external: "/pitch" },
];

export default function DocsPage() {
  const [activeSection, setActiveSection] = useState("research");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sectionElements = sections.filter(s => !s.external).map(s => ({
        id: s.id,
        element: document.getElementById(s.id)
      }));

      for (const section of sectionElements.reverse()) {
        if (section.element) {
          const rect = section.element.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setMobileMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-[var(--bg-primary)]">
      {/* Mobile Header */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-[var(--bg-surface)]/95 backdrop-blur-sm border-b border-[var(--border)]">
        <div className="flex items-center justify-between px-4 py-3">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[var(--accent-terracotta)] to-[var(--accent-sage)] flex items-center justify-center">
              <span className="text-white font-bold text-sm">KC</span>
            </div>
            <span className="font-serif font-semibold text-[var(--text-primary)]">Docs</span>
          </div>
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="bg-[var(--bg-surface)] border-b border-[var(--border)] py-2">
            {sections.map((section) => (
              section.external ? (
                <Link
                  key={section.id}
                  href={section.external}
                  className="flex items-center gap-3 px-4 py-3 text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-secondary)]"
                >
                  <section.icon size={18} />
                  <span>{section.label}</span>
                  <ExternalLink size={14} className="ml-auto" />
                </Link>
              ) : (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 transition-colors ${
                    activeSection === section.id 
                      ? "text-[var(--accent-terracotta)] bg-[var(--accent-terracotta)]/10" 
                      : "text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-secondary)]"
                  }`}
                >
                  <section.icon size={18} />
                  <span>{section.label}</span>
                </button>
              )
            ))}
          </div>
        )}
      </div>

      {/* Desktop Sidebar */}
      <aside className="hidden lg:flex fixed left-0 top-0 bottom-0 w-64 flex-col bg-[var(--bg-surface)] border-r border-[var(--border)]">
        <div className="p-6 border-b border-[var(--border)]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[var(--accent-terracotta)] to-[var(--accent-sage)] flex items-center justify-center">
              <span className="text-white font-bold">KC</span>
            </div>
            <div>
              <h1 className="font-serif font-semibold text-[var(--text-primary)]">KeepClose</h1>
              <p className="text-xs text-[var(--text-tertiary)]">Documentation</p>
            </div>
          </div>
        </div>

        <nav className="flex-1 py-4">
          {sections.map((section) => (
            section.external ? (
              <Link
                key={section.id}
                href={section.external}
                className="flex items-center gap-3 px-6 py-3 text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-secondary)] transition-colors"
              >
                <section.icon size={18} />
                <span className="text-sm font-medium">{section.label}</span>
                <ExternalLink size={14} className="ml-auto opacity-50" />
              </Link>
            ) : (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={`w-full flex items-center gap-3 px-6 py-3 transition-all ${
                  activeSection === section.id
                    ? "text-[var(--accent-terracotta)] bg-[var(--accent-terracotta)]/10 border-r-2 border-[var(--accent-terracotta)]"
                    : "text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-secondary)]"
                }`}
              >
                <section.icon size={18} />
                <span className="text-sm font-medium">{section.label}</span>
              </button>
            )
          ))}
        </nav>

        <div className="p-6 border-t border-[var(--border)]">
          <div className="space-y-2">
            <Link 
              href="https://keepclose.ashketing.com" 
              target="_blank"
              className="flex items-center gap-2 text-sm text-[var(--text-tertiary)] hover:text-[var(--text-primary)] transition-colors"
            >
              <ExternalLink size={14} />
              Live Site
            </Link>
            <Link 
              href="https://github.com/ashtalksai/keepclose" 
              target="_blank"
              className="flex items-center gap-2 text-sm text-[var(--text-tertiary)] hover:text-[var(--text-primary)] transition-colors"
            >
              <Github size={14} />
              GitHub
            </Link>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="lg:ml-64 pt-16 lg:pt-0">
        {/* Research Section */}
        <section id="research" className="min-h-screen p-6 lg:p-12">
          <div className="max-w-5xl mx-auto">
            {/* Hero */}
            <div className="relative rounded-3xl bg-gradient-to-br from-[var(--accent-terracotta)]/20 via-[var(--accent-sage)]/10 to-[var(--accent-warm-yellow)]/20 p-8 lg:p-12 mb-8 overflow-hidden">
              <div className="absolute inset-0 bg-pattern opacity-30" />
              <div className="relative">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--accent-terracotta)]/20 text-[var(--accent-terracotta)] text-sm font-medium mb-4">
                  <BarChart3 size={14} />
                  Market Research
                </div>
                <h2 className="font-serif text-3xl lg:text-4xl font-bold text-[var(--text-primary)] mb-4">
                  AI Co-Organizer for Women&apos;s Groups
                </h2>
                <p className="text-[var(--text-secondary)] text-lg max-w-2xl">
                  Women&apos;s groups (book clubs, mom groups, networking circles) start strong but die by month 3 
                  because the founder burns out doing all the admin work.
                </p>
              </div>
            </div>

            {/* Opportunity Score */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              {[
                { label: "Overall Score", value: "78/100", color: "from-[var(--accent-terracotta)] to-[var(--accent-sage)]" },
                { label: "Severity", value: "24/25", color: "from-[var(--accent-terracotta)] to-[var(--accent-terracotta)]" },
                { label: "Buildable", value: "20/25", color: "from-[var(--accent-sage)] to-[var(--accent-sage)]" },
                { label: "Competition", value: "13/15", color: "from-[var(--accent-warm-yellow)] to-[var(--accent-warm-yellow)]" },
              ].map((score) => (
                <div key={score.label} className="bg-[var(--bg-surface)] rounded-2xl p-5 border border-[var(--border)]">
                  <p className="text-[var(--text-tertiary)] text-sm mb-2">{score.label}</p>
                  <p className={`text-3xl font-bold bg-gradient-to-r ${score.color} bg-clip-text text-transparent`}>
                    {score.value}
                  </p>
                </div>
              ))}
            </div>

            {/* Bento Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-8">
              {/* Market Size - Large Card */}
              <div className="lg:col-span-2 bg-[var(--bg-surface)] rounded-2xl p-6 border border-[var(--border)]">
                <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-4 flex items-center gap-2">
                  <TrendingUp className="text-[var(--accent-terracotta)]" size={20} />
                  Market Opportunity
                </h3>
                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-gradient-to-br from-[var(--accent-terracotta)] to-[var(--accent-sage)] rounded-xl p-4 text-white">
                    <p className="text-xs opacity-80 font-mono">TAM</p>
                    <p className="text-2xl font-bold mt-1">$2.8B</p>
                  </div>
                  <div className="bg-[var(--bg-secondary)] rounded-xl p-4">
                    <p className="text-xs text-[var(--text-tertiary)] font-mono">ORGANIZERS</p>
                    <p className="text-2xl font-bold text-[var(--text-primary)] mt-1">5M+</p>
                    <p className="text-xs text-[var(--text-tertiary)]">in US alone</p>
                  </div>
                  <div className="bg-[var(--bg-secondary)] rounded-xl p-4">
                    <p className="text-xs text-[var(--text-tertiary)] font-mono">GROUP DEATH</p>
                    <p className="text-2xl font-bold text-[var(--alert-red)] mt-1">70%</p>
                    <p className="text-xs text-[var(--text-tertiary)]">within 6 months</p>
                  </div>
                </div>
                <div className="mt-4 p-4 bg-[var(--bg-secondary)] rounded-xl">
                  <p className="text-[var(--text-secondary)] text-sm">
                    <span className="text-[var(--accent-terracotta)] font-semibold">Bookclubs app</span> serves 5,000+ book clubs. 
                    But they focus on scheduling only — not engagement or retention. AI co-organizer is an untapped gap.
                  </p>
                </div>
              </div>

              {/* Problem Severity */}
              <div className="bg-[var(--bg-surface)] rounded-2xl p-6 border border-[var(--border)]">
                <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-4 flex items-center gap-2">
                  <Heart className="text-[var(--alert-red)]" size={20} />
                  The Pain
                </h3>
                <div className="flex items-center justify-center h-32">
                  <div className="text-center">
                    <p className="text-5xl font-bold text-[var(--alert-red)]">70%</p>
                    <p className="text-[var(--text-tertiary)] text-sm">groups die</p>
                    <p className="text-[var(--text-tertiary)] text-xs mt-2">due to organizer burnout</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Validation Signals */}
            <div className="bg-[var(--bg-surface)] rounded-2xl p-6 border border-[var(--border)] mb-8">
              <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-4 flex items-center gap-2">
                <MessageSquare className="text-[var(--accent-terracotta)]" size={20} />
                Validation Signals
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  { source: "r/books", quote: "I've been in a book club for 12 years... all admin fell to me", date: "March 2023" },
                  { source: "r/books", quote: "I attempted to start a book club, and it failed. Only the person that chose the books and I finished them.", date: "Oct 2020" },
                  { source: "r/books", quote: "She didn't have the means to dedicate a lot of time to the book club outside of meetings", date: "Jun 2022" },
                ].map((signal, i) => (
                  <div key={i} className="bg-[var(--bg-secondary)] rounded-xl p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-6 h-6 rounded bg-[var(--accent-terracotta)]/20 flex items-center justify-center">
                        <span className="text-[var(--accent-terracotta)] text-xs font-bold">R</span>
                      </div>
                      <span className="text-[var(--text-secondary)] text-sm font-medium">{signal.source}</span>
                    </div>
                    <p className="text-[var(--text-tertiary)] text-sm italic">&quot;{signal.quote}&quot;</p>
                    <p className="text-[var(--text-tertiary)] text-xs mt-2">{signal.date}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Competition */}
            <div className="bg-[var(--bg-surface)] rounded-2xl p-6 border border-[var(--border)]">
              <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-4 flex items-center gap-2">
                <Users className="text-[var(--accent-sage)]" size={20} />
                Competitive Landscape
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-[var(--border)]">
                      <th className="text-left py-3 px-4 text-[var(--text-tertiary)] text-sm font-medium">Product</th>
                      <th className="text-center py-3 px-4 text-[var(--text-tertiary)] text-sm font-medium">AI Nudges</th>
                      <th className="text-center py-3 px-4 text-[var(--text-tertiary)] text-sm font-medium">Engagement</th>
                      <th className="text-center py-3 px-4 text-[var(--text-tertiary)] text-sm font-medium">Multi-Group</th>
                      <th className="text-left py-3 px-4 text-[var(--text-tertiary)] text-sm font-medium">Gap</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-[var(--border)]/50 bg-[var(--accent-terracotta)]/5">
                      <td className="py-3 px-4 text-[var(--text-primary)] font-medium flex items-center gap-2">
                        <Star size={14} className="text-[var(--accent-terracotta)]" />
                        KeepClose
                      </td>
                      <td className="py-3 px-4 text-center"><CheckCircle2 size={18} className="text-[var(--success-green)] mx-auto" /></td>
                      <td className="py-3 px-4 text-center"><CheckCircle2 size={18} className="text-[var(--success-green)] mx-auto" /></td>
                      <td className="py-3 px-4 text-center"><CheckCircle2 size={18} className="text-[var(--success-green)] mx-auto" /></td>
                      <td className="py-3 px-4 text-[var(--text-tertiary)] text-sm">New entrant</td>
                    </tr>
                    <tr className="border-b border-[var(--border)]/50">
                      <td className="py-3 px-4 text-[var(--text-secondary)]">Bookclubs</td>
                      <td className="py-3 px-4 text-center"><XCircle size={18} className="text-[var(--alert-red)]/50 mx-auto" /></td>
                      <td className="py-3 px-4 text-center"><XCircle size={18} className="text-[var(--alert-red)]/50 mx-auto" /></td>
                      <td className="py-3 px-4 text-center"><CheckCircle2 size={18} className="text-[var(--success-green)] mx-auto" /></td>
                      <td className="py-3 px-4 text-[var(--text-tertiary)] text-sm">Only book clubs, no AI</td>
                    </tr>
                    <tr className="border-b border-[var(--border)]/50">
                      <td className="py-3 px-4 text-[var(--text-secondary)]">WhenAvailable</td>
                      <td className="py-3 px-4 text-center"><XCircle size={18} className="text-[var(--alert-red)]/50 mx-auto" /></td>
                      <td className="py-3 px-4 text-center"><XCircle size={18} className="text-[var(--alert-red)]/50 mx-auto" /></td>
                      <td className="py-3 px-4 text-center"><XCircle size={18} className="text-[var(--alert-red)]/50 mx-auto" /></td>
                      <td className="py-3 px-4 text-[var(--text-tertiary)] text-sm">Just scheduling polls</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-[var(--text-secondary)]">Springly</td>
                      <td className="py-3 px-4 text-center"><XCircle size={18} className="text-[var(--alert-red)]/50 mx-auto" /></td>
                      <td className="py-3 px-4 text-center"><CheckCircle2 size={18} className="text-[var(--success-green)] mx-auto" /></td>
                      <td className="py-3 px-4 text-center"><CheckCircle2 size={18} className="text-[var(--success-green)] mx-auto" /></td>
                      <td className="py-3 px-4 text-[var(--text-tertiary)] text-sm">Enterprise overkill</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* GTM Section */}
        <section id="gtm" className="min-h-screen p-6 lg:p-12 bg-[var(--bg-secondary)]">
          <div className="max-w-5xl mx-auto">
            {/* Hero */}
            <div className="relative rounded-3xl bg-gradient-to-br from-[var(--accent-sage)]/20 via-[var(--accent-terracotta)]/10 to-[var(--accent-warm-yellow)]/20 p-8 lg:p-12 mb-8 overflow-hidden">
              <div className="absolute inset-0 bg-pattern opacity-30" />
              <div className="relative">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--accent-sage)]/20 text-[var(--accent-sage)] text-sm font-medium mb-4">
                  <Target size={14} />
                  Go-to-Market Plan
                </div>
                <h2 className="font-serif text-3xl lg:text-4xl font-bold text-[var(--text-primary)] mb-4">
                  Launch Strategy
                </h2>
                <p className="text-[var(--text-secondary)] text-lg max-w-2xl">
                  Soft launch to 20 struggling groups, prove 82%+ retention, then scale through Facebook mom groups and referrals.
                </p>
              </div>
            </div>

            {/* Executive Summary Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              {[
                { label: "TAM", value: "$2.8B", desc: "Total market" },
                { label: "Organizers", value: "5M+", desc: "in US alone" },
                { label: "Month 6 Target", value: "200", desc: "active groups" },
                { label: "ARR Target", value: "$20K", desc: "year 1" },
              ].map((stat) => (
                <div key={stat.label} className="bg-[var(--bg-surface)] rounded-2xl p-5 border border-[var(--border)]">
                  <p className="text-[var(--text-tertiary)] text-xs uppercase tracking-wider mb-1">{stat.label}</p>
                  <p className="text-2xl font-bold text-[var(--text-primary)]">{stat.value}</p>
                  <p className="text-[var(--text-tertiary)] text-xs">{stat.desc}</p>
                </div>
              ))}
            </div>

            {/* Target Audience */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-8">
              {[
                { 
                  type: "Primary", 
                  audience: "Book Club Leaders",
                  desc: "Women 30-50 who started a group and now carry all the admin weight",
                  color: "from-[var(--accent-terracotta)] to-[var(--accent-terracotta)]"
                },
                { 
                  type: "Secondary", 
                  audience: "Mom Group Coordinators",
                  desc: "Playdate organizers, new mom circles, school parent groups",
                  color: "from-[var(--accent-sage)] to-[var(--accent-sage)]"
                },
                { 
                  type: "Tertiary", 
                  audience: "Networking Circles",
                  desc: "Women's professional groups, ERG organizers, mastermind facilitators",
                  color: "from-[var(--accent-warm-yellow)] to-[var(--accent-warm-yellow)]"
                },
              ].map((target) => (
                <div key={target.type} className="bg-[var(--bg-surface)] rounded-2xl p-6 border border-[var(--border)]">
                  <div className={`inline-flex px-2 py-1 rounded text-xs font-bold bg-gradient-to-r ${target.color} text-white mb-3`}>
                    {target.type}
                  </div>
                  <h4 className="text-xl font-semibold text-[var(--text-primary)] mb-2">{target.audience}</h4>
                  <p className="text-[var(--text-tertiary)] text-sm">{target.desc}</p>
                </div>
              ))}
            </div>

            {/* Distribution Channels */}
            <div className="bg-[var(--bg-surface)] rounded-2xl p-6 border border-[var(--border)] mb-8">
              <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-6 flex items-center gap-2">
                <Megaphone className="text-[var(--accent-terracotta)]" size={20} />
                Distribution Channels
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { 
                    channel: "Facebook Groups",
                    strategy: "Book club organizers, mom group admins — they're already asking for help",
                    priority: "Primary"
                  },
                  { 
                    channel: "Reddit",
                    strategy: "r/bookclub, r/mommit, r/parenting — authentic community engagement",
                    priority: "Organic"
                  },
                  { 
                    channel: "Pinterest SEO",
                    strategy: "\"How to keep book club alive\" — long-tail event planning keywords",
                    priority: "SEO"
                  },
                  { 
                    channel: "Referral Program",
                    strategy: "1 organizer = 8-12 members who see KeepClose working",
                    priority: "Viral"
                  },
                ].map((item) => (
                  <div key={item.channel} className="bg-[var(--bg-secondary)] rounded-xl p-5 flex gap-4">
                    <div className={`w-2 rounded-full ${item.priority === "Primary" ? "bg-[var(--accent-terracotta)]" : "bg-[var(--accent-sage)]"}`} />
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="text-[var(--text-primary)] font-medium">{item.channel}</h4>
                        <span className="text-xs px-2 py-0.5 rounded-full bg-[var(--accent-terracotta)]/10 text-[var(--accent-terracotta)]">{item.priority}</span>
                      </div>
                      <p className="text-[var(--text-tertiary)] text-sm">{item.strategy}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Launch Phases */}
            <div className="bg-[var(--bg-surface)] rounded-2xl p-6 border border-[var(--border)] mb-8">
              <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-6 flex items-center gap-2">
                <Zap className="text-[var(--accent-sage)]" size={20} />
                Launch Timeline
              </h3>
              <div className="space-y-6">
                <div className="relative pl-8 pb-8 border-l-2 border-[var(--accent-terracotta)]">
                  <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-[var(--accent-terracotta)]" />
                  <div className="bg-[var(--bg-secondary)] rounded-xl p-5">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-[var(--accent-terracotta)] font-mono text-sm font-bold">PHASE 1</span>
                      <span className="text-[var(--text-tertiary)] text-sm">Weeks 1-4</span>
                    </div>
                    <h4 className="text-[var(--text-primary)] font-semibold mb-2">Beta Launch — 20 Struggling Groups</h4>
                    <ul className="text-[var(--text-tertiary)] text-sm space-y-1">
                      <li>• Find groups about to die (3+ months inactive)</li>
                      <li>• Free for 3 months, document attendance improvement</li>
                      <li>• Target: 82%+ groups still meeting after 6 months</li>
                    </ul>
                  </div>
                </div>
                <div className="relative pl-8 pb-8 border-l-2 border-[var(--accent-sage)]">
                  <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-[var(--accent-sage)]" />
                  <div className="bg-[var(--bg-secondary)] rounded-xl p-5">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-[var(--accent-sage)] font-mono text-sm font-bold">PHASE 2</span>
                      <span className="text-[var(--text-tertiary)] text-sm">Months 2-3</span>
                    </div>
                    <h4 className="text-[var(--text-primary)] font-semibold mb-2">Community Activation</h4>
                    <ul className="text-[var(--text-tertiary)] text-sm space-y-1">
                      <li>• Launch in Facebook mom groups with testimonials</li>
                      <li>• Activate referral program (organizer invites members)</li>
                      <li>• Target: 100 groups, first paying customers</li>
                    </ul>
                  </div>
                </div>
                <div className="relative pl-8 border-l-2 border-[var(--accent-warm-yellow)]">
                  <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-[var(--accent-warm-yellow)]" />
                  <div className="bg-[var(--bg-secondary)] rounded-xl p-5">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-[var(--accent-warm-yellow)] font-mono text-sm font-bold">PHASE 3</span>
                      <span className="text-[var(--text-tertiary)] text-sm">Months 4-6</span>
                    </div>
                    <h4 className="text-[var(--text-primary)] font-semibold mb-2">Content + Scale</h4>
                    <ul className="text-[var(--text-tertiary)] text-sm space-y-1">
                      <li>• SEO blog content: &quot;How to Keep Book Club Alive&quot;</li>
                      <li>• Pinterest pins for event planning long-tail</li>
                      <li>• Target: 200 groups, $20K ARR</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Pricing Strategy */}
            <div className="bg-[var(--bg-surface)] rounded-2xl p-6 border border-[var(--border)]">
              <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-6 flex items-center gap-2">
                <DollarSign className="text-[var(--accent-terracotta)]" size={20} />
                Pricing Strategy
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-[var(--bg-secondary)] rounded-xl p-5 border border-[var(--border)]">
                  <p className="text-[var(--text-tertiary)] text-sm mb-2">FREE</p>
                  <p className="text-2xl font-bold text-[var(--text-primary)] mb-3">$0</p>
                  <p className="text-[var(--text-tertiary)] text-sm">1 group, basic AI features</p>
                </div>
                <div className="bg-gradient-to-br from-[var(--accent-terracotta)]/20 to-[var(--accent-sage)]/10 rounded-xl p-5 border border-[var(--accent-terracotta)]/30">
                  <p className="text-[var(--accent-terracotta)] text-sm mb-2">PRO</p>
                  <p className="text-2xl font-bold text-[var(--text-primary)] mb-3">$7.99<span className="text-lg text-[var(--text-tertiary)]">/mo</span></p>
                  <p className="text-[var(--text-tertiary)] text-sm">Per organizer, unlimited groups, full AI</p>
                </div>
                <div className="bg-[var(--bg-secondary)] rounded-xl p-5 border border-[var(--border)]">
                  <p className="text-[var(--accent-sage)] text-sm mb-2">GROUP PLAN</p>
                  <p className="text-2xl font-bold text-[var(--text-primary)] mb-3">$99<span className="text-lg text-[var(--text-tertiary)]">/year</span></p>
                  <p className="text-[var(--text-tertiary)] text-sm">Whole group up to 12 members</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Marketing Section */}
        <section id="marketing" className="min-h-screen p-6 lg:p-12">
          <div className="max-w-5xl mx-auto">
            {/* Hero */}
            <div className="relative rounded-3xl bg-gradient-to-br from-[var(--accent-warm-yellow)]/20 via-[var(--accent-terracotta)]/10 to-[var(--accent-sage)]/20 p-8 lg:p-12 mb-8 overflow-hidden">
              <div className="absolute inset-0 bg-pattern opacity-30" />
              <div className="relative">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--accent-warm-yellow)]/20 text-[var(--accent-warm-yellow)] text-sm font-medium mb-4">
                  <Megaphone size={14} />
                  Marketing Strategy
                </div>
                <h2 className="font-serif text-3xl lg:text-4xl font-bold text-[var(--text-primary)] mb-4">
                  Positioning & Messaging
                </h2>
                <p className="text-[var(--text-secondary)] text-lg max-w-2xl">
                  Supportive co-host, not productivity tool. &quot;You don&apos;t have to do this alone.&quot;
                </p>
              </div>
            </div>

            {/* Positioning Statement */}
            <div className="bg-[var(--bg-surface)] rounded-2xl p-8 border border-[var(--border)] mb-8">
              <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-6">Positioning Statement</h3>
              <div className="space-y-4 text-lg">
                <p><span className="text-[var(--text-tertiary)]">For</span> <span className="text-[var(--text-primary)] font-medium">burned-out women&apos;s group organizers</span></p>
                <p><span className="text-[var(--text-tertiary)]">Who</span> <span className="text-[var(--text-primary)] font-medium">carry all the mental load of scheduling, reminders, and chasing RSVPs</span></p>
                <p><span className="text-[var(--text-tertiary)]">KeepClose is an</span> <span className="text-[var(--accent-terracotta)] font-medium">AI co-organizer</span></p>
                <p><span className="text-[var(--text-tertiary)]">That</span> <span className="text-[var(--text-primary)] font-medium">tracks engagement, sends personalized nudges, and remembers preferences</span></p>
                <p><span className="text-[var(--text-tertiary)]">Unlike</span> <span className="text-[var(--text-tertiary)]">scheduling tools that just find times</span></p>
                <p><span className="text-[var(--text-tertiary)]">We</span> <span className="text-[var(--accent-sage)] font-medium">focus on keeping groups ALIVE, not just scheduled</span></p>
              </div>
            </div>

            {/* Tagline Banner */}
            <div className="bg-gradient-to-r from-[var(--accent-terracotta)] to-[var(--accent-sage)] rounded-2xl p-8 text-center mb-8">
              <p className="text-white/80 mb-2">Tagline</p>
              <h2 className="font-serif text-3xl md:text-4xl text-white">&quot;You don&apos;t have to do this alone.&quot;</h2>
            </div>

            {/* Messaging Pillars */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <div className="bg-gradient-to-br from-[var(--accent-terracotta)] to-[var(--accent-terracotta)] rounded-2xl p-6 text-white">
                <Heart size={32} className="mb-4 opacity-80" />
                <h4 className="text-xl font-bold mb-2">Relief</h4>
                <p className="text-white/80">&quot;You don&apos;t have to chase RSVPs anymore.&quot;</p>
                <p className="text-white/60 text-sm mt-2">Acknowledging organizer burnout as real emotional labor</p>
              </div>
              <div className="bg-[var(--bg-surface)] rounded-2xl p-6 border border-[var(--border)]">
                <Bell size={32} className="mb-4 text-[var(--accent-sage)]" />
                <h4 className="text-xl font-bold text-[var(--text-primary)] mb-2">Intelligence</h4>
                <p className="text-[var(--text-secondary)]">&quot;AI that remembers what you forget.&quot;</p>
                <p className="text-[var(--text-tertiary)] text-sm mt-2">Jenny can&apos;t do Tuesdays? We remember forever.</p>
              </div>
              <div className="bg-[var(--bg-surface)] rounded-2xl p-6 border border-[var(--border)]">
                <Users size={32} className="mb-4 text-[var(--accent-warm-yellow)]" />
                <h4 className="text-xl font-bold text-[var(--text-primary)] mb-2">Connection</h4>
                <p className="text-[var(--text-secondary)]">&quot;Keep the group alive, not just scheduled.&quot;</p>
                <p className="text-[var(--text-tertiary)] text-sm mt-2">Engagement-first, not calendar-first</p>
              </div>
            </div>

            {/* Brand Voice */}
            <div className="bg-[var(--bg-surface)] rounded-2xl p-6 border border-[var(--border)] mb-8">
              <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-6 flex items-center gap-2">
                <MessageSquare className="text-[var(--accent-sage)]" size={20} />
                Brand Voice
              </h3>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="bg-[var(--bg-secondary)] rounded-xl p-5">
                  <h4 className="text-[var(--text-primary)] font-medium mb-3 text-sm uppercase tracking-wider text-[var(--accent-terracotta)]">Tone</h4>
                  <p className="text-[var(--text-secondary)]">Supportive co-host who gets it — like a thoughtful friend who quietly handles the details.</p>
                  <ul className="mt-3 space-y-2 text-[var(--text-tertiary)] text-sm">
                    <li>✓ Empathetic, not preachy</li>
                    <li>✓ Professional but warm</li>
                    <li>✓ Celebrating small wins</li>
                    <li>✓ Quiet intelligence in background</li>
                  </ul>
                </div>
                <div className="bg-[var(--bg-secondary)] rounded-xl p-5">
                  <h4 className="text-[var(--text-primary)] font-medium mb-3 text-sm uppercase tracking-wider text-[var(--accent-sage)]">Key Phrases</h4>
                  <ul className="space-y-2 text-[var(--text-secondary)] text-sm">
                    <li>&quot;You don&apos;t have to do this alone&quot;</li>
                    <li>&quot;Your co-organizer that never forgets&quot;</li>
                    <li>&quot;Keep the group alive, not just scheduled&quot;</li>
                    <li>&quot;We&apos;ve got the details covered&quot;</li>
                    <li>&quot;Focus on connection, we handle the rest&quot;</li>
                  </ul>
                </div>
                <div className="bg-[var(--bg-secondary)] rounded-xl p-5">
                  <h4 className="text-[var(--text-primary)] font-medium mb-3 text-sm uppercase tracking-wider text-[var(--alert-red)]">What We Never Say</h4>
                  <ul className="space-y-2 text-[var(--text-tertiary)] text-sm line-through">
                    <li>&quot;Boost your productivity&quot;</li>
                    <li>&quot;Optimize your schedule&quot;</li>
                    <li>&quot;Manage your members&quot;</li>
                    <li>&quot;Track attendance metrics&quot;</li>
                    <li>&quot;Automate your workflows&quot;</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Visual Anti-Patterns */}
            <div className="bg-[var(--bg-surface)] rounded-2xl p-6 border border-[var(--border)] mb-8">
              <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-6 flex items-center gap-2">
                <AlertTriangle className="text-[var(--accent-warm-yellow)]" size={20} />
                What We Won&apos;t Do
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { dont: "Calendar grids dominating UI", why: "We're about people, not scheduling" },
                  { dont: "Corporate blue/gray colors", why: "We're warm and approachable" },
                  { dont: "Book-centric imagery only", why: "We serve all women's groups" },
                  { dont: "Feature overload dashboards", why: "Feed-first, not spreadsheet" },
                  { dont: "Productivity guilt messaging", why: "Empathy, not pressure" },
                  { dont: "\"Manage your members\" language", why: "Support, not control" },
                ].map((item) => (
                  <div key={item.dont} className="flex items-start gap-3 bg-[var(--bg-secondary)] rounded-xl p-4">
                    <XCircle className="text-[var(--alert-red)] flex-shrink-0 mt-0.5" size={18} />
                    <div>
                      <p className="text-[var(--text-primary)] font-medium">{item.dont}</p>
                      <p className="text-[var(--text-tertiary)] text-sm">{item.why}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Content Strategy */}
            <div className="bg-[var(--bg-surface)] rounded-2xl p-6 border border-[var(--border)]">
              <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-6 flex items-center gap-2">
                <Clock className="text-[var(--accent-terracotta)]" size={20} />
                Content Calendar
              </h3>
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
                    <tr className="border-b border-[var(--border)]/50">
                      <td className="py-3 px-4">Blog</td>
                      <td className="py-3 px-4 text-[var(--accent-terracotta)] font-medium">Weekly</td>
                      <td className="py-3 px-4">SEO: &quot;How to Keep Book Club Alive&quot;</td>
                    </tr>
                    <tr className="border-b border-[var(--border)]/50">
                      <td className="py-3 px-4">LinkedIn</td>
                      <td className="py-3 px-4 text-[var(--accent-sage)] font-medium">3x/week</td>
                      <td className="py-3 px-4">Founder story, organizing tips, wins</td>
                    </tr>
                    <tr className="border-b border-[var(--border)]/50">
                      <td className="py-3 px-4">Instagram</td>
                      <td className="py-3 px-4 text-[var(--accent-warm-yellow)] font-medium">4x/week</td>
                      <td className="py-3 px-4">Carousels, testimonials, tips</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">Email</td>
                      <td className="py-3 px-4 text-[var(--accent-terracotta)] font-medium">5-part series</td>
                      <td className="py-3 px-4">Welcome + milestone celebrations</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* Brand Section */}
        <section id="brand" className="min-h-screen p-6 lg:p-12 bg-[var(--bg-secondary)]">
          <div className="max-w-5xl mx-auto">
            {/* Hero */}
            <div className="relative rounded-3xl bg-gradient-to-br from-[var(--accent-sage)]/20 via-[var(--accent-warm-yellow)]/10 to-[var(--accent-terracotta)]/20 p-8 lg:p-12 mb-8 overflow-hidden">
              <div className="absolute inset-0 bg-pattern opacity-30" />
              <div className="relative">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--accent-sage)]/20 text-[var(--accent-sage)] text-sm font-medium mb-4">
                  <Palette size={14} />
                  Brand Guidelines
                </div>
                <h2 className="font-serif text-3xl lg:text-4xl font-bold text-[var(--text-primary)] mb-4">
                  Visual Identity
                </h2>
                <p className="text-[var(--text-secondary)] text-lg max-w-2xl">
                  Warm, earthy, and inviting. Like a cozy living room where friends gather.
                </p>
              </div>
            </div>

            {/* Color Palette */}
            <div className="bg-[var(--bg-surface)] rounded-2xl p-6 border border-[var(--border)] mb-8">
              <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-6">Color Palette</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <div className="rounded-xl overflow-hidden">
                  <div className="h-24 bg-[#d4725f]" />
                  <div className="p-3 bg-[var(--bg-secondary)]">
                    <div className="font-medium text-[var(--text-primary)]">Terracotta</div>
                    <div className="text-sm text-[var(--text-tertiary)] font-mono">#d4725f</div>
                  </div>
                </div>
                <div className="rounded-xl overflow-hidden">
                  <div className="h-24 bg-[#7a9588]" />
                  <div className="p-3 bg-[var(--bg-secondary)]">
                    <div className="font-medium text-[var(--text-primary)]">Sage Green</div>
                    <div className="text-sm text-[var(--text-tertiary)] font-mono">#7a9588</div>
                  </div>
                </div>
                <div className="rounded-xl overflow-hidden">
                  <div className="h-24 bg-[#faf8f5]" />
                  <div className="p-3 bg-[var(--bg-secondary)]">
                    <div className="font-medium text-[var(--text-primary)]">Warm Cream</div>
                    <div className="text-sm text-[var(--text-tertiary)] font-mono">#faf8f5</div>
                  </div>
                </div>
                <div className="rounded-xl overflow-hidden">
                  <div className="h-24 bg-[#e8b968]" />
                  <div className="p-3 bg-[var(--bg-secondary)]">
                    <div className="font-medium text-[var(--text-primary)]">Warm Yellow</div>
                    <div className="text-sm text-[var(--text-tertiary)] font-mono">#e8b968</div>
                  </div>
                </div>
                <div className="rounded-xl overflow-hidden">
                  <div className="h-24 bg-[#2d2721]" />
                  <div className="p-3 bg-[var(--bg-secondary)]">
                    <div className="font-medium text-[var(--text-primary)]">Deep Brown</div>
                    <div className="text-sm text-[var(--text-tertiary)] font-mono">#2d2721</div>
                  </div>
                </div>
                <div className="rounded-xl overflow-hidden">
                  <div className="h-24 bg-[#6b6258]" />
                  <div className="p-3 bg-[var(--bg-secondary)]">
                    <div className="font-medium text-[var(--text-primary)]">Muted Brown</div>
                    <div className="text-sm text-[var(--text-tertiary)] font-mono">#6b6258</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Typography */}
            <div className="bg-[var(--bg-surface)] rounded-2xl p-6 border border-[var(--border)] mb-8">
              <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-6">Typography</h3>
              <div className="space-y-6">
                <div>
                  <p className="text-sm text-[var(--text-tertiary)] mb-2">Display — Instrument Serif</p>
                  <p className="font-serif text-4xl text-[var(--text-primary)]">You don&apos;t have to do this alone</p>
                </div>
                <div>
                  <p className="text-sm text-[var(--text-tertiary)] mb-2">Body — Plus Jakarta Sans</p>
                  <p className="text-lg text-[var(--text-secondary)]">Your co-organizer that remembers everything, nudges quietly, and keeps your group thriving.</p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4">
                  <div>
                    <span className="text-xs text-[var(--text-tertiary)]">H1</span>
                    <p className="font-serif text-3xl text-[var(--text-primary)]">48px</p>
                  </div>
                  <div>
                    <span className="text-xs text-[var(--text-tertiary)]">H2</span>
                    <p className="font-serif text-2xl text-[var(--text-primary)]">36px</p>
                  </div>
                  <div>
                    <span className="text-xs text-[var(--text-tertiary)]">Body</span>
                    <p className="text-base text-[var(--text-primary)]">16px</p>
                  </div>
                  <div>
                    <span className="text-xs text-[var(--text-tertiary)]">Small</span>
                    <p className="text-sm text-[var(--text-primary)]">14px</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Components */}
            <div className="bg-[var(--bg-surface)] rounded-2xl p-6 border border-[var(--border)] mb-8">
              <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-6">Components</h3>
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
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[var(--success-green)]/20 text-[var(--success-green)] text-sm">
                      <span className="w-2 h-2 rounded-full bg-[var(--success-green)]" /> Active
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[var(--accent-warm-yellow)]/20 text-[var(--accent-warm-yellow)] text-sm">
                      <span className="w-2 h-2 rounded-full bg-[var(--accent-warm-yellow)]" /> Quiet
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[var(--alert-red)]/20 text-[var(--alert-red)] text-sm">
                      <span className="w-2 h-2 rounded-full bg-[var(--alert-red)]" /> Missing
                    </span>
                  </div>
                </div>
                {/* Cards */}
                <div>
                  <p className="text-sm text-[var(--text-tertiary)] mb-4">Member Card</p>
                  <div className="max-w-sm bg-[var(--bg-secondary)] rounded-xl p-4 border border-[var(--border)]">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-full bg-[var(--accent-sage)]" />
                      <div>
                        <p className="font-medium text-[var(--text-primary)]">Sarah Johnson</p>
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
              <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-6">Design Principles</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
          </div>
        </section>
      </main>
    </div>
  );
}
