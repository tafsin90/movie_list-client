"use client";

import { useEffect, useState } from "react";
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

import { Button, Avatar } from "@heroui/react";
import { authClient } from "@/lib/auth-client";
import UserAvatar from "./UserAvater";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

// Search Component
function SearchBox({
  search,
  setSearch,
  searchResults,
  searchOpen,
  setSearchOpen,
  loading,
}) {
  return (
    <div className="relative w-full">
      <div className="flex items-center gap-2 rounded-full border border-[#e5a84b] bg-white/5 px-4 py-2 transition-colors focus-within:border-[#e5a84b]">
        <Magnifier className="h-4 w-4 shrink-0 text-white/50" />

        <input
          type="text"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setSearchOpen(true);
          }}
          onFocus={() => setSearchOpen(true)}
          placeholder="Search movies..."
          className="w-full bg-transparent text-sm text-white outline-none placeholder:text-white/40"
        />
      </div>

      {/* Search Results */}
      {searchOpen && search.trim() && (
        <div className="absolute left-0 top-full z-50 mt-2 max-h-96 w-full min-w-[280px] overflow-y-auto rounded-xl border border-white/10 bg-[#202020] p-2 shadow-2xl">
          {loading ? (
            <p className="px-3 py-4 text-center text-sm text-white/50">
              Loading your collection...
            </p>
          ) : searchResults.length > 0 ? (
            searchResults.map((item) => (
              <Link
                key={item._id}
                href={`/details/${item._id}`}
                onClick={() => {
                  setSearch("");
                  setSearchOpen(false);
                }}
                className="flex items-center gap-3 rounded-lg p-2 transition-colors hover:bg-white/10"
              >
                {/* Poster */}
                <div className="h-14 w-10 shrink-0 overflow-hidden rounded bg-white/10">
                  {item.poster && (
                    <img
                      src={item.poster}
                      alt={item.title}
                      className="h-full w-full object-cover"
                    />
                  )}
                </div>

                {/* Movie Information */}
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-medium text-white">
                    {item.title}
                  </p>

                  <p className="mt-1 text-xs text-white/40">{item.category}</p>
                </div>

                {/* Status */}
                <span
                  className={`shrink-0 rounded-md px-2 py-1 text-[10px] ${
                    item.status === "finished"
                      ? "bg-green-500/10 text-green-400"
                      : "bg-[#e5a84b]/10 text-[#e5a84b]"
                  }`}
                >
                  {item.status === "finished" ? "Finished" : "Watchlist"}
                </span>
              </Link>
            ))
          ) : (
            <p className="px-3 py-4 text-center text-sm text-white/50">
              No movies found.
            </p>
          )}
        </div>
      )}
    </div>
  );
}

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [allMedia, setAllMedia] = useState([]);
  const [search, setSearch] = useState("");
  const [searchOpen, setSearchOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;

  // Fetch all user media
  useEffect(() => {
    if (isPending) return;

    if (!user?.id) {
      setAllMedia([]);
      return;
    }

    const fetchAllMedia = async () => {
      try {
        setLoading(true);

        const response = await fetch(
          `${API_URL}/api/allmedia/collection/${user.id}`,
        );

        if (!response.ok) {
          throw new Error("Failed to fetch media");
        }

        const data = await response.json();

        setAllMedia(data);
      } catch (error) {
        console.error("Error fetching media:", error);
        setAllMedia([]);
      } finally {
        setLoading(false);
      }
    };

    fetchAllMedia();
  }, [user?.id, isPending]);

  // Filter search results
  const searchResults = allMedia
    .filter((item) =>
      item.title?.toLowerCase().includes(search.trim().toLowerCase()),
    )
    .slice(0, 8);

  const handleLogout = async () => {
    await authClient.signOut();
    setAllMedia([]);
  };

  const navLinks = [
    { name: "Home", href: "/", icon: <House /> },
    { name: "Watchlist", href: "/watchlist", icon: <Bookmark /> },
    { name: "Finished", href: "/finished", icon: <CircleCheckFill /> },
    { name: "Add", href: "/add", icon: <CirclePlus /> },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#141414]/95 backdrop-blur-xl">
      <div className="mx-auto flex h-19 max-w-340 items-center justify-between">
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
              <div className="flex items-center justify-center gap-1">
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
          <div className="w-52">
            <SearchBox
              search={search}
              setSearch={setSearch}
              searchResults={searchResults}
              searchOpen={searchOpen}
              setSearchOpen={setSearchOpen}
              loading={loading}
            />
          </div>

          {/* Divider */}
          <div className="h-7 w-px bg-white/15" />

          {/* Authentication Button */}
          {user ? (
            <div className="flex items-center gap-3">
              <UserAvatar user={user} />
              <span className="tracking-wider">{user.name?.toUpperCase()}</span>

              <Button
                variant="outline"
                className="border-red-500 bg-transparent px-5 text-sm text-red-500 hover:border-red-600 hover:text-red-600"
                onPress={handleLogout}
              >
                Logout
              </Button>
            </div>
          ) : (
            <Link
              href="/login"
              className="rounded-lg border border-white/20 bg-transparent px-5 py-2 text-sm text-white transition-colors hover:border-[#e5a84b] hover:text-[#e5a84b]"
            >
              Sign In
            </Link>
          )}
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
            <SearchBox
              search={search}
              setSearch={setSearch}
              searchResults={searchResults}
              searchOpen={searchOpen}
              setSearchOpen={setSearchOpen}
              loading={loading}
            />

            {/* Authentication Button */}
            {user ? (
              <div className="flex items-center justify-between gap-3">
                <div className="flex min-w-0 items-center gap-3">
                  <UserAvatar user={user} />

                  <span className="truncate text-sm text-white">
                    {user.name?.toUpperCase()}
                  </span>
                </div>

                <Button
                  variant="outline"
                  className="border-white/20 bg-transparent text-white"
                  onPress={handleLogout}
                >
                  Logout
                </Button>
              </div>
            ) : (
              <Link
                href="/login"
                onClick={() => setIsMenuOpen(false)}
                className="w-full rounded-lg border border-white/20 bg-transparent py-2 text-center text-sm text-white"
              >
                Sign In
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
