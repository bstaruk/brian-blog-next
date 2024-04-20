import type { Metadata } from 'next';
import classNames from 'classnames';
import { Lato, Merriweather } from 'next/font/google';
import '@/styles/app.css';

const lato = Lato({
  subsets: ['latin'],
  variable: '--font-lato',
  weight: ['300', '400', '700'],
});

const merriweather = Merriweather({
  subsets: ['latin'],
  variable: '--font-merriweather',
  weight: ['400', '700'],
});

export const metadata: Metadata = {
  title: 'brian.staruk.net',
  description: 'Notes by a guy from Boston.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={classNames(lato.variable, merriweather.variable)}>
        {children}
      </body>
    </html>
  );
}
