import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Goldman, Audiowide, Inter, Zen_Dots, Orbitron } from "next/font/google";

// Define fonts with proper configuration
const goldman = Goldman({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-goldman",
  display: "swap",
  preload: true,
});

const audiowide = Audiowide({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-audiowide", 
  display: "swap",
  preload: true,
});

const zendots = Zen_Dots({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-zendots", 
  display: "swap",
  preload: true,
});

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-orbitron", 
  display: "swap",
  preload: true,
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});



export const metadata: Metadata = {
  title: "Harin Dulneth",
  description: "Harin Dulneth's portfolio",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Harin Dulneth",
  },
  formatDetection: {
    telephone: false,
  },
  icons: {
    icon: [
      { url: "/favicon/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/favicon/favicon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/favicon/favicon.ico",
    apple: "/favicon/apple-touch-icon.png",
  }
};

export const viewport: Viewport = {
  themeColor: "#0f172a",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${goldman.variable} ${audiowide.variable} ${zendots.variable} ${orbitron.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
