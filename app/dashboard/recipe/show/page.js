
import { getRecipe } from "@/service/recipe";
import React from "react";

const RecipeShow = async () => {

  const { data } = await getRecipe();
  return (
    <div className="container mx-auto">
      <div className="w-full flex flex-wrap gap-5">
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

export default RecipeShow;
