import { HeaderDash, Sidebar } from "../Components/index";
import "../styles/dashboard.css";
import { getDataDashboard } from "../services/api/clientService";
import { useState, useEffect } from "react";

const Dashboard = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getUserData = async () => {
      try {
        const res = await getDataDashboard();
        setUserData(res);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    getUserData();
  }, []);

  if (loading) return <p>Cargando...</p>;

  if (!userData) return <span>No tienes acceso, favor de iniciar sesión</span>;
  return (
    <main className="w-full h-screen main">
      <HeaderDash clase="header" userData={userData} />
      <section className="dashboard flex">
        <Sidebar estilo="sidebar" />
      </section>
    </main>
  );
};

export default Dashboard;
