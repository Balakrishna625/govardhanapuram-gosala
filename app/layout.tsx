import type { Metadata } from "next";
import { Inter, Playfair_Display, Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Govardhanapuram Gosala | Pure A2 Organic Bilona Cow Ghee",
  description: "Pure A2 Organic Bilona Cow Ghee, carefully handcrafted at our sustainable gosala in Govardhanapuram. We support rural livelihoods, preserve ancient traditions, and deliver uncompromised purity to your home.",
  keywords: "organic ghee, A2 ghee, bilona ghee, cow ghee, traditional ghee, govardhanapuram, gosala, organic dairy",
  openGraph: {
    title: "Govardhanapuram Gosala | Pure A2 Organic Bilona Cow Ghee",
    description: "Pure A2 Organic Bilona Cow Ghee, carefully handcrafted at our sustainable gosala in Govardhanapuram. We support rural livelihoods, preserve ancient traditions, and deliver uncompromised purity to your home.",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${playfair.variable} ${poppins.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />

      </body>
    </html>
  );
}
