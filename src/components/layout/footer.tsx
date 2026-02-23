import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--bg-secondary)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="font-serif text-2xl text-[var(--text-primary)]">
              KeepClose
            </Link>
            <p className="mt-4 text-sm text-[var(--text-tertiary)]">
              Made with care for organizers who carry too much.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-[var(--text-primary)] mb-4">Product</h4>
            <ul className="space-y-2">
              <li><Link href="/how-it-works" className="text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)]">How It Works</Link></li>
              <li><Link href="/pricing" className="text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)]">Pricing</Link></li>
              <li><Link href="/about" className="text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)]">About</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-[var(--text-primary)] mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><Link href="/blog" className="text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)]">Blog</Link></li>
              <li><Link href="/help" className="text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)]">Help Center</Link></li>
              <li><Link href="/tips" className="text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)]">Group Tips</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-[var(--text-primary)] mb-4">Connect</h4>
            <ul className="space-y-2">
              <li><a href="https://instagram.com" className="text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)]">Instagram</a></li>
              <li><a href="mailto:hello@keepclose.com" className="text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)]">Email</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-[var(--border)]">
          <p className="text-sm text-[var(--text-tertiary)] text-center">
            © 2026 KeepClose. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
