"use client";
import React, { useEffect, useState } from "react";
import Button from "./button";

const Dashboard = () => {
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getRecipe = () => {
    setLoading(true);
    fetch("/v1/recipes")
      .then((res) => res.json())
      .then((res) => {
        setLoading(false);
        setRecipe(res.data);
      })
      .catch((err)=>{
        console.log(err);
        setLoading(false)
        setError('terjadi kesalahan')
      })
  };
  useEffect(() => {
    getRecipe();
  }, []);
  // throw new Error('ada error')
  return (
    <div>
      <h1>halaman Dashboard </h1>
      {loading && <h1>loading</h1>}
      <ul>{recipe && recipe.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}</ul>

      <Button />
    </div>
  );
};

export default Dashboard;
