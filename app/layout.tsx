import "./globals.css"
import { Space_Mono } from "next/font/google"
import type React from "react"
import Script from "next/script"
import { Metadata } from 'next'

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-space-mono",
})

export const metadata: Metadata = {
  metadataBase: new URL('https://0x4m4.com'),
  title: {
    default: '0x4m4 - Ethical Hacker & Security Specialist',
    template: '%s | 0x4m4'
  },
  description: 'Ethical Hacker and Cyber Security Specialist focusing on penetration testing, network security, and cryptography.',
  keywords: ['ethical hacking', 'cyber security', 'penetration testing', 'network security', 'cryptography'],
  authors: [{ name: '0x4m4' }],
  creator: '0x4m4',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://0x4m4.com',
    title: '0x4m4 - Ethical Hacker & Security Specialist',
    description: 'Ethical Hacker and Cyber Security Specialist focusing on penetration testing, network security, and cryptography.',
    siteName: '0x4m4',
  },
  twitter: {
    card: 'summary_large_image',
    title: '0x4m4 - Ethical Hacker & Security Specialist',
    description: 'Ethical Hacker and Cyber Security Specialist focusing on penetration testing, network security, and cryptography.',
    creator: '@0x4m4',
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
  verification: {
    google: 'your-google-verification-code',
  },
  alternates: {
    canonical: 'https://0x4m4.com',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={spaceMono.className}>
        {children}
        <Script
          id="schema-org"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "0x4m4",
              jobTitle: "Ethical Hacker & Cyber Security Specialist",
              url: "https://www.0x4m4.com",
              sameAs: ["https://github.com/0x4m4", "https://twitter.com/0x4m4", "https://www.linkedin.com/in/0x4m4"],
              alumniOf: {
                "@type": "CollegeOrUniversity",
                name: "Air University, Islamabad",
              },
              knowsAbout: [
                "Ethical Hacking",
                "Cyber Security",
                "Penetration Testing",
                "Network Security",
                "Cryptography",
              ],
            }),
          }}
        />
      </body>
    </html>
  )
}

