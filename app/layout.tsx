import React from "react"
import type { Metadata, Viewport } from 'next'
import Script from 'next/script'
import { Poppins } from 'next/font/google'
import { ErrorBoundary } from '@/components/error-boundary'
import './globals.css'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#1a1a1a' },
  ],
}

const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
  preload: true,
});

export const metadata: Metadata = {
  title: {
    default: 'Anurag Singh - AI Engineer & Software Developer',
    template: '%s | Anurag Singh'
  },
  description: 'Portfolio of Anurag Singh, an AI Engineer and Software Developer specializing in machine learning, data science, and full-stack development. Expert in Large Language Models, Computer Vision, and MLOps.',
  keywords: [
    'AI Engineer',
    'Machine Learning Engineer',
    'Software Developer',
    'Data Scientist',
    'LLM',
    'Large Language Models',
    'Computer Vision',
    'Deep Learning',
    'MLOps',
    'Full Stack Developer',
    'Python Developer',
    'C++ Developer',
    'Anurag Singh'
  ],
  authors: [{ name: 'Anurag Singh' }],
  creator: 'Anurag Singh',
  publisher: 'Anurag Singh',
  metadataBase: new URL('https://anuraglabs.in'),
  alternates: {
    canonical: 'https://anuraglabs.in',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://anuraglabs.in',
    siteName: 'Anurag Singh Portfolio',
    title: 'Anurag Singh - AI Engineer & Software Developer',
    description: 'Portfolio of Anurag Singh, an AI Engineer and Software Developer specializing in machine learning, data science, and full-stack development.',
    images: [
      {
        url: '/professional-developer-avatar.png',
        width: 1200,
        height: 630,
        alt: 'Anurag Singh - AI Engineer & Software Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Anurag Singh - AI Engineer & Software Developer',
    description: 'Portfolio of Anurag Singh, an AI Engineer and Software Developer specializing in machine learning, data science, and full-stack development.',
    images: ['/anuragsingh.jpg'],
    creator: '@anurag__M1',
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Anurag Singh',
    jobTitle: 'AI Engineer & Software Developer',
    url: 'https://anuraglabs.in',
    sameAs: [
      'https://github.com/anurag-M1',
      'https://twitter.com/anurag__M1',
      'https://instagram.com/ca_anuragingh',
    ],
    knowsAbout: [
      'Machine Learning',
      'Artificial Intelligence',
      'Deep Learning',
      'Large Language Models',
      'Computer Vision',
      'Data Science',
      'Full Stack Development',
      'MLOps',
    ],
  }

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.className} font-sans antialiased`} suppressHydrationWarning>
        <ErrorBoundary>
          <Script
            id="structured-data"
            type="application/ld+json"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
          />
          {children}
        </ErrorBoundary>
      </body>
    </html>
  )
}
