import type { Metadata } from 'next';
import classNames from 'classnames';
import { Poppins } from 'next/font/google';
import '@/styles/app.css';

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: ['300', '500', '600'],
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
      <body className={classNames(poppins.variable)}>
        {children}
      </body>
    </html>
  );
}
