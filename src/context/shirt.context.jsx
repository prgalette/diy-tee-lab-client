import { createContext, useEffect, useState } from "react";
import { API_URL } from "../services/API_URL";
import axios from "axios";

const ShirtContext = createContext();

const ShirtProvider = ({ children }) => {
  const [shirts, setShirts] = useState([]);
  const [loading, setLoading] = useState(true);

  const getShirts = () => {
    axios
      .get(API_URL + "/shirts")
      .then((response) => {
        console.log("Shirts ===>", response.data);
        setShirts(response.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }

  useEffect(() => {
    
    getShirts()

}, [])

  return (
    <ShirtContext.Provider value={{ shirts, loading, getShirts }}>
        {children}
    </ShirtContext.Provider>
  );
};

export { ShirtContext, ShirtProvider};
