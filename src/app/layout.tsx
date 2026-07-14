import type { Metadata, Viewport } from "next";
import { Archivo, Instrument_Sans } from "next/font/google";
import { company } from "@/data/company";
import "./globals.css";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800", "900"],
  display: "swap",
});

const instrumentSans = Instrument_Sans({
  variable: "--font-instrument-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(company.siteUrl),
  title: {
    default: "24/7 Local Plumber in Mesa, AZ | OX Plumbing",
    template: "%s | OX Plumbing",
  },
  openGraph: {
    siteName: "OX Plumbing",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0B0D10",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${archivo.variable} ${instrumentSans.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
