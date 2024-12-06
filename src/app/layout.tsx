import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";
import { Provider } from "jotai";

export const metadata: Metadata = {
  title: "DDD Website",
  description: "DDD 웹사이트입니다",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className="bg-yellow-10">
        <Provider>
          <div id="portal-root" />
          <header className="fixed w-full">
            <Navigation />
          </header>
          <main>{children}</main>
        </Provider>
      </body>
    </html>
  );
}
