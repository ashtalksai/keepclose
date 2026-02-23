"use client";

import Link from "next/link";
import { Calendar, Users, BarChart3, Settings, ChevronDown, Send, Edit2, Plus } from "lucide-react";
import { feedItems, groupStats } from "@/lib/data";

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-[var(--bg-primary)]">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-[var(--bg-surface)] border-b border-[var(--border)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="font-serif text-xl text-[var(--text-primary)]">
              KeepClose
            </Link>
            
            <button className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-[var(--bg-secondary)] transition-colors">
              <span className="font-medium text-[var(--text-primary)]">Your Book Club</span>
              <ChevronDown size={16} className="text-[var(--text-tertiary)]" />
            </button>
            
            <div className="w-10 h-10 rounded-full bg-[var(--accent-terracotta)] flex items-center justify-center text-white font-medium">
              JD
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar - Desktop */}
          <aside className="hidden lg:block">
            {/* Group Health */}
            <div className="bg-[var(--bg-surface)] rounded-2xl p-6 shadow-sm border border-[var(--border)] mb-6">
              <h3 className="text-sm font-medium text-[var(--text-secondary)] mb-4">Group Health</h3>
              <div className="flex items-center gap-2 mb-4">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div
                    key={i}
                    className={`w-4 h-4 rounded-full ${
                      i <= groupStats.healthScore
                        ? "bg-[var(--success-green)]"
                        : "bg-[var(--bg-secondary)]"
                    }`}
                  />
                ))}
                <span className="ml-2 text-sm text-[var(--success-green)] font-medium">Thriving</span>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-[var(--text-tertiary)]">Attendance</span>
                  <span className="text-[var(--text-primary)] font-medium">{groupStats.attendance}%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[var(--text-tertiary)]">Engagement</span>
                  <span className="text-[var(--text-primary)] font-medium">High</span>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-[var(--bg-surface)] rounded-2xl p-6 shadow-sm border border-[var(--border)]">
              <h3 className="text-sm font-medium text-[var(--text-secondary)] mb-4">Quick Actions</h3>
              <div className="space-y-2">
                <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl bg-[var(--accent-terracotta)] text-white font-medium hover:bg-[var(--accent-terracotta-hover)] transition-colors">
                  <Plus size={18} />
                  Schedule Event
                </button>
                <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl border border-[var(--border)] text-[var(--text-primary)] hover:bg-[var(--bg-secondary)] transition-colors">
                  <Users size={18} />
                  Add Member
                </button>
                <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl border border-[var(--border)] text-[var(--text-primary)] hover:bg-[var(--bg-secondary)] transition-colors">
                  <Send size={18} />
                  Send Update
                </button>
              </div>
            </div>

            {/* Navigation */}
            <nav className="mt-6 space-y-1">
              <Link
                href="/dashboard"
                className="flex items-center gap-3 px-4 py-3 rounded-xl bg-[var(--accent-terracotta)]/10 text-[var(--accent-terracotta)] font-medium"
              >
                <Calendar size={18} />
                Feed
              </Link>
              <Link
                href="/dashboard/members"
                className="flex items-center gap-3 px-4 py-3 rounded-xl text-[var(--text-secondary)] hover:bg-[var(--bg-secondary)] transition-colors"
              >
                <Users size={18} />
                Members
              </Link>
              <Link
                href="/dashboard/events"
                className="flex items-center gap-3 px-4 py-3 rounded-xl text-[var(--text-secondary)] hover:bg-[var(--bg-secondary)] transition-colors"
              >
                <Calendar size={18} />
                Events
              </Link>
              <Link
                href="/dashboard/insights"
                className="flex items-center gap-3 px-4 py-3 rounded-xl text-[var(--text-secondary)] hover:bg-[var(--bg-secondary)] transition-colors"
              >
                <BarChart3 size={18} />
                Insights
              </Link>
              <Link
                href="/dashboard/settings"
                className="flex items-center gap-3 px-4 py-3 rounded-xl text-[var(--text-secondary)] hover:bg-[var(--bg-secondary)] transition-colors"
              >
                <Settings size={18} />
                Settings
              </Link>
            </nav>
          </aside>

          {/* Main Feed */}
          <main className="lg:col-span-3">
            <h1 className="text-2xl font-serif text-[var(--text-primary)] mb-6">Activity Feed</h1>
            
            <div className="space-y-4">
              {feedItems.map((item) => (
                <FeedCard key={item.id} item={item} />
              ))}
            </div>
          </main>
        </div>
      </div>

      {/* Mobile Bottom Nav */}
      <nav className="lg:hidden fixed bottom-0 left-0 right-0 bg-[var(--bg-surface)] border-t border-[var(--border)] px-4 py-2">
        <div className="flex items-center justify-around">
          <Link href="/dashboard" className="flex flex-col items-center gap-1 py-2 px-4 text-[var(--accent-terracotta)]">
            <Calendar size={20} />
            <span className="text-xs">Feed</span>
          </Link>
          <Link href="/dashboard/members" className="flex flex-col items-center gap-1 py-2 px-4 text-[var(--text-tertiary)]">
            <Users size={20} />
            <span className="text-xs">Members</span>
          </Link>
          <Link href="/dashboard/events" className="flex flex-col items-center gap-1 py-2 px-4 text-[var(--text-tertiary)]">
            <Calendar size={20} />
            <span className="text-xs">Events</span>
          </Link>
          <Link href="/dashboard/settings" className="flex flex-col items-center gap-1 py-2 px-4 text-[var(--text-tertiary)]">
            <Settings size={20} />
            <span className="text-xs">More</span>
          </Link>
        </div>
      </nav>
    </div>
  );
}

function FeedCard({ item }: { item: typeof feedItems[0] }) {
  const bgColors = {
    event: "bg-[var(--accent-sage)]/5 border-[var(--accent-sage)]/20",
    milestone: "bg-[var(--accent-warm-yellow)]/5 border-[var(--accent-warm-yellow)]/20",
    nudge: "bg-[var(--accent-terracotta)]/5 border-[var(--accent-terracotta)]/20",
    suggestion: "bg-[var(--bg-surface)] border-[var(--border)]",
  };

  return (
    <article className={`rounded-2xl p-6 border shadow-sm ${bgColors[item.type]}`}>
      <h3 className="text-sm font-medium text-[var(--text-tertiary)] mb-2">{item.title}</h3>
      <p className="text-[var(--text-primary)]">{item.content}</p>
      {item.meta && (
        <p className="mt-2 text-sm text-[var(--text-secondary)]">{item.meta}</p>
      )}
      {item.actionLabel && (
        <div className="mt-4 flex items-center gap-2">
          {item.type === "nudge" && (
            <button className="flex items-center gap-2 px-4 py-2 rounded-lg border border-[var(--border)] text-[var(--text-secondary)] hover:bg-[var(--bg-secondary)] transition-colors text-sm">
              <Edit2 size={14} />
              Edit
            </button>
          )}
          <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[var(--accent-terracotta)] text-white hover:bg-[var(--accent-terracotta-hover)] transition-colors text-sm font-medium">
            {item.actionLabel}
            <span aria-hidden="true">→</span>
          </button>
        </div>
      )}
    </article>
  );
}
