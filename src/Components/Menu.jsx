import { DropDown, Button } from "./index";
import { MenuClosedIcon, MenuOpenIcon } from "../assets/icons/index";
import { useState } from "react";
const Menu = () => {
  const [menuToggle, setMenuToggle] = useState(false);

  const handleMenuToggle = () => setMenuToggle(!menuToggle);
  return (
    <div className="md:hidden">
      <span onClick={handleMenuToggle}>
        {menuToggle ? <MenuOpenIcon /> : <MenuClosedIcon />}
      </span>
      {menuToggle && (
        <DropDown>
          <Button>Iniciar Sesión </Button>
          <Button bgColor="bg-secondary">Registro</Button>
        </DropDown>
      )}
    </div>
  );
};

export default Menu;
