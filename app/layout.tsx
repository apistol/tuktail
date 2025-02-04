"use client";

import React, { useEffect, Suspense } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import Script from "next/script";
import localFont from "next/font/local";
import "./globals.css";
import { EventProvider } from "@/components/context";
import Image from "next/image";
import { Analytics } from "@vercel/analytics/react";
import Head from "next/head";

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
    display: "swap", // Prevent layout shift
});

const geistMono = localFont({
    src: "./fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900",
    display: "swap", // Prevent layout shift
});

function AnalyticsTracker() {
    const pathname = usePathname();
    const searchParams = useSearchParams();

    useEffect(() => {
        const url = `${pathname}${searchParams?.toString() ? `?${searchParams?.toString()}` : ""}`;

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
        <Head>
            {/* Basic SEO */}
            <title>Tukteil | Prosecco Bar, Lemonade Bar si Cocktail Bar pentru Nunti, Botezuri si Evenimente Private</title>
            <meta name="description" content="Tukteil | Prosecco Bar, Lemonade Bar si Cocktail Bar pentru Nunti, Botezuri si Evenimente Private" />
            <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
            <meta name="robots" content="index, follow" />
            <meta name="author" content="Alexandru Pistol" />
            <link rel="canonical" href="https://www.tukteil.ro/" />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:title" content="Tukteil | Prosecco Bar, Lemonade Bar si Cocktail Bar pentru Nunti, Botezuri si Evenimente Private" />
            <meta property="og:description" content="Prosecco Bar, Lemonade Bar si Cocktail Bar pentru Nunti, Botezuri si Evenimente Private" />
            <meta property="og:url" content="https://www.tukteil.ro/" />
            <meta property="og:image" content="https://www.tukteil.ro/logo-dark.svg" />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content="Tukteil | Prosecco Bar, Lemonade Bar si Cocktail Bar pentru Nunti, Botezuri si Evenimente Private" />
            <meta name="twitter:description" content="Ridica la urmatorul nivel cele mai importante evenimente din viata ta" />
            <meta name="twitter:image" content="https://www.tukteil.ro/logo-dark.svg" />

            {/* Structured Data (Schema.org) */}
            <script type="application/ld+json" dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "WebSite",
                    "name": "Tukteil",
                    "url": "https://www.tukteil.ro/",
                    "potentialAction": {
                        "@type": "SearchAction",
                        "target": "https://www.tukteil.ro/search?q={search_term_string}",
                        "query-input": "required name=search_term_string"
                    }
                })
            }} />
        </Head>

        <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <EventProvider>
            <Suspense fallback={null}>
                <AnalyticsTracker />
            </Suspense>
            <Analytics/>

            {children}
        </EventProvider>

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
                fbq('init', '2694453990724771'); // Updated Pixel ID
                fbq('track', 'PageView');
            `}
        </Script>
        <noscript>
            <Image
                height="1"
                width="1"
                loading="lazy"
                style={{ display: "none" }}
                alt="Facebook Pixel"
                src="https://www.facebook.com/tr?id=2694453990724771&ev=PageView&noscript=1"
            />
        </noscript>
        </body>
        </html>
    );
}
