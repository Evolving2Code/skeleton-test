import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-almaden",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const dmSansDisplay = DM_Sans({
  variable: "--font-happy-face",
  subsets: ["latin"],
  weight: ["600", "700"],
});

export const metadata: Metadata = {
  title: "One platform to connect | Zoom",
  description:
    "Modernize workflows with Zoom's trusted collaboration tools: including video meetings, Zoom Chat, VoIP phone, webinars, whiteboard, contact center, and events.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${dmSansDisplay.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
