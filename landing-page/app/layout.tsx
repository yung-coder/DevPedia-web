import "./globals.css"
import { siteConfig } from "@/config/site"
import { Inter } from "next/font/google"
import Navbar from "@/components/layout/navbar"

import { ThemeProvider } from "@/components/theme-provider"
import { settings } from "@/config/settings"

const inter = Inter({ subsets: ["latin"] })



export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} flex min-h-screen   flex-col bg-background text-primary`}
      >
        {settings.themeToggleEnabled ? (
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <Navbar />
            {children}
          </ThemeProvider>
        ) : (
          <ThemeProvider attribute="class" forcedTheme="light" enableSystem>
            <Navbar />
            {children}
          </ThemeProvider>
        )}
      </body>
    </html>
  )
}
