import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'
import { ThemeProvider } from './components/theme-provider'

const geistSans = localFont({
  src: './fonts/GeistVF.woff2',
  variable: '--font-geist-sans',
  weight: '100 900',
})
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff2',
  variable: '--font-geist-mono',
  weight: '100 900',
})

export const metadata: Metadata = {
  title: 'Dynamic Portfolio - Software Engineer',
  description: 'A dynamic portfolio showcasing software engineering skills including web development, video editing, project management, and cloud architecture.',
  keywords: ['software engineer', 'web developer', 'video editor', 'project manager', 'cloud architect', 'portfolio'],
  authors: [{ name: 'Portfolio Owner' }],
  openGraph: {
    title: 'Dynamic Portfolio - Software Engineer',
    description: 'A dynamic portfolio showcasing software engineering skills',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider defaultTheme="dark" storageKey="portfolio-theme">
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
