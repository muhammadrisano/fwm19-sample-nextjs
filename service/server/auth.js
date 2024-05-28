
import { getCookie } from "../utils";

export const getProfile = async () => {
  try {
   

    const response = await fetch("https://pijar-mama-recipe.vercel.app/v1/users/profile", {
      credentials: "include",
      headers:{
        "Cookie": `token=${getCookie('token')};path=/;expires=Session`
      },
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
    return Promise.reject("ada error");
  }
};
