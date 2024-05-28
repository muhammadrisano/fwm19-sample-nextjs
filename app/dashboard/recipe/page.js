"use client"
import { handleRevalidate } from "@/app/action";
import { addRecipe } from "@/service/recipe";
import React from "react";

const page = () => {
    const handleClierChange = ()=>{
        handleRevalidate()

    }
  const hanldeAction = async (formData) => {
    try {
      const title = formData.get("title");
      const description = formData.get("description");
      const image = formData.get("image");
      const result = await addRecipe({
        title,
        description,
        image,
      });
      alert("success");
    } catch (error) {
      alert("terjadi error");
    }
  };
  
  return (
    <div>
      <form action={hanldeAction}>
        <ul>
          <li>
            <input type="text" name="title" placeholder="title" />
          </li>
          <li>
            <input type="text" name="description" placeholder="description"/>
          </li>
          <li>
            <input type="text" name="image" placeholder="image" />
          </li>
        </ul>
        <button>Simpan</button>
        <button className='px-4 py-2 rounded-lg' onClick={handleClierChange}>Clear Cache</button>

      </form>
    </div>
  );
};

export default page;
