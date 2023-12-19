import Form from "react-bootstrap/Form";
import { Container, FloatingLabel } from "react-bootstrap";
import { Link } from "react-router-dom";

const DesignForm = () => {
  return (
    <Container>
      <Form.Floating className="mb-3">
        <Form.Control
          id="floatingInputCustom"
          type="text"
          placeholder="Enter design name"
        />
        <label htmlFor="floatingInputCustom">Design Name</label>
      </Form.Floating>

      <FloatingLabel controlId="floatingTextarea2" label="Message">
        <Form.Control
          as="textarea"
          placeholder="Enter Your Message"
          style={{ height: "100px" }}
        />
      </FloatingLabel>

      <br />

      <Form.Select aria-label="Font Options">
        <option>Choose Your Font Type</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </Form.Select>

      <br />

      <Form.Label htmlFor="exampleColorInput">Font Color</Form.Label>
      <Form.Control
        type="color"
        id="exampleColorInput"
        defaultValue="#563d7c"
        title="Choose your color"
      />

      {/* <br />
      <button style={{ borderRadius: "8px" }}>
        <Link to="#" style={{ textDecoration: "none", color: "#646cff" }}>
          Submit
        </Link>
      </button> */}
    </Container>
  );
};

export default DesignForm;
