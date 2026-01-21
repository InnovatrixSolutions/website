"use client";

import React, { useState } from "react";
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

    // Close menu when route changes (optional, but good UX)
    React.useEffect(() => {
        setIsOpen(false);
    }, [pathname]);

    return (
        <div className="md:hidden">
            {/* Trigger Button (Hamburger) */}
            <button
                onClick={() => setIsOpen(true)}
                className="flex h-10 w-10 items-center justify-center rounded-md text-white hover:bg-white/10"
                aria-label="Open menu"
            >
                <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <line x1="3" y1="12" x2="21" y2="12" />
                    <line x1="3" y1="6" x2="21" y2="6" />
                    <line x1="3" y1="18" x2="21" y2="18" />
                </svg>
            </button>

            {/* Fullscreen Overlay */}
            {isOpen && (
                <div className="fixed inset-0 z-50 flex flex-col bg-black/95 backdrop-blur-xl animate-in fade-in slide-in-from-right-10 duration-200">
                    <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
                        <BrandLogo variant="isotipo" size={32} />

                        {/* Close Button */}
                        <button
                            onClick={() => setIsOpen(false)}
                            className="flex h-10 w-10 items-center justify-center rounded-md text-white hover:bg-white/10"
                            aria-label="Close menu"
                        >
                            <svg
                                width="24"
                                height="24"
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

                    <nav className="flex flex-1 flex-col items-center justify-center gap-8 p-6 text-center">
                        <Link
                            href={`/${locale}#services`}
                            className="text-2xl font-medium text-white/90 hover:text-[#42A5F6]"
                            onClick={() => setIsOpen(false)}
                        >
                            {nav.services}
                        </Link>
                        <Link
                            href={`/${locale}/catalogo`}
                            className="text-2xl font-medium text-white/90 hover:text-[#42A5F6]"
                            onClick={() => setIsOpen(false)}
                        >
                            {nav.catalog}
                        </Link>
                        <Link
                            href={`/${locale}#capabilities`}
                            className="text-2xl font-medium text-white/90 hover:text-[#42A5F6]"
                            onClick={() => setIsOpen(false)}
                        >
                            {nav.capabilities}
                        </Link>
                        <Link
                            href={`/${locale}#process`}
                            className="text-2xl font-medium text-white/90 hover:text-[#42A5F6]"
                            onClick={() => setIsOpen(false)}
                        >
                            {nav.process}
                        </Link>
                        <Link
                            href={`/${locale}#contact`}
                            className="text-2xl font-medium text-white/90 hover:text-[#42A5F6]"
                            onClick={() => setIsOpen(false)}
                        >
                            {nav.contact}
                        </Link>

                        <div className="mt-8 h-px w-16 bg-white/10" />

                        {/* Additional Mobile Links if needed */}
                        <Link
                            href={`/${locale}/policies`}
                            className="text-sm text-white/50 hover:text-white"
                            onClick={() => setIsOpen(false)}
                        >
                            {nav.policies}
                        </Link>
                    </nav>
                </div>
            )}
        </div>
    );
}
