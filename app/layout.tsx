import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "EchoGPT — Your AI, everywhere",
  description: "A calmer, faster way to work with every AI model in one place."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
