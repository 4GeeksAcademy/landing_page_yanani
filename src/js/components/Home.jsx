import React from "react";
import Navbar from "./Navbar";
import Jumbotrom from "./Jumbotrom";
import Card from "./Card";
import Footer from "./Footer";

const Home = () => {
  function repeatCards() {
    let cards = [];
    for (let i = 0; i < 4; i++) {
      cards.push(
        <div key={i} className="col-sm-12 col-md-12 col-lg-3 mb-3">
          <Card />
        </div>
      );
    }
    return cards;
  }
  return (
    <>
      <div>
        <div className=" col-12 md-12 col-lg-12 mb-4">
          {}
          <Navbar />
          {}
        </div>
      </div>

      <div className="col-12 md-12 col-lg-12 mb-5">
        <div>
          {}
          <Jumbotrom />
          {}
        </div>
      </div>

      <div className="d-flex flex-column container text-center">
        <div className="flex-grow-3">
          <div className="row justify-content-center g-3">
            {repeatCards(4)}{" "}
          </div>
        </div>
      </div>

      <div>
        <div className="text-white text-center p-3 mt-5">
          {}
          <Footer /> {}
        </div>
      </div>
    </>
  );
};

export default Home;
