"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Menu } from "lucide-react";
import { useRouter } from "next/navigation";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function Header() {
  const router = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [lang, setLang] = useState<"EN" | "DE">("EN");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState<{ name: string; email: string } | null>(
    null
  );

  useEffect(() => {
    const userData = sessionStorage.getItem("user");
    if (userData) {
      setIsLoggedIn(true);
      setUser(JSON.parse(userData));
    }
  }, []);

  const handleLogout = () => {
    sessionStorage.removeItem("user");
    setIsLoggedIn(false);
    setUser(null);
    setMobileMenuOpen(false);
    router.push("/");
  };

  const NavLinks = () => (
    <>
      <Link
        href="/"
        className="text-white hover:text-red-500 text-sm transition-colors"
        onClick={() => setMobileMenuOpen(false)}
      >
        How it Works
      </Link>
      <Link
        href="/pricing"
        className="text-white hover:text-red-500 text-sm transition-colors"
        onClick={() => setMobileMenuOpen(false)}
      >
        Pricing
      </Link>
      <Link
        href="/faq"
        className="text-white hover:text-red-500 text-sm transition-colors"
        onClick={() => setMobileMenuOpen(false)}
      >
        FAQ
      </Link>
      <Link
        href="/contact"
        className="text-white hover:text-red-500 text-sm transition-colors"
        onClick={() => setMobileMenuOpen(false)}
      >
        Contact
      </Link>
    </>
  );

  return (
    <header className="bg-[#1b2149] border-b border-gray-200 sticky top-0 z-40">
      <div className="container mx-auto px-5 md:px-0">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logo.svg"
              alt="logo"
              width={100}
              height={60}
              className="w-[100px] h-[60px] md:w-[150px] md:h-[60px]"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-5">
            <NavLinks />
          </nav>

          {/* Desktop Actions: Language Toggle + Logout (if logged in) + CTA */}
          <div className="hidden md:flex items-center gap-5">
            <div className="inline-flex items-center rounded-full overflow-hidden bg-white">
              <button
                onClick={() => setLang("EN")}
                className={`px-4 py-2 text-xs sm:text-sm font-semibold transition-colors ${
                  lang === "EN"
                    ? "bg-red-600 text-white"
                    : "bg-transparent text-[#1b2149]"
                }`}
              >
                EN
              </button>
              <button
                onClick={() => setLang("DE")}
                className={`px-4 py-2 text-xs sm:text-sm font-semibold transition-colors ${
                  lang === "DE"
                    ? "bg-red-600 text-white"
                    : "bg-transparent text-[#1b2149]"
                }`}
              >
                DE
              </button>
            </div>

            {isLoggedIn && user && (
              <>
                <span className="text-sm text-gray-300">Welcome, {user.name}</span>
                <Button
                  onClick={handleLogout}
                  variant="outline"
                  className="text-red-500 border-red-500 hover:bg-red-50 bg-transparent"
                >
                  Logout
                </Button>
              </>
            )}

            <Link href="/scan">
              <Button className="bg-red-600 hover:bg-red-700 text-white">
                Check My Reels Now
              </Button>
            </Link>
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden flex items-center gap-2">
            <div className="inline-flex items-center rounded-full overflow-hidden bg-white mr-1">
              <button
                onClick={() => setLang("EN")}
                className={`px-3 py-2 text-xs font-semibold transition-colors ${
                  lang === "EN"
                    ? "bg-red-600 text-white"
                    : "bg-transparent text-[#1b2149]"
                }`}
              >
                EN
              </button>
              <button
                onClick={() => setLang("DE")}
                className={`px-3 py-2 text-xs font-semibold transition-colors ${
                  lang === "DE"
                    ? "bg-red-600 text-white"
                    : "bg-transparent text-[#1b2149]"
                }`}
              >
                DE
              </button>
            </div>

            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <SheetHeader>
                  <SheetTitle>Menu</SheetTitle>
                </SheetHeader>
                <div className="flex flex-col gap-4 mt-6">
                  {/* Mobile Navigation Links */}
                  <nav className="flex flex-col gap-4 px-5">
                    <NavLinks />
                  </nav>

                  {/* Mobile Language Toggle + CTA + Logout (if logged in) */}
                  <div className="flex flex-col gap-4 px-5 pt-4 border-t">
                    <div className="inline-flex w-fit items-center rounded-full overflow-hidden bg-white">
                      <button
                        onClick={() => setLang("EN")}
                        className={`px-4 py-2 text-sm font-semibold transition-colors ${
                          lang === "EN"
                            ? "bg-red-600 text-white"
                            : "bg-transparent text-[#1b2149]"
                        }`}
                      >
                        EN
                      </button>
                      <button
                        onClick={() => setLang("DE")}
                        className={`px-4 py-2 text-sm font-semibold transition-colors ${
                          lang === "DE"
                            ? "bg-red-600 text-white"
                            : "bg-transparent text-[#1b2149]"
                        }`}
                      >
                        DE
                      </button>
                    </div>

                    {isLoggedIn && user && (
                      <Button
                        onClick={handleLogout}
                        variant="outline"
                        className="text-red-500 border-red-500 hover:bg-red-50 bg-transparent w-full"
                      >
                        Logout
                      </Button>
                    )}

                    <Link href="/scan" onClick={() => setMobileMenuOpen(false)}>
                      <Button className="bg-red-600 hover:bg-red-700 text-white w-full">
                        Check My Reels Now
                      </Button>
                    </Link>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
