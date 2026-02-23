import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "KeepClose — AI Co-organizer for Women's Groups",
  description: "Your co-organizer that remembers everything, nudges quietly, and keeps your group thriving.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-pattern min-h-screen">
        {children}
      </body>
    </html>
  );
}
