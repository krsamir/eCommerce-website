import React, { useState, useEffect } from "react";
import axios from "axios";
import Product from "../Components/Product";
import { Row, Col } from "react-bootstrap";
const HomeScreen = () => {
  const [prod, setProduct] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get("/api/products");
      setProduct(data);
    };
    fetchProducts();
  }, []);
  return (
    <>
      <h1>Latest Products</h1>
      <Row>
        {prod.map((product) => (
          <Col sm={12} md={6} lg={4} xl={3} key={product._id}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default HomeScreen;
