import './globals.css'


export const metadata = {
  title: '3K tarnslater',
  description: 'Translate your paragrapgh in every kind of language',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='bg-gray-400'>{children}</body>
    </html>
  )
}
