"use client";

import { Pages, Routes } from "@/constants/enums";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import React from "react";
import { buttonVariants } from "../ui/button";

export default function Navbar({
  translations,
}: {
  translations: { [key: string]: string };
}) {
  const { locale } = useParams();
  const pathname = usePathname();

  const links = [
    {
      id: crypto.randomUUID(),
      title: translations.products,
      href: Routes.PRODUCTS,
    },
    { id: crypto.randomUUID(), title: translations.about, href: Routes.ABOUT },
    {
      id: crypto.randomUUID(),
      title: translations.contact,
      href: Routes.CONTACT,
    },
    {
      id: crypto.randomUUID(),
      title: translations.login,
      href: `${Routes.AUTH}/${Pages.LOGIN}`,
    },
  ];
  return (
    <nav className="flex-1 justify-end flex ">
      <ul className="flex gap-4 py-2">
        {links.map((link) => (
          <li key={link.id}>
            <Link
              href={`/${locale}/${link.href}`}
              className={`${
                link.href === `${Routes.AUTH}/${Pages.LOGIN}`
                  ? `${buttonVariants({ size: "lg" })} !px-8 !rounded-full`
                  : `text-black hover:text-primary duration-200 transition-colors`
              } font-semibold ${
                pathname.startsWith(`/${locale}/${link.href}`)
                  ? "text-blue-500"
                  : "text-black"
              }`}
            >
              {link.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
