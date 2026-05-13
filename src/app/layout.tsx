import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: '권희수',
  description: '바이럴 마케터 권희수의 소개 페이지',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  )
}
