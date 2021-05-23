import { Container } from "semantic-ui-react";
import Image from "next/image";

const Nav = () => {
  return (
    <Container>
      <Image
        src="/mainLogo.png"
        alt="The Coeus Project Logo"
        width={200}
        height={200}
      />
    </Container>
  );
};

export default Nav;
