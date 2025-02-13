import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const poppins = localFont({
  src : [
    {
      path: "./fonts/Poppins-Black.ttf",
      weight: '900',
      style: 'normal'
    },
    {
      path: "./fonts/Poppins-Bold.ttf",
      weight: '700',
      style: 'normal'
    },
    {
      path: "./fonts/Poppins-Medium.ttf",
      weight: '500',
      style: 'normal'
    },
    {
      path: "./fonts/Poppins-SemiBold.ttf",
      weight: '600',
      style: 'normal'
    }
  ]
});
export const metadata: Metadata = {
  title: "Portfolio Website",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${poppins.className} bg-white antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
