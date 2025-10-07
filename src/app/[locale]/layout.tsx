// app/[locale]/layout.tsx

import Footer from "@/components/footer";
import { Roboto, Cairo } from "next/font/google";
import Header from "@/components/header";
import { Directions, Languages } from "@/constants/enums";
import "./globals.css";
import { Locale } from "@/i18n.config";
import { Toaster } from "@/components/ui/sonner";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  preload: true,
});

const cairo = Cairo({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  preload: true,
});

export async function generateStaticParams() {
  return [{ locale: Languages.ARABIC }, { locale: Languages.ENGLISH }];
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: Locale }>;
}>) {
  const locale = (await params).locale;
  return (
    <html
      lang={locale}
      dir={locale === Languages.ARABIC ? Directions.RTL : Directions.LTR}
      suppressHydrationWarning
    >
      <body
        className={
          locale === Languages.ARABIC ? cairo.className : roboto.className
        }
      >
        <div className="container">
          <Header />
          <Toaster position="top-center" />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
