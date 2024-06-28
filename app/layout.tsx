import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";

import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";

const font = Figtree({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pot Lagu App",
  description: "Emejing lagu app",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider appearance={{ baseTheme: dark }}>
      <html lang="en" suppressHydrationWarning>
        <body className={cn("dark:bg-black", font.className)}>
          <ThemeProvider
            attribute="class"
            forcedTheme="dark"
            disableTransitionOnChange
            storageKey="potLaguTheme"
          >
            {children}
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
