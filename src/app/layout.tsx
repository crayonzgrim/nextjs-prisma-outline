import { Footer, Navbar } from '@/components';
import { ThemeContextProvider } from '@/context/ThemeContext';
import AuthProvider from '@/providers/AuthProvider';
import ThemeProvider from '@/providers/ThemeProvider';
import { cn } from '@/utils';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Tech Blog',
  description: 'The tech team blog app'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(inter.className, {})}>
        <AuthProvider>
          <ThemeContextProvider>
            <ThemeProvider>
              <div
                className="min-h-screen transition-colors duration-300"
                style={{
                  backgroundColor: 'var(--bg)',
                  color: 'var(--textColor)'
                }}
              >
                <div className="wrapper mx-auto max-w-[1536px] px-20">
                  <Navbar />
                  {children}
                  <Footer />
                </div>
              </div>
            </ThemeProvider>
          </ThemeContextProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
