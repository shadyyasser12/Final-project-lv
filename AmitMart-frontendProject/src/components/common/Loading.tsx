function Loading() {
  return (
    <div>
      <div className="flex flex-row gap-2 justify-center items-center h-lvh">
        <div className="w-5 h-5 rounded-full bg-new-price animate-bounce delay-100"></div>
        <div className="w-5 h-5 rounded-full bg-new-price animate-snake delay-200"></div>
        <div className="w-5 h-5 rounded-full bg-new-price animate-bounce delay-300"></div>
      </div>
    </div>
  );
}

export default Loading;
