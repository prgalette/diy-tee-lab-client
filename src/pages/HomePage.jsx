import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { ShirtContext } from "../context/shirt.context";
import ShirtCard from "../components/ShirtCard";

// import whiteTees from "../images/AdobeStock_663654428.jpeg";
// import blackTees from "../images/AdobeStock_663646779.jpeg";
// import whiteHoodies from "../images/AdobeStock_661981002.jpeg";
// import blackHoodies from "../images/AdobeStock_661981584.jpeg";

const HomePage = () => {
  const { loading, shirts, getShirts } = useContext(ShirtContext);

  useEffect(() => {
    if (!shirts.length) {
      getShirts();
    }
  }, []);

  return (
    <Container>
      <h1>Welcome to the Lab!</h1>
      <br />
      <p>
        Hello and welcome to the Do-It-Yourself tee shirt lab! Here, you have
        the opportunity to make a statement and respresent what you want the
        world to see! Simply get started by selecting which one of the Unisex
        tees or Hoodies you'd like to design. Ready to make a statement?
      </p>
      {/* <div className="d-flex justify-content-center">
        <div className="card" style={{ width: "26rem" }}>
          <img src={whiteTees} className="card-img-top" alt="..." />
          <div className="card-body">
            <h3 className="card-title">White Tee</h3>
            <p className="card-text">Testing the first card.</p>
          </div>
        </div>
      </div>
      <br />
      <div className="d-flex justify-content-center">
        <div className="card" style={{ width: "26rem" }}>
          <img src={blackTees} className="card-img-top" alt="..." />
          <div className="card-body">
            <h3 className="card-title">Black Tee</h3>
            <p className="card-text">Testing the card.</p>
          </div>
        </div>
      </div>
      <br />
      <div className="d-flex justify-content-center">
        <div className="card" style={{ width: "26rem" }}>
          <img src={whiteHoodies} className="card-img-top" alt="..." />
          <div className="card-body">
            <h3 className="card-title">White Hoodie</h3>
            <p className="card-text">Testing the card.</p>
          </div>
        </div>
      </div>
      <br />
      <div className="d-flex justify-content-center">
        <div className="card" style={{ width: "26rem" }}>
          <img src={blackHoodies} className="card-img-top" alt="..." />
          <div className="card-body">
            <h3 className="card-title">Black Hoodie</h3>
            <p className="card-text">Testing the card.</p>
          </div>
        </div>
      </div> */}

      <div className="HomePage">
        {loading && <p>Loading...</p>}

        {shirts.length ? (
          <>
            {shirts.map((shirt) => {
              return (
                <Link
                  key={shirt.id}
                  to={`/shirts/${shirt.id}`}
                  style={{ textDecoration: "none" }}
                >
                  <ShirtCard shirt={shirt} />
                </Link>
              );
            })}
          </>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </Container>
  );
};

export default HomePage;
