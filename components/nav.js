import { Container } from "semantic-ui-react";
import Image from "next/image";

const Nav = () => {
  return (
    <>
      <Container className="navBar">
        <div className="mainLogo">
          <Image
            src="/mainLogo3.svg"
            alt="The Coeus Project Logo"
            width={200}
            height={200}
          />
        </div>
        <h1 className="heading">This is a heading</h1>
        <p> This is a paragraph</p>
      </Container>
      <style jsx>
        {`
          ui.container.navBar {
            width: 100%;
            background-color: red;
          }

          .heading {
            font-size: 100px;
          }

          .mainLogo {
            margin-right: 20px;
            margin-top: 200px;
          }
        `}
      </style>
    </>
  );
};

export default Nav;
