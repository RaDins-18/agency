'use client'; // 👈 Important! Tells Next.js it's a Client Component

import { SessionProvider } from "next-auth/react";

export default function SessionWrapper({ children }) {
  return (
    <SessionProvider>
      {children}
    </SessionProvider>
  );
}
