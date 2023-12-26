import type { Metadata } from 'next'

import './globals.scss'

export const metadata: Metadata = {
  title: {
    template: "🐜🍯 | %s",
    default: "Home",
  },
  description: "Anthony's Portfolio Website",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={"test"}>{children}</body>
    </html>
  )
}
