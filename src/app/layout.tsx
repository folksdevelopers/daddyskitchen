import type { Metadata } from 'next';
import { Toaster } from "@/components/ui/toaster";
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: "Daddy's Kitchen Masala - Paradise of Spices!",
    template: "%s - Daddy's Kitchen Masala",
  },
  description: "Daddy's Kitchen Masala brings you the authentic taste of Kerala with our premium, natural spices and traditional blends. Discover a paradise of flavors.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" style={{scrollBehavior:'smooth'}}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.cdnfonts.com/css/gilroy-bold" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
