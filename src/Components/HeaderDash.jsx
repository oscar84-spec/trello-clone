import { Header } from "../templates/index";
import { DropDown, LogoHeader, Navbar } from "./index";
import { NotificationIcon, AddIcon, UserIcon } from "../assets/icons/index";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { clientLogout } from "../services/api/clientService";

const HeaderDash = ({ clase, userData }) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleOpen = () => setIsOpen(!isOpen);

  const handleLogout = async () => {
    const res = await clientLogout();
    if (res) return navigate("/");
  };

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
        >
          <AddIcon />
        </button>
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
          <span>O</span>
          <div className="w-full flex flex-col gap-2">
            <span className="text-md text-text-opacity-light">
              {userData.nombre} {userData.apellido}
            </span>
            <span className="text-sm text-text-opacity-light">
              {userData.email}
            </span>
          </div>
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
