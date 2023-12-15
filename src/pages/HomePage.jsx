import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

import whiteTees from "../images/AdobeStock_663654428.jpeg";
import blackTees from "../images/AdobeStock_663646779.jpeg";
import whiteHoodies from "../images/AdobeStock_661981002.jpeg";
import blackHoodies from "../images/AdobeStock_661981584.jpeg";

const HomePage = () => {
  return (
    <Container>
      <h1>Home</h1>
      <br />
      <div className="d-flex justify-content-center">
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
      </div>
      <br />
      <button>
        <Link to="/page2">Go to Page 2</Link>
      </button>
    </Container>
  );
};

export default HomePage;
