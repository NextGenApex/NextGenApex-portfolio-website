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
        <nav
          style={{
            background: "#1a1a1a",
            padding: "15px 20px",
            display: "flex",
            gap: "20px",
          }}
        >
          <Link
            href="/"
            style={{
              color: "#fff",
              textDecoration: "none",
              fontWeight: "bold",
            }}
          >
            Главная
          </Link>
          <Link href="/about" style={{ color: "#ccc", textDecoration: "none" }}>
            Члены команды
          </Link>
          <Link
            href="/projects"
            style={{ color: "#ccc", textDecoration: "none" }}
          >
            Проекты команды
          </Link>
          <Link href="/about" style={{ color: "#ccc", textDecoration: "none" }}>
            ИИ Поддержка
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
