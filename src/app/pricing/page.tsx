import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import Link from "next/link";
import { Check } from "lucide-react";

export default function PricingPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero */}
        <section className="py-20 bg-[var(--bg-secondary)]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="font-serif text-5xl text-[var(--text-primary)]">
              Simple, transparent pricing
            </h1>
            <p className="mt-6 text-xl text-[var(--text-secondary)]">
              Start free. Upgrade when you're ready.
            </p>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="py-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Individual Plan */}
              <div className="bg-[var(--bg-surface)] rounded-2xl p-8 border border-[var(--border)] shadow-sm">
                <h3 className="font-serif text-2xl text-[var(--text-primary)]">Individual</h3>
                <p className="mt-2 text-[var(--text-secondary)]">For organizers going solo</p>
                
                <div className="mt-8">
                  <span className="text-4xl font-serif text-[var(--text-primary)]">$7.99</span>
                  <span className="text-[var(--text-secondary)]">/month</span>
                </div>
                
                <ul className="mt-8 space-y-4">
                  <li className="flex items-start gap-3">
                    <Check size={20} className="text-[var(--success-green)] flex-shrink-0 mt-0.5" />
                    <span className="text-[var(--text-secondary)]">Up to 12 members</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check size={20} className="text-[var(--success-green)] flex-shrink-0 mt-0.5" />
                    <span className="text-[var(--text-secondary)]">Smart nudges & reminders</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check size={20} className="text-[var(--success-green)] flex-shrink-0 mt-0.5" />
                    <span className="text-[var(--text-secondary)]">Calendar sync</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check size={20} className="text-[var(--success-green)] flex-shrink-0 mt-0.5" />
                    <span className="text-[var(--text-secondary)]">Basic engagement insights</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check size={20} className="text-[var(--success-green)] flex-shrink-0 mt-0.5" />
                    <span className="text-[var(--text-secondary)]">Email & SMS support</span>
                  </li>
                </ul>
                
                <Link
                  href="/signup"
                  className="mt-8 block w-full py-3 text-center border border-[var(--accent-terracotta)] text-[var(--accent-terracotta)] rounded-xl font-medium hover:bg-[var(--accent-terracotta)]/10 transition-colors"
                >
                  Start Free Trial
                </Link>
              </div>

              {/* Group Plan */}
              <div className="bg-[var(--accent-terracotta)] rounded-2xl p-8 text-white shadow-lg relative overflow-hidden">
                <div className="absolute top-4 right-4 bg-[var(--accent-warm-yellow)] text-[var(--text-primary)] px-3 py-1 rounded-full text-xs font-medium">
                  Best Value
                </div>
                
                <h3 className="font-serif text-2xl">Full Group</h3>
                <p className="mt-2 text-white/80">For the whole crew</p>
                
                <div className="mt-8">
                  <span className="text-4xl font-serif">$99</span>
                  <span className="text-white/80">/year</span>
                </div>
                <p className="mt-2 text-sm text-white/60">Save $40 vs monthly</p>
                
                <ul className="mt-8 space-y-4">
                  <li className="flex items-start gap-3">
                    <Check size={20} className="text-[var(--accent-warm-yellow)] flex-shrink-0 mt-0.5" />
                    <span className="text-white/90">Unlimited members</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check size={20} className="text-[var(--accent-warm-yellow)] flex-shrink-0 mt-0.5" />
                    <span className="text-white/90">Everything in Individual</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check size={20} className="text-[var(--accent-warm-yellow)] flex-shrink-0 mt-0.5" />
                    <span className="text-white/90">Advanced engagement analytics</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check size={20} className="text-[var(--accent-warm-yellow)] flex-shrink-0 mt-0.5" />
                    <span className="text-white/90">Priority support</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check size={20} className="text-[var(--accent-warm-yellow)] flex-shrink-0 mt-0.5" />
                    <span className="text-white/90">Custom group branding</span>
                  </li>
                </ul>
                
                <Link
                  href="/signup?plan=group"
                  className="mt-8 block w-full py-3 text-center bg-white text-[var(--accent-terracotta)] rounded-xl font-medium hover:bg-white/90 transition-colors"
                >
                  Start Free Trial
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 bg-[var(--bg-secondary)]">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-3xl text-[var(--text-primary)] text-center mb-12">
              Questions? We've got answers.
            </h2>
            
            <div className="space-y-8">
              <div>
                <h3 className="font-medium text-[var(--text-primary)] mb-2">
                  How long is the free trial?
                </h3>
                <p className="text-[var(--text-secondary)]">
                  30 days, no credit card required. You'll have full access to all features during the trial.
                </p>
              </div>
              
              <div>
                <h3 className="font-medium text-[var(--text-primary)] mb-2">
                  Can I switch plans later?
                </h3>
                <p className="text-[var(--text-secondary)]">
                  Yes! You can upgrade or downgrade anytime. If you upgrade, we'll prorate the difference.
                </p>
              </div>
              
              <div>
                <h3 className="font-medium text-[var(--text-primary)] mb-2">
                  What happens to my data if I cancel?
                </h3>
                <p className="text-[var(--text-secondary)]">
                  We keep your data for 90 days after cancellation, so you can reactivate anytime. After that, it's deleted permanently.
                </p>
              </div>
              
              <div>
                <h3 className="font-medium text-[var(--text-primary)] mb-2">
                  Do members need to pay too?
                </h3>
                <p className="text-[var(--text-secondary)]">
                  No! Only the organizer pays. Members can view events and RSVP for free.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
