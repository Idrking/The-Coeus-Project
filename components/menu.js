import { useMediaQuery } from "react-responsive";
import MobileMenu from "../components/mobileMenu";
import DesktopMenu from "../components/desktopMenu";

const Menu = () => {
  const largeScreen = useMediaQuery({ query: "(min-device-width: 1224px)" });

  return (
    <nav>
      {largeScreen && <DesktopMenu />}
      {!largeScreen && <MobileMenu />}
    </nav>
  );
};

export default Menu;
