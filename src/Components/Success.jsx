import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Success = () => {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigate("/dashboard");
    }, 3000);
  });

  return (
    <div className="h-screen px-2 flex flex-col gap-5 justify-center items-center">
      <h3 className="text-2xl text-text-light text-center">
        Se ha registrado exitosamente
      </h3>
      <img
        src="./done.svg"
        alt="Imagen de éxito"
        className="w-ful md:max-w-md"
      />
      <div className="flex flex-col-reverse gap-3 items-center justify-center">
        <div
          style={{ borderTopColor: "transparent" }}
          className="w-8 h-8  border-4 border-blue-200 rounded-full animate-spin"
        ></div>
        <p className="text-center text-md text-text-opacity-light">
          Redireccionando al dashboard...
        </p>
      </div>
    </div>
  );
};

export default Success;
