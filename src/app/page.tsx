import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 md:py-28">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[var(--text-primary)] leading-tight">
              You don't have to do this alone
            </h1>
            <div className="mt-4 w-32 h-[2px] bg-[var(--accent-terracotta)] mx-auto" />
            <p className="mt-8 text-lg sm:text-xl text-[var(--text-secondary)] max-w-2xl mx-auto">
              Your co-organizer that remembers everything, nudges quietly, and keeps your group thriving.
            </p>
            <div className="mt-10">
              <Link
                href="/signup"
                className="inline-flex items-center justify-center px-8 py-4 bg-[var(--accent-terracotta)] text-white rounded-lg font-medium text-lg hover:bg-[var(--accent-terracotta-hover)] transition-all duration-200 shadow-md"
              >
                Start Free Trial
              </Link>
              <p className="mt-3 text-sm text-[var(--text-tertiary)]">
                No credit card required • Free for 30 days
              </p>
            </div>
            
            {/* Abstract illustration placeholder */}
            <div className="mt-16 relative">
              <div className="w-full max-w-lg mx-auto h-64 bg-gradient-to-br from-[var(--accent-terracotta)]/10 via-[var(--accent-sage)]/10 to-[var(--accent-warm-yellow)]/10 rounded-3xl flex items-center justify-center">
                <div className="flex items-center justify-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-[var(--accent-terracotta)]/20 animate-pulse" />
                  <div className="w-20 h-20 rounded-full bg-[var(--accent-sage)]/30" />
                  <div className="w-14 h-14 rounded-full bg-[var(--accent-warm-yellow)]/20 animate-pulse" style={{ animationDelay: '0.5s' }} />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Problem Section */}
        <section className="py-16 bg-[var(--bg-secondary)]">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <blockquote className="font-serif text-xl sm:text-2xl italic text-[var(--text-primary)] leading-relaxed">
              "I've been running our book club for 3 years. It all falls to me — the scheduling, the reminders, the chasing. I'm exhausted."
            </blockquote>
            <p className="mt-6 text-[var(--text-secondary)]">
              — Sarah, book club organizer
            </p>
            <div className="mt-12 max-w-xl mx-auto">
              <p className="text-xl text-[var(--text-primary)]">
                You started the group to <span className="text-[var(--accent-terracotta)] font-semibold">CONNECT</span>.
              </p>
              <p className="mt-2 text-[var(--text-secondary)]">
                Not to become the unpaid admin.
              </p>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-3xl sm:text-4xl text-[var(--text-primary)] text-center mb-16">
              What KeepClose does for you
            </h2>
            
            <div className="space-y-12">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[var(--accent-terracotta)]/10 flex items-center justify-center text-2xl">
                  🔔
                </div>
                <div>
                  <h3 className="font-serif text-xl text-[var(--text-primary)] mb-2">
                    Smart Nudges
                  </h3>
                  <p className="text-[var(--text-secondary)]">
                    AI writes personalized messages to quiet members. You just approve and send. "Hey Sarah! We miss you. Can you make it this Thursday?"
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[var(--accent-sage)]/10 flex items-center justify-center text-2xl">
                  🧠
                </div>
                <div>
                  <h3 className="font-serif text-xl text-[var(--text-primary)] mb-2">
                    Preference Memory
                  </h3>
                  <p className="text-[var(--text-secondary)]">
                    "Jenny can't do Tuesdays" → We remember forever. Next event suggestion? Already knows. No more back-and-forth scheduling.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[var(--accent-warm-yellow)]/10 flex items-center justify-center text-2xl">
                  📊
                </div>
                <div>
                  <h3 className="font-serif text-xl text-[var(--text-primary)] mb-2">
                    Engagement Insights
                  </h3>
                  <p className="text-[var(--text-secondary)]">
                    See who's at risk of dropping out before they ghost. Celebrate members who show up consistently. Know your group's health at a glance.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[var(--accent-terracotta)]/10 flex items-center justify-center text-2xl">
                  📅
                </div>
                <div>
                  <h3 className="font-serif text-xl text-[var(--text-primary)] mb-2">
                    Calendar Sync
                  </h3>
                  <p className="text-[var(--text-secondary)]">
                    Connects to Google Calendar. No more double-booking. Members get event invites automatically.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[var(--accent-sage)]/10 flex items-center justify-center text-2xl">
                  💚
                </div>
                <div>
                  <h3 className="font-serif text-xl text-[var(--text-primary)] mb-2">
                    Group Health Score
                  </h3>
                  <p className="text-[var(--text-secondary)]">
                    Track momentum: Are we thriving or fading? Get proactive suggestions to keep energy high.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20 bg-[var(--bg-secondary)]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-3xl sm:text-4xl text-[var(--text-primary)] text-center mb-16">
              How It Works
            </h2>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-4">
              <div className="text-center flex-1">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[var(--accent-terracotta)]/10 flex items-center justify-center text-2xl">
                  ✨
                </div>
                <h3 className="font-serif text-lg text-[var(--text-primary)]">Set up your group</h3>
              </div>
              
              <div className="text-2xl text-[var(--text-tertiary)] hidden md:block">→</div>
              
              <div className="text-center flex-1">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[var(--accent-sage)]/10 flex items-center justify-center text-2xl">
                  🤖
                </div>
                <h3 className="font-serif text-lg text-[var(--text-primary)]">AI learns patterns</h3>
              </div>
              
              <div className="text-2xl text-[var(--text-tertiary)] hidden md:block">→</div>
              
              <div className="text-center flex-1">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[var(--accent-warm-yellow)]/10 flex items-center justify-center text-2xl">
                  💬
                </div>
                <h3 className="font-serif text-lg text-[var(--text-primary)]">Nudges happen</h3>
              </div>
              
              <div className="text-2xl text-[var(--text-tertiary)] hidden md:block">→</div>
              
              <div className="text-center flex-1">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[var(--success-green)]/10 flex items-center justify-center text-2xl">
                  🎉
                </div>
                <h3 className="font-serif text-lg text-[var(--text-primary)]">Group thrives</h3>
              </div>
            </div>
          </div>
        </section>

        {/* Social Proof */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mb-12">
              <div>
                <p className="text-4xl font-serif text-[var(--accent-terracotta)]">1,200+</p>
                <p className="text-sm text-[var(--text-secondary)] mt-1">groups using KeepClose</p>
              </div>
              <div>
                <p className="text-4xl font-serif text-[var(--accent-sage)]">87%</p>
                <p className="text-sm text-[var(--text-secondary)] mt-1">still meeting after 6 months</p>
              </div>
              <div className="col-span-2 md:col-span-1">
                <p className="text-4xl font-serif text-[var(--accent-warm-yellow)]">30%</p>
                <p className="text-sm text-[var(--text-secondary)] mt-1">typical survival rate without us</p>
              </div>
            </div>
            
            <blockquote className="font-serif text-xl italic text-[var(--text-primary)]">
              "Finally, someone else remembers to send reminders."
            </blockquote>
            <p className="mt-4 text-[var(--text-secondary)]">
              — Maria, playdate organizer
            </p>
          </div>
        </section>

        {/* Pricing Teaser */}
        <section className="py-16 bg-[var(--bg-secondary)]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-serif text-3xl text-[var(--text-primary)] mb-4">
              Simple pricing
            </h2>
            <p className="text-[var(--text-secondary)] mb-8">
              $7.99/mo per person, or $99/year for the whole group
            </p>
            <Link
              href="/pricing"
              className="inline-flex items-center gap-2 text-[var(--accent-terracotta)] hover:text-[var(--accent-terracotta-hover)] transition-colors font-medium"
            >
              See full pricing
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-serif text-4xl text-[var(--text-primary)]">
              Ready to stop being the only one who cares?
            </h2>
            <p className="mt-4 text-[var(--text-secondary)]">
              Let KeepClose share the load.
            </p>
            <Link
              href="/signup"
              className="inline-flex items-center justify-center mt-8 px-10 py-4 bg-[var(--accent-terracotta)] text-white rounded-lg font-medium text-lg hover:bg-[var(--accent-terracotta-hover)] transition-all duration-200 shadow-md"
            >
              Start Free Trial
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
