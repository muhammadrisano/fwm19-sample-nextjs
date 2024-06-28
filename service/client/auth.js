
export const login = async (form) => {
  try {
    console.log("login");
    const response = await fetch("/v1/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
      credentials: "include",
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
    return Promise.reject("ada error");
  }
};

export const logout = async () => {
  try {
    const response = await fetch("/v1/auth/logout", {
      method: "GET",
      // headers: {
      //   "Content-Type": "application/json",
      // },
      credentials: "include",
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
    return Promise.reject("ada error");
  }
};

