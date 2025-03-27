import { OptionsIcon, MenuOpenIcon } from "../assets/icons/index";
import {
  fetchTabById,
  fetchUserTabs,
  fetchList,
} from "../services/api/clientService";
import { DeleteTab, AddList, CardList } from "./index";
import { useEffect, useState } from "react";
import Modal from "@mui/material/Modal";

const Board = ({ clase, selectedTab, idUser }) => {
  const [tabData, setTabData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const [openListModal, setOpenListModal] = useState(false);
  const [listas, setListas] = useState([]);

  const handleOpenModal = () => setOpenModal(!openModal);
  const handleOpenListModal = () => setOpenListModal(!openListModal);

  //Mostrar un solo tablero
  useEffect(() => {
    const loadingFirstTab = async () => {
      try {
        setLoading(true);
        setError(null);
        if (tabData?.length === 0 && idUser) {
          const tableros = await fetchUserTabs(idUser);
          if (Array.isArray(tableros) && tableros.length > 0) {
            const res = await fetchTabById(tableros[0]._id);
            setTabData(res);
          } else {
            setTabData(null);
            setError("No tienes tableros creados");
          }
        } else {
          const res = await fetchTabById(selectedTab);
          setTabData(res);
        }
      } catch (error) {
        console.error("Error al cargar tablero:", error);
        setError("Error al cargar el tablero");
        setTabData(null);
      } finally {
        setLoading(false);
      }
    };
    loadingFirstTab();
  }, [selectedTab, idUser]);

  //Obtener todas las listas
  useEffect(() => {
    const getList = async (id) => {
      try {
        if (!id) return;
        const res = await fetchList(id);
        setListas(res);
      } catch (error) {
        console.error("Error al cargar listas:", error);
      }
    };
    getList(tabData?._id);
  }, [tabData?._id]);
  if (loading) {
    return (
      <div
        className={`bg-board h-full flex items-center justify-center md:w-full`}
      >
        <p className="text-lg font-medium">Cargando tablero...</p>
      </div>
    );
  }

  if (error || !tabData) {
    return (
      <div
        className={`w-full  h-full flex items-center justify-center gap-4 md:w-full`}
      >
        <p className="text-xl font-medium">
          {error || "No hay tableros disponibles"}
        </p>
      </div>
    );
  }

  return (
    <section
      className={`border-3 border-stone-600 ${clase} w-full h-[calc(100vh-48px)] p-2 flex flex-col gap-3`}
    >
      <div className="flex justify-between items-center">
        <h3 className="text-2xl font-medium text-text-light">
          {tabData?.nombre}
        </h3>
        <div className="flex gap-3 items-center">
          <button
            type="button"
            className="px-2 py-1 rounded-md bg-red-200 hover:bg-red-500 hover:text-text-dark hover:cursor-pointer transition-colors ease-in-out"
            onClick={handleOpenModal}
          >
            Eliminar
          </button>
          <Modal open={openModal} onClose={handleOpenModal}>
            <DeleteTab tabData={tabData} onClose={handleOpenModal} />
          </Modal>
          <button type="button" className="px-2 py-1 rounded-md bg-stone-200">
            <OptionsIcon />
          </button>
        </div>
      </div>
      <div className="w-full max-w-screen h-[calc(100%-64px)] border-3 border-orange-400 flex gap-3 overflow-x-auto">
        {listas.map((lista) => (
          <CardList lista={lista} setListas={setListas} key={lista._id} />
        ))}
        <button
          type="button"
          className="w-full md:max-w-64 h-max px-2 py-1 rounded-md bg-primary text-text-dark hover:cursor-pointer flex-shrink-0"
          onClick={handleOpenListModal}
        >
          Agregar Lista
        </button>
        <Modal open={openListModal} onClose={handleOpenListModal}>
          <AddList
            tableroId={tabData._id}
            onClose={handleOpenListModal}
            setListas={setListas}
          />
        </Modal>
      </div>
    </section>
  );
};

export default Board;
