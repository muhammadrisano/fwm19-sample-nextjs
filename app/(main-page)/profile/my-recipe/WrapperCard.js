import { getMyRecipe } from "@/service/recipe";
import React from "react";

const WrapperCard = async () => {
  const result = await getMyRecipe();
const data = result?.data || []
  return (
    <div>

      <div className="w-full flex flex-wrap gap-4">
        {data.map((item) => (
          <div
            className="w-52 h-80 rounded-xl border border-gray-700 px-2 py-1 overflow-hidden"
            key={item.id}
          >
            <h3 className="font-bold text-base text-center">{item.title}</h3>
            <p className="text-gray-500 text-sm">{item.id}</p>
            <p>{item.description}</p>
            <a href="">{item.image}</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WrapperCard;
