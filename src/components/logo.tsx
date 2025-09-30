import Image from 'next/image';

export function Logo() {
  return (
    <a href="/" className="flex items-center" aria-label="Spice Paradise homepage">
      <Image src="/img_logo.png" alt="Spice Paradise Logo" width={120} height={40} priority />
    </a>
  );
}
