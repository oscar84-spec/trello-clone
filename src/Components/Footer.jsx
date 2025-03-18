import { LogoHeader } from "./index";
import "../styles/footer.css";
import { GithubIcon, CodeIcon } from "../assets/icons";

const Footer = () => {
  return (
    <footer className="flex flex-col gap-3 px-2 py-5 md:px-10 lg:px-16 xl:px-20 bg-footer footer">
      <div className="flex flex-col gap-3">
        <LogoHeader coloText="text-text-dark" />
        <span className="text-text-opacity-dark text-sm">
          Organiza todo, juntos. TaskFlow ayuda a los equipos a avanzar en su
          trabajo.
        </span>
      </div>
      <div className="flex flex-col gap-2 producto">
        <h3 className="text-xl font-bold text-text-dark">Producto</h3>
        <ul className="ml-5 flex flex-col gap-2 md:ml-0">
          <li className="text-text-opacity-dark">Funciones</li>
          <li className="text-text-opacity-dark">Integraciones</li>
          <li className="text-text-opacity-dark">Precios</li>
        </ul>
      </div>
      <div className="flex flex-col gap-2 recursos">
        <h3 className="text-xl font-bold text-text-dark">Recursos</h3>
        <ul className="ml-5 flex flex-col gap-2 md:ml-0">
          <li className="text-text-opacity-dark">Blog</li>
          <li className="text-text-opacity-dark">Documentación</li>
          <li className="text-text-opacity-dark">Guias</li>
        </ul>
      </div>
      <div className="flex flex-col gap-2 empresa">
        <h3 className="text-xl font-bold text-text-dark">Empresa</h3>
        <ul className="ml-5 flex flex-col gap-2 md:ml-0">
          <li className="text-text-opacity-dark">Sobre nosotros</li>
          <li className="text-text-opacity-dark">Empleo</li>
          <li className="text-text-opacity-dark">Contacto</li>
        </ul>
      </div>
      <hr className="border-zinc-300 line" />
      <div className="flex justify-between items-center copy">
        <span className="text-sm text-pretty text-text-dark">
          &copy; 2025 TaskFlow. Todos los derechos reservados
        </span>
        <div className="flex gap-3">
          <GithubIcon />
          <CodeIcon />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
