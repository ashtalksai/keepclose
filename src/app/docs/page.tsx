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
  Shield,
  Heart,
  Calendar,
  Bell,
  Brain,
  Sparkles,
  Star
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
    <div className="min-h-screen bg-[#faf8f5]">
      {/* Mobile Header */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-[#faf8f5]/95 backdrop-blur-sm border-b border-[var(--border)]">
        <div className="flex items-center justify-between px-4 py-3">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[var(--accent-terracotta)] to-[var(--accent-sage)] flex items-center justify-center">
              <span className="text-white font-bold text-sm">KC</span>
            </div>
            <span className="font-serif text-[var(--text-primary)]">Docs</span>
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
          <div className="bg-white border-b border-[var(--border)] py-2">
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
      <aside className="hidden lg:flex fixed left-0 top-0 bottom-0 w-64 flex-col bg-white border-r border-[var(--border)]">
        <div className="p-6 border-b border-[var(--border)]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[var(--accent-terracotta)] to-[var(--accent-sage)] flex items-center justify-center">
              <span className="text-white font-bold">KC</span>
            </div>
            <div>
              <h1 className="font-serif text-[var(--text-primary)]">KeepClose</h1>
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
              href="/" 
              className="flex items-center gap-2 text-sm text-[var(--text-tertiary)] hover:text-[var(--accent-terracotta)] transition-colors"
            >
              <ExternalLink size={14} />
              Live Site
            </Link>
            <Link 
              href="https://github.com/ashtalksai/keepclose" 
              target="_blank"
              className="flex items-center gap-2 text-sm text-[var(--text-tertiary)] hover:text-[var(--accent-terracotta)] transition-colors"
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
                <h2 className="font-serif text-3xl lg:text-4xl text-[var(--text-primary)] mb-4">
                  AI Co-Organizer for Women&apos;s Groups
                </h2>
                <p className="text-[var(--text-secondary)] text-lg max-w-2xl">
                  70% of women&apos;s groups die within 6 months — burned-out organizers carrying all the mental load. 
                  KeepClose is the AI co-pilot that keeps groups alive.
                </p>
              </div>
            </div>

            {/* Opportunity Score */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              {[
                { label: "Opportunity", value: "8/10", color: "from-[var(--success-green)] to-emerald-600" },
                { label: "Problem Severity", value: "9/10", color: "from-[var(--accent-terracotta)] to-[var(--alert-red)]" },
                { label: "Feasibility", value: "8/10", color: "from-[var(--accent-sage)] to-teal-600" },
                { label: "Why Now", value: "8/10", color: "from-[var(--accent-warm-yellow)] to-amber-600" },
              ].map((score) => (
                <div key={score.label} className="bg-white rounded-2xl p-5 border border-[var(--border)] shadow-sm">
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
              <div className="lg:col-span-2 bg-white rounded-2xl p-6 border border-[var(--border)] shadow-sm">
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
                    <p className="text-xs text-[var(--text-tertiary)] font-mono">TARGET USERS</p>
                    <p className="text-2xl font-bold text-[var(--text-primary)] mt-1">5M+</p>
                    <p className="text-xs text-[var(--text-tertiary)]">group organizers</p>
                  </div>
                  <div className="bg-[var(--bg-secondary)] rounded-xl p-4">
                    <p className="text-xs text-[var(--text-tertiary)] font-mono">DEATH RATE</p>
                    <p className="text-2xl font-bold text-[var(--alert-red)] mt-1">70%</p>
                    <p className="text-xs text-[var(--text-tertiary)]">within 6 months</p>
                  </div>
                </div>
                <div className="mt-4 p-4 bg-[var(--bg-secondary)] rounded-xl">
                  <p className="text-[var(--text-secondary)] text-sm">
                    <span className="text-[var(--accent-terracotta)] font-semibold">&quot;book club organizing tools&quot;</span> — 8K monthly searches. 
                    Competitors focus on scheduling. No one focuses on keeping groups ALIVE.
                  </p>
                </div>
              </div>

              {/* Execution */}
              <div className="bg-white rounded-2xl p-6 border border-[var(--border)] shadow-sm">
                <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-4 flex items-center gap-2">
                  <Clock className="text-[var(--accent-sage)]" size={20} />
                  Execution
                </h3>
                <div className="flex items-center justify-center h-32">
                  <div className="text-center">
                    <p className="text-5xl font-bold text-[var(--accent-sage)]">4</p>
                    <p className="text-[var(--text-tertiary)] text-sm">/10 difficulty</p>
                    <p className="text-[var(--text-tertiary)] text-xs mt-2">2-3 week MVP</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Problem Deep Dive */}
            <div className="bg-white rounded-2xl p-6 border border-[var(--border)] shadow-sm mb-8">
              <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-4 flex items-center gap-2">
                <Heart className="text-[var(--alert-red)]" size={20} />
                The Real Problem
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-[var(--alert-red)]/10 to-[var(--accent-terracotta)]/10 rounded-xl p-5">
                  <h4 className="font-medium text-[var(--text-primary)] mb-3">Organizer Burnout</h4>
                  <ul className="space-y-2 text-sm text-[var(--text-secondary)]">
                    <li className="flex items-start gap-2">
                      <span className="text-[var(--alert-red)]">•</span>
                      One person does ALL the work — scheduling, reminders, chasing RSVPs
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[var(--alert-red)]">•</span>
                      Started to connect, became unpaid admin
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[var(--alert-red)]">•</span>
                      Emotional labor of keeping group engaged falls on founder
                    </li>
                  </ul>
                </div>
                <div className="bg-gradient-to-br from-[var(--accent-sage)]/10 to-[var(--accent-warm-yellow)]/10 rounded-xl p-5">
                  <h4 className="font-medium text-[var(--text-primary)] mb-3">Why Groups Die</h4>
                  <ul className="space-y-2 text-sm text-[var(--text-secondary)]">
                    <li className="flex items-start gap-2">
                      <span className="text-[var(--accent-sage)]">•</span>
                      Quiet members drift away unnoticed
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[var(--accent-sage)]">•</span>
                      No early warning system for disengagement
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[var(--accent-sage)]">•</span>
                      Scheduling friction kills momentum
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Validation Signals */}
            <div className="bg-white rounded-2xl p-6 border border-[var(--border)] shadow-sm mb-8">
              <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-4 flex items-center gap-2">
                <MessageSquare className="text-[var(--accent-terracotta)]" size={20} />
                Validation Signals
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  { source: "r/bookclub", quote: "I'm exhausted from being the only one who organizes anything", date: "Feb 2025" },
                  { source: "r/Mommit", quote: "Started a playdate group, now I'm basically an unpaid event planner", date: "Jan 2025" },
                  { source: "Facebook Groups", quote: "Anyone have a system for tracking who's actually showing up?", date: "Dec 2024" },
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
            <div className="bg-white rounded-2xl p-6 border border-[var(--border)] shadow-sm">
              <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-4 flex items-center gap-2">
                <Users className="text-[var(--accent-sage)]" size={20} />
                Competitive Landscape
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-[var(--border)]">
                      <th className="text-left py-3 px-4 text-[var(--text-tertiary)] text-sm font-medium">Company</th>
                      <th className="text-center py-3 px-4 text-[var(--text-tertiary)] text-sm font-medium">Engagement</th>
                      <th className="text-center py-3 px-4 text-[var(--text-tertiary)] text-sm font-medium">AI Nudges</th>
                      <th className="text-center py-3 px-4 text-[var(--text-tertiary)] text-sm font-medium">Memory</th>
                      <th className="text-left py-3 px-4 text-[var(--text-tertiary)] text-sm font-medium">Weakness</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-[var(--border)] bg-[var(--accent-terracotta)]/5">
                      <td className="py-3 px-4 text-[var(--text-primary)] font-medium flex items-center gap-2">
                        <Star size={14} className="text-[var(--accent-terracotta)]" />
                        KeepClose
                      </td>
                      <td className="py-3 px-4 text-center"><CheckCircle2 size={18} className="text-[var(--success-green)] mx-auto" /></td>
                      <td className="py-3 px-4 text-center"><CheckCircle2 size={18} className="text-[var(--success-green)] mx-auto" /></td>
                      <td className="py-3 px-4 text-center"><CheckCircle2 size={18} className="text-[var(--success-green)] mx-auto" /></td>
                      <td className="py-3 px-4 text-[var(--text-tertiary)] text-sm">New entrant</td>
                    </tr>
                    <tr className="border-b border-[var(--border)]">
                      <td className="py-3 px-4 text-[var(--text-secondary)]">Bookclubs.com</td>
                      <td className="py-3 px-4 text-center"><XCircle size={18} className="text-[var(--alert-red)]/50 mx-auto" /></td>
                      <td className="py-3 px-4 text-center"><XCircle size={18} className="text-[var(--alert-red)]/50 mx-auto" /></td>
                      <td className="py-3 px-4 text-center"><XCircle size={18} className="text-[var(--alert-red)]/50 mx-auto" /></td>
                      <td className="py-3 px-4 text-[var(--text-tertiary)] text-sm">Book catalog, not organizing</td>
                    </tr>
                    <tr className="border-b border-[var(--border)]">
                      <td className="py-3 px-4 text-[var(--text-secondary)]">WhenAvailable</td>
                      <td className="py-3 px-4 text-center"><XCircle size={18} className="text-[var(--alert-red)]/50 mx-auto" /></td>
                      <td className="py-3 px-4 text-center"><XCircle size={18} className="text-[var(--alert-red)]/50 mx-auto" /></td>
                      <td className="py-3 px-4 text-center"><CheckCircle2 size={18} className="text-[var(--success-green)] mx-auto" /></td>
                      <td className="py-3 px-4 text-[var(--text-tertiary)] text-sm">Just scheduling polls</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-[var(--text-secondary)]">GroupMe/WhatsApp</td>
                      <td className="py-3 px-4 text-center"><XCircle size={18} className="text-[var(--alert-red)]/50 mx-auto" /></td>
                      <td className="py-3 px-4 text-center"><XCircle size={18} className="text-[var(--alert-red)]/50 mx-auto" /></td>
                      <td className="py-3 px-4 text-center"><XCircle size={18} className="text-[var(--alert-red)]/50 mx-auto" /></td>
                      <td className="py-3 px-4 text-[var(--text-tertiary)] text-sm">Generic chat, no group tools</td>
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
                <h2 className="font-serif text-3xl lg:text-4xl text-[var(--text-primary)] mb-4">
                  Launch Strategy
                </h2>
                <p className="text-[var(--text-secondary)] text-lg max-w-2xl">
                  Target burned-out book club organizers first. Expand to mom groups, hobby clubs, and eventually corporate ERGs.
                </p>
              </div>
            </div>

            {/* Target Audience */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-8">
              {[
                { 
                  type: "Primary", 
                  audience: "Book Club Organizers",
                  desc: "Women 30-50 running book clubs who do all the admin work",
                  color: "from-[var(--accent-terracotta)] to-[var(--alert-red)]"
                },
                { 
                  type: "Secondary", 
                  audience: "Mom Group Coordinators",
                  desc: "Playdate organizers, school parent groups, neighborhood moms",
                  color: "from-[var(--accent-sage)] to-teal-600"
                },
                { 
                  type: "Tertiary", 
                  audience: "Hobby Club Leaders",
                  desc: "Running clubs, craft circles, wine tasting groups",
                  color: "from-[var(--accent-warm-yellow)] to-amber-600"
                },
              ].map((target) => (
                <div key={target.type} className="bg-white rounded-2xl p-6 border border-[var(--border)] shadow-sm">
                  <div className={`inline-flex px-2 py-1 rounded text-xs font-bold bg-gradient-to-r ${target.color} text-white mb-3`}>
                    {target.type}
                  </div>
                  <h4 className="text-xl font-semibold text-[var(--text-primary)] mb-2">{target.audience}</h4>
                  <p className="text-[var(--text-tertiary)] text-sm">{target.desc}</p>
                </div>
              ))}
            </div>

            {/* Distribution Channels */}
            <div className="bg-white rounded-2xl p-6 border border-[var(--border)] shadow-sm mb-8">
              <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-6 flex items-center gap-2">
                <Megaphone className="text-[var(--accent-terracotta)]" size={20} />
                Distribution Channels
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { 
                    channel: "Facebook Groups",
                    strategy: "Organic content in book club, mom groups (20M+ potential reach)",
                    priority: "High"
                  },
                  { 
                    channel: "Reddit",
                    strategy: "r/bookclub, r/Mommit, r/parenting — answer questions, soft launch",
                    priority: "High"
                  },
                  { 
                    channel: "Pinterest SEO",
                    strategy: "\"book club organization tips\" pins driving to landing page",
                    priority: "Medium"
                  },
                  { 
                    channel: "Referral Program",
                    strategy: "1 organizer = 8-12 members. Referral bonus for group invites",
                    priority: "Medium"
                  },
                ].map((item) => (
                  <div key={item.channel} className="bg-[var(--bg-secondary)] rounded-xl p-5 flex gap-4">
                    <div className={`w-2 rounded-full ${item.priority === "High" ? "bg-[var(--accent-terracotta)]" : "bg-[var(--accent-sage)]"}`} />
                    <div>
                      <h4 className="text-[var(--text-primary)] font-medium mb-1">{item.channel}</h4>
                      <p className="text-[var(--text-tertiary)] text-sm">{item.strategy}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Launch Phases */}
            <div className="bg-white rounded-2xl p-6 border border-[var(--border)] shadow-sm mb-8">
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
                      <li>• Recruit from r/bookclub, Facebook mom groups</li>
                      <li>• Free for 3 months, document attendance improvement</li>
                      <li>• Focus on groups that have &quot;gone quiet&quot;</li>
                    </ul>
                  </div>
                </div>
                <div className="relative pl-8 border-l-2 border-[var(--accent-sage)]">
                  <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-[var(--accent-sage)]" />
                  <div className="bg-[var(--bg-secondary)] rounded-xl p-5">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-[var(--accent-sage)] font-mono text-sm font-bold">PHASE 2</span>
                      <span className="text-[var(--text-tertiary)] text-sm">Months 2-3</span>
                    </div>
                    <h4 className="text-[var(--text-primary)] font-semibold mb-2">Organic Growth — 200 Groups</h4>
                    <ul className="text-[var(--text-tertiary)] text-sm space-y-1">
                      <li>• Launch referral program (invite your group = 1 month free)</li>
                      <li>• Content marketing: &quot;How to Keep Book Club Alive&quot; series</li>
                      <li>• Testimonials from beta groups</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Pricing Strategy */}
            <div className="bg-white rounded-2xl p-6 border border-[var(--border)] shadow-sm mb-8">
              <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-6 flex items-center gap-2">
                <DollarSign className="text-[var(--accent-terracotta)]" size={20} />
                Pricing Strategy
              </h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-[var(--bg-secondary)] rounded-xl p-5 border border-[var(--border)]">
                  <p className="text-[var(--text-tertiary)] text-sm mb-2">FREE</p>
                  <p className="text-2xl font-bold text-[var(--text-primary)] mb-3">$0</p>
                  <p className="text-[var(--text-tertiary)] text-sm">1 group, basic features, manual nudges</p>
                </div>
                <div className="bg-gradient-to-br from-[var(--accent-terracotta)]/20 to-[var(--accent-sage)]/20 rounded-xl p-5 border border-[var(--accent-terracotta)]/30">
                  <p className="text-[var(--accent-terracotta)] text-sm mb-2">PRO</p>
                  <p className="text-2xl font-bold text-[var(--text-primary)] mb-3">$7.99<span className="text-lg text-[var(--text-tertiary)]">/mo</span></p>
                  <p className="text-[var(--text-tertiary)] text-sm">Per organizer, unlimited groups, AI nudges</p>
                </div>
                <div className="bg-[var(--bg-secondary)] rounded-xl p-5 border border-[var(--border)]">
                  <p className="text-[var(--accent-sage)] text-sm mb-2">GROUP PLAN</p>
                  <p className="text-2xl font-bold text-[var(--text-primary)] mb-3">$99<span className="text-lg text-[var(--text-tertiary)]">/year</span></p>
                  <p className="text-[var(--text-tertiary)] text-sm">Whole group up to 12 members</p>
                </div>
              </div>
            </div>

            {/* Key Metrics */}
            <div className="bg-gradient-to-br from-[var(--accent-terracotta)]/10 to-[var(--accent-sage)]/10 rounded-2xl p-6 border border-[var(--border)]">
              <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-6 flex items-center gap-2">
                <BarChart3 className="text-[var(--text-primary)]" size={20} />
                Success Metrics
              </h3>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { metric: "North Star", value: "Groups Alive", desc: "Still meeting after 6 mo" },
                  { metric: "Month 6", value: "200", desc: "Active groups" },
                  { metric: "Year 1 ARR", value: "$20K", desc: "Target revenue" },
                  { metric: "Retention", value: "82%", desc: "6-month group survival" },
                ].map((item) => (
                  <div key={item.metric} className="text-center bg-white rounded-xl p-4">
                    <p className="text-[var(--text-tertiary)] text-xs uppercase tracking-wider mb-1">{item.metric}</p>
                    <p className="text-2xl font-bold text-[var(--text-primary)]">{item.value}</p>
                    <p className="text-[var(--text-tertiary)] text-xs">{item.desc}</p>
                  </div>
                ))}
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
                <h2 className="font-serif text-3xl lg:text-4xl text-[var(--text-primary)] mb-4">
                  Positioning & Messaging
                </h2>
                <p className="text-[var(--text-secondary)] text-lg max-w-2xl">
                  Supportive co-host who gets it — not another productivity tool. You don&apos;t have to do this alone.
                </p>
              </div>
            </div>

            {/* Positioning Statement */}
            <div className="bg-white rounded-2xl p-8 border border-[var(--border)] shadow-sm mb-8">
              <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-6">Positioning Statement</h3>
              <div className="space-y-4 text-lg">
                <p><span className="text-[var(--text-tertiary)]">For</span> <span className="text-[var(--text-primary)] font-medium">burned-out women&apos;s group organizers</span></p>
                <p><span className="text-[var(--text-tertiary)]">Who</span> <span className="text-[var(--text-primary)] font-medium">carry all the mental load of scheduling, reminders, and chasing</span></p>
                <p><span className="text-[var(--text-tertiary)]">KeepClose is an</span> <span className="text-[var(--accent-terracotta)] font-medium">AI co-organizer</span></p>
                <p><span className="text-[var(--text-tertiary)]">That</span> <span className="text-[var(--text-primary)] font-medium">tracks engagement, sends personalized nudges, and remembers preferences</span></p>
                <p><span className="text-[var(--text-tertiary)]">Unlike</span> <span className="text-[var(--text-tertiary)]">scheduling tools that just find times</span></p>
                <p><span className="text-[var(--text-tertiary)]">We</span> <span className="text-[var(--accent-sage)] font-medium">focus on keeping groups ALIVE, not just scheduled</span></p>
              </div>
            </div>

            {/* Tagline Banner */}
            <div className="bg-gradient-to-r from-[var(--accent-terracotta)] to-[var(--accent-sage)] rounded-2xl p-8 text-center mb-8">
              <p className="text-white/80 mb-2 text-sm">Tagline</p>
              <h2 className="font-serif text-3xl md:text-4xl text-white">&quot;You don&apos;t have to do this alone.&quot;</h2>
            </div>

            {/* Messaging Pillars */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <div className="bg-gradient-to-br from-[var(--accent-terracotta)] to-[var(--alert-red)] rounded-2xl p-6 text-white">
                <Heart size={32} className="mb-4 opacity-80" />
                <h4 className="text-xl font-bold mb-2">Relief</h4>
                <p className="text-white/80">&quot;You don&apos;t have to chase RSVPs anymore&quot;</p>
                <p className="text-white/60 text-sm mt-2">Acknowledging burnout as real emotional labor</p>
              </div>
              <div className="bg-white rounded-2xl p-6 border border-[var(--border)] shadow-sm">
                <Brain size={32} className="mb-4 text-[var(--accent-sage)]" />
                <h4 className="text-xl font-bold text-[var(--text-primary)] mb-2">Intelligence</h4>
                <p className="text-[var(--text-secondary)]">&quot;AI that remembers what you forget&quot;</p>
                <p className="text-[var(--text-tertiary)] text-sm mt-2">Jenny can&apos;t do Tuesdays? We remember forever.</p>
              </div>
              <div className="bg-white rounded-2xl p-6 border border-[var(--border)] shadow-sm">
                <Sparkles size={32} className="mb-4 text-[var(--accent-warm-yellow)]" />
                <h4 className="text-xl font-bold text-[var(--text-primary)] mb-2">Connection</h4>
                <p className="text-[var(--text-secondary)]">&quot;Keep the group alive, not just scheduled&quot;</p>
                <p className="text-[var(--text-tertiary)] text-sm mt-2">Engagement-first, not calendar-first</p>
              </div>
            </div>

            {/* Brand Voice */}
            <div className="bg-white rounded-2xl p-8 border border-[var(--border)] shadow-sm mb-8">
              <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-6 flex items-center gap-2">
                <MessageSquare className="text-[var(--accent-sage)]" size={20} />
                Brand Voice
              </h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="bg-[var(--bg-secondary)] rounded-xl p-5">
                  <h4 className="text-[var(--success-green)] font-medium mb-3">✓ We Are</h4>
                  <ul className="space-y-2 text-[var(--text-secondary)] text-sm">
                    <li>• Supportive co-host who gets it</li>
                    <li>• Empathetic, not preachy</li>
                    <li>• Quiet intelligence working in background</li>
                    <li>• Celebrating small wins</li>
                    <li>• Warm and approachable</li>
                  </ul>
                </div>
                <div className="bg-[var(--bg-secondary)] rounded-xl p-5">
                  <h4 className="text-[var(--alert-red)] font-medium mb-3">✗ We&apos;re Not</h4>
                  <ul className="space-y-2 text-[var(--text-secondary)] text-sm">
                    <li>• Corporate productivity tool</li>
                    <li>• Demanding or guilt-tripping</li>
                    <li>• Feature-heavy dashboards</li>
                    <li>• Calendar grids everywhere</li>
                    <li>• Cold and transactional</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Content Strategy */}
            <div className="bg-white rounded-2xl p-6 border border-[var(--border)] shadow-sm mb-8">
              <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-6 flex items-center gap-2">
                <TrendingUp className="text-[var(--accent-terracotta)]" size={20} />
                Content Strategy
              </h3>
              <div className="space-y-4">
                {[
                  { title: "How to Keep Your Book Club Alive (When You're the Only One Organizing)", keyword: "book club organizing tips", volume: "2.1K/mo" },
                  { title: "The Burnout is Real: A Guide for Mom Group Organizers", keyword: "mom group ideas", volume: "1.8K/mo" },
                  { title: "5 Signs Your Group is About to Ghost You (And How to Save It)", keyword: "keep group engaged", volume: "1.4K/mo" },
                  { title: "Stop Being the Unpaid Admin: Delegate Without Drama", keyword: "group organizing app", volume: "900/mo" },
                ].map((topic, i) => (
                  <div key={i} className="flex items-start justify-between border-l-2 border-l-[var(--accent-terracotta)] pl-4 py-2">
                    <div>
                      <p className="text-[var(--text-primary)] text-sm font-medium">{topic.title}</p>
                      <p className="text-[var(--text-tertiary)] text-xs mt-1">Keyword: {topic.keyword}</p>
                    </div>
                    <span className="text-[var(--accent-terracotta)] text-xs font-mono bg-[var(--accent-terracotta)]/10 px-2 py-1 rounded">{topic.volume}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Media Posts */}
            <div className="bg-white rounded-2xl p-6 border border-[var(--border)] shadow-sm">
              <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-6">Launch Social Posts</h3>
              <div className="space-y-4">
                {[
                  {
                    platform: "Instagram",
                    copy: "You started this group to CONNECT.\n\nNot to become an unpaid event planner.\n\nKeepClose is your AI co-organizer that:\n✓ Remembers who can't do Tuesdays\n✓ Nudges quiet members (so you don't have to)\n✓ Tracks who's drifting away\n\nYou don't have to do this alone 💚",
                    color: "from-[var(--accent-terracotta)]/20 to-[var(--accent-sage)]/10"
                  },
                  {
                    platform: "Facebook Groups",
                    copy: "To the woman who runs the book club, the playdate group, the wine night...\n\nThe one who sends the reminders. Chases the RSVPs. Remembers everyone's dietary restrictions.\n\nWe see you. We built KeepClose for you.\n\nYour co-organizer that actually helps. Not another app to manage — an AI that manages for you.",
                    color: "from-[var(--accent-sage)]/20 to-[var(--accent-warm-yellow)]/10"
                  },
                  {
                    platform: "LinkedIn",
                    copy: "70% of women's groups die within 6 months.\n\nNot because members don't care — because organizers burn out.\n\nWe built KeepClose: an AI co-organizer that tracks engagement, sends personalized nudges, and remembers preferences.\n\nBecause the person who started the group to connect shouldn't become the unpaid admin.",
                    color: "from-[var(--accent-warm-yellow)]/20 to-[var(--accent-terracotta)]/10"
                  }
                ].map((post, i) => (
                  <div key={i} className={`bg-gradient-to-br ${post.color} rounded-xl p-5 border border-[var(--border)]`}>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="bg-[var(--text-primary)]/10 text-[var(--text-primary)] px-3 py-1 rounded-full text-xs font-bold">POST {i + 1}</span>
                      <span className="text-[var(--text-tertiary)] text-sm">{post.platform}</span>
                    </div>
                    <div className="bg-white rounded-lg p-4">
                      <p className="text-[var(--text-secondary)] text-sm whitespace-pre-line">{post.copy}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Brand Section */}
        <section id="brand" className="min-h-screen p-6 lg:p-12 bg-[var(--bg-secondary)]">
          <div className="max-w-5xl mx-auto">
            {/* Hero */}
            <div className="relative rounded-3xl bg-gradient-to-br from-[var(--accent-terracotta)]/30 via-[var(--accent-sage)]/20 to-[var(--accent-warm-yellow)]/30 p-8 lg:p-12 mb-8 overflow-hidden">
              <div className="absolute inset-0 bg-pattern opacity-30" />
              <div className="relative">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/50 text-[var(--text-primary)] text-sm font-medium mb-4">
                  <Palette size={14} />
                  Brand System
                </div>
                <h2 className="font-serif text-3xl lg:text-4xl text-[var(--text-primary)] mb-4">
                  Visual Identity
                </h2>
                <p className="text-[var(--text-secondary)] text-lg max-w-2xl">
                  Warm terracotta for energy. Soft sage for calm. Earth tones that feel like a supportive friend, not a corporate tool.
                </p>
              </div>
            </div>

            {/* Color Palette */}
            <div className="bg-white rounded-2xl p-6 border border-[var(--border)] shadow-sm mb-8">
              <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-6">Color Palette</h3>
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="rounded-xl overflow-hidden">
                  <div className="h-24 bg-[#d4725f]" />
                  <div className="bg-[var(--bg-secondary)] p-4">
                    <p className="text-[var(--text-primary)] font-medium">Terracotta</p>
                    <p className="text-[var(--text-tertiary)] font-mono text-sm">#d4725f</p>
                  </div>
                </div>
                <div className="rounded-xl overflow-hidden">
                  <div className="h-24 bg-[#7a9588]" />
                  <div className="bg-[var(--bg-secondary)] p-4">
                    <p className="text-[var(--text-primary)] font-medium">Sage Green</p>
                    <p className="text-[var(--text-tertiary)] font-mono text-sm">#7a9588</p>
                  </div>
                </div>
                <div className="rounded-xl overflow-hidden">
                  <div className="h-24 bg-[#faf8f5]" />
                  <div className="bg-[var(--bg-secondary)] p-4">
                    <p className="text-[var(--text-primary)] font-medium">Warm Cream</p>
                    <p className="text-[var(--text-tertiary)] font-mono text-sm">#faf8f5</p>
                  </div>
                </div>
                <div className="rounded-xl overflow-hidden">
                  <div className="h-24 bg-[#e8b968]" />
                  <div className="bg-[var(--bg-secondary)] p-4">
                    <p className="text-[var(--text-primary)] font-medium">Warm Yellow</p>
                    <p className="text-[var(--text-tertiary)] font-mono text-sm">#e8b968</p>
                  </div>
                </div>
                <div className="rounded-xl overflow-hidden">
                  <div className="h-24 bg-[#2d2721]" />
                  <div className="bg-[var(--bg-secondary)] p-4">
                    <p className="text-[var(--text-primary)] font-medium">Deep Brown</p>
                    <p className="text-[var(--text-tertiary)] font-mono text-sm">#2d2721</p>
                  </div>
                </div>
                <div className="rounded-xl overflow-hidden">
                  <div className="h-24 bg-[#6d9a7f]" />
                  <div className="bg-[var(--bg-secondary)] p-4">
                    <p className="text-[var(--text-primary)] font-medium">Success Green</p>
                    <p className="text-[var(--text-tertiary)] font-mono text-sm">#6d9a7f</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Typography */}
            <div className="bg-white rounded-2xl p-6 border border-[var(--border)] shadow-sm mb-8">
              <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-6">Typography</h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="bg-[var(--bg-secondary)] rounded-xl p-5">
                  <p className="text-[var(--text-tertiary)] text-xs uppercase tracking-wider mb-3">Display — Instrument Serif</p>
                  <p className="font-serif text-3xl text-[var(--text-primary)]">You don&apos;t have to do this alone</p>
                  <p className="text-[var(--text-tertiary)] text-sm mt-2">Headlines, emotional moments</p>
                </div>
                <div className="bg-[var(--bg-secondary)] rounded-xl p-5">
                  <p className="text-[var(--text-tertiary)] text-xs uppercase tracking-wider mb-3">Body — Plus Jakarta Sans</p>
                  <p className="text-xl text-[var(--text-primary)]">Your co-organizer that remembers everything.</p>
                  <p className="text-[var(--text-tertiary)] text-sm mt-2">Paragraphs, UI, buttons</p>
                </div>
              </div>
            </div>

            {/* Components */}
            <div className="bg-white rounded-2xl p-6 border border-[var(--border)] shadow-sm mb-8">
              <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-6">Components</h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Buttons */}
                <div className="bg-[var(--bg-secondary)] rounded-xl p-5">
                  <p className="text-[var(--text-tertiary)] text-xs uppercase tracking-wider mb-4">Buttons</p>
                  <div className="space-y-4">
                    <button className="w-full bg-[var(--accent-terracotta)] hover:bg-[var(--accent-terracotta-hover)] text-white px-6 py-3 rounded-lg font-medium transition-all">
                      Start Free Trial
                    </button>
                    <button className="w-full bg-transparent text-[var(--accent-sage)] border-2 border-[var(--accent-sage)] hover:bg-[var(--accent-sage)] hover:text-white px-6 py-3 rounded-lg font-medium transition-all">
                      Learn More
                    </button>
                  </div>
                </div>

                {/* Status Badges */}
                <div className="bg-[var(--bg-secondary)] rounded-xl p-5">
                  <p className="text-[var(--text-tertiary)] text-xs uppercase tracking-wider mb-4">Member Status</p>
                  <div className="flex flex-wrap gap-3">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#6d9a7f]/20 text-[#6d9a7f] text-sm font-medium">
                      <span className="w-2 h-2 rounded-full bg-[#6d9a7f]" /> Active
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#e8b968]/20 text-[#e8b968] text-sm font-medium">
                      <span className="w-2 h-2 rounded-full bg-[#e8b968]" /> Quiet
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#c85a50]/20 text-[#c85a50] text-sm font-medium">
                      <span className="w-2 h-2 rounded-full bg-[#c85a50]" /> At Risk
                    </span>
                  </div>
                </div>

                {/* Cards */}
                <div className="bg-[var(--bg-secondary)] rounded-xl p-5 lg:col-span-2">
                  <p className="text-[var(--text-tertiary)] text-xs uppercase tracking-wider mb-4">Member Card</p>
                  <div className="max-w-sm bg-white rounded-xl p-4 border border-[var(--border)] shadow-sm">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[var(--accent-terracotta)] to-[var(--accent-sage)]" />
                      <div>
                        <p className="font-medium text-[var(--text-primary)]">Sarah Johnson</p>
                        <p className="text-sm text-[var(--text-tertiary)]">Book club organizer</p>
                      </div>
                      <span className="ml-auto inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-[#6d9a7f]/20 text-[#6d9a7f] text-xs">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#6d9a7f]" /> Active
                      </span>
                    </div>
                    <p className="text-[var(--text-secondary)] text-sm">Attended 8/10 events • Last seen 2 days ago</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Design Principles */}
            <div className="bg-white rounded-2xl p-6 border border-[var(--border)] shadow-sm">
              <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-6">Design Principles</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-[var(--accent-terracotta)] mb-2">Warm & Approachable</h4>
                    <p className="text-sm text-[var(--text-secondary)]">Earth tones, soft corners (8-12px radius), friendly typography. Never corporate.</p>
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

        {/* Footer */}
        <footer className="p-6 lg:p-12 border-t border-[var(--border)] bg-white">
          <div className="max-w-5xl mx-auto text-center">
            <p className="text-[var(--text-tertiary)] text-sm">
              KeepClose — AI Co-Organizer for Women&apos;s Groups
            </p>
            <p className="text-[var(--text-tertiary)]/50 text-xs mt-2">
              Part of the ChimeStream Portfolio
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
}
