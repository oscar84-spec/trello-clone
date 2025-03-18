import { CheckIcon } from "../assets/icons";
import { CardPlan } from "./index";

const Planes = () => {
  const cardsPlans = [
    {
      icon: <CheckIcon />,
      title: "Gratis",
      description: "Para individuos o equipos pequeños que están comenzando.",
      price: "$0",
      features: [
        "Tableros ilimitados.",
        "Hasta 10 miembros.",
        "Automatizaciones básicas.",
      ],
      button: "Comenzar",
    },
    {
      icon: <CheckIcon />,
      title: "Pro",
      description: "Para equipos en crecimiento que necesitan más funciones.",
      price: "$10",
      features: [
        "Todo lo de Gratis.",
        "Miembros ilimitados.",
        "Automatizaciones avanzadas.",
        "Controles de administrador.",
      ],
      button: "Prueba gratis",
    },
    {
      icon: <CheckIcon />,
      title: "Empresa",
      description:
        "Para organizaciones que necesitan seguridad y soporte adicional.",
      price: "$30",
      features: [
        "Todo lo de Pro.",
        "Seguridad nivel empresarial.",
        "Soporte prioritario.",
        "Integraciones personalizadas",
      ],
      button: "Contactar ventas",
    },
  ];
  return (
    <div className="flex flex-col gap-4">
      <div className="absolute inset-0 -z-10 h-full w-full bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#4e89e1_100%)] "></div>
      <div className="flex flex-col gap-2">
        <h2 className="text-3xl font-bold text-pretty text-center text-text-light md:text-4xl lg:text-5xl">
          Elige el plan perfecto para ti
        </h2>
        <span className="block text-text-opacity text-center text-pretty md:text-lg">
          Ya seas un equipo pequeño o una gran organización, tenemos un plan que
          se adapta a tus necesidades.
        </span>
      </div>
      <div className="flex flex-col gap-4 md:flex-row md:flex-wrap md:justify-center">
        {cardsPlans.map((plan, index) => (
          <CardPlan key={index} plan={plan} />
        ))}
      </div>
    </div>
  );
};

export default Planes;
