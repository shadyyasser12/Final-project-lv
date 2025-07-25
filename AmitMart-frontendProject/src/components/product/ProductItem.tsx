import { Link } from "react-router-dom";
import { Product } from "../../reducs/Types";
import AddButton from "../common/AddButton";
import Rating from "./Rating";
import { useDispatch } from "react-redux";
import { add } from "../../reducs/slices/cartSlice";
import { motion } from "framer-motion";

type Props = {
  productDetails: Product;
};

function ProductItem({ productDetails }: Props) {
  const dispatch = useDispatch();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    dispatch(add(productDetails));
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
    >
      <Link
        to={`/shop/${productDetails.id}`}
        className="w-full flex flex-col gap-3 justify-center items-center rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-lg transition-shadow duration-300 pb-4 font-roboto text-[14px] leading-tight tracking-normal"
      >
        <div className="bg-product-col flex justify-center items-center rounded-t-[12px] w-full h-[200px] sm:h-[250px]">
          <img
            className="w-24 h-40 sm:w-20 sm:h-48 mix-blend-multiply rounded-2xl object-contain"
            src={productDetails.image}
            alt={productDetails.title}
          />
        </div>

        <div className="flex flex-col items-center gap-1 mt-2">
          <p
            title={productDetails.title}
            className="text-xs sm:text-sm text-center font-semibold truncate max-w-[100px]"
          >
            {productDetails.title}
          </p>
        </div>

        <div className="flex flex-wrap font-poppins font-semibold">
          <span className="text-new-price text-[15px] leading-[22px] font-semibold">
            ${productDetails.price}
          </span>
        </div>

        <Rating rating={productDetails.rating?.rate || 0} />

        <div onClick={handleAddToCart} className="active:scale-95 transition">
          <AddButton />
        </div>
      </Link>
    </motion.div>
  );
}

export default ProductItem;
