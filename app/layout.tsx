"use client";

import React, { useEffect, Suspense } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import Script from "next/script";
import localFont from "next/font/local";
import "./globals.css";
import { EventProvider } from "@/components/context";
import Image from "next/image";

// Global type declarations for `gtag` and `fbq` on `window`
declare global {
    interface Window {
        gtag?: (...args: unknown[]) => void;
        fbq?: (...args: unknown[]) => void;
    }
}

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

function AnalyticsTracker() {
    const pathname = usePathname();
    const searchParams = useSearchParams();

    useEffect(() => {
        const url = `${pathname}${searchParams.toString() ? `?${searchParams.toString()}` : ""}`;

        // Google Analytics Page View
        if (typeof window.gtag === "function") {
            window.gtag("config", "G-PF87JCCBTG", { page_path: url });
        }

        // Facebook Pixel Page View
        if (typeof window.fbq === "function") {
            window.fbq("track", "PageView");
        }
    }, [pathname, searchParams]);

    return null;
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
        <head>
            {/* Google Analytics */}
            <Script
                src="https://www.googletagmanager.com/gtag/js?id=G-PF87JCCBTG"
                strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
                {`
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', 'G-PF87JCCBTG');
                    `}
            </Script>

            {/* Facebook Pixel */}
            <Script id="facebook-pixel" strategy="afterInteractive">
                {`
                        !function(f,b,e,v,n,t,s)
                        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                        n.queue=[];t=b.createElement(e);t.async=!0;
                        t.src=v;s=b.getElementsByTagName(e)[0];
                        s.parentNode.insertBefore(t,s)}(window, document,'script',
                        'https://connect.facebook.net/en_US/fbevents.js');
                        fbq('init', '1006630844650450'); // Replace with your Pixel ID
                        fbq('track', 'PageView');
                    `}
            </Script>
            <noscript>
                <Image
                    height="1"
                    width="1"
                    style={{ display: "none" }}
                    alt={"Facebook Pixel"}
                    src="https://www.facebook.com/tr?id=1006630844650450&ev=PageView&noscript=1"
                />
            </noscript>
        </head>
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <EventProvider>
            <Suspense fallback={null}>
                <AnalyticsTracker />
            </Suspense>
            {children}
        </EventProvider>
        </body>
        </html>
    );
}
