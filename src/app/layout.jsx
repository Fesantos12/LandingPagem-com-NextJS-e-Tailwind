import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Landing Page | Unker",
  description: "Landing Page com Next e Tailwind",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-sky-950">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
