import { TooltipProvider } from '@/components/ui/tooltip';
import type { Metadata } from 'next';
import { Geist_Mono, Inter, Montserrat } from 'next/font/google';
import { Toaster } from 'sonner';
import './globals.css';

const interSans = Inter({
    variable: '--font-inter',
    subsets: ['latin'],
    weight: ['400', '500', '600'],
});

const montserrat = Montserrat({
    variable: '--font-montserrat',
    subsets: ['latin'],
    weight: ['400', '500', '600'],
});

const geistMono = Geist_Mono({
    variable: '--font-geist-mono',
    subsets: ['latin'],
});

export const metadata: Metadata = {
    title: 'Tutor Finder',
    description: 'A place to find tutor',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${interSans.variable} ${geistMono.variable} antialiased ${montserrat.variable}`}
            >
                <Toaster />
                <TooltipProvider>{children}</TooltipProvider>
            </body>
        </html>
    );
}
