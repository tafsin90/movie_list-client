"use client";

import { useState } from "react";
import Link from "next/link";

import {
  Bars,
  Xmark,
  Magnifier,
  Bookmark,
  CircleCheckFill,
  House,
  CirclePlus,
} from "@gravity-ui/icons";

import { Button } from "@heroui/react";
import { authClient } from "@/lib/auth-client";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const {
    data: session,
    isPending, 
  } = authClient.useSession();
  const user = session?.user;
  // console.log(user);

  const handleLogout   = async () => {
    await authClient.signOut();
  };

  const navLinks = [
    { name: "Home", href: "/", icon: <House /> },
    { name: "Watchlist", href: "/watchlist", icon: <Bookmark /> },
    { name: "Finished ", href: "/finished ", icon: <CircleCheckFill /> },
    { name: "Add ", href: "/add ", icon: <CirclePlus /> },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#141414]/95 backdrop-blur-xl">
      <div className="mx-auto flex h-19 max-w-340 items-center justify-between ">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-1">
          <span className="text-3xl font-black tracking-[-2px] text-white">
            FR<span className="text-[#e5a84b]">A</span>ME
          </span>

          <span className="ml-1 mt-3 h-1.5 w-1.5 rounded-full bg-[#e5a84b]" />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-9 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-[14px] font-medium tracking-wide text-white/60 transition-colors duration-200 hover:text-[#e5a84b]"
            >
              <div className="flex justify-center items-center gap-1">
                <span className="text-[#e5a84b] [&>svg]:size-5">
                  {link.icon}
                </span>
                <span>{link.name}</span>
              </div>
            </Link>
          ))}
        </div>

        {/* Right Side */}
        <div className="hidden items-center gap-4 md:flex">
          {/* Search Bar */}
          <div className="flex items-center gap-2 rounded-full border bg-white/5 px-4 py-2 transition-colors border-[#e5a84b]">
            <Magnifier className="h-4 w-4 text-white/50" />

            <input
              type="text"
              placeholder="Search movies..."
              className="bg-transparent text-sm text-white outline-none placeholder:text-white/40 transition-all duration-300 w-46"
            />
          </div>

          {/* Divider */}
          <div className="h-7 w-px bg-white/15" />

          {/* Authentication Button */}
          {!isPending &&
            (user ? (
              <Button
                variant="outline"
                className="border-white/20 bg-transparent px-5 text-sm text-white hover:border-[#e5a84b] hover:text-[#e5a84b]"
                onPress={handleLogout}
              >
                Logout
              </Button>
            ) : (
              <Link
                href="/login"
                className="rounded-lg border border-white/20 bg-transparent px-5 py-2 text-sm text-white transition-colors hover:border-[#e5a84b] hover:text-[#e5a84b]"
              >
                Sign In
              </Link>
            ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-white md:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? (
            <Xmark className="h-6 w-6" />
          ) : (
            <Bars className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="border-t border-white/10 bg-[#141414] px-5 py-5 md:hidden">
          <div className="flex flex-col gap-5">
            {/* Navigation Links */}
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-sm font-medium text-white/70 transition-colors hover:text-[#e5a84b]"
              >
                {link.name}
              </Link>
            ))}

            <div className="my-1 border-t border-white/10" />

            {/* Mobile Search Bar */}
            <div className="flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-3 focus-within:border-[#e5a84b]">
              <Magnifier className="h-5 w-5 text-white/50" />

              <input
                type="text"
                placeholder="Search movies..."
                className="w-full bg-transparent text-sm text-white outline-none placeholder:text-white/40"
              />
            </div>

            {/* Authentication Button */}
            {!isPending &&
              (user ? (
                <Button
                  variant="outline"
                  className="w-full border-white/20 bg-transparent text-white"
                  onPress={handleLogout}
                >
                  Logout
                </Button>
              ) : (
                <Link
                  href="/login"
                  onClick={() => setIsMenuOpen(false)}
                  className="w-full rounded-lg border border-white/20 bg-transparent py-2 text-center text-sm text-white"
                >
                  Sign In
                </Link>
              ))}
          </div>
        </div>
      )}
    </nav>
  );
}
