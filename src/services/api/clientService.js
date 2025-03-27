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
    if (!res.ok) return;
    return res.json();
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
    console.log(error);
  }
};

export const addTab = async (data, idUsuario) => {
  try {
    const res = await fetch(endPoint.addTab, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...data, idUsuario }),
    });
    return res.json();
  } catch (error) {
    console.log(error);
  }
};

export const fetchTabById = async (id) => {
  try {
    const res = await fetch(endPoint.getTabById + id);
    return res.json();
  } catch (error) {
    console.log(error);
  }
};

export const deleteTab = async (id) => {
  try {
    const res = await fetch(endPoint.deleteTabById + id, {
      method: "DELETE",
    });
    if (!res.ok) return console.log("No se pudo eliminar el tablero");
    return res.json();
  } catch (error) {
    console.log(error);
  }
};

export const addList = async (list, tableroId) => {
  try {
    const res = await fetch(endPoint.addList + tableroId, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(list),
    });
    return res.json();
  } catch (error) {
    console.log(error);
  }
};

export const fetchList = async (id) => {
  try {
    const res = await fetch(endPoint.getList + id);
    return res.json();
  } catch (error) {
    console.log(error);
  }
};

export const deleteList = async (id) => {
  try {
    const res = await fetch(endPoint.deleteList + id, {
      method: "DELETE",
    });
    if (!res.ok) return console.log("No se pudo eliminar la lista");
    return res.json();
  } catch (error) {
    console.log(error);
  }
};
