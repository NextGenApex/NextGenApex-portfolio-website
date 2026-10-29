import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "./components/Navigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Наша Команда — Сайт-визитка",
  description: "Сайт нашей команды из колледжа",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="ru"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col m-0 font-sans bg-[#f8f8f8] text-gray-900">
        <Navigation />

        <main className="flex-1">{children}</main>

        <footer className="border-t border-black/10 bg-[#ececec] py-8 text-center text-sm text-gray-500">
          <div className="mx-auto max-w-7xl px-6">
            <p>© 2026 Наша Команда. Все права защищены.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
