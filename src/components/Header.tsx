"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { logo, logoSize } from "@/data/images";
import { navMenus } from "@/data/services";
import { company } from "@/data/company";
import { useFocusTrap } from "@/lib/useFocusTrap";
import { ChevronDownIcon, PhoneIcon } from "./icons";

const navLinks = [
  { label: "Service Plans", href: "/plumbing-service-plans" },
  { label: "Emergency", href: "/services/emergency-plumbing" },
  { label: "About", href: "/about" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

export function Header() {
  const pathname = usePathname();
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const drawerRef = useRef<HTMLDivElement>(null);
  useFocusTrap(drawerRef, drawerOpen);

  // Escape closes the dropdowns and the drawer (as in the design).
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpenMenu(null);
        setDrawerOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Close menus on route change.
  useEffect(() => {
    setOpenMenu(null);
    setDrawerOpen(false);
  }, [pathname]);

  // Lock body scroll while the drawer is open.
  useEffect(() => {
    document.body.style.overflow = drawerOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [drawerOpen]);

  const linkCls = (active: boolean) =>
    `text-[14.5px] no-underline px-3 py-2.5 rounded-lg ${
      active ? "text-accent font-bold" : "text-dark-nav font-medium hover:text-accent"
    }`;

  return (
    <header className="sticky top-0 z-80 bg-[rgba(11,13,16,0.86)] backdrop-blur-[16px] border-b border-white/8">
      <div className="max-w-[1240px] mx-auto px-6 h-[72px] flex items-center justify-between gap-6">
        <Link href="/" className="flex items-center shrink-0" aria-label="OX Plumbing — home">
          <Image
            src={logo.src}
            alt={logo.alt}
            width={logoSize.width}
            height={logoSize.height}
            className="h-[34px] w-auto block"
            priority={false}
          />
        </Link>

        {/* Desktop nav */}
        <nav aria-label="Primary" className="hidden lg:flex items-center gap-1 justify-center">
          {navMenus.map((menu) => {
            const isOpen = openMenu === menu.label;
            const menuId = `nav-menu-${menu.label.toLowerCase().replace(/[^a-z]+/g, "-")}`;
            // Long lists get the two-column 560px mega-menu panel from the design.
            const wide = menu.items.length > 12;
            return (
              <div
                key={menu.label}
                className="relative"
                onMouseEnter={() => setOpenMenu(menu.label)}
                onMouseLeave={() => setOpenMenu(null)}
              >
                <button
                  type="button"
                  onClick={() => setOpenMenu(isOpen ? null : menu.label)}
                  aria-expanded={isOpen}
                  aria-controls={menuId}
                  className="flex items-center gap-1.5 bg-transparent border-none text-dark-nav font-sans text-[14.5px] font-medium px-3 py-2.5 cursor-pointer rounded-lg hover:text-accent focus-visible:outline-2 focus-visible:outline-accent whitespace-nowrap"
                >
                  {menu.label}
                  <ChevronDownIcon />
                </button>
                <div
                  id={menuId}
                  hidden={!isOpen}
                  className={`absolute top-full max-w-[90vw] bg-surface-dark border border-white/10 rounded-2xl shadow-[0_24px_60px_rgba(0,0,0,0.5)] animate-float-in grid gap-0.5 ${
                    wide
                      ? "left-1/2 -translate-x-1/2 w-[560px] grid-cols-2 p-3"
                      : "left-0 w-[280px] p-2"
                  }`}
                >
                  {menu.items.map((s) => (
                    <Link
                      key={s.label}
                      href={s.href}
                      className="block px-3.5 py-2.5 rounded-[10px] no-underline text-dark-nav text-sm font-medium hover:bg-accent/12 hover:text-accent"
                    >
                      {s.label}
                      <span className="block text-xs text-dim font-normal mt-0.5">{s.desc}</span>
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
          {navLinks.map((l) => (
            <Link key={l.href} href={l.href} className={linkCls(pathname === l.href)}>
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={company.phoneHref}
            className="shrink-0 hidden sm:flex items-center gap-2 bg-accent text-accent-ink no-underline font-bold text-[14.5px] px-[18px] py-[11px] rounded-[10px] hover:bg-accent-hover"
          >
            <PhoneIcon size={15} />
            {company.phoneDisplay}
          </a>

          {/* Mobile hamburger */}
          <button
            type="button"
            onClick={() => setDrawerOpen(true)}
            aria-expanded={drawerOpen}
            aria-controls="mobile-drawer"
            aria-label="Open menu"
            className="lg:hidden flex flex-col justify-center gap-[5px] w-11 h-11 bg-transparent border border-white/15 rounded-[10px] cursor-pointer items-center hover:border-accent focus-visible:outline-2 focus-visible:outline-accent"
          >
            <span className="block w-[18px] h-[2px] bg-dark-nav" />
            <span className="block w-[18px] h-[2px] bg-dark-nav" />
            <span className="block w-[18px] h-[2px] bg-dark-nav" />
          </button>
        </div>
      </div>

      {/* Mobile drawer — dark header aesthetic */}
      {drawerOpen && (
        <div className="lg:hidden fixed inset-0 z-90">
          <button
            type="button"
            aria-label="Close menu"
            onClick={() => setDrawerOpen(false)}
            className="absolute inset-0 bg-ink/60 border-none cursor-pointer"
          />
          <div
            id="mobile-drawer"
            ref={drawerRef}
            role="dialog"
            aria-modal="true"
            aria-label="Menu"
            className="absolute top-0 right-0 h-full w-[320px] max-w-[85vw] bg-ink border-l border-white/10 p-6 overflow-y-auto flex flex-col gap-1"
          >
            <div className="flex items-center justify-between mb-4">
              <Image
                src={logo.src}
                alt={logo.alt}
                width={logoSize.width}
                height={logoSize.height}
                className="h-[28px] w-auto block"
              />
              <button
                type="button"
                onClick={() => setDrawerOpen(false)}
                aria-label="Close menu"
                className="w-10 h-10 bg-transparent border border-white/15 rounded-[10px] text-dark-nav text-lg cursor-pointer hover:border-accent hover:text-accent focus-visible:outline-2 focus-visible:outline-accent"
              >
                ✕
              </button>
            </div>
            {navLinks.map((l) => (
              <Link key={l.href} href={l.href} className={linkCls(pathname === l.href)}>
                {l.label}
              </Link>
            ))}
            {navMenus.map((menu) => (
              <div key={menu.label} className="border-t border-white/10 mt-3 pt-4 grid gap-1">
                <div className="px-3 pb-1 text-[12.5px] font-bold tracking-[0.08em] uppercase text-accent-soft">
                  {menu.label}
                </div>
                {menu.items.map((s) => (
                  <Link
                    key={s.label}
                    href={s.href}
                    className="block px-3 py-2 rounded-[10px] no-underline text-dark-nav text-sm font-medium hover:bg-accent/12 hover:text-accent"
                  >
                    {s.label}
                    <span className="block text-xs text-dim font-normal mt-0.5">{s.desc}</span>
                  </Link>
                ))}
              </div>
            ))}
            <a
              href={company.phoneHref}
              className="mt-4 flex items-center justify-center gap-2 bg-accent text-accent-ink no-underline font-bold text-[15px] px-[18px] py-[13px] rounded-[10px] hover:bg-accent-hover"
            >
              <PhoneIcon size={15} />
              {company.phoneDisplay}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
