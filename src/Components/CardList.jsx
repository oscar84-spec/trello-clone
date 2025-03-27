import { MenuOpenIcon } from "../assets/icons";
import { deleteList } from "../services/api/clientService";

const CardList = ({ lista, setListas }) => {
  const deleteLista = async (id) => {
    try {
      const res = await deleteList(id);
      setListas(res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-full bg-zinc-300 rounded-md flex-shrink-0 p-2 flex flex-col gap-2 md:max-w-64">
      <div className="flex justify-between items-center border-3 border-red-500">
        <h3 className="text-lg font-medium text-text-light">{lista.titulo}</h3>
        <div onClick={() => deleteLista(lista._id)}>
          <MenuOpenIcon />
        </div>
      </div>
      <div className="border-3 border-sky-600 h-[calc(100%-28px)] overflow-x-auto">
        {/* Aquí van las tarjetas */}
        <div className="bg-zinc-600 p-2 rounded-md flex-shrink-0 "></div>
      </div>
    </div>
  );
};

export default CardList;
