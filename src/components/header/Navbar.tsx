import { Pages, Routes } from "@/constants/enums";
import Link from "next/link";
import React from "react";

export default function Navbar() {
  const links = [
    { id: crypto.randomUUID(), title: "Products", href: Routes.PRODUCTS },
    { id: crypto.randomUUID(), title: "About", href: Routes.ABOUT },
    { id: crypto.randomUUID(), title: "Contact", href: Routes.CONTACT },
    {
      id: crypto.randomUUID(),
      title: "Login",
      href: `${Routes.AUTH}/${Pages.LOGIN}`,
    },
  ];
  return (
    <nav className="flex-1 justify-end flex">
      <ul className="flex gap-4 py-2">
        {links.map((link) => (
          <li key={link.id}>
            <Link href={`/${link.href}`}>{link.title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
