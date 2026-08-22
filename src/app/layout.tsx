import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Providers from "./newProviders";
import ReduxProviders from "@/lib/ReduxProviders";
import CustomToaster from "@/components/toaster/CustomToaster";


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
  title: {
    default: "Medsence",
    template: "%s | Medsence"
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ReduxProviders>

          <Providers>
            {children}
            <CustomToaster />
          </Providers>

        </ReduxProviders>
      </body>
    </html>
  );
}
