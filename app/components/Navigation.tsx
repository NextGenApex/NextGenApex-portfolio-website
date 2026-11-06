"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "Главная", href: "/" },
  { name: "О команде", href: "/about" },
  { name: "Проекты", href: "/projects" },
];

const normalize = (p: string) => p.replace(/\/$/, "") || "/";

export default function Navigation() {
  const pathname = usePathname();
  const p = normalize(pathname);

  const isAbout = p === "/about";
  const isProjects = p === "/projects";

  // Выбираем цвет фона: Белый -> Чёрный -> Тёмно-серый
  const bgColor = isAbout
    ? "rgba(20, 20, 20, 0.95)" // Чёрный (для О команде)
    : isProjects
      ? "rgb(58, 58, 58)" // Тёмно-серый (для Проектов)
      : "rgba(255, 255, 255, 0.95)"; // Белый (для Главной)

  // Цвет текста: делаем белым на ОБЕИХ тёмных страницах (О команде и Проекты)
  const textColor = isAbout || isProjects ? "#ededed" : "#171717";

  return (
    <header
      className="sticky top-0 z-50 w-full border-b border-black/10"
      style={{
        backgroundColor: bgColor,
        color: textColor,
        transition: "background-color 1s ease-in-out, color 1s ease-in-out",
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
            const isActive = p === normalize(link.href);
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
          href="/contact" // <--- ВОТ ТУТ ИЗМЕНИ "#contact" НА "/contact"
          className="rounded-sm border px-4 py-2 text-sm font-medium transition-colors duration-300 hover:bg-black/5"
          style={{
            borderColor:
              isAbout || isProjects
                ? "rgba(255,255,255,0.3)"
                : "rgba(0,0,0,0.2)",
          }}
        >
          Связаться
        </Link>
      </div>
    </header>
  );
}
