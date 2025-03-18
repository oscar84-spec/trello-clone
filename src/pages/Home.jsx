import { Header, Sections } from "../templates/index";
import {
  LogoHeader,
  Navbar,
  Menu,
  Button,
  Funciones,
  Planes,
  Footer,
} from "../Components/index";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <main className="">
      <Header>
        <div className="md:flex gap-4 items-center">
          <Link to="/">
            <LogoHeader />
          </Link>
          <Navbar clase="hidden md:flex md:gap-3 md:items-center">
            <li className="text-sm text-text-light md:text-lg cursor-pointer hover:text-hover transition-colors ease-in-out">
              Funciones
            </li>
            <li className="text-sm text-text-light md:text-lg cursor-pointer hover:text-hover transition-colors ease-in-out">
              Soluciones
            </li>
            <li className="text-sm text-text-light md:text-lg cursor-pointer hover:text-hover transition-colors ease-in-out">
              Recursos
            </li>
            <li className="text-sm text-text-light md:text-lg cursor-pointer hover:text-hover transition-colors ease-in-out">
              Precios
            </li>
          </Navbar>
        </div>
        <Menu />
        <div className="hidden md:flex md:gap-3 md:items-center ">
          <Button>Iniciar Sesión </Button>
          <Button bgColor="bg-secondary">Registro</Button>
        </div>
      </Header>
      <Sections
        alto="h-[calc(100vh-48px)]"
        clases="flex flex-col gap-10 lg:flex-row lg:items-center"
      >
        <div className="flex flex-col gap-4 lg:w-1/2">
          <div className="flex flex-col gap-2">
            <h1 className="text-3xl font-bold text-pretty text-text-light md:text-4xl lg:text-5xl">
              Organiza todo, juntos
            </h1>
            <p className="text-md text-text-light md:text-lg">
              Reúne el trabajo de tu equipo en un espacio compartido. Desde
              grandes empresas hasta oficinas en casa, la forma en que tu equipo
              trabaja es única.
            </p>
          </div>
          <div className="flex justify-between md:justify-start gap-5">
            <Button>Empezar gratis</Button>
            <Button bgColor="bg-accent">Saber más</Button>
          </div>
        </div>
        <img
          src="/taskFlow.webp"
          alt="Captura de pantalla de TaskFlow"
          className="w-full md:w-[400px] object-cover rounded-md lg:w-1/2"
        />
      </Sections>
      <Sections alto="h-max" clases="py-3">
        <Funciones />
      </Sections>
      <Sections
        alto="h-max"
        clases="relative py-10 flex flex-col items-center justify-center"
      >
        <Planes />
      </Sections>
      <Footer />
    </main>
  );
};

export default Home;
