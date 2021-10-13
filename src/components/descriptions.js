import React from "react";
import "./css/descriptions.css";

function Descriptions() {
  return (
    <div className="container-fluid Descriptions">
      <div className="row">
        <div className="col">
          <h5 className="title-text">Real Cats</h5>
          <p className="sub-text">
            Despite the sterotypes about cats and dogs, they are still animals
            that are in need of a friend/companion. Many feel as though cats are
            better than dogs but thst doesn't mean that they deserve any less
            love.
          </p>
        </div>
        <div className="col">
          <h5 className="title-text">Real Dogs</h5>
          <p className="sub-text">
            Dogs are the best kind of friend and are the best kind of companion.
            They are the kind of animals that are cuddly/soft. They are loyal
            and always ready to play.
          </p>
        </div>
        <div className="col">
          <h5 className="title-text">Real Friends</h5>
          <p className="sub-text">
            Cats and dogs are great companions and best friends..{" "}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Descriptions;
