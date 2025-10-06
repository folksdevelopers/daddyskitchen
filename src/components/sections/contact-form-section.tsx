'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export function ContactFormSection() {
  return (
    <section className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold tracking-tight text-primary">Sent a Message</h2>
            <form className="mt-8 space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <Input type="text" placeholder="Name*" className="bg-secondary/50 border-none h-14" />
                <Input type="email" placeholder="Email*" className="bg-secondary/50 border-none h-14" />
                <Input type="tel" placeholder="Phone Number" className="bg-secondary/50 border-none h-14" />
                <Input type="text" placeholder="City" className="bg-secondary/50 border-none h-14" />
              </div>
              <Textarea placeholder="Message" className="bg-secondary/50 border-none min-h-40" />
              <Button type="submit" size="lg" className="bg-gray-900 text-white hover:bg-gray-800 px-10 py-6 text-lg">
                Submit
              </Button>
            </form>
          </div>
          <div>
            <div>
              <h3 className="text-xl font-bold text-primary">Address</h3>
              <p className="mt-2 text-muted-foreground">
                #6, Syndia Dhirani Building, Jurf Industrial Area, Ajman.
              </p>
              <Button variant="link" className="px-0 mt-2 text-primary">Get Direction</Button>
            </div>
            <div className="mt-8">
              <h3 className="text-xl font-bold text-primary">Contact</h3>
              <p className="mt-2 text-muted-foreground">Ph: +971 6 6786779</p>
              <p className="text-muted-foreground">Email: info@daddysfoodstuff.com</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
