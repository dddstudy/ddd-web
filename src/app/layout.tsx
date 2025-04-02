import type { Metadata } from "next";
import "./globals.css";
import Metrics from "@/app/metrics";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Layout/Footer";
import { Provider } from "jotai";
import NotificationRegisterPopup from "@/components/Notification/Popup";
import MockProviders from "@/mocks/provider";

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
        <MockProviders>
          <Provider>
            <div id="portal-root" />
            <header className="fixed w-full z-10">
              <Navigation />
            </header>
            <main>{children}</main>
            <Footer />
            <NotificationRegisterPopup />
          </Provider>
        </MockProviders>
        <Metrics />
      </body>
    </html>
  );
}
