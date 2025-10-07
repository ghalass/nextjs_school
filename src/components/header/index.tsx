import Link from "next/link";
import React from "react";
import Navbar from "./Navbar";
import { getCurrentLocale } from "@/lib/getCurrentLocale";
import getTrans from "@/lib/translation";
import LanguageSwitcher from "./language-switcher";
import { Routes } from "@/constants/enums";

export default async function Header() {
  const locale = await getCurrentLocale();
  const { logo, navbar } = await getTrans(locale);

  return (
    <header className="py-4 md:py-6">
      <div className="flex items-center justify-between gap-6 lg:gap-10">
        <Link
          href={`/${locale}/${Routes.ROOT}`}
          className="text-primary font-semibold text-2xl"
        >
          🥕 {logo}
        </Link>
        <Navbar translations={navbar} />
        <LanguageSwitcher />
      </div>
    </header>
  );
}
