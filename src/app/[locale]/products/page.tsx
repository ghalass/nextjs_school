import React from "react";
import Products from "./components/Products";
import { getAllProducts } from "@/server/db/products";

export default async function ProductsPage() {
  const products = await getAllProducts();
  return (
    <section>
      <div className="container">
        <h1 className="text-4xl">Products</h1>
        <Products items={products} />
      </div>
    </section>
  );
}
