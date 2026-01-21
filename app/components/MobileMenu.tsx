"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import BrandLogo from "./BrandLogo";

interface MobileMenuProps {
    nav: Record<string, string>;
    locale: string;
}

export default function MobileMenu({ nav, locale }: MobileMenuProps) {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    // Close menu when route changes
    useEffect(() => {
        setIsOpen(false);
    }, [pathname]);

    // Lock body scroll when open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isOpen]);

    return (
        <div className="md:hidden">
            {/* Trigger Button (Hamburger) */}
            <button
                onClick={() => setIsOpen(true)}
                className="relative group z-50 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition hover:bg-white/10"
                aria-label="Open menu"
            >
                <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <line x1="4" y1="12" x2="20" y2="12" />
                    <line x1="4" y1="6" x2="20" y2="6" />
                    <line x1="4" y1="18" x2="20" y2="18" />
                </svg>
            </button>

            {/* Overlay */}
            {isOpen && (
                <div className="fixed inset-0 z-[60] flex flex-col bg-black/80 backdrop-blur-2xl animate-in fade-in duration-300">

                    {/* Header (Logo + Close) */}
                    <div className="flex items-center justify-between px-6 py-5 border-b border-white/5 bg-black/20">
                        <BrandLogo variant="isotipo" size={32} />

                        <button
                            onClick={() => setIsOpen(false)}
                            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition hover:bg-white/10"
                            aria-label="Close menu"
                        >
                            <svg
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="M18 6L6 18" />
                                <path d="M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                    {/* Nav Links */}
                    <nav className="flex flex-1 flex-col items-center justify-center gap-6 p-6">
                        {[
                            { href: `/${locale}#services`, label: nav.services },
                            { href: `/${locale}/catalogo`, label: nav.catalog },
                            { href: `/${locale}#capabilities`, label: nav.capabilities },
                            { href: `/${locale}#process`, label: nav.process },
                            { href: `/${locale}#contact`, label: nav.contact },
                        ].map((link, idx) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="group relative text-3xl font-light text-white/80 transition-colors hover:text-white"
                                style={{ animationDelay: `${idx * 50}ms` }}
                                onClick={() => setIsOpen(false)}
                            >
                                <span className="relative z-10">{link.label}</span>
                                <span className="absolute -bottom-2 left-0 h-px w-0 bg-[#42A5F6] transition-all group-hover:w-full" />
                            </Link>
                        ))}

                        <div className="mt-8 h-px w-12 bg-white/10" />

                        <Link
                            href={`/${locale}/policies`}
                            className="mt-2 text-sm text-white/40 hover:text-white"
                            onClick={() => setIsOpen(false)}
                        >
                            {nav.policies}
                        </Link>
                    </nav>

                    {/* Footer Decoration */}
                    <div className="p-6 text-center text-xs text-white/20">
                        Innovatrix &copy; {new Date().getFullYear()}
                    </div>
                </div>
            )}
        </div>
    );
}
