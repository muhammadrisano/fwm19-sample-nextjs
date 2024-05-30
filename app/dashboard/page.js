"use client";
import React, { useEffect, useState } from "react";
import Button from "./button";
import useSWR from "swr";


const fetcher = url => fetch(url).then(r => {
  if(!r.ok){
    throw 'errror'
  }
  return r.json()
} )

const Dashboard = () => {
  const {data, error, isLoading} = useSWR('/v1/recipes', fetcher )
  // const [recipe, setRecipe] = useState(null);
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(null);

  // const getRecipe = () => {
  //   setLoading(true);
  //   fetch("/v1/recipes")
  //     .then((res) => res.json())
  //     .then((res) => {
  //       setLoading(false);
  //       setRecipe(res.data);
  //     })
  //     .catch((err)=>{
  //       console.log(err);
  //       setLoading(false)
  //       setError('terjadi kesalahan')
  //     })
  // };
  // useEffect(() => {
  //   getRecipe();
  // }, []);
  // throw new Error('ada error')
  return (
    <div>
      <h1>halaman Dashboard </h1>
      {/* <p>{JSON.stringify(recipe)}</p> */}
      {isLoading && <h1>loading</h1>}
      <ul>{data?.data.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}</ul>
      {error && <p>erronya: {JSON.stringify(error)}</p>}

      <Button />
    </div>
  );
};

export default Dashboard;
