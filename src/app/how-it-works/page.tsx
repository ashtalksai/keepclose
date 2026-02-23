import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import Link from "next/link";

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero */}
        <section className="py-20 bg-[var(--bg-secondary)]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="font-serif text-5xl text-[var(--text-primary)]">
              How KeepClose Works
            </h1>
            <p className="mt-6 text-xl text-[var(--text-secondary)]">
              From setup to thriving group — in minutes, not hours
            </p>
          </div>
        </section>

        {/* Steps */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-24">
              {/* Step 1 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[var(--accent-terracotta)] text-white font-serif text-xl mb-6">
                    1
                  </div>
                  <h2 className="font-serif text-3xl text-[var(--text-primary)] mb-4">
                    Create your group
                  </h2>
                  <p className="text-[var(--text-secondary)] text-lg">
                    Name your group and invite members via email or phone. They'll get a simple link to join — no app download required.
                  </p>
                </div>
                <div className="bg-[var(--bg-surface)] rounded-2xl p-8 border border-[var(--border)] shadow-sm">
                  <div className="space-y-4">
                    <div className="h-10 bg-[var(--bg-secondary)] rounded-lg w-3/4" />
                    <div className="h-10 bg-[var(--bg-secondary)] rounded-lg" />
                    <div className="h-10 bg-[var(--accent-terracotta)]/20 rounded-lg w-1/2" />
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="md:order-2">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[var(--accent-sage)] text-white font-serif text-xl mb-6">
                    2
                  </div>
                  <h2 className="font-serif text-3xl text-[var(--text-primary)] mb-4">
                    Tell us the preferences
                  </h2>
                  <p className="text-[var(--text-secondary)] text-lg">
                    Who can't do Tuesdays? Who prefers evenings? Add these once, and we'll remember them forever when suggesting meeting times.
                  </p>
                </div>
                <div className="md:order-1 bg-[var(--bg-surface)] rounded-2xl p-8 border border-[var(--border)] shadow-sm">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-[var(--accent-terracotta)]/20" />
                      <div className="text-sm text-[var(--text-secondary)]">Jenny can't do Tuesdays</div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-[var(--accent-sage)]/20" />
                      <div className="text-sm text-[var(--text-secondary)]">Sarah prefers evenings</div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-[var(--accent-warm-yellow)]/20" />
                      <div className="text-sm text-[var(--text-secondary)]">Maria needs 2 days notice</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[var(--accent-warm-yellow)] text-[var(--text-primary)] font-serif text-xl mb-6">
                    3
                  </div>
                  <h2 className="font-serif text-3xl text-[var(--text-primary)] mb-4">
                    Let AI do the heavy lifting
                  </h2>
                  <p className="text-[var(--text-secondary)] text-lg">
                    KeepClose watches attendance patterns, identifies members going quiet, and writes personalized nudges for you. Just approve and send.
                  </p>
                </div>
                <div className="bg-[var(--accent-terracotta)]/5 rounded-2xl p-6 border border-[var(--accent-terracotta)]/20">
                  <p className="text-sm text-[var(--text-tertiary)] mb-2">Suggested nudge for Sarah:</p>
                  <p className="text-[var(--text-primary)] italic">
                    "Hey Sarah! We missed you at the last two meetups. Book club isn't the same without you. Can you make it this Thursday? ☕"
                  </p>
                  <div className="mt-4 flex gap-2">
                    <button className="px-4 py-2 text-sm border border-[var(--border)] rounded-lg text-[var(--text-secondary)]">Edit</button>
                    <button className="px-4 py-2 text-sm bg-[var(--accent-terracotta)] text-white rounded-lg">Send</button>
                  </div>
                </div>
              </div>

              {/* Step 4 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="md:order-2">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[var(--success-green)] text-white font-serif text-xl mb-6">
                    4
                  </div>
                  <h2 className="font-serif text-3xl text-[var(--text-primary)] mb-4">
                    Watch your group thrive
                  </h2>
                  <p className="text-[var(--text-secondary)] text-lg">
                    Track attendance over time. Celebrate milestones. See your group health score improve as engagement goes up.
                  </p>
                </div>
                <div className="md:order-1 bg-[var(--bg-surface)] rounded-2xl p-8 border border-[var(--border)] shadow-sm">
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-2 mb-4">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <div
                          key={i}
                          className={`w-6 h-6 rounded-full ${
                            i <= 4 ? "bg-[var(--success-green)]" : "bg-[var(--bg-secondary)]"
                          }`}
                        />
                      ))}
                    </div>
                    <p className="text-2xl font-serif text-[var(--text-primary)]">Thriving</p>
                    <p className="text-sm text-[var(--text-tertiary)] mt-1">Group health score</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-[var(--bg-secondary)]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-serif text-4xl text-[var(--text-primary)]">
              Ready to stop doing it all yourself?
            </h2>
            <p className="mt-4 text-[var(--text-secondary)]">
              Start your free trial today — no credit card required
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
