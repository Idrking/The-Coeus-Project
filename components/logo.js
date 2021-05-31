import Image from "next/image";

const Logo = () => {
  return (
    <>
      <div className="mainLogo">
        <Image
          src="/mainLogo3.svg"
          alt="The Coeus Project Logo"
          width={200}
          height={200}
        />
        <div className="projectName">
          <h1>
            <span className="minimized">THE</span>
            <br />
            <span className="emphasis">COEUS</span>
            <br />
            PROJECT
          </h1>
        </div>
      </div>

      <style jsx>
        {`
          .mainLogo {
            margin: 2vw;
            display: flex;
            gap: 2vw;
          }

          h1 {
            font-family: "Anonymous Pro", monospace;
          }

          .projectName {
            font-size: 1.3rem;
            line-height: 0.9;
          }

          .emphasis {
            color: #56e39f;
          }

          .minimized {
            font-size: 0.6em;
          }
        `}
      </style>
    </>
  );
};

export default Logo;
