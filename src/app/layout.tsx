import type { Metadata } from "next";
import "./globals.css";
import Metrics from "@/app/metrics";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Layout/Footer";
import { Provider } from "jotai";
import NotificationRegisterPopup from "@/components/Notification/Popup";
import MockProviders from "@/mocks/provider";

export const metadata: Metadata = {
  title: "DDD - Dynamic Developer Designer IT 연합동아리",
  description:
    "개발자, 디자이너, PM이 모두 모여 함께 성장하는 DDD, 하나의 뜻깊은 IT 서비스를 함께 만들어 세상에 선보여요!",
  keywords: [
    "IT 동아리",
    "IT 연합 동아리",
    "사이드프로젝트",
    "개발자사이드프로젝트",
    "앱개발프로젝트",
    "개발동아리",
    "디자이너포트폴리오",
    "앱프로젝트",
    "직장인IT동아리",
    "대학생IT동아리",
    "사이드프로젝트추천",
  ],
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
