import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../reducs/Store/store";
import { Order } from "../../../reducs/Types";
import { removeOrder } from "../../../reducs/slices/ordersSlice";

function Orders() {
  const orders: Order[] = useSelector((state: RootState) => state.Orders);
  const dispatch = useDispatch();

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4">Your Orders</h2>
      {orders.length === 0 ? (
        <p>No orders placed yet.</p>
      ) : (
        orders.map((order, index) => {
          const total = order.items.reduce(
            (sum, item) => sum + item.price * (item.quantity || 1),
            0
          );

          return (
            <div
              key={index}
              className="mb-6 p-4 border rounded-md dark:border-gray-700"
            >
              <div className="mb-2 font-medium text-center text-sm">
                Order Date: {new Date(order.date).toLocaleString()}
              </div>

              <div className="border w-3/4 m-auto border-gray-500 mb-4"></div>

              <ul>
                {order.items.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-4 mb-1 mt-4 text-sm"
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-10 object-cover rounded"
                    />
                    <span className="text-[11px] truncate w-32">
                      {item.title}
                    </span>
                    <span className="ml-auto text-gray-700 dark:text-gray-300">
                      ${item.price.toFixed(2)} × {item.quantity}
                    </span>
                  </li>
                ))}
              </ul>
              <div className="mt-4 pt-4 border-t border-gray-300 dark:border-gray-600 flex justify-between items-center">
                <div className="font-semibold">Total: ${total.toFixed(2)}</div>
                <button
                  onClick={() => dispatch(removeOrder(index))}
                  className="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600 transition text-sm"
                >
                  Cancel Order
                </button>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
}

export default Orders;
