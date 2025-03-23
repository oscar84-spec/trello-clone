import endPoint from "./endPoints";

//Registrar usuario
export const clientRegister = async (data) => {
  try {
    const res = await fetch(endPoint.register, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (res.ok) return res.json();
  } catch (error) {
    console.log(error);
  }
};

//Iniciar Sesión
export const clientLogin = async (data) => {
  try {
    const res = await fetch(endPoint.login, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
      credentials: "include",
    });
    if (res.ok) return res.json();
  } catch (error) {
    console.log(error);
  }
};
