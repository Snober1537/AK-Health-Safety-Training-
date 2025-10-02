'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Courses', path: '/courses' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="bg-gradient-to-r from-primary-700 to-primary-800 shadow-lg">
      <div className="container mx-auto px-4 py-3">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center">
            <div className="bg-white p-2 rounded-lg mr-3">
              <div className="bg-gray-200 border-2 border-dashed rounded-xl w-10 h-10" />
            </div>
            <Link href="/" className="text-2xl font-bold text-white">
              AK Health & Safety
            </Link>
          </div>
          <ul className="flex flex-wrap justify-center gap-1 md:gap-4">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  href={link.path}
                  className={`px-3 py-2 rounded-lg text-sm md:text-base font-medium transition-colors ${
                    pathname === link.path
                      ? 'bg-white text-primary-700'
                      : 'text-white hover:bg-primary-600'
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}