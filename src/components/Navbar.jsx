import Logo from "../assets/logo.svg";
import ring from "../assets/ring.svg";
import moon from "../assets/icons/moon.svg";
import sun from "../assets/icons/sun.svg";
import shoppingCart from "../assets/shopping-cart.svg";
import { useContext, useState } from "react";
import CartDetail from "../movie/CartDetail";
import { MovieContex, ThemeContext } from "../contex/Provider";
const Navbar = () => {
  const [showCart, setShowCart] = useState(false);
  const { state } = useContext(MovieContex);
  const { darkMode, setDarkMode } = useContext(ThemeContext);
  const handleCartShow = () => {
    setShowCart(true);
  };
  return (
    <div>
      {showCart && <CartDetail onClose={() => setShowCart(false)} />}
      <div className="container flex items-center justify-between space-x-10 py-6">
        <a href="index.html">
          <img src={Logo} width="139" height="26" alt="logo" />
        </a>

        <ul className="flex items-center space-x-5">
          <li>
            <a
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="#"
            >
              <img src={ring} width="24" height="24" alt="ring" />
            </a>
          </li>
          <li>
            <a
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="#"
              onClick={() => setDarkMode(!darkMode)}
            >
              <img
                src={darkMode ? sun : moon}
                width="24"
                height="24"
                alt="moon"
              />
            </a>
          </li>
          <li>
            <a
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="#"
              onClick={handleCartShow}
            >
              <img src={shoppingCart} width="24" height="24" alt="" />
              {state.cartData.length > 0 && (
                <span className="rounded-full absolute top-[-12px] left-[28px] bg-primary/80 text-white text-center p-[2px] w-[30px] h-[30px]">
                  {state.cartData.length}
                </span>
              )}
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
