import { title } from "process";
import React from "react";

type Props = {
  title: string;
};

function Featers({ title }: Props) {
  return (
    <div className="flex flex-col gap-3 items-center">
      <h2
        className="flex items-center font-roboto text-[26px] leading-[33.3px]
        tracking-normal text-featers font-semibold "
      >
        {title}
      </h2>
      <div className="bg-new-price w-[50px] h-[1px]">

      </div>
    </div>
  );
}

export default Featers;
