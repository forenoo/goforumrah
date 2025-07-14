import "./general-sans.css";
import "@/sass/main.scss";
import type { Metadata } from "next";

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
      <body>{children}</body>
    </html>
  );
}
