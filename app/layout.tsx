import type React from "react";
import type { Metadata } from "next";
import { DM_Serif_Display, JetBrains_Mono } from "next/font/google";
import { GeistSans } from "geist/font/sans";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const geist = GeistSans;
const dmSerif = DM_Serif_Display({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-dm-serif",
});
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Redwanur Rahaman",
  description:
    "Creative developer, software engineer & data analyst crafting exceptional digital experiences. Specializing in modern web development, UI/UX design, and cutting-edge interactive solutions.",
  keywords: [
    "developer",
    "redwanur rahaman",
    "redwan",
    "designer",
    "engineer",
    "IUT",
    "Islamic University of Technology",
    "Dhaka",
    "IUT SWE",
    "IUT CSE",
    "computer science engineering",
    "portfolio",
    "creative",
    "web development",
    "UI/UX",
  ],
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
  },

  authors: [{ name: "Redwanur Rahaman" }],
  openGraph: {
    title: "Redwanur Rahaman | Developer & Software Engineer",
    description:
      "Crafting exceptional digital experiences.",
    type: "website",
  },
  generator: "redwan.com",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geist.variable} ${dmSerif.variable} ${jetbrainsMono.variable} font-sans antialiased`}
        >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange={false}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
