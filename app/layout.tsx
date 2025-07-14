import "@/sass/main.scss";
import type { Metadata } from "next";
import localFont from "next/font/local";

const generalSans = localFont({
  src: "../assets/fonts/GeneralSans-Variable.woff2",
  variable: "--font-general-sans",
  display: "swap",
  preload: true,
  fallback: [
    "-apple-system",
    "BlinkMacSystemFont",
    "Segoe UI",
    "Roboto",
    "Helvetica Neue",
    "Arial",
    "sans-serif",
  ],
});

export const metadata: Metadata = {
  title: "GoForUmrah",
  description: "GoForUmrah is a platform for booking umrah packages",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${generalSans.className} ${generalSans.variable}`}>
        {children}
      </body>
    </html>
  );
}
