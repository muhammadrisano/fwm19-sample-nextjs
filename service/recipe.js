import { getCookie } from "./utils";

export const addRecipe = async (data) => {
  try {
    const response = await fetch("/v1/recipes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
      credentials: "include",
    });
    if (!response.ok) {
        throw new Error("gagal");
      }
    const result = await response.json();
   
    return result;
  } catch (error) {
    console.log(error);
    return Promise.reject(error.message || "terjadi error");
  }
};

export const getRecipe = async () => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/v1/recipes?limit=12`)
    if(!response.ok){
        throw new Error('terjad error')
    } 
    const result = await response.json()
    return result
  } catch (error) {
    console.log(error);
    return Promise.reject(error.message || "terjadi error");
  }
};

export const getMyRecipe = async () => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/v1/recipes/self`,{
      // next: { tags: ['recipe'] } 
      headers:{
        "Cookie": `token=${getCookie('token')};path=/;expires=Session`
      },
      cache: 'no-cache',
      credentials: "include"
    })
    if(!response.ok){
        throw new Error('terjad error')
    } 
    const result = await response.json()
    return result
  } catch (error) {
    console.log(error);
    return Promise.reject(error.message || "terjadi error");
  }
};