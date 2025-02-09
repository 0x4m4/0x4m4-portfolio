import { Metadata } from 'next'

export const metadata: Metadata = {
  title: '0x4m4 - Home',
  description: 'Welcome to the digital realm of 0x4m4 - Ethical Hacker & Security Specialist',
  openGraph: {
    title: '0x4m4 - Home',
    description: 'Welcome to the digital realm of 0x4m4 - Ethical Hacker & Security Specialist',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '0x4m4 - Home',
    description: 'Welcome to the digital realm of 0x4m4 - Ethical Hacker & Security Specialist',
  },
}

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 