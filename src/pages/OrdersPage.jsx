import { Container, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { ShirtContext } from "../context/shirt.context";
import ShirtCard from "../components/ShirtCard";

const OrdersPage = () => {
  const { orders, loading, getOrders } = useContext(ShirtContext);

  useEffect(() => {
    if (!orders.length) {
      getOrders();
    }
  }, []);

  return (
    <Container>
      <h1>Orders</h1>
      <br />
      <div className="OrdersPage">
        {loading && <p>Loading...</p>}

        {orders.length ? (
          <>
            {orders.map((shirt) => {
              return (
                <button style={{ borderRadius: "8px" }}>
                  <Card className="mx-auto" style={{ width: "26em" }}>
                    <Link
                      className="link-secondary"
                      to={`/order-details/${shirt.id}`}
                      key={shirt.id}
                      style={{ textDecoration: "none" }}
                    >
                      <h2>{shirt.designName}</h2>
                    </Link>
                  </Card>
                </button>
              );
            })}
          </>
        ) : (
          <p>No Orders yet...</p>
        )}
      </div>
    </Container>
  );
};

export default OrdersPage;
