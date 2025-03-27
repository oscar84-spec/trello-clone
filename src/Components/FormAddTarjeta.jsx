import { validationForm } from "../Validations/validationForm";
import { useForm } from "react-hook-form";
import { addTarjeta } from "../services/api/clientService";

const FormAddTarjeta = ({ onClose, listaId }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const res = await addTarjeta(data, listaId);
      console.log(res);
      onClose();
      reset();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form
      className="w-64 p-2 rounded-md absolute top-1/2 left-1/2 transform -translate-1/2 bg-white flex flex-col gap-5"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex flex-col gap-3">
        <label className="text-text-light text-lg font-medium">
          Titulo de la tarjeta
        </label>
        <input
          type="text"
          placeholder="Ejemplo"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:border-2 focus:ring-primary focus:border-primary outline-none transition-all"
          {...register("titulo", validationForm.nombre)}
        />
        {errors.titulo && (
          <span className="text-text-sm text-red-500">
            {errors.titulo.message}
          </span>
        )}
      </div>
      <div>
        <textarea
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:border-2 focus:ring-primary focus:border-primary outline-none transition-all resize-none text-md text-pretty"
          placeholder="Descripción"
          {...register("descripcion", {
            required: { value: true, message: "Este campo es requerido" },
          })}
        ></textarea>
        {errors.descripcion && (
          <span className="text-text-sm text-red-500">
            {errors.descripcion.message}
          </span>
        )}
      </div>
      <div className="flex gap-2 justify-center">
        <label className="text-md text-text-light">Alto</label>
        <input
          type="radio"
          name="prioridad"
          id=""
          value="alto"
          {...register("prioridad")}
        />
        <label className="text-md text-text-light">Medio</label>
        <input
          type="radio"
          name="prioridad"
          id=""
          value="medio"
          {...register("prioridad")}
        />
        <label className="text-md text-text-light">Bajo</label>
        <input
          type="radio"
          name="prioridad"
          id=""
          value="bajo"
          {...register("prioridad")}
        />
      </div>
      <div className="flex justify-between">
        <button className="px-2 py-1 rounded-md bg-primary text-text-dark w-28 hover:cursor-pointer">
          Agregar
        </button>
        <button
          className="px-2 py-1 rounded-md bg-accent text-text-dark w-28 hover:cursor-pointer"
          type="button"
          onClick={onClose}
        >
          Cancelar
        </button>
      </div>
    </form>
  );
};

export default FormAddTarjeta;
