import type { Metadata } from "next";
import "./globals.css";

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
    <html>
      <body>
        {children}
        <div id="portal-root" />
      </body>
    </html>
  );
}
