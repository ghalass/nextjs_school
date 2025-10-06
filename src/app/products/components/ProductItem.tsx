import { ProductWithRelations } from "@/types/product";
import React from "react";

export default function ProductItem({ item }: { item: ProductWithRelations }) {
  return (
    <>
      <li>
        {item.name} - sizes : {item.sizes.length}
      </li>
    </>
  );
}
