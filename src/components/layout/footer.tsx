import { Facebook, Instagram, Twitter } from 'lucide-react';
import { Logo } from '../logo';
import { Button } from '../ui/button';

export function Footer() {
  return (
    <footer className="bg-secondary">
      <div className="container mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
            <div className="flex-1">
                <Logo />
            </div>
            <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" aria-label="Twitter">
              <Twitter className="h-6 w-6 text-foreground/70" />
            </Button>
            <Button variant="ghost" size="icon" aria-label="Facebook">
              <Facebook className="h-6 w-6 text-foreground/70" />
            </Button>
            <Button variant="ghost" size="icon" aria-label="Instagram">
              <Instagram className="h-6 w-6 text-foreground/70" />
            </Button>
          </div>
        </div>
        <div className="mt-8 border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Spice Paradise. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
