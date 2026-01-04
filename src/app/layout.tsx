
import type { Metadata } from "next";
import Header from "@/components/Header";
import "./globals.css";

export const metadata: Metadata = {
  title: "Santhosh Oil Mill | Pure Cold Pressed Oils Shankarpally",
  description: "Traditional wood-pressed oils for healthy families. Chemical-free, 100% natural, and freshly extracted in Shankarpally.",
  keywords: ["Cold pressed oil", "Shankarpally", "healthy cooking oil", "traditional oil mill", "chemical free oil"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <Header />
        {children}
      </body>
    </html>
  );
}
