import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import CartItem from "./CartItem";
import { CartItem as CartItemType } from "../../reducs/slices/cartSlice";

type Props = {
  cart: CartItemType[];
  totalPrice: number;
  onClose: () => void;
  onCheckout: () => void;
};

export default function CartDrawer({
  cart,
  totalPrice,
  onClose,
  onCheckout,
}: Props) {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[998] bg-black"
        onClick={onClose}
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
              onClick={onClose}
              className="text-gray-500 hover:text-red-500 dark:hover:text-red-400"
            >
              <FontAwesomeIcon icon={faX} />
            </button>
          </div>

          {cart.length === 0 ? (
            <p className="text-sm text-gray-500 dark:text-gray-400 text-center py-10">
              Your cart is empty.
            </p>
          ) : (
            <>
              <ul className="flex flex-col gap-4 overflow-y-auto max-h-[40vh] pr-1 overflow-x-hidden">
                {cart.map((item, i) => (
                  <CartItem key={i} item={item} />
                ))}
              </ul>

              <div className="mt-4 pt-4 border-t border-gray-300 dark:border-gray-700">
                <div className="flex justify-between text-sm font-medium mb-4">
                  <span>Total:</span>
                  <span>${totalPrice.toFixed(2)}</span>
                </div>
                <button
                  onClick={onCheckout}
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
  );
}
