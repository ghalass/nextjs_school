import { getCurrentLocale } from "@/lib/getCurrentLocale";
import getTrans from "@/lib/translation";
import React from "react";

async function AboutPage() {
  const locale = await getCurrentLocale();
  const { about } = await getTrans(locale);
  const { aboutUs, description, ourStory } = about;

  return (
    <main className="text-center">
      <h3>{aboutUs}</h3>
      <h4>{description.one}</h4>
      <h4>{description.two}</h4>
      <h5>{ourStory}</h5>
    </main>
  );
}

export default AboutPage;
