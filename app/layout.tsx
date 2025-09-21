import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import { ThemeProvider } from "@/components/theme-provider"
import { Header } from "@/components/header"
import { ScrollToTop } from "@/components/scroll-to-top"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "EnfScale - Escalas de Avaliação de Enfermagem",
  description:
    "Site dedicado às escalas de avaliação de enfermagem utilizadas no Brasil. Ferramenta completa de referência para estudantes, enfermeiros e pesquisadores.",
  generator: "EnfScale",
  keywords:
    "enfermagem, escalas de avaliação, nursing scales, Florence Nightingale, avaliação clínica, cuidados de enfermagem",
  icons: {
    icon: "/green-tree-logo.png",
    shortcut: "/green-tree-logo.png",
    apple: "/green-tree-logo.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <ScrollToTop />
          <Header />
          <Suspense fallback={null}>{children}</Suspense>
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}
