import { DUMMY_PRODUCTS } from "../dummy-products";
import Shop from "../components/Shop";
import Product from "../components/Product";

export default function Store() {
  return (
    <div className="container py-4 my-4">
      <h2 className="mb-4">All Products</h2>
      <Shop>
        {DUMMY_PRODUCTS.map((product) => (
          <li key={product.id}>
            <Product {...product} />
          </li>
        ))}
      </Shop>
    </div>
  );
}
