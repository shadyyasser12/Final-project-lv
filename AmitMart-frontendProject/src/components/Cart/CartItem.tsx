import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { add, decrement } from "../../reducs/slices/cartSlice";
import { useDispatch } from "react-redux";
import { CartItem as CartItemType } from "../../reducs/slices/cartSlice";

type Props = { item: CartItemType };

function CartItem({ item }: Props) {
  const dispatch = useDispatch();

  return (
    <li className="flex gap-4 items-start border-b border-gray-200 dark:border-gray-700 pb-4">
      <img
        className="w-12 h-12 object-cover rounded-md shrink-0"
        src={item.image}
        alt={item.title}
      />
      <div className="flex-1 overflow-hidden">
        <p className="text-sm font-medium truncate">{item.title}</p>
        <p className="text-sm text-gray-700 dark:text-gray-300">
          ${item.price.toFixed(2)}
        </p>
      </div>
      <div className="flex items-center gap-2 mt-1">
        <button
          onClick={() => dispatch(decrement(item))}
          className="text-red-500 hover:text-red-700 dark:hover:text-red-400 text-sm"
        >
          {item.quantity > 1 ? "-" : <FontAwesomeIcon icon={faX} />}
        </button>
        <span className="text-xs">{item.quantity}</span>
        <button
          onClick={() => dispatch(add(item))}
          className="text-green-500 hover:text-green-700 dark:hover:text-green-400 text-sm"
        >
          +
        </button>
      </div>
    </li>
  );
}

export default CartItem;
