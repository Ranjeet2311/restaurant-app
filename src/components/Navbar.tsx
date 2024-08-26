import { useState } from "react";
import Cart from "./Cart.tsx";
import { useCartSelector } from "../store/hooks.ts";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [cartIsVisible, setCartIsVisible] = useState(false);

  const cartQuantity = useCartSelector((state) =>
    state.cart.items.reduce((val, item) => val + item.quantity, 0)
  );
  console.log(`cartQuantity :: `, cartQuantity);

  function handleOpenCartClick() {
    setCartIsVisible(true);
  }

  function handleCloseCartClick() {
    setCartIsVisible(false);
  }

  return (
    <div className="container w-100">
      <nav className=" navbar bg-transparent ms-0">
        <div className="row me-0 w-100 d-flex justify-content-between align-items-center">
          <div className="col-2">
            <a className="navbar-brand" href="#">
              <NavLink to="/">
                <img src="logo.png" alt="Elegant model" className="logo" />
              </NavLink>
            </a>
          </div>
          <div className="col-10">
            <ul className="nav-menu d-flex justify-content-end mb-0 align-items-center">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }: { isActive: boolean }) =>
                    isActive ? "active" : undefined
                  }
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/store"
                  className={({ isActive }: { isActive: boolean }) =>
                    isActive ? "active" : undefined
                  }
                >
                  Store
                </NavLink>
              </li>
              <li>
                {cartIsVisible && <Cart onClose={handleCloseCartClick} />}

                <button className="cart-btn" onClick={handleOpenCartClick}>
                  Cart ({cartQuantity})
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
