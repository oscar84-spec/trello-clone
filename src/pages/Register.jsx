import { Header, Sections } from "../templates/index";
import { Link } from "react-router-dom";
import { LogoHeader, Navbar, Menu, Button } from "../Components";

const Register = () => {
  return (
    <main>
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
          <Link to="/login">
            <Button>Iniciar Sesión </Button>
          </Link>
          <Link to="/register">
            <Button bgColor="bg-secondary">Registro</Button>
          </Link>
        </div>
      </Header>
      <Sections
        alto="h-[calc(100vh-48px)]"
        clases="flex justify-center items-center"
      >
        <div className="w-full md:max-w-md h-full flex flex-col gap-4 justify-center">
          <h3 className="text-2xl font-semibold text-text-light text-center">
            Registro
          </h3>
          <form className="flex flex-col gap-4 rounded-md shadow-md p-4">
            <div className="flex flex-col gap-2 md:flex-row md:gap-4">
              <div className="md:w-1/2">
                <label className="block text-sm font-medium text-gray-700 mb-1 ">
                  Nombre
                </label>
                <input
                  type="text"
                  className="w-full p-2 text-text-light border border-text-opacity-light rounded-md outline-none focus:border-2  focus:border-primary"
                  placeholder="Ingresa tu nombre"
                />
              </div>
              <div className="md:w-1/2">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Apellido
                </label>
                <input
                  type="text"
                  className="w-full p-2 text-text-light border border-text-opacity-light rounded-md outline-none focus:border-2  focus:border-primary"
                  placeholder="Ingresa tu apellido"
                />
              </div>
            </div>
            <div className="">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Correo Electrónico
              </label>
              <input
                type="text"
                className="w-full p-2 text-text-light border border-text-opacity-light rounded-md outline-none focus:border-2  focus:border-primary"
                placeholder="your@email.com"
              />
            </div>
            <div className="">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Contraseña
              </label>
              <input
                type="text"
                className="w-full p-2 text-text-light border border-text-opacity-light rounded-md outline-none focus:border-2  focus:border-primary"
                placeholder="••••••••"
              />
            </div>
            <div className="">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Contraseña
              </label>
              <input
                type="text"
                className="w-full p-2 text-text-light border border-text-opacity-light rounded-md outline-none focus:border-2  focus:border-primary"
                placeholder="••••••••"
              />
            </div>
            <button className="w-full bg-primary hover:bg-primary text-white font-medium py-2.5 rounded-lg transition-colors">
              Registrarme
            </button>
          </form>
        </div>
      </Sections>
    </main>
  );
};

export default Register;
