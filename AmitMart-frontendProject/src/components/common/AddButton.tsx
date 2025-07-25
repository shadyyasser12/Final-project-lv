function AddButton() {
  return (
    <div>
      <button className="relative overflow-hidden rounded-3xl py-1 px-3 font-poppins font-semibold text-white bg-new-price border border-transparent  h-8 flex items-center justify-center group">
        <span className="absolute inset-0 bg-white transition-transform duration-300 ease-in-out translate-x-full group-hover:translate-x-0"></span>
        <span className="relative z-10 transition-colors duration-300 ease-in-out group-hover:text-new-price">
          Add To Cart
        </span>
      </button>
    </div>
  );
}

export default AddButton;
