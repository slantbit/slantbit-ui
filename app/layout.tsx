import type { Metadata } from "next";
import { Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "../components/ui/theme-provider";
import { NoContextMenu } from "@/components/ui/no-contextmenu";

const inter = Inter({subsets:['latin'],variable:'--font-sans'});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Slantbit | Learn Effectively",
  description: "Slantbit — text-based learning platform for all subjects",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en" suppressHydrationWarning 
    >
      <head>
        <link rel="icon" type="image/png" href="/favicon-96x96.png?v=20260610" sizes="96x96" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg?v=20260610" />
        <link rel="shortcut icon" href="/favicon.ico?v=20260610" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png?v=20260610" />
        <link rel="manifest" href="/site.webmanifest?v=20260610" />
      </head>
      <body className={`${inter.variable} ${geistMono.variable} font-sans antialiased`}>
        {/* <NoContextMenu/> */}

        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
         
          {children}
        
        </ThemeProvider>

      </body>
    </html>
  );
}