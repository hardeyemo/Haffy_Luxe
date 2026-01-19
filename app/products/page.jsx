import { Suspense } from "react";
import ProductsClient from "./Products.Client";

export default function Page() {
  return (
    <Suspense fallback={<div className="p-8 text-center">Loading...</div>}>
      <ProductsClient />
    </Suspense>
  );
}
