import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { ShirtContext } from "../context/shirt.context";
import ShirtCard from "../components/ShirtCard";

const OrdersPage = () => {
 

  const { orders, loading, getOrders } = useContext(ShirtContext)

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
                <Link to={`/order-details/${shirt.id}`} key={shirt.id}>        
                  <h2>{shirt.designName}</h2>
                </Link>
                
              );
            })}
          </>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </Container>
  )
}

export default OrdersPage