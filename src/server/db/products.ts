import { cache } from "@/lib/cache";
import { db } from "@/lib/prisma";

export const getAllProducts = cache(
  () => {
    {
      const products = db.product.findMany({
        include: {
          sizes: true,
        },
        orderBy: { name: "asc" },
      });
      return products;
    }
  },
  ["products-list"],
  { revalidate: 3600 }
);
