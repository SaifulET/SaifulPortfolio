import type { Metadata } from "next";

import "./globals.css";



export const metadata: Metadata = {
  title: "Saiful's Portfolio",
  description: "Saiful's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="./public/favicon.ico" />
      </head>
      <body
        
      >
        {children}
      </body>
    </html>
  );
}
