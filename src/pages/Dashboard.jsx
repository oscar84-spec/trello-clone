import { HeaderDash, Sidebar, Board } from "../Components/index";
import "../styles/dashboard.css";
import { fetchDataUser, fetchUserTabs } from "../services/api/clientService";
import { useState, useEffect } from "react";

const Dashboard = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [userTabs, setUserTabs] = useState(null);
  const [selectedTab, setSelectedTab] = useState(null);

  //Obtener datos del usuario
  useEffect(() => {
    const getUserData = async () => {
      try {
        const res = await fetchDataUser();
        setUserData(res);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    getUserData();
  }, []);

  //Obtener los tableros del usuario
  useEffect(() => {
    const getUserTabs = async () => {
      if (!userData) return;
      try {
        const res = await fetchUserTabs(userData?._id);
        setUserTabs(res);
      } catch (error) {
        console.log(error);
      }
    };
    getUserTabs();
  }, [userData]);

  if (loading)
    return (
      <div className="flex flex-col-reverse gap-3 items-center justify-center">
        <div
          style={{ borderTopColor: "transparent" }}
          className="w-8 h-8  border-4 border-blue-200 rounded-full animate-spin"
        ></div>
        <p className="text-center text-md text-text-opacity-light">
          Cargando...
        </p>
      </div>
    );

  if (!userData) return <span>No tienes acceso, favor de iniciar sesión</span>;

  const tabSelected = (id) => setSelectedTab(id);
  return (
    <main className="w-full h-screen main">
      <HeaderDash
        clase="header"
        userData={userData}
        userTabs={userTabs}
        setUserTabs={setUserTabs}
        tabSelected={tabSelected}
      />
      <section className="dashboard flex">
        <Sidebar
          estilo="sidebar"
          userTabs={userTabs}
          setUserTabs={setUserTabs}
          idUser={userData._id}
          tabSelected={tabSelected}
        />
        <Board clase="boards" selectedTab={selectedTab} idUser={userData._id} />
      </section>
    </main>
  );
};

export default Dashboard;
