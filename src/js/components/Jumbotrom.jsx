import React from "react";

function Jumbotrom() {
  return (
    <>
      <div
        className="jumbotron"
        style={{ backgroundColor: "grey", color: "white" }}
      >
        <h1 className="display-4">Hello, world!</h1>
        <p className="lead">
          This is a simple hero unit, a simple jumbotron-style component for
          calling extra attention to featured content or information.
        </p>
        <hr className="my-4" />
        <p>
          It uses utility classes for typography and spacing to space content
          out within the larger container.
        </p>
        <p className="lead">
          <a
            className="btn btn-primary btn-lg"
            href="#"
            role="button"
            style={{ backgroundColor: "orange", color: "white" }}
          >
            Learn more
          </a>
        </p>
      </div>
    </>
  );
}

export default Jumbotrom;
