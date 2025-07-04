"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "./ui/button";

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-white shadow-lg">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex justify-between">
                    <div className="flex space-x-7">
                        <div>
                            <Link href="#" className="flex items-center py-4 px-2">
                                <span className="font-semibold text-gray-900 text-lg">
                                    KREASI BUMI NUSANTARA
                                </span>
                            </Link>
                        </div>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="outline-none mobile-menu-button"
                        >
                            <svg
                                className="w-6 h-6 text-gray-900"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path d="M4 6h16M4 12h16M4 18h16"></path>
                            </svg>
                        </button>
                    </div>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center space-x-1">
                        <Link
                            href="#"
                            className="py-4 px-2 text-gray-900 font-semibold hover:text-blue-500 transition duration-300"
                        >
                            Home
                        </Link>
                        <Link
                            href="#services"
                            className="py-4 px-2 text-gray-900 font-semibold hover:text-blue-500 transition duration-300"
                        >
                            Projects
                        </Link>
                        <Link
                            href="#about"
                            className="py-4 px-2 text-gray-900 font-semibold hover:text-blue-500 transition duration-300"
                        >
                            About
                        </Link>
                        <Link
                            href="#contact"
                            className="py-4 px-2 text-gray-900 font-semibold hover:text-blue-500 transition duration-300"
                        >
                            Contact
                        </Link>
                    </div>
                </div>
            </div>

            {/* Mobile Nav */}
            <div className={`md:hidden ${isOpen ? "block" : "hidden"}`}>
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                    <Link
                        href="#"
                        className="block px-3 py-2 text-base font-medium text-gray-900 hover:text-blue-500"
                    >
                        Home
                    </Link>
                    <Link
                        href="#services"
                        className="block px-3 py-2 text-base font-medium text-gray-900 hover:text-blue-500"
                    >
                        Services
                    </Link>
                    <Link
                        href="#about"
                        className="block px-3 py-2 text-base font-medium text-gray-900 hover:text-blue-500"
                    >
                        About
                    </Link>
                    <Link
                        href="#contact"
                        className="block px-3 py-2 text-base font-medium text-gray-900 hover:text-blue-500"
                    >
                        Contact
                    </Link>
                </div>
            </div>
        </nav>
    );
}