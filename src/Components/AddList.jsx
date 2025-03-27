import { useForm } from "react-hook-form";
import { validationForm } from "../Validations/validationForm";
import { addList } from "../services/api/clientService";

const AddList = ({ tableroId, onClose, setListas }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const handleSubmitList = async (data) => {
    try {
      const res = await addList(data, tableroId);
      if (res) {
        setListas((prev) => [...prev, res]);
        onClose();
        reset();
      } else {
        console.log("No se pudo agregar la lista");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form
      className="w-max p-2 bg-white rounded-md flex flex-col gap-5 absolute top-1/2 left-1/2 transform -translate-1/2"
      onSubmit={handleSubmit(handleSubmitList)}
    >
      <div className="flex flex-col gap-3 w-52 md:w-max">
        <label className="text-lg text-text-light font-medium">
          Nombre de la lista
        </label>
        <input
          type="text"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:border-2 focus:ring-primary focus:border-primary outline-none transition-all"
          placeholder="Por Hacer"
          {...register("titulo", validationForm.nombre)}
        />
        {errors.titulo && (
          <p className="text-red-500">{errors.titulo.message}</p>
        )}
      </div>
      <div className="flex justify-between">
        <button className="px-2 py-1 rounded-md bg-primary text-text-dark hover:cursor-pointer">
          Agregar
        </button>
        <button
          type="button"
          className="px-2 py-1 rounded-md bg-secondary text-text-dark hover:cursor-pointer"
          onClick={onClose}
        >
          Cancelar
        </button>
      </div>
    </form>
  );
};

export default AddList;
