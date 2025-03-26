import { useForm } from "react-hook-form";
import { validationForm } from "../Validations/validationForm";
import { addTab } from "../services/api/clientService";

const FormAddTab = ({ idUser, showNewTab, onClose }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const res = await addTab(data, idUser);
      showNewTab(res);
      reset();
      onClose();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form
      className="bg-white flex flex-col gap-5 rounded-md p-3 absolute top-1/2 left-1/2 transform -translate-1/2"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex flex-col gap-2">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Nombre del tablero
        </label>
        <input
          type="text"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:border-2 focus:ring-primary focus:border-primary outline-none transition-all"
          placeholder="Mi tablero"
          {...register("nombre", validationForm.nombre)}
        />
        {errors.nombre && (
          <span className="text-red-500">{errors.nombre.message}</span>
        )}
      </div>
      <button
        type="submit"
        className="bg-primary text-text-dark p-0.5 rounded-md hover:cursor-pointer"
      >
        Agregar
      </button>
    </form>
  );
};

export default FormAddTab;
