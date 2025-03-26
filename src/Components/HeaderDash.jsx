import { Header } from "../templates/index";
import { DropDown, LogoHeader, Navbar, FormAddTab } from "./index";
import {
  NotificationIcon,
  AddIcon,
  UserIcon,
  ArrowDownIcon,
  ArrowRight,
} from "../assets/icons/index";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { clientLogout } from "../services/api/clientService";
import { Modal } from "@mui/material";

const HeaderDash = ({
  clase,
  userData,
  userTabs,
  setUserTabs,
  tabSelected,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showTab, setShowTab] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const navigate = useNavigate();

  const handleOpen = () => setIsOpen(!isOpen);
  const handleOpenModal = () => setOpenModal(!openModal);
  const initialLetter = userData?.nombre.charAt(0).toUpperCase();

  const handleLogout = async () => {
    const res = await clientLogout();
    if (res) return navigate("/");
  };

  const handleShowTab = () => setShowTab(!showTab);

  const showNewTab = (newTab) => {
    if (!newTab || !newTab._id) {
      console.error("El nuevo tablero no tiene un _id válido:", newTab);
      return;
    }
    setUserTabs((prevTabs) => [...prevTabs, newTab]);
  };

  const idTab = (id) => tabSelected(id);

  return (
    <Header clases={`bg-header flex justify-between ${clase}`}>
      <div className="md:flex gap-10 items-center">
        <Link to="/dashboard">
          <LogoHeader coloText="text-text-dark" />
        </Link>
        <Navbar clase="hidden md:flex md:gap-3 md:items-center">
          <li className="text-text-dark text-md lg:hover:cursor-pointer lg:hover:text-red-500 lg:transition-colors lg:ease-in-out">
            Tableros
          </li>
          <li className="text-text-dark text-md lg:hover:cursor-pointer lg:hover:text-red-500 lg:transition-colors lg:ease-in-out">
            Recientes
          </li>
          <li className="text-text-dark text-md lg:hover:cursor-pointer lg:hover:text-red-500 lg:transition-colors lg:ease-in-out">
            Destacados
          </li>
        </Navbar>
      </div>
      <div className="flex gap-3 items-center">
        <button
          type="button"
          className="p-1 rounded-md lg:hover:cursor-pointer lg:hover:bg-stone-50/20 lg:transition-colors lg:ease-in-out"
        >
          <NotificationIcon />
        </button>
        <button
          type="button"
          className="p-1 rounded-md lg:hover:cursor-pointer lg:hover:bg-stone-50/20 lg:transition-colors lg:ease-in-out"
          onClick={handleOpenModal}
        >
          <AddIcon />
        </button>
        <Modal open={openModal} onClose={handleOpenModal}>
          <FormAddTab
            idUser={userData._id}
            showNewTab={showNewTab}
            onClose={handleOpenModal}
          />
        </Modal>
        <button
          type="button"
          className="p-1 rounded-md lg:hover:cursor-pointer lg:hover:bg-stone-50/20 lg:transition-colors lg:ease-in-out"
          onClick={handleOpen}
        >
          <UserIcon />
        </button>
      </div>
      {isOpen && (
        <DropDown clase="items-center md:w-48 md:left-[75%] lg:left-[80%] xl:left-[85%]">
          <span className="text-xl text-text-light font-bold">
            {initialLetter}
          </span>
          <div className="w-full flex flex-col gap-2">
            <span className="text-md text-text-opacity-light">
              {userData.nombre} {userData.apellido}
            </span>
            <span className="text-sm text-text-opacity-light">
              {userData.email}
            </span>
            <div
              className="flex items-center gap-1 text-text-opacity-light md:hidden"
              onClick={handleShowTab}
            >
              {showTab ? <ArrowDownIcon /> : <ArrowRight />}
              <h2 className="w-full flex items-center text-text-opacity-light h-10 rounded-md p-1 hover:cursor-pointer hover:bg-zinc-200">
                Tus tableros
              </h2>
            </div>
          </div>
          {showTab && (
            <div
              className={`flex flex-col gap-2 ml-7 overflow-y-auto md:hidden
              ${userTabs.length > 0 ? "h-max max-h-28" : "max-h-0"}`}
            >
              {userTabs.map((tab) => (
                <h2
                  className="w-full flex items-center text-text-light h-10 rounded-md p-1 hover:cursor-pointer hover:bg-zinc-200"
                  key={tab._id}
                  onClick={() => idTab(tab._id)}
                >
                  {tab.nombre}
                </h2>
              ))}
            </div>
          )}
          <button
            type="button"
            className="p-1 w-full bg-primary rounded-md text-text-dark"
            onClick={handleLogout}
          >
            Cerrar Sesión
          </button>
        </DropDown>
      )}
    </Header>
  );
};

export default HeaderDash;
