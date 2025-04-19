import type React from "react"
import type { Metadata } from "next"
import { Inter, Poppins } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/header"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Enya Elvis - Full-Stack Developer & AI Enthusiast",
  description:
    "Professional portfolio of Enya Elvis, a full-stack developer specializing in JavaScript, React, Node.js, and AI technologies.",
  keywords: "full-stack developer, web developer, JavaScript, React, Node.js, AI, portfolio, Enya Elvis",
  authors: [{ name: "Enya Elvis" }],
  creator: "Enya Elvis",
  publisher: "Enya Elvis",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  metadataBase: new URL("https://enyaelvis.dev"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://enyaelvis.dev",
    title: "Enya Elvis - Full-Stack Developer & AI Enthusiast",
    description:
      "Professional portfolio of Enya Elvis, a full-stack developer specializing in JavaScript, React, Node.js, and AI technologies.",
    siteName: "Enya Elvis Portfolio",
    images: [
      {
        url: "/whatsapp-preview.png",
        width: 400,
        height: 400,
        alt: "Enya Elvis - Full-Stack Developer & AI Enthusiast",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Enya Elvis - Full-Stack Developer & AI Enthusiast",
    description:
      "Professional portfolio of Enya Elvis, a full-stack developer specializing in JavaScript, React, Node.js, and AI technologies.",
    creator: "@enyasystem",
    images: ["/whatsapp-preview.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/whatsapp-preview.png", type: "image/png", sizes: "400x400" },
    ],
    shortcut: "/favicon.ico",
    apple: "/whatsapp-preview.png",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Manual OG tags to ensure WhatsApp compatibility */}
        <meta property="og:title" content="Enya Elvis - Full-Stack Developer & AI Enthusiast" />
        <meta
          property="og:description"
          content="Professional portfolio of Enya Elvis, a full-stack developer specializing in JavaScript, React, Node.js, and AI technologies."
        />
        <meta property="og:image" content="https://enyaelvis.dev/whatsapp-preview.png" />
        <meta property="og:image:width" content="400" />
        <meta property="og:image:height" content="400" />
        <meta property="og:image:alt" content="Enya Elvis - Full-Stack Developer" />
        <meta property="og:url" content="https://enyaelvis.dev" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Enya Elvis Portfolio" />

        {/* WhatsApp specific meta tags */}
        <meta property="og:image:secure_url" content="https://enyaelvis.dev/whatsapp-preview.png" />

        {/* Favicon links */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/whatsapp-preview.png" type="image/png" sizes="400x400" />
        <link rel="apple-touch-icon" href="/whatsapp-preview.png" />
      </head>
      <body className={`${inter.variable} ${poppins.variable} font-sans`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
