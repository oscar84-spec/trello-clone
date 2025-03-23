import endPoints from "./endPoints";

export const verificarSesion = async () => {
  try {
    const res = await fetch(endPoints.dashboard, {
      credentials: "include",
    });
    const data = await res.json();
    if (data.status === 200) return data;
  } catch (error) {
    console.log(error);
  }
};
