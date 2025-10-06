import Link from "next/link";
import React from "react";
import Navbar from "./Navbar";

export default function Header() {
  return (
    <header>
      <div className="container flex items-center justify-between">
        <Link href={"/"}>🥕 Logo</Link>
        <Navbar />
      </div>
    </header>
  );
}
