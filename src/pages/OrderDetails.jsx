import { useParams } from "react-router-dom";
import { ShirtContext } from "../context/shirt.context";
import { useContext, useEffect, useState } from "react";
import { Form, Container, Card } from "react-bootstrap";
import { API_URL } from "../services/API_URL";
import { PencilSquare, Trash3 } from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const OrderDetails = () => {
  const [thisOrder, setThisOrder] = useState({
    designName: "",
    message: "",
    font: "",
    color: "#563d7c",
    size: "",
  });

  const navigate = useNavigate();

  const { orders, getOrders } = useContext(ShirtContext);

  const { orderId } = useParams();
  console.log("Order Id ===>", orderId);

  useEffect(() => {
    if (orders.length) {
      let foundOrder = orders.find((order) => order.id == orderId);
      setThisOrder(foundOrder);
    } else {
      getOrders();
    }
  }, [orders, orderId]);

  const handleChange = (e) => {
    console.log("Value", e.target.value);
    setThisOrder((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    // console.log("This order", thisOrder)
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Create an object representing the body of the PUT request

    // Make a PUT request to the API update the project
    axios.put(API_URL + "/orders/" + orderId, thisOrder).then((response) => {
      // Once the request is resolved successfully and the project
      // is updated we navigate back to the Orders page (client-side)
      console.log("Updated order ==>", response.data)
      getOrders();

      navigate("/orders");
    });
  };

  const deleteOrder = () => {   
    // const newOrders = orders.filter((thisOrder) => thisOrder !== deletingOrder);
    // setThisOrder(newOrders);                
    // Make a DELETE request to delete the project
    console.log("this is our ID ===>", orderId)
    axios
      .delete(`${API_URL}/orders/${orderId}`)
      // .delete(API_URL + "/orders/" + orderId)
      .then(() => {
        // Once the delete request is resolved successfully
        // navigate back to the list of projects.
        getOrders();
        
        navigate("/orders");
      })
      .catch((err) => console.log(err));
  };  

  return (
    <div>
      <h1>OrderDetails</h1>
      <br />
      {thisOrder && (
        <Container>
          <Card className="mx-auto" style={{ width: "26em" }}>
            <Form.Label>
              <strong>Design Name: </strong>
              {thisOrder.designName}
            </Form.Label>
            <Form.Control name="designName" onChange={(e) => handleChange(e)} />
            <br />
            <Form.Label>
              <strong>Message:</strong> {thisOrder.message}
            </Form.Label>
            <Form.Control
              name="message"
              as="textarea"
              onChange={(e) => handleChange(e)}
            />
            <br />
            <Form.Label>
              <strong>Font:</strong> {thisOrder.font}
            </Form.Label>
            <Form.Select onChange={(e) => handleChange(e)} name="font">
              <option>Choose Your Font Type</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>
            <br />
            <Form.Label>
              <strong>Color:</strong> {thisOrder.color}
            </Form.Label>
            <Form.Control
              name="color"
              onChange={(e) => handleChange(e)}
              type="color"
              id="exampleColorInput"
              defaultValue="#563d7c"
              title="Choose your color"
            />
            <br />
            <Form.Label>{thisOrder.size}</Form.Label>
            <Form.Select onChange={(e) => handleChange(e)} name="size">
              <option>Select Size</option>
              <option value="SM">SM</option>
              <option value="M">M</option>
              <option value="L">L</option>
              <option value="XL">XL</option>
            </Form.Select>
            <br />
            <button
              onClick={handleSubmit}
              className="mx-auto"
              type="submit"
              style={{
                borderRadius: "8px",
                textDecoration: "none",
                color: "#646cff",
                width: "150px",
              }}
            >
              Update Order
            </button>
            <br />
            <Trash3 onClick={deleteOrder} className="ms-auto" type="button" />
          </Card>
        </Container>
      )}
    </div>
  );
};

export default OrderDetails;
