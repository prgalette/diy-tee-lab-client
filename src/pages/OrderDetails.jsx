import { useParams } from "react-router-dom";
import { ShirtContext } from "../context/shirt.context";
import { useContext, useEffect, useState } from "react";
import { Form, Container, Card } from "react-bootstrap";

const OrderDetails = () => {
  const [thisOrder, setThisOrder] = useState(null);

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
            <Form.Control />
            <br />
            <Form.Label>
              <strong>Message:</strong> {thisOrder.message}
            </Form.Label>
            <Form.Control as="textarea" />
            <br />
            <Form.Label>
              <strong>Font:</strong> {thisOrder.font}
            </Form.Label>
            <Form.Select>
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
              type="color"
              id="exampleColorInput"
              defaultValue="#563d7c"
              title="Choose your color"
            />
          </Card>
        </Container>
      )}
    </div>
  );
};

export default OrderDetails;
