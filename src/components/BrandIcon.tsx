export function BrandIcon({ name, className = "" }: { name?: string; className?: string }) {
  const wrap = `flex h-11 w-11 items-center justify-center rounded-xl ${className}`;
  switch (name) {
    case "whatsapp":
      return (
        <span className={`${wrap} bg-[#25D366]/15 text-[#1f9c4d]`}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
            <path d="M12.04 2C6.58 2 2.15 6.4 2.15 11.84c0 1.74.46 3.44 1.34 4.94L2 22l5.37-1.4a10 10 0 0 0 4.67 1.18h.01c5.46 0 9.89-4.4 9.89-9.84C21.94 6.4 17.5 2 12.04 2Zm5.73 14.13c-.24.68-1.4 1.3-1.93 1.34-.49.04-1.1.06-1.78-.11-.41-.1-.94-.3-1.62-.59-2.85-1.23-4.7-4.1-4.84-4.29-.14-.19-1.15-1.53-1.15-2.92 0-1.39.73-2.07.99-2.36.26-.29.57-.36.76-.36h.54c.17 0 .4-.07.63.48.24.56.82 2 .89 2.14.07.15.12.32.02.51-.1.2-.15.32-.3.5-.15.17-.31.38-.44.51-.15.15-.3.31-.13.6.17.3.76 1.25 1.63 2.03 1.12 1 2.07 1.31 2.36 1.46.3.15.46.12.64-.07.17-.2.75-.87.95-1.17.2-.29.4-.24.67-.15.27.1 1.71.8 2 .95.3.15.5.22.57.34.07.12.07.7-.17 1.38Z" />
          </svg>
        </span>
      );
    case "meta":
      return (
        <span className={`${wrap} bg-[#0668E1]/12 text-[#0668E1]`}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
            <path d="M16.5 4.5c-1.7 0-3.1.9-4.5 2.7C10.6 5.4 9.2 4.5 7.5 4.5 4.6 4.5 2.2 7.4 2.2 11.4c0 3.3 1.7 6.6 4.6 8.1.5.3 1.1-.1 1.1-.7v-2.3c-1.9.4-2.3-.8-2.4-1.3-.1-.4-.4-.8-.8-1 .4 0 .7.2 1 .6.4.6 1 .8 1.7.6 0-.5.2-1 .5-1.4-2.1-.2-3.5-1.3-3.5-3.6 0-.9.3-1.7.9-2.3 0 .6.2 1.2.7 1.6h.1c.2-1.6 1.1-2.8 2.6-2.8.7 0 1.3.2 1.7.7.5-.1 1-.2 1.5-.2s1 .1 1.5.2c.4-.5 1-.7 1.7-.7 1.6 0 2.5 1.3 2.6 2.8h.1c.5-.4.7-1 .7-1.6.6.6.9 1.4.9 2.3 0 2.3-1.4 3.4-3.5 3.6.3.4.5.9.5 1.4.7.2 1.3 0 1.7-.6.3-.4.6-.6 1-.6-.4.2-.7.6-.8 1-.2.5-.5 1.7-2.4 1.3v2.3c0 .6.6 1 1.1.7 2.9-1.5 4.6-4.8 4.6-8.1 0-4-2.4-6.9-5.3-6.9Z" />
          </svg>
        </span>
      );
    case "voice":
      return (
        <span className={`${wrap} bg-wine/10 text-wine`}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
            <path d="M12 3v10M12 3a3 3 0 0 1 3 3v4a3 3 0 0 1-6 0V6a3 3 0 0 1 3-3ZM6 11a6 6 0 0 0 12 0M12 17v4M9 21h6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          </svg>
        </span>
      );
    case "vision":
      return (
        <span className={`${wrap} bg-wine/10 text-wine`}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
            <path d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6-10-6-10-6Z" stroke="currentColor" strokeWidth="1.6" />
            <circle cx="12" cy="12" r="2.5" stroke="currentColor" strokeWidth="1.6" />
          </svg>
        </span>
      );
    default:
      return (
        <span className={`${wrap} bg-ink/8 text-ink`}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
            <path d="M4 5h16v11H4zM2 20h20M9 9h6M9 12h4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          </svg>
        </span>
      );
  }
}
