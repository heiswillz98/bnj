import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "B&J Hotel - Your Home Away From Home in Akure",
  description: "Experience comfort, luxury, and exceptional hospitality at B&J Hotel in Oba Afunbiowo Estate, Idanre Road, Akure. Book your stay today!",
  keywords: "hotel, Akure, Ondo State, accommodation, B&J Hotel, Oba Afunbiowo Estate, Idanre Road",
  authors: [{ name: "B&J Hotel" }],
  openGraph: {
    title: "B&J Hotel - Your Home Away From Home in Akure",
    description: "Experience comfort, luxury, and exceptional hospitality at B&J Hotel in Oba Afunbiowo Estate, Idanre Road, Akure.",
    type: "website",
    locale: "en_NG",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${playfairDisplay.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
