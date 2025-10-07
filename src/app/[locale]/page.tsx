import { getCurrentLocale } from "@/lib/getCurrentLocale";
import getTrans from "@/lib/translation";

export default async function Home() {
  const locale = await getCurrentLocale();
  const { home } = await getTrans(locale);
  const { welcome, description } = home;

  return (
    <main className="">
      <h1 className="text-4xl">{welcome}</h1>
      <h3>{description}</h3>
    </main>
  );
}
