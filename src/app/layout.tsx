import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";

export const metadata: Metadata = {
  title: "DDD Website",
  description: "DDD 웹사이트입니다",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <header className="fixed top-32 left-[50%] translate-x-[-50%]">
          <Navigation />
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
