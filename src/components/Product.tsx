import { addToCart } from "../store/cart-slice";
import { useCartDispatch } from "../store/hooks";
import { Link } from "react-router-dom";

type ProductProps = {
  id: string;
  image: string;
  title: string;
  price: number;
  description: string;
};

export default function Product({
  id,
  image,
  title,
  price,
  description,
}: ProductProps) {
  const dispatch = useCartDispatch();
  function handleAddToCart() {
    dispatch(addToCart({ id, title, price }));
  }

  return (
    <article className="product">
      <Link
        className="text-decoration-none product-content"
        to={`/store/${title}`}
      >
        <div className="card h-100 bg-dark">
          <img src={image} alt={title} />
          <div className="card-body mt-2">
            <h3>{title}</h3>
            <p className="product-price my-2">${price}</p>
            <p className="desc">{description}</p>
          </div>
          <div className="card-footer">
            <p className="product-actions">
              <button className="w-100" onClick={handleAddToCart}>
                Add to Cart
              </button>
            </p>
          </div>
        </div>
      </Link>
      {/* <img src={image} alt={title} />
      <div className="product-content">
        <div className="mt-4"></div>
        <p className="product-actions">
          <button onClick={handleAddToCart}>Add to Cart</button>
        </p>
      </div> */}
    </article>
  );
}
