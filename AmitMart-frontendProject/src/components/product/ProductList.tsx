import { motion, AnimatePresence } from "framer-motion";
import ProductItem from "./ProductItem";
import { Product } from "../../reducs/Types";

interface ProductListProps {
  products: Product[];
}

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

const ProductList = ({ products }: ProductListProps) => (
  <motion.div
    className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-6 w-full"
    variants={containerVariants}
    initial="hidden"
    animate="show"
  >
    <AnimatePresence>
      {products.length > 0 ? (
        products.map((Product) => (
          <motion.div key={Product.id} variants={itemVariants}>
            <ProductItem productDetails={Product} />
          </motion.div>
        ))
      ) : (
        <p className="text-gray-500 text-center w-full">No products found.</p>
      )}
    </AnimatePresence>
  </motion.div>
);

export default ProductList;
