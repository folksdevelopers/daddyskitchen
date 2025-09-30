'use client';

import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, Search } from 'lucide-react';
import { DaddyKitchenLogo } from '../daddy-kitchen-logo';
import { useState } from 'react';
import { Input } from '../ui/input';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/products', label: 'Products' },
  { href: '#recipes', label: 'Recipes' },
  { href: '/contact', label: 'Contact' },
];

export function Header() {
  const [isSheetOpen, setSheetOpen] = useState(false);

  const closeSheet = () => setSheetOpen(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-24 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <DaddyKitchenLogo className="h-20 w-auto" />
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-lg font-bold text-primary/80 transition-colors hover:text-primary"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <div className="hidden sm:flex items-center rounded-md border border-input">
             <Input
                type="search"
                placeholder="Search"
                className="border-none bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0"
             />
             <Button type="submit" size="icon" className="rounded-l-none bg-primary hover:bg-primary/90">
                <Search className="h-5 w-5" />
                <span className="sr-only">Search</span>
            </Button>
          </div>
          <Sheet open={isSheetOpen} onOpenChange={setSheetOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex flex-col gap-6 p-6">
                <DaddyKitchenLogo className="h-16 w-auto" />
                <nav className="flex flex-col gap-4">
                  {navLinks.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={closeSheet}
                      className="text-lg font-medium text-foreground/80 transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </a>
                  ))}
                </nav>
                <div className="flex items-center rounded-md border border-input">
                    <Input
                        type="search"
                        placeholder="Search"
                        className="border-none bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0"
                    />
                    <Button type="submit" size="icon" className="rounded-l-none bg-primary hover:bg-primary/90">
                        <Search className="h-5 w-5" />
                        <span className="sr-only">Search</span>
                    </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
