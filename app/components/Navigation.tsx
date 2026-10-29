"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "Главная", href: "/" },
  { name: "О команде", href: "/about" },
  { name: "Проекты", href: "/projects" },
];

export default function Navigation() {
  const pathname = usePathname();

  // Определяем текущую тему
  const isHome = pathname === "/";
  const isAbout = pathname === "/about";
  const isProjects = pathname === "/projects";

  return (
    <header
      className={`
        sticky top-0 z-50 w-full border-b border-black/10 backdrop-blur-md
        transition-colors duration-[3000ms] ease-in-out
        ${isHome ? "bg-white/90" : ""}
        ${isAbout ? "bg-[#d4d4d4]/90" : ""}
        ${isProjects ? "bg-[#1a1a1a]/90 border-white/10" : ""}
      `}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-8">
        {/* Логотип */}
        <Link
          href="/"
          className={`
            flex items-center gap-2 text-xl font-bold tracking-tight
            transition-colors duration-[3000ms] ease-in-out
            ${isProjects ? "text-white" : "text-black"}
          `}
        >
          <span className="text-2xl">◈</span>
          <span>NextGenApex</span>
        </Link>

        {/* Ссылки */}
        <nav className="flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`
                  relative inline-block pb-2 text-sm font-medium
                  transition-colors duration-[3000ms] ease-in-out
                  ${isProjects ? "text-white" : "text-black"}
                  ${isActive ? "opacity-100" : "opacity-60 hover:opacity-100"}
                  // ВОТ МАГИЯ ПОЛОСКИ (псевдоэлемент after):
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
          className={`
            rounded-sm border px-4 py-2 text-sm font-medium
            transition-colors duration-[3000ms] ease-in-out
            ${isProjects ? "border-white/30 text-white hover:bg-white/10" : "border-black/20 text-black hover:bg-black/5"}
          `}
        >
          Связаться
        </Link>
      </div>
    </header>
  );
}
