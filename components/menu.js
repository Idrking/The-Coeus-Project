import { useEffect } from "react";

const Menu = () => {
  let mql = { matches: false };
  useEffect(() => {
    mql = window.matchMedia("(max-width: 600px)");
    console.log(mql);
  }, []);

  return (
    <nav>
      {mql.matches && <p>The window is small</p>}
      {!mql.matches && <p>This window is big</p>}
      <p> This is here regardless</p>
    </nav>
  );
};

export default Menu;
