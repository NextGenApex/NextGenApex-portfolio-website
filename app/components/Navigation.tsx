"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "Главная", href: "/" },
  { name: "О команде", href: "/about" },
  { name: "Проекты", href: "/projects" },
];

// Нормализуем путь (убираем хвостовой слэш, чтобы работало и на GitHub Pages)
const normalize = (p: string) => p.replace(/\/$/, "") || "/";

const getTheme = (path: string) => {
  const p = normalize(path);

  if (p === "/projects") {
    return {
      bg: "rgba(20, 20, 20, 0.95)",
      text: "#ededed",
      border: "rgba(255, 255, 255, 0.1)",
      btnBorder: "rgba(255, 255, 255, 0.3)",
      btnHover: "hover:bg-white/10",
    };
  }

  if (p === "/about") {
    return {
      bg: "rgba(180, 180, 180, 0.95)",
      text: "#171717",
      border: "rgba(0, 0, 0, 0.15)",
      btnBorder: "rgba(0, 0, 0, 0.25)",
      btnHover: "hover:bg-black/5",
    };
  }

  return {
    bg: "rgba(255, 255, 255, 0.95)",
    text: "#171717",
    border: "rgba(0, 0, 0, 0.08)",
    btnBorder: "rgba(0, 0, 0, 0.2)",
    btnHover: "hover:bg-black/5",
  };
};

export default function Navigation() {
  const pathname = usePathname();
  const theme = getTheme(pathname);
  const isDark = normalize(pathname) === "/projects";

  return (
    <header
      className="sticky top-0 z-50 w-full border-b backdrop-blur-md"
      style={{
        backgroundColor: theme.bg,
        color: theme.text,
        borderBottomColor: theme.border,
      }}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-8">
        {/* Логотип */}
        <Link
          href="/"
          className="flex items-center gap-2 text-xl font-bold tracking-tight transition-opacity hover:opacity-80"
        >
          <span className="text-2xl">◈</span>
          <span>NextGenApex</span>
        </Link>

        {/* Ссылки */}
        <nav className="flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = normalize(pathname) === normalize(link.href);

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`
                  relative inline-block pb-2 text-sm font-medium
                  transition-opacity duration-300
                  ${isActive ? "opacity-100" : "opacity-60 hover:opacity-100"}
                  after:absolute after:bottom-0 after:left-0 after:h-[2px]
                  after:bg-current after:transition-all after:duration-300 after:ease-out
                  ${isActive ? "after:w-full" : "after:w-0 hover:after:w-full"}
                `}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Кнопка */}
        <Link
          href="#contact"
          className={`rounded-sm border px-4 py-2 text-sm font-medium transition-colors duration-300 ${theme.btnHover}`}
          style={{
            borderColor: theme.btnBorder,
          }}
        >
          Связаться
        </Link>
      </div>
    </header>
  );
}
