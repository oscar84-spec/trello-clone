import { OptionsIcon, MenuOpenIcon } from "../assets/icons/index";
const Board = () => {
  return (
    <section className="w-full p-2 flex flex-col gap-5">
      <div className="flex justify-between items-center">
        <h3 className="text-2xl text-text-light">Nombre del tablero</h3>
        <div className="flex gap-5 items-center">
          <button
            type="button"
            className="p-1 text-text-opacity-light bg-zinc-100 rounded-md hover:cursor-pointer hover:bg-zinc-300 hover:text-text-light hover:transition-colors hover:ease-in-out"
          >
            Compartir
          </button>
          <button
            type="button"
            className="p-1 text-text-opacity-light bg-zinc-100 rounded-md hover:cursor-pointer hover:bg-zinc-300 hover:text-text-light hover:transition-colors hover:ease-in-out"
          >
            <OptionsIcon />
          </button>
        </div>
      </div>
      <div className="w-full h-[calc(100vh-148px)] border flex gap-5 md:h-[calc(100vh-116px)] overflow-x-auto">
        {/*------------------------ Listas -------------------------------*/}
        <div className="w-full h-full p-1 bg-stone-100 rounded-md flex flex-col gap-3 flex-shrink-0 max-w-76 md:max-w-72">
          <div className="flex justify-between items-center">
            <h3 className="text-lg text-text-light font-medium">
              Nombre de la lista
            </h3>
            <button type="button" className="rounded-full p-0.5 bg-stone-400">
              <MenuOpenIcon />
            </button>
          </div>
          <ul className="flex flex-col gap-2 flex-shrink-0 overflow-y-auto">
            <li className="w-full h-8 bg-stone-300 rounded-md"></li>
            <li className="w-full h-8 bg-stone-300 rounded-md"></li>
            <li className="w-full h-8 bg-stone-300 rounded-md"></li>
            <li className="w-full h-8 bg-stone-300 rounded-md"></li>
          </ul>
        </div>
        <div className="w-full h-full p-1 bg-stone-100 rounded-md flex flex-col gap-3 flex-shrink-0 max-w-76 md:max-w-72">
          <div className="flex justify-between items-center">
            <h3 className="text-lg text-text-light font-medium">
              Nombre de la lista
            </h3>
            <button type="button" className="rounded-full p-0.5 bg-stone-400">
              <MenuOpenIcon />
            </button>
          </div>
          <ul className="flex flex-col gap-2 flex-shrink-0 overflow-y-auto">
            <li className="w-full h-8 bg-stone-300 rounded-md"></li>
            <li className="w-full h-8 bg-stone-300 rounded-md"></li>
            <li className="w-full h-8 bg-stone-300 rounded-md"></li>
            <li className="w-full h-8 bg-stone-300 rounded-md"></li>
          </ul>
        </div>
        <div className="w-full h-full p-1 bg-stone-100 rounded-md flex flex-col gap-3 flex-shrink-0 max-w-76 md:max-w-72">
          <div className="flex justify-between items-center">
            <h3 className="text-lg text-text-light font-medium">
              Nombre de la lista
            </h3>
            <button type="button" className="rounded-full p-0.5 bg-stone-400">
              <MenuOpenIcon />
            </button>
          </div>
          <ul className="flex flex-col gap-2 flex-shrink-0 overflow-y-auto">
            <li className="w-full h-8 bg-stone-300 rounded-md"></li>
            <li className="w-full h-8 bg-stone-300 rounded-md"></li>
            <li className="w-full h-8 bg-stone-300 rounded-md"></li>
            <li className="w-full h-8 bg-stone-300 rounded-md"></li>
          </ul>
        </div>
        <div className="w-full h-full p-1 bg-stone-100 rounded-md flex flex-col gap-3 flex-shrink-0 max-w-76 md:max-w-72">
          <div className="flex justify-between items-center">
            <h3 className="text-lg text-text-light font-medium">
              Nombre de la lista
            </h3>
            <button type="button" className="rounded-full p-0.5 bg-stone-400">
              <MenuOpenIcon />
            </button>
          </div>
          <ul className="flex flex-col gap-2 flex-shrink-0 overflow-y-auto">
            <li className="w-full h-8 bg-stone-300 rounded-md"></li>
            <li className="w-full h-8 bg-stone-300 rounded-md"></li>
            <li className="w-full h-8 bg-stone-300 rounded-md"></li>
            <li className="w-full h-8 bg-stone-300 rounded-md"></li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Board;
