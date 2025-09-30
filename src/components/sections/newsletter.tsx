'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export function Newsletter() {
  return (
    <section id="newsletter" className="py-16 sm:py-24">
      <div className="container mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-lg bg-primary p-8 text-center text-primary-foreground shadow-2xl md:p-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Join Our Spice Club</h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-primary-foreground/80">
            Get exclusive recipes, new product alerts, and special offers delivered right to your inbox.
          </p>
          <form className="mx-auto mt-8 flex max-w-md gap-4">
            <Input
              type="email"
              placeholder="Enter your email"
              className="flex-1 bg-primary-foreground text-foreground placeholder:text-muted-foreground"
              aria-label="Email for newsletter"
            />
            <Button type="submit" variant="secondary" className="bg-accent text-accent-foreground hover:bg-accent/90">
              Subscribe
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
