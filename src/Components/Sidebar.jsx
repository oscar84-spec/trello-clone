import {
  TabIcon,
  UserIcon,
  StarIcon,
  AddIcon,
  ArrowDownIcon,
  ArrowRight,
  MenuOpenIcon,
} from "../assets/icons/index";
import { useState } from "react";
import { FormAddTab } from "./index";
import Modal from "@mui/material/Modal";

const Sidebar = ({ estilo, userTabs, setUserTabs, idUser, tabSelected }) => {
  const [show, setShow] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const handleShow = () => setShow(!show);
  const handleOpenModal = () => setOpenModal(!openModal);

  const showNewTab = (newTab) => {
    if (!newTab || !newTab._id) {
      console.error("El nuevo tablero no tiene un _id válido:", newTab);
      return;
    }
    setUserTabs((prevTabs) => [...prevTabs, newTab]);
  };

  const idTab = (id) => tabSelected(id);

  return (
    <div className={`hidden md:flex flex-col gap-3 p-2 bg-sidebar ${estilo}`}>
      <div className="flex flex-col gap-2">
        <div className="flex gap-2 text-text-dark">
          <TabIcon coloText="text-text-dark" />
          <h2 className="text-xl text-text ">Tableros</h2>
        </div>

        <div className="flex flex-col gap-2 ml-5">
          <div className="flex gap-2 text-zinc-400">
            <StarIcon />
            <h2 className="w-full h-10 flex items-center p-1 hover:cursor-pointer hover:bg-zinc-700 rounded-md text-text">
              Tableros Destacados
            </h2>
          </div>
          <div className="flex gap-2 text-zinc-400">
            <UserIcon />
            <h2 className="w-full h-10 flex items-center p-1 hover:cursor-pointer hover:bg-zinc-700 rounded-md text-text">
              Tableros de equipo
            </h2>
          </div>
        </div>
      </div>
      <div className="flex flex-col  gap-3">
        <div
          className="flex items-center gap-1 text-zinc-400"
          onClick={handleShow}
        >
          {show ? (
            <ArrowDownIcon clase="text-text-dark" />
          ) : (
            <ArrowRight clase="text-text-dark" />
          )}
          <h2 className="w-full flex items-center text-text h-10 rounded-md p-1 hover:cursor-pointer hover:bg-zinc-700">
            Tus tableros
          </h2>
        </div>
        {show && (
          <div
            className={`flex flex-col gap-2 ml-7 overflow-y-auto 
              ${userTabs.length > 0 ? "h-max max-h-28" : "max-h-0"}`}
          >
            {userTabs.map((tab) => (
              <h2
                className="w-full flex items-center text-text-dark h-10 rounded-md p-1 hover:cursor-pointer hover:bg-zinc-700"
                key={tab._id}
                onClick={() => idTab(tab._id)}
              >
                {tab.nombre}
              </h2>
            ))}
          </div>
        )}

        <div className="w-full h-10 flex items-center p-1 hover:cursor-pointer hover:bg-zinc-700 rounded-md gap-2 text-zinc-400">
          <AddIcon />
          <button
            type="button"
            className="text-text font-medium cursor-pointer"
            onClick={handleOpenModal}
          >
            Crear nuevo tablero
          </button>
        </div>
        <Modal open={openModal} onClose={handleOpenModal}>
          <FormAddTab
            idUser={idUser}
            showNewTab={showNewTab}
            onClose={handleOpenModal}
          />
        </Modal>
      </div>
    </div>
  );
};

export default Sidebar;
