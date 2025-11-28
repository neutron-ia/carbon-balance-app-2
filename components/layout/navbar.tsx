"use client"

import Link from "next/link"
import { useState } from "react"
import { Leaf, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const closeMenu = () => setIsOpen(false)

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2 font-bold text-xl">
          <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary text-primary-foreground">
            <Leaf className="w-6 h-6" />
          </div>
          <span>EcoBalance360</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          <Link href="/" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Inicio
          </Link>
          <Link
            href="/explorador"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Explorador
          </Link>
          <Link
            href="/simulador"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Simulador
          </Link>
          <Link
            href="/juegos"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Juegos
          </Link>
          <Link
            href="/acerca"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Acerca de
          </Link>
        </div>

        <div className="flex items-center gap-2">
          <Button asChild className="hidden md:flex">
            <Link href="/explorador">Explorar Ahora</Link>
          </Button>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col gap-4 mt-8">
                <Link
                  href="/"
                  onClick={closeMenu}
                  className="text-lg font-medium text-muted-foreground hover:text-foreground transition-colors py-2"
                >
                  Inicio
                </Link>
                <Link
                  href="/explorador"
                  onClick={closeMenu}
                  className="text-lg font-medium text-muted-foreground hover:text-foreground transition-colors py-2"
                >
                  Explorador
                </Link>
                <Link
                  href="/simulador"
                  onClick={closeMenu}
                  className="text-lg font-medium text-muted-foreground hover:text-foreground transition-colors py-2"
                >
                  Simulador
                </Link>
                <Link
                  href="/juegos"
                  onClick={closeMenu}
                  className="text-lg font-medium text-muted-foreground hover:text-foreground transition-colors py-2"
                >
                  Juegos
                </Link>
                <Link
                  href="/acerca"
                  onClick={closeMenu}
                  className="text-lg font-medium text-muted-foreground hover:text-foreground transition-colors py-2"
                >
                  Acerca de
                </Link>
                <Button asChild className="mt-4">
                  <Link href="/explorador" onClick={closeMenu}>
                    Explorar Ahora
                  </Link>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  )
}
