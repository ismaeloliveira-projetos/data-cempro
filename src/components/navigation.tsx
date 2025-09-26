"use client";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";

export function Navigation() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        {/* ✅ Logo / Marca - sempre à esquerda */}
        <div className="ml-12 flex items-center">
          <Link href="/" className="flex items-center">
            <span className="font-extrabold text-xl tracking-tight ">
              DataCempro
            </span>
            <span className="ml-1 hidden sm:inline-block font-semibold text-base text-muted-foreground">
              Software
            </span>
          </Link>
        </div>

        {/* ✅ Menu centralizado */}
        <div className="hidden md:flex flex-1 justify-center">
          <nav className="flex items-center space-x-8 text-sm font-medium">
            <Link
              href="/home"
              className="transition-colors hover:text-foreground/80 text-foreground"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="transition-colors hover:text-foreground/80 text-foreground"
            >
              Quem somos
            </Link>
            <Link
              href="/contact"
              className="transition-colors hover:text-foreground/80 text-foreground"
            >
              Contato
            </Link>
            <Link
              href="/client"
              className="transition-colors hover:text-foreground/80 text-foreground"
            >
              Sou cliente
            </Link>
          </nav>
        </div>

        {/* ✅ Menu mobile (hamburger) */}
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
            >
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <nav className="grid gap-6 px-2 py-6">
                <Link href="/home" className="hover:text-foreground/80">
                  Home
                </Link>
                <Link href="/about" className="hover:text-foreground/80">
                  Quem somos?
                </Link>
                <Link href="/contact" className="hover:text-foreground/80">
                  Contato
                </Link>
                <Link href="/client" className="hover:text-foreground/80">
                  Sou cliente
                </Link>
              </nav>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
