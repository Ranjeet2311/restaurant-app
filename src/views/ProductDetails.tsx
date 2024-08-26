import { useParams } from "react-router-dom";
import { DUMMY_PRODUCTS } from "../dummy-products";
import { addToCart } from "../store/cart-slice";
import { useCartDispatch } from "../store/hooks";

export default function ProductDetails() {
  const { title } = useParams();

  const selectedProduct = DUMMY_PRODUCTS.find(
    (product) => product.title === title
  );
  const dispatch = useCartDispatch();
  function handleAddToCart() {
    const id = selectedProduct?.id ?? "defaultId";
    const title = selectedProduct?.title ?? "defaultTitle";
    const price = selectedProduct?.price ?? 0;
    dispatch(addToCart({ id, title, price }));
  }

  console.log(`selectedProduct :: `, selectedProduct);

  return (
    <div className="container py-4 my-4">
      <div className="row">
        <div className="col-12 col-lg-4 productDetails_image">
          <img src={selectedProduct?.image} alt={selectedProduct?.title} />
        </div>
        <div className="col-12 col-lg-8">
          <h2> {title} </h2>
          <p> {selectedProduct?.description} </p>
          <div className="price mb-4">{selectedProduct?.price}</div>
          <div className="product-actions">
            <button className="btn w-100" onClick={handleAddToCart}>
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
