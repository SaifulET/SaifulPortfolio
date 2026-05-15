// components/Navbar.tsx
'use client'
import { useState } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes } from 'react-icons/fa';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Skills', href: '#skill' },
  { name: 'Work', href: '#work' },
  { name: 'About', href: '#about' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <header className="sticky top-0 z-50 bg-dark/90 backdrop-blur border-b border-[#1a1a1a]">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a href="#" className="text-primary font-bold text-lg sm:text-xl">PORTFOLIO</a>
        <ul className="hidden md:flex gap-8">
          {navLinks.map(link => (
            <li key={link.name}>
              <Link href={link.href} className="text-white hover:text-[#0FF0FC] transition-all duration-300 ">{link.name}</Link>
            </li>
          ))}
        </ul>
        <a href="https://wa.me/8801707961402"target="_blank"rel="noopener noreferrer" className="hidden bg-primary text-dark px-5 py-2 rounded-full font-semibold shadow-neon hover:scale-105 transition sm:inline-block">
          <span className='text-xl font-bold text-green-200'>{'{'}</span>Hire Me<span className='text-xl font-bold text-green-200'>{'}'}</span>
        </a>
        <button
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((open) => !open)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-[#0FF0FC]/40 text-[#0FF0FC] md:hidden"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </nav>
      {isOpen && (
        <div className="border-t border-[#1a1a1a] bg-dark px-4 py-4 md:hidden">
          <ul className="mx-auto flex max-w-6xl flex-col gap-4">
            {navLinks.map(link => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block rounded-lg px-3 py-2 text-white transition-all duration-300 hover:bg-[#0FF0FC]/10 hover:text-[#0FF0FC]"
                >
                  {link.name}
                </Link>
              </li>
            ))}
            <li>
              <a
                href="https://wa.me/8801707961402"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-primary text-dark px-5 py-2 rounded-full font-semibold shadow-neon"
              >
                <span className='text-xl font-bold text-green-200'>{'{'}</span>Hire Me<span className='text-xl font-bold text-green-200'>{'}'}</span>
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
