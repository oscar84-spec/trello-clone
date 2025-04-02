import { Header, Sections } from "../templates";
import { LogoHeader, Navbar, Menu, Button } from "../Components";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { validationForm } from "../Validations/validationForm";
import { clientLogin } from "../services/api/clientService";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const res = await clientLogin(data);
      if (!res) {
        alert("Correo o Contraseñas incorrectos");
      } else {
        navigate("/dashboard");
      }
      reset();
    } catch (error) {
      console.log(error);
    }
  };

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
        clases="flex justify-center items-center"
        alto="h-[calc(100vh-48px)]"
      >
        <div className="w-full h-full flex flex-col gap-4 justify-center md:max-w-md">
          <h3 className="text-2xl font-bold text-text-light text-center">
            Iniciar Sesión
          </h3>
          <form
            className="flex flex-col gap-4 rounded-md shadow-md p-4"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Correo Electronico
              </label>
              <input
                type="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:border-2 focus:ring-primary focus:border-primary outline-none transition-all"
                placeholder="your@email.com"
                {...register("email", validationForm.email)}
              />
              {errors.email && (
                <span className="text-red-500 text-sm">
                  {errors.email.message}
                </span>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Contraseña
              </label>
              <input
                type="password"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:border-2 focus:ring-primary focus:border-primary outline-none transition-all"
                placeholder="••••••••"
                {...register("contrasenia", validationForm.contrasenia)}
              />
              {errors.contrasenia && (
                <span className="text-red-500 text-sm">
                  {errors.contrasenia.message}
                </span>
              )}
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="rounded border-gray-300 text-indigo-600 focus:ring-primary"
                />
                <span className="ml-2 text-sm text-gray-600">Recuerdame</span>
              </label>
              <a
                href="#"
                className="text-sm text-indigo-600 hover:text-primary"
              >
                ¿Olvidaste tu contraseña?
              </a>
            </div>

            <button className="w-full bg-primary  text-white font-medium py-2.5 rounded-lg transition-colors cursor-pointer">
              Entrar
            </button>

            <div className="mt-6 text-center text-sm text-gray-600 flex items-center justify-center gap-2">
              ¿No tienes una cuenta?
              <Link
                to="/register"
                className="text-indigo-600 hover:text-primary font-medium"
              >
                Registo
              </Link>
            </div>
          </form>
        </div>
      </Sections>
    </main>
  );
};

export default Login;
