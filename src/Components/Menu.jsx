import { DropDown, Button } from "./index";
import { MenuClosedIcon, MenuOpenIcon } from "../assets/icons/index";
import { useState } from "react";
import { Link } from "react-router-dom";
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
          <Link to="/login">
            <Button>Iniciar Sesión </Button>
          </Link>
          <Link to="/register">
            <Button bgColor="bg-secondary">Registro</Button>
          </Link>
        </DropDown>
      )}
    </div>
  );
};

export default Menu;
