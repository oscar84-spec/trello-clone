import { MenuOpenIcon } from "../assets/icons";

const Tarjetas = ({ tarjeta }) => {
  return (
    <div className="bg-zinc-100 p-2 rounded-md flex-shrink-0">
      <div className="flex justify-between">
        <h3 className="text-lg font-medium text-text-light">
          {tarjeta.titulo}
        </h3>
        <button>
          <MenuOpenIcon />
        </button>
      </div>
      <div className="flex gap-2">Badges</div>
      <div className="w-full h-max max-h-32">
        <p>{tarjeta.descripcion}</p>
      </div>
    </div>
  );
};

export default Tarjetas;
