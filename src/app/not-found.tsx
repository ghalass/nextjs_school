import { getCurrentLocale } from "@/lib/getCurrentLocale";
import Link from "next/link";

export default async function NotFound() {
  const locale = await getCurrentLocale();

  return (
    <html>
      <body>
        <div>
          <h2>Not Found</h2>
          <p>Could not find requested resource</p>
          <Link href={`/${locale}`}>Return Home</Link>
        </div>
      </body>
    </html>
  );
}
