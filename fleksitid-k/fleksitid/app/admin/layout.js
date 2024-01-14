import { Inter } from 'next/font/google';
import ResponsiveAppBar from '@/components/adminResponsivNavBar';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className} style={{ backgroundColor: 'white', margin: 0, padding: 0 }}>
        <ResponsiveAppBar />
        {children}
      </body>
    </html>
  );
}