import Form from "react-bootstrap/Form";
import { Container, FloatingLabel } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import { ShirtContext } from '../context/shirt.context'
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { API_URL } from "../services/API_URL";


const DesignForm = ({ shirtId }) => {

  const [thisOrder, setThisOrder] = useState({
    designName: "",
    message: "",
    font: "",
    color: "#563d7c",
    size: "",
    shirtId: shirtId

  })

  const { getOrders } = useContext(ShirtContext)
  

  const navigate = useNavigate();

  const handleChange = (e) => {
    console.log("Value", e.target.value)
    setThisOrder((prev) => ({...prev, [e.target.name]: e.target.value}))
    // console.log("This order", thisOrder)
  };

  

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Submitting order...")

    axios.post(API_URL + '/orders', thisOrder)
      .then((response) => {
        console.log("New order ==>", response.data)
        getOrders()
        navigate("/orders")
      })
      .catch((err) => {
        console.log(err)
      })
    
  };

  return (
    <Container >
      <Form.Floating className="mb-3">
        <Form.Control
          onChange={(e) => handleChange(e)}
          name="designName"
          id="floatingInputCustom"
          type="text"
          placeholder="Enter design name"
        />
        <label htmlFor="floatingInputCustom">Design Name</label>
      </Form.Floating>

      <FloatingLabel controlId="floatingTextarea2" label="Message">
        <Form.Control
          onChange={(e) => handleChange(e)}
          name='message'
          type="text"
          as="textarea"
          placeholder="Enter Your Message"
          style={{ height: "100px" }}
        />
      </FloatingLabel>

      <br />

      <Form.Select onChange={(e) => handleChange(e)} aria-label="Font Options" name="font">
        <option>Choose Your Font Type</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </Form.Select>

      <br />

      <Form.Label htmlFor="exampleColorInput">Font Color</Form.Label>
      <Form.Control
        onChange={(e) => handleChange(e)}
        name="color"
        type="color"
        id="exampleColorInput"
        defaultValue="#563d7c"
        title="Choose your color"
      />

      <br />

      <Form.Select onChange={(e) => handleChange(e)} aria-label="Font Options" name="size">
        <option>Select Size</option>
        <option value="SM">SM</option>
        <option value="M">M</option>
        <option value="L">L</option>
        <option value="XL">XL</option>
      </Form.Select>

      <br />
      <button onClick={handleSubmit} type="click" style={{ borderRadius: "8px", color: "#646cff" }}>
          Submit
      </button>
    </Container>
  );
};

export default DesignForm;
