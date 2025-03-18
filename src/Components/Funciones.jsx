import { ListIcon, TeamIcon, ScheduleIcon } from "../assets/icons";
import { CardsFeatures } from "./index";

const Funciones = () => {
  const cardsFeatures = [
    {
      icon: <ListIcon />,
      title: "Tableros y Listas",
      description:
        "Organiza el trabajo con tableros, listas y tarjetas. Añade detalles, fechas límite y archivos adjuntos.",
    },
    {
      icon: <TeamIcon />,
      title: "Colaboración en Equipo",
      description:
        "Trabaja en tiempo real con los miembros de tu equipo en cualquier proyecto.",
    },
    {
      icon: <ScheduleIcon />,
      title: "Vista de Calendario",
      description:
        "Visualiza tus tareas y fechas límite en un formato de calendario claro.",
    },
  ];
  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col gap-2">
        <h2 className="text-3xl font-medium text-text-light text-pretty text-center lg:text-4xl">
          Funciones para ayudar a tu equipo a triunfar
        </h2>
        <span className="block text-center text-text-opacity-light lg:text-lg">
          Gestión de proyectos potente, flexible y sencilla.
        </span>
      </div>
      <div className="flex flex-col gap-3 md:flex-row md:justify-between xl:justify-center xl:gap-10">
        {cardsFeatures.map((card, index) => (
          <CardsFeatures key={index} card={card} />
        ))}
      </div>
    </div>
  );
};

export default Funciones;
