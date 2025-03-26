import { deleteTab } from "../services/api/clientService";

const DeleteTab = ({ tabData, onClose }) => {
  const handleDeleteTab = async (id) => {
    console.log("idTab", id);
    try {
      const res = await deleteTab(id);
      if (res) onClose();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col gap-5 w-72 md:w-max p-2 rounded-md absolute top-1/2 left-1/2 transform -translate-1/2 bg-amber-50">
      <span className="text-lg text-text-light font-medium">
        ¿Seguro que desea eliminar el tablero {tabData.nombre}?
      </span>
      <div className="flex justify-between">
        <button
          className="w-28 bg-red-500 px-2 py-1 rounded-md text-text-dark hover:cursor-pointer"
          onClick={() => handleDeleteTab(tabData._id)}
        >
          Eliminar
        </button>
        <button
          className="w-28 bg-blue-500 px-2 py-1 rounded-md text-text-dark hover:cursor-pointer"
          onClick={onClose}
        >
          Cancelar
        </button>
      </div>
    </div>
  );
};

export default DeleteTab;
