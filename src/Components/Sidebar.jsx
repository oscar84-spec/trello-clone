import {
  TabIcon,
  UserIcon,
  StarIcon,
  AddIcon,
  ArrowDownIcon,
  ArrowRight,
} from "../assets/icons/index";
import { useState } from "react";

const Sidebar = ({ estilo }) => {
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(!show);
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
          {show ? <ArrowDownIcon /> : <ArrowRight />}
          <h2 className="w-full flex items-center text-text h-10 rounded-md p-1 hover:cursor-pointer hover:bg-zinc-700">
            Tus tableros
          </h2>
        </div>
        {show && (
          <div className={`flex flex-col gap-2 ml-7 overflow-y-auto `}>
            <h2 className="w-full flex items-center text-text-dark h-10 rounded-md p-1 hover:cursor-pointer hover:bg-zinc-700">
              nombre de tablero
            </h2>
          </div>
        )}

        <div className="w-full h-10 flex items-center p-1 hover:cursor-pointer hover:bg-zinc-700 rounded-md gap-2 text-zinc-400">
          <AddIcon />
          <button
            type="button"
            className="text-text font-medium cursor-pointer"
          >
            Crear nuevo tablero
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
