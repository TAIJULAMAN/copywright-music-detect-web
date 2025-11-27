"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Menu } from "lucide-react";
import { useRouter } from "next/navigation";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuLabel,
} from "@/components/ui/dropdown-menu";
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

  const NavLinks = ({ variant = 'light' }: { variant?: 'light' | 'dark' }) => {
    const textColor = variant === 'dark' ? 'text-gray-900' : 'text-white';
    const hoverColor = variant === 'dark' ? 'hover:text-red-600' : 'hover:text-red-500';
    
    return (
      <div className="flex flex-col space-y-3">
        <Link
          href="/"
          className={`${textColor} ${hoverColor} text-sm transition-colors py-1.5`}
          onClick={() => setMobileMenuOpen(false)}
        >
          How it Works
        </Link>
        <Link
          href="/pricing"
          className={`${textColor} ${hoverColor} text-sm transition-colors py-1.5`}
          onClick={() => setMobileMenuOpen(false)}
        >
          Pricing
        </Link>
        <Link
          href="/faq"
          className={`${textColor} ${hoverColor} text-sm transition-colors py-1.5`}
          onClick={() => setMobileMenuOpen(false)}
        >
          FAQ
        </Link>
        <Link
          href="/contact"
          className={`${textColor} ${hoverColor} text-sm transition-colors py-1.5`}
          onClick={() => setMobileMenuOpen(false)}
        >
          Contact
        </Link>
      </div>
    );
  };

  return (
    <header className="bg-[#1b2149] border-b border-gray-200 sticky top-0 z-40">
      <div className="container mx-auto px-5 md:px-0">
        <div className="relative flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-2 z-10">
            <Image
              src="/logo.svg"
              alt="logo"
              width={100}
              height={60}
              className="w-[100px] h-[60px] md:w-[150px] md:h-[60px]"
            />
          </Link>

          {/* Desktop Navigation - Centered */}
          <nav className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2">
            <div className="flex items-center gap-8">
              {/* <Link href="/" className="text-white hover:text-red-500 transition-colors">
                Home
              </Link> */}
              <Link href="/how-it-works" className="text-white hover:text-red-500 transition-colors">
                How it Works
              </Link>
              <Link href="/pricing" className="text-white hover:text-red-500 transition-colors">
                Pricing
              </Link>
              <Link href="/faq" className="text-white hover:text-red-500 transition-colors">
                FAQ
              </Link>
              <Link href="/contact" className="text-white hover:text-red-500 transition-colors">
                Contact
              </Link>
            </div>
          </nav>

          {/* Desktop Actions - Hidden on tablet */}
          <div className="hidden lg:flex items-center gap-5">
            <div className="inline-flex items-center rounded-full overflow-hidden bg-white">
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

            <Link href="/scan">
              <Button className="bg-red-600 hover:bg-red-700 text-white">
                Check My Reels Now
              </Button>
            </Link>

            <DropdownMenu>
              <DropdownMenuTrigger className="outline-none">
                <Avatar className="size-8">
                  <AvatarImage
                    src={"https://avatar.iran.liara.run/public/31"}
                    alt={user?.name || "User"}
                  />
                  <AvatarFallback className="text-xs font-semibold text-[#1b2149] bg-white">
                    {user?.name
                      ?.split(" ")
                      .map((n) => n[0])
                      .join("")
                      ?.slice(0, 2)
                      .toUpperCase() || "GU"}
                  </AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="min-w-52">
                {isLoggedIn && user ? (
                  <>
                    <DropdownMenuLabel>
                      <div className="flex flex-col">
                        <span className="text-sm font-medium text-gray-900">
                          {user.name}
                        </span>
                        <span className="text-xs text-gray-500">
                          {user.email}
                        </span>
                      </div>
                    </DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem asChild>
                      <a href="#">Profile</a>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <a href="/checkout">Billing</a>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem
                      onSelect={(e) => {
                        e.preventDefault();
                        handleLogout();
                      }}
                      variant="destructive"
                    >
                      Logout
                    </DropdownMenuItem>
                  </>
                ) : (
                  <>
                    <DropdownMenuItem asChild>
                      <a href="/invoices">Invoices</a>
                    </DropdownMenuItem>
                    <DropdownMenuLabel>Profile</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem asChild>
                      <a href="/">Logout</a>
                    </DropdownMenuItem>
                  </>
                )}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Tablet and Mobile Menu - Show language toggle and hamburger */}
          <div className="lg:hidden flex items-center gap-2">
            <div className="inline-flex items-center rounded-full overflow-hidden bg-white">
              <button
                onClick={() => setLang("EN")}
                className={`px-3 py-2 text-xs font-medium transition-colors ${
                  lang === "EN"
                    ? "bg-red-600 text-white"
                    : "bg-transparent text-[#1b2149]"
                }`}
              >
                EN
              </button>
              <button
                onClick={() => setLang("DE")}
                className={`px-3 py-2 text-xs font-medium transition-colors ${
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
                <Button variant="ghost" size="icon" className="text-white hover:bg-white/10 ml-1">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px] sm:h-[44vh] bg-white overflow-y-auto pb-0">
                <SheetHeader className="border-b pb-4">
                  <div className="flex items-center justify-between">
                    <SheetTitle className="text-xl font-bold text-gray-900">Menu</SheetTitle>
                    <div className="inline-flex items-center rounded-full overflow-hidden bg-white border border-gray-200">
                      <button
                        onClick={() => setLang("EN")}
                        className={`px-4 py-2 text-xs font-medium transition-colors ${
                          lang === "EN"
                            ? "bg-red-600 text-white"
                            : "bg-transparent text-gray-700"
                        }`}
                      >
                        EN
                      </button>
                      <button
                        onClick={() => setLang("DE")}
                        className={`px-4 py-2 text-xs font-medium transition-colors ${
                          lang === "DE"
                            ? "bg-red-600 text-white"
                            : "bg-transparent text-gray-700"
                        }`}
                      >
                        DE
                      </button>
                    </div>
                  </div>
                </SheetHeader>
                <div className="flex flex-col h-full">
                  {/* Main Navigation Links */}
                  <nav className="py-4 px-5">
                    <NavLinks variant="dark" />
                  </nav>

                  {/* Auth Buttons */}
                  <div className="border-t border-gray-200 p-4 space-y-3">
                    <Link href="/login" onClick={() => setMobileMenuOpen(false)} className="block">
                      <Button variant="outline" className="w-full">
                        Login
                      </Button>
                    </Link>
                    <Link href="/signup" onClick={() => setMobileMenuOpen(false)} className="block">
                      <Button className="w-full bg-red-600 hover:bg-red-700">
                        Sign Up
                      </Button>
                    </Link>
                   
                    <Link href="/scan" onClick={() => setMobileMenuOpen(false)} className="block">
                      <Button className="w-full bg-red-600 hover:bg-red-700">
                        Check My Reels Now
                      </Button>
                    </Link>
                  </div>

                  {/* User Profile Section - Removed from mobile/tablet as per request */}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
