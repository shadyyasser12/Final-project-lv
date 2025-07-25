import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faUser, faX } from "@fortawesome/free-solid-svg-icons";
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../reducs/Store/store";
import { useState } from "react";
import {
  add,
  decrement,
  remove as removeFromCart,
  clear as clearCart,
} from "../../reducs/slices/cartSlice";
import { placeOrder } from "../../reducs/slices/ordersSlice";
import { motion, AnimatePresence } from "framer-motion";

function Cart() {
  const [cartOpen, setCartOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const Cart = useSelector((store: RootState) => store.Cart);
  const totalPrice = Cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleCheckout = () => {
    if (Cart.length === 0) return;

    const newOrder = {
      items: Cart,
      date: new Date().toISOString(),
    };

    dispatch(placeOrder(newOrder));
    dispatch(clearCart());
    setCartOpen(false);
    navigate("/Account/orders");
  };

  return (
    <div className="flex gap-5 items-center text-gray-800 dark:text-gray-100 transition-colors duration-300 relative">
      <NavLink
        to="/Account"
        className={({ isActive }) =>
          isActive ? "text-new-price" : "hover:text-new-price duration-300"
        }
      >
        <FontAwesomeIcon className="duration-500" icon={faUser} />
      </NavLink>

      <div className="relative z-[999]">
        <div
          className="relative cursor-pointer"
          onClick={() => setCartOpen((open) => !open)}
        >
          <FontAwesomeIcon
            className={`hover:text-new-price duration-500 ${
              cartOpen ? "text-new-price" : ""
            }`}
            icon={faCartShopping}
          />
          {Cart.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
              {Cart.reduce((sum, item) => sum + item.quantity, 0)}
            </span>
          )}
        </div>

        <AnimatePresence>
          {cartOpen && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.5 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[998] bg-black"
                onClick={() => setCartOpen(false)}
              />

              <motion.div
                initial={{ y: "-100%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: "-100%", opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="fixed top-0 right-4 left-4 sm:left-auto sm:right-8 sm:w-[400px] w-[calc(100%-2rem)] z-[999] bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-xl shadow-2xl overflow-hidden max-h-[80vh] mt-24 sm:mt-32"
              >
                <div className="p-5">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg font-semibold">Your Cart</h3>
                    <button
                      onClick={() => setCartOpen(false)}
                      className="text-gray-500 hover:text-red-500 dark:hover:text-red-400"
                    >
                      <FontAwesomeIcon icon={faX} />
                    </button>
                  </div>

                  {Cart.length === 0 ? (
                    <p className="text-sm text-gray-500 dark:text-gray-400 text-center py-10">
                      Your cart is empty.
                    </p>
                  ) : (
                    <>
                      <ul className="flex flex-col gap-4 overflow-y-auto max-h-[40vh] pr-1 overflow-x-hidden">
                        {Cart.map((el, i) => (
                          <li
                            key={i}
                            className="flex gap-4 items-start border-b border-gray-200 dark:border-gray-700 pb-4"
                          >
                            <img
                              className="w-12 h-12 object-cover rounded-md shrink-0"
                              src={el.image}
                              alt={el.title}
                            />
                            <div className="flex-1 overflow-hidden">
                              <p className="text-sm font-medium truncate">
                                {el.title}
                              </p>
                              <p className="text-sm text-gray-700 dark:text-gray-300">
                                ${el.price.toFixed(2)}
                              </p>
                            </div>

                            <div className="flex items-center gap-2 mt-1">
                              <button
                                className="text-red-500 hover:text-red-700 dark:hover:text-red-400 text-sm"
                                onClick={() => dispatch(decrement(el))}
                              >
                                {el.quantity > 1 ? (
                                  "-"
                                ) : (
                                  <FontAwesomeIcon icon={faX} />
                                )}
                              </button>
                              <span className="text-xs">{el.quantity}</span>
                              <button
                                className="text-green-500 hover:text-green-700 dark:hover:text-green-400 text-sm"
                                onClick={() => dispatch(add(el))}
                              >
                                +
                              </button>
                            </div>
                          </li>
                        ))}
                      </ul>

                      <div className="mt-4 pt-4 border-t border-gray-300 dark:border-gray-700">
                        <div className="flex justify-between text-sm font-medium mb-4">
                          <span>Total:</span>
                          <span>${totalPrice.toFixed(2)}</span>
                        </div>
                        <button
                          onClick={handleCheckout}
                          className="w-full bg-new-price text-white py-2 rounded-md hover:opacity-90 transition"
                        >
                          Go to Checkout
                        </button>
                      </div>
                    </>
                  )}
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default Cart;
