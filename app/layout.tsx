import type {Metadata} from "next";
import localFont from "next/font/local";
import "./globals.css";
import Script from 'next/script';
import {EventProvider} from "@/components/context";

const geistSans = localFont({
    src: "./fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
});
const geistMono = localFont({
    src: "./fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900",
});

export const metadata: Metadata = {
    title: "Tukteil",
    description: "Party Booster",
    icons: {
        icon: '/favicon.ico',
        apple: '/apple-touch-icon.png',
    },
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <Script
            src="https://www.googletagmanager.com/gtag/js?id=G-PF87JCCBTG"
            strategy="afterInteractive" // Ensures the script loads after the page is interactive
        />
        <Script id="google-analytics" strategy="afterInteractive">
            {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-PF87JCCBTG');
        `}
        </Script>
        <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
        <EventProvider>
            {children}
        </EventProvider>
        </body>

        </html>
    );
}
