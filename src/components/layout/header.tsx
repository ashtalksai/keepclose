"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-[var(--bg-primary)]/90 border-b border-[var(--border)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="font-serif text-2xl text-[var(--text-primary)] hover:text-[var(--accent-terracotta)] transition-colors">
            KeepClose
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/how-it-works" className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors">
              How It Works
            </Link>
            <Link href="/pricing" className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors">
              Pricing
            </Link>
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-4">
            <Link href="/login" className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors">
              Log in
            </Link>
            <Link
              href="/signup"
              className="px-4 py-2 bg-[var(--accent-terracotta)] text-white rounded-lg font-medium hover:bg-[var(--accent-terracotta-hover)] transition-colors"
            >
              Start Free Trial
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-[var(--text-primary)]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-[var(--bg-surface)] border-t border-[var(--border)]">
          <nav className="flex flex-col px-4 py-4 gap-4">
            <Link href="/how-it-works" className="text-[var(--text-secondary)] hover:text-[var(--text-primary)]">
              How It Works
            </Link>
            <Link href="/pricing" className="text-[var(--text-secondary)] hover:text-[var(--text-primary)]">
              Pricing
            </Link>
            <Link href="/login" className="text-[var(--text-secondary)] hover:text-[var(--text-primary)]">
              Log in
            </Link>
            <Link
              href="/signup"
              className="px-4 py-2 bg-[var(--accent-terracotta)] text-white rounded-lg font-medium text-center"
            >
              Start Free Trial
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
