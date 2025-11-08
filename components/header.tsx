"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import { useState, useEffect } from "react"
import Image from "next/image"
import { Menu } from "lucide-react"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

export default function Header() {
  const router = useRouter()
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [user, setUser] = useState<{ name: string; email: string } | null>(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    // Check if user is logged in from session storage
    const userData = sessionStorage.getItem("user")
    if (userData) {
      setIsLoggedIn(true)
      setUser(JSON.parse(userData))
    }
  }, [])

  const handleLogout = () => {
    sessionStorage.removeItem("user")
    setIsLoggedIn(false)
    setUser(null)
    setMobileMenuOpen(false)
    router.push("/")
  }

  const NavLinks = () => (
    <>
      <Link 
        href="/" 
        className="text-gray-700 hover:text-gray-900 text-sm transition-colors"
        onClick={() => setMobileMenuOpen(false)}
      >
        How it Works
      </Link>
      <Link 
        href="/pricing" 
        className="text-gray-700 hover:text-gray-900 text-sm transition-colors"
        onClick={() => setMobileMenuOpen(false)}
      >
        Pricing
      </Link>
      <Link 
        href="/faq" 
        className="text-gray-700 hover:text-gray-900 text-sm transition-colors"
        onClick={() => setMobileMenuOpen(false)}
      >
        FAQ
      </Link>
      <Link 
        href="/contact" 
        className="text-gray-700 hover:text-gray-900 text-sm transition-colors"
        onClick={() => setMobileMenuOpen(false)}
      >
        Contact
      </Link>
    </>
  )

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-40">
      <div className="container mx-auto px-5 md:px-0">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex items-center gap-2">
            <Image 
              src="/logo.svg" 
              alt="logo" 
              width={250} 
              height={100} 
              className="w-[180px] h-[72px] md:w-[250px] md:h-[100px]" 
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-5">
            <NavLinks />
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-5">
            {isLoggedIn && user ? (
              <>
                <span className="text-sm text-gray-700">Welcome, {user.name}</span>
                <Button
                  onClick={handleLogout}
                  variant="outline"
                  className="text-red-600 border-red-600 hover:bg-red-50 bg-transparent"
                >
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Link href="/login">
                  <Button
                    variant="outline"
                    className="text-purple-600 border-purple-600 hover:bg-purple-50 bg-transparent"
                  >
                    Login
                  </Button>
                </Link>
                <Link href="/scan">
                  <Button className="bg-purple-600 hover:bg-purple-700 text-white">
                    Check My Reels Now
                  </Button>
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden flex items-center gap-2">
            {isLoggedIn && user ? (
              <span className="text-xs text-gray-700 mr-2 hidden sm:inline">
                {user.name}
              </span>
            ) : (
              <Link href="/login" className="mr-2">
                <Button
                  variant="outline"
                  size="sm"
                  className="text-purple-600 border-purple-600 hover:bg-purple-50 bg-transparent text-xs px-3"
                >
                  Login
                </Button>
              </Link>
            )}
            
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

                  {/* Mobile Actions */}
                  <div className="flex flex-col gap-3 pt-4 border-t px-5">
                    {isLoggedIn && user ? (
                      <>
                        <div className="text-sm text-gray-700 pb-2">
                          Welcome, {user.name}
                        </div>
                        <Button
                          onClick={handleLogout}
                          variant="outline"
                          className="text-red-600 border-red-600 hover:bg-red-50 bg-transparent w-full"
                        >
                          Logout
                        </Button>
                      </>
                    ) : (
                      <>
                        <Link href="/scan" onClick={() => setMobileMenuOpen(false)}>
                          <Button className="bg-purple-600 hover:bg-purple-700 text-white w-full">
                            Check My Reels Now
                          </Button>
                        </Link>
                      </>
                    )}
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}
