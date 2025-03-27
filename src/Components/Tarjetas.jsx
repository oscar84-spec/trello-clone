import { MenuOpenIcon } from "../assets/icons";
import { Badge } from "./index";
import { deleteTarjeta } from "../services/api/clientService";

const Tarjetas = ({ tarjeta, setTarjetas }) => {
  const handleDeleteTarjeta = async (id) => {
    try {
      const res = await deleteTarjeta(id);
      if (res) {
        setTarjetas(res);
      } else {
        console.log("No se pudo eliminar la tarjeta");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-zinc-100 p-2 rounded-md flex-shrink-0">
      <div className="flex justify-between">
        <h3 className="text-lg font-medium text-text-light">
          {tarjeta.titulo}
        </h3>
        <button
          className="hover:cursor-pointer"
          onClick={() => handleDeleteTarjeta(tarjeta._id)}
        >
          <MenuOpenIcon clase="hover:text-red-500 transition-colors ease-in-out" />
        </button>
      </div>
      <div className="flex gap-2">
        <Badge prioridad={tarjeta.prioridad} />
      </div>
      <div className="w-full h-max max-h-32">
        <p>{tarjeta.descripcion}</p>
      </div>
    </div>
  );
};

export default Tarjetas;
