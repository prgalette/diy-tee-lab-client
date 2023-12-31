import { Container } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { Offcanvas } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { ShirtContext } from "../context/shirt.context";
import { Button } from "react-bootstrap";
import DesignForm from "../components/DesignForm";
import { Form, FloatingLabel } from "react-bootstrap";

const ShirtDetailsPage = () => {
  // The state variable `shirt` is currently an empty object {},
  // but you should use it to store the response from the server API (the shirt details).
  const [shirt, setShirt] = useState(null);

  const [state, setState] = useState("");

  let { shirtId } = useParams();

  const { loading, shirts, getShirts } = useContext(ShirtContext);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // The `shirtId` coming from the URL parameter is available in the URL path.
  // You can access it with the `useParams` hook from react-router-dom.
  useEffect(() => {
    if (!shirts.length) {
      getShirts();
    } else {
      console.log("Shirt Id ===>", shirtId);
      console.log("Shirts at 22 ===>", shirts);
      let thisShirt = shirts.find((shirt) => shirt.id == shirtId);
      setShirt(thisShirt);

      console.log("This shirt ===>", thisShirt);
    }
  }, [shirts, shirtId]);

  // To fetch the product details, set up an effect with the `useEffect` hook:

  return (
    <Container>
      {shirt && (
        <Card style={{ width: "99%" }}>
          <Card.Img
            variant="top"
            src={shirt.image_url}
            style={{ display: "block" }}
          />

          <>
            {/* <input
              value={state}
              onChange={(event) => {
                setState(event.target.value);
              }}
            /> */}

            <p
              style={{
                fontSize: "2vw",
                position: "absolute",
                color: "grey",
                display: "flex",
                justifyContent: "center",
                top: "190px",
                left: "380px",
                right: "380px",
                textAlign: "center",
              }}
            >
              {state}
            </p>
          </>

          <Card.Body>
            <Card.Title>{shirt.title}</Card.Title>
            <Card.Text className="text-center">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="outline-secondary" onClick={handleShow}>
              Design
            </Button>
            <Offcanvas show={show} onHide={handleClose}>
              <Offcanvas.Header closeButton>
                <Offcanvas.Title>Design Your Tee Typography</Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <DesignForm shirtId={shirt.id} />
              </Offcanvas.Body>
            </Offcanvas>
          </Card.Body>
        </Card>
      )}
      <br />
      <button style={{ borderRadius: "8px" }}>
        <Link to="/" style={{ textDecoration: "none", color: "#646cff" }}>
          Home
        </Link>
      </button>
    </Container>
  );
};

export default ShirtDetailsPage;
