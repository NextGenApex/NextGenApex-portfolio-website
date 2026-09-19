import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

// ORB
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
      <body className="min-h-full flex flex-col m-0 font-sans">
        {/* ВЕРХНЕЕ МЕНЮ (НАВИГАЦИЯ) */}
        {/* ВЕРХНЕЕ МЕНЮ (НАВИГАЦИЯ) ПО ЦЕНТРУ */}
        <nav className="bg-[#1a1a1a] p-[15px_20px] flex justify-center gap-5">
          <Link
            href="/"
            className="color-[#fff] text-white no-underline font-bold hover:text-gray-300 transition-colors"
          >
            Главная
          </Link>
          <Link
            href="/about"
            className="text-gray-300 no-underline hover:text-white transition-colors"
          >
            О команде
          </Link>
          <Link
            href="/projects"
            className="text-gray-300 no-underline hover:text-white transition-colors"
          >
            Проекты
          </Link>
          <Link
            href="/projects"
            className="text-gray-300 no-underline hover:text-white transition-colors"
          >
            ИИ поддержка
          </Link>
        </nav>

        {/* ОСНОВНОЙ КОНТЕНТ СТРАНИЦЫ */}
        <main style={{ flex: "1 0 auto" }}>{children}</main>

        {/* НИЖНЯЯ ЧАСТЬ (ФУТЕР) */}
        <footer
          style={{
            background: "#f5f5f5",
            padding: "15px",
            textAlign: "center",
            color: "#666",
          }}
        >
          <p>© 2026</p>
        </footer>
      </body>
    </html>
  );
}
