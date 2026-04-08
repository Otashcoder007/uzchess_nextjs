import "./globals.css";
import Header from "@/components/shared/header/Header";
import Footer from "@/components/shared/footer/Footer";
import React from "react";

export default function RootLayout({children}: Readonly<{ children: React.ReactNode; }>) {
    return (
        <html lang="en">
        <body className={'flex shrink-0 flex-col justify-between antialiased'}>
        <div className={''}>
            <Header/>
            {children}
        </div>
        <Footer/>
        </body>
        </html>
    );
}