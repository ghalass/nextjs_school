import React from "react";
import ProductItem from "./ProductItem";
import { ProductWithRelations } from "@/types/product";

function Products({ items }: { items: ProductWithRelations[] }) {
  return (
    <ul>
      {items.map((item) => (
        <ProductItem key={item.id} item={item} />
      ))}
    </ul>
  );
}

export default Products;
