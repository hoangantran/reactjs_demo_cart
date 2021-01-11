import React from "react";
import { useState, useEffect } from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Button,
  Col,
  Row,
  Container
} from "reactstrap";
import CartContext from "../context/CartContext";

export default function Product() {
  const [products, setProduct] = useState([]);

  useEffect(() => {
    const data = localStorage.getItem("cart");
    setProduct(JSON.parse(data));
  }, []);

  return (
    <Container>
      <Row>
        {products.map((item, key) => (
          <Col sm="3">
            <Card key={key}>
              <CardImg width="100%" src={item.imageUrl} />
              <CardBody>
                <CardTitle tag="h5">{item.name}</CardTitle>
                <CardText>{item.description}</CardText>
              </CardBody>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
