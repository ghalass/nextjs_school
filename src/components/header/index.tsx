import Link from "next/link";
import React from "react";
import Navbar from "./Navbar";
import { getCurrentLocale } from "@/lib/getCurrentLocale";
import getTrans from "@/lib/translation";
import LanguageSwitcher from "./language-switcher";
import { getServerSession } from "next-auth";
import { authOptions } from "@/server/auth";
import AuthButtons from "./auth-buttons";

export default async function Header() {
  const locale = await getCurrentLocale();
  const initialSession = await getServerSession(authOptions);
  const translations = await getTrans(locale);

  return (
    <header className="py-4 md:py-6">
      <div className="flex items-center justify-between gap-6 lg:gap-10">
        <Link
          href={`/${locale}`}
          className="text-primary font-semibold text-2xl"
        >
          🥕 {translations.logo}
        </Link>
        <Navbar translations={translations} initialSession={initialSession} />
        <div className="flex items-center gap-6 flex-1 justify-end">
          <div className="hidden lg:flex lg:items-center lg:gap-6 ">
            <AuthButtons
              translations={translations}
              initialSession={initialSession}
            />
            <LanguageSwitcher />
          </div>
        </div>
      </div>
    </header>
  );
}
