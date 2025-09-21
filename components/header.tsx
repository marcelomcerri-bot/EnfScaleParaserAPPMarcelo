"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, Search, X, Home, Grid3X3, Pill, Info, BookOpen } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { useRouter } from "next/navigation"

export function Header() {
  const [searchQuery, setSearchQuery] = useState("")
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const router = useRouter()

  const navigationItems = [
    { href: "/", label: "Início", icon: Home },
    { href: "/categorias", label: "Categorias", icon: Grid3X3 },
    { href: "/infusoes-medicamentosas", label: "Medicamentos", icon: Pill },
    { href: "/sobre", label: "Sobre", icon: Info },
    { href: "/referencias", label: "Referências", icon: BookOpen },
  ]

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      const searchUrl = `/pesquisar?q=${encodeURIComponent(searchQuery.trim())}`
      router.push(searchUrl)
      setIsSearchOpen(false)
    }
  }

  const handleSidebarNavigation = (href: string) => {
    setIsSidebarOpen(false)
    router.push(href)
  }

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault()
    // If we're already on the homepage, scroll to top
    if (window.location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" })
    } else {
      // If we're on another page, navigate to homepage
      router.push("/")
    }
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur-md supports-[backdrop-filter]:bg-white/80 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex h-14 sm:h-16 items-center justify-between">
          {/* Logo Section */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            <button onClick={handleLogoClick} className="flex items-center space-x-2 sm:space-x-3 group">
              <div className="relative">
                <Image
                  src="/green-tree-logo.png"
                  alt="EnfScale Logo"
                  width={32}
                  height={32}
                  className="w-6 h-6 sm:w-8 sm:h-8 object-contain group-hover:scale-110 transition-all duration-300 drop-shadow-sm"
                  priority
                />
              </div>
              <span className="text-base sm:text-lg font-bold bg-gradient-to-r from-green-600 to-green-700 bg-clip-text text-transparent hidden sm:block">
                EnfScale
              </span>
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-gray-700 hover:text-green-600 transition-all duration-200 px-4 py-2 rounded-lg hover:bg-green-50 relative group"
              >
                {item.label}
                <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-green-600 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
              </Link>
            ))}
          </nav>

          {/* Right Side - Search and Mobile Menu */}
          <div className="flex items-center space-x-1 sm:space-x-2">
            {/* Desktop Search */}
            <form onSubmit={handleSearch} className="hidden lg:flex items-center">
              <div className="relative group">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 group-focus-within:text-green-600 transition-colors" />
                <Input
                  type="search"
                  placeholder="Buscar escalas..."
                  className="pl-10 pr-4 w-64 border-gray-200 focus:border-green-500 focus:ring-green-500/20 rounded-full bg-gray-50 focus:bg-white transition-all duration-200"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </form>

            {/* Mobile Search Toggle */}
            <Button
              variant="ghost"
              size="sm"
              className="lg:hidden p-1.5 sm:p-2 hover:bg-green-50 hover:text-green-600 rounded-full transition-all duration-200"
              onClick={() => setIsSearchOpen(!isSearchOpen)}
            >
              {isSearchOpen ? <X className="h-4 w-4 sm:h-5 sm:w-5" /> : <Search className="h-4 w-4 sm:h-5 sm:w-5" />}
            </Button>

            <Sheet open={isSidebarOpen} onOpenChange={setIsSidebarOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className="lg:hidden p-1.5 sm:p-2 hover:bg-green-50 hover:text-green-600 rounded-full transition-all duration-200 relative group"
                >
                  <Menu className="h-4 w-4 sm:h-5 sm:w-5" />
                  <span className="absolute inset-0 rounded-full bg-green-100/30 scale-0 group-hover:scale-100 transition-transform duration-200 -z-10"></span>
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-[280px] sm:w-[320px] bg-gradient-to-br from-white via-green-50/30 to-green-100/20 backdrop-blur-xl border-l border-green-100/50 shadow-2xl p-0"
              >
                <div className="flex items-center justify-center p-4 sm:p-6 border-b border-green-100/50">
                  <div className="flex items-center space-x-3">
                    <Image
                      src="/green-tree-logo.png"
                      alt="EnfScale Logo"
                      width={28}
                      height={28}
                      className="w-6 h-6 sm:w-7 sm:h-7 object-contain drop-shadow-md"
                    />
                    <div>
                      <span className="text-base sm:text-lg font-bold bg-gradient-to-r from-green-600 to-green-700 bg-clip-text text-transparent">
                        EnfScale
                      </span>
                      <p className="text-xs text-gray-500 font-medium">Menu</p>
                    </div>
                  </div>
                </div>

                <nav className="flex flex-col p-3 sm:p-4 space-y-1 sm:space-y-2">
                  {navigationItems.map((item, index) => {
                    const IconComponent = item.icon
                    return (
                      <button
                        key={item.href}
                        onClick={() => handleSidebarNavigation(item.href)}
                        className="group relative flex items-center space-x-3 text-sm font-medium text-gray-700 hover:text-green-700 transition-all duration-300 px-3 py-2.5 sm:py-3 rounded-lg hover:bg-white/80 hover:shadow-sm border border-transparent hover:border-green-100/50 backdrop-blur-sm text-left w-full"
                        style={{
                          animationDelay: `${index * 50}ms`,
                          animation: "slideInRight 0.3s ease-out forwards",
                        }}
                      >
                        <div className="relative">
                          <IconComponent className="h-4 w-4 text-green-600 group-hover:text-green-700 transition-colors duration-200" />
                          <div className="absolute inset-0 bg-green-200/20 rounded-full scale-0 group-hover:scale-150 transition-transform duration-300 -z-10"></div>
                        </div>
                        <span className="group-hover:translate-x-1 transition-transform duration-200">
                          {item.label}
                        </span>
                        <div className="absolute right-3 w-0 h-0.5 bg-gradient-to-r from-green-500 to-green-600 group-hover:w-4 transition-all duration-300"></div>
                      </button>
                    )
                  })}

                  <button
                    onClick={() => handleSidebarNavigation("/pesquisar")}
                    className="group relative flex items-center space-x-3 text-sm font-medium text-gray-700 hover:text-green-700 transition-all duration-300 px-3 py-2.5 sm:py-3 rounded-lg hover:bg-white/80 hover:shadow-sm border border-transparent hover:border-green-100/50 backdrop-blur-sm mt-2 sm:mt-4 text-left w-full"
                  >
                    <div className="relative">
                      <Search className="h-4 w-4 text-green-600 group-hover:text-green-700 transition-colors duration-200" />
                      <div className="absolute inset-0 bg-green-200/20 rounded-full scale-0 group-hover:scale-150 transition-transform duration-300 -z-10"></div>
                    </div>
                    <span className="group-hover:translate-x-1 transition-transform duration-200">Pesquisar</span>
                    <div className="absolute right-3 w-0 h-0.5 bg-gradient-to-r from-green-500 to-green-600 group-hover:w-4 transition-all duration-300"></div>
                  </button>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>

        {/* Mobile Search Bar */}
        <div
          className={`lg:hidden transition-all duration-300 ease-in-out overflow-hidden ${
            isSearchOpen ? "max-h-20 pb-3 sm:pb-4" : "max-h-0"
          }`}
        >
          <form onSubmit={handleSearch} className="relative">
            <div className="relative group">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 group-focus-within:text-green-600 transition-colors" />
              <Input
                type="search"
                placeholder="Buscar escalas..."
                className="pl-10 pr-4 h-10 sm:h-12 text-sm sm:text-base border-gray-200 focus:border-green-500 focus:ring-green-500/20 rounded-full bg-gray-50 focus:bg-white transition-all duration-200"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                autoFocus={isSearchOpen}
              />
            </div>
          </form>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </header>
  )
}
