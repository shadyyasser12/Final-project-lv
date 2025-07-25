import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Product } from "../../reducs/Types";
import AddButton from "../../components/common/AddButton";
import Loading from "../../components/common/Loading";
import { useDispatch } from "react-redux";
import { add } from "../../reducs/slices/cartSlice";

export default function SingleProduct() {
  let { id } = useParams();
  const [product, setproduct] = useState<Product | undefined>();
  const dispatch = useDispatch();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setproduct(data);
      });
  }, [id]);

  if (!product) return <Loading />;

  return (
    <div className="container mx-auto px-4 sm:px-10 lg:px-20 py-10 dark:text-white ">
      <div className="flex flex-col items-center justify-center gap-2 max-w-[800px] mx-auto lg:gap-10">
        <div className="flex flex-col sm:flex-row w-full border-b border-custom-gary dark:border-gray-700">
          <div className="flex justify-center items-center w-full sm:w-72 lg:text-lg h-12 sm:h-10 font-poppins font-semibold bg-gray-50 dark:bg-gray-700">
            PRODUCT NAME
          </div>
          <div className="px-6 lg:px-10 flex justify-center items-center w-full  sm:w-[calc(100%-18rem)]  sm:h-10 bg-white dark:bg-gray-800 text-center sm:text-left font-poppins truncate sm:text-sm lg:text-base text-sm">
            {product.title}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row w-full border-b border-custom-gary dark:border-gray-700 items-center">
          <div className="flex justify-center items-center w-full sm:w-72 h-40 sm:h-96 font-poppins font-semibold bg-gray-50 dark:bg-gray-700 sm:mb-0">
            PRODUCT IMAGE
          </div>
          <div className="flex justify-center items-center w-full sm:w-[calc(100%-18rem)] h-60 sm:h-96 p-4 bg-white dark:bg-gray-800">
            <img
              src={product.image}
              alt={product.title}
              className="w-28 h-28 sm:w-40 sm:h-40 object-contain"
            />
          </div>
        </div>

        <div className="flex flex-col sm:flex-row w-full border-b border-custom-gary dark:border-gray-700">
          <div className="flex justify-center items-center w-full sm:w-72 h-12 sm:h-16 font-poppins font-semibold bg-gray-50 dark:bg-gray-700 lg:text-lg">
            CATEGORIES
          </div>
          <div className="flex justify-center items-center w-full sm:w-[calc(100%-18rem)] h-12 sm:h-16 px-4 bg-white dark:bg-gray-800 font-poppins text-center sm:text-left lg:text-base">
            {product.category}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row w-full border-b border-custom-gary dark:border-gray-700">
          <div className="flex justify-center items-center w-full sm:w-72 h-12 sm:h-16 font-poppins font-semibold bg-gray-50 dark:bg-gray-700 lg:text-lg">
            PRICE
          </div>
          <div className="flex justify-center items-center w-full sm:w-[calc(100%-18rem)] h-12 sm:h-16 px-4 bg-white dark:bg-gray-800 font-poppins text-center sm:text-left lg:text-base">
            ${product.price}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row w-full border-b border-custom-gary dark:border-gray-700">
          <div className="flex justify-center items-center w-full sm:w-72 h-12 sm:h-16 font-poppins font-semibold bg-gray-50 dark:bg-gray-700 lg:text-lg">
            ITEMS LEFT
          </div>
          <div className="flex justify-center items-center w-full sm:w-[calc(100%-18rem)] h-12 sm:h-16 px-4 bg-white dark:bg-gray-800 font-poppins text-center sm:text-left lg:text-base">
            {product.rating?.count ?? "N/A"}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row w-full border-b border-custom-gary dark:border-gray-700">
          <div className="flex justify-center items-center w-full sm:w-72 h-12 sm:h-16 font-poppins font-semibold bg-gray-50 dark:bg-gray-700 lg:text-lg">
            RATING
          </div>
          <div className="flex justify-center items-center w-full sm:w-[calc(100%-18rem)] h-12 sm:h-16 px-4 bg-white dark:bg-gray-800 font-poppins text-center sm:text-left lg:text-base">
            {product.rating?.rate ?? "N/A"}/10
          </div>
        </div>

        <div className="flex flex-col sm:flex-row w-full">
          <div className="flex justify-center items-center w-full sm:w-72 h-16 sm:h-32 font-poppins font-semibold bg-gray-50 dark:bg-gray-700 lg:text-lg">
            ADD TO CART
          </div>
          <div className="flex justify-center items-center w-full sm:w-[calc(100%-18rem)] h-16 sm:h-32 px-4 bg-white dark:bg-gray-800">
            <div
              onClick={(e) => {
                e.preventDefault();
                dispatch(add(product));
              }}
              className="cursor-pointer"
            >
              <AddButton />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
