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

export const clientLogout = async () => {
  try {
    const res = await fetch(endPoint.logout, {
      method: "POST",
      credentials: "include",
    });
    return res.json();
  } catch (error) {
    console.log(error);
  }
};

export const fetchDataUser = async () => {
  try {
    const res = await fetch(endPoint.dashboard, {
      credentials: "include",
    });
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchUserTabs = async (id) => {
  try {
    const res = await fetch(endPoint.tabsByUserId + id);
    const tabsData = res.json();
    return tabsData;
  } catch (error) {
    console.log("rrrr", error);
  }
};
