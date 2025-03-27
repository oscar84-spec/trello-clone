import { MenuOpenIcon } from "../assets/icons";
import { deleteList, getTarjeta } from "../services/api/clientService";
import { FormAddTarjeta, Tarjetas } from "./index";
import Modal from "@mui/material/Modal";
import { useState, useEffect } from "react";

const CardList = ({ lista, setListas }) => {
  const [openModal, setOpenModal] = useState(false);
  const [tarjetas, setTarjetas] = useState([]);

  const handleOpenModal = () => setOpenModal(!openModal);

  //Eliminar una lista
  const deleteLista = async (id) => {
    try {
      const res = await deleteList(id);
      setListas(res);
    } catch (error) {
      console.log(error);
    }
  };

  //Obtener las tarjetas de cada lista
  useEffect(() => {
    const fetchTarjetas = async (id) => {
      try {
        const res = await getTarjeta(id);
        setTarjetas(res);
      } catch (error) {
        console.log(error);
      }
    };
    fetchTarjetas(lista._id);
  }, [lista]);

  return (
    <div className="w-full bg-zinc-300 rounded-md flex-shrink-0 p-2 flex flex-col gap-2 md:max-w-64">
      <div className="flex justify-between items-center border-3 border-red-500">
        <h3 className="text-lg font-medium text-text-light">{lista.titulo}</h3>
        <div onClick={() => deleteLista(lista._id)}>
          <MenuOpenIcon />
        </div>
      </div>
      <div className="flex flex-col gap-3 border-3 border-sky-600 h-max max-h-[calc(100%-28px)] overflow-x-auto">
        {/* Aquí van las tarjetas */}
        {tarjetas.map((tarjeta) => (
          <Tarjetas
            tarjeta={tarjeta}
            key={tarjeta._id}
            setTarjetas={setTarjetas}
          />
        ))}
      </div>
      <button
        className="px-2 py-1 rounded-md w-full bg-accent text-text-dark hover:cursor-pointer sticky bottom-0"
        onClick={handleOpenModal}
      >
        Agregar tarjeta
      </button>
      <Modal open={openModal} onClose={handleOpenModal}>
        <FormAddTarjeta
          onClose={handleOpenModal}
          listaId={lista._id}
          setTarjetas={setTarjetas}
        />
      </Modal>
    </div>
  );
};

export default CardList;
