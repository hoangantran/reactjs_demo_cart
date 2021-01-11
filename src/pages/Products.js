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
    const data = [
      {
        "id": "dc8569c7-c1ff-4253-8971-22aaab3611cf",
        "name": "Blogspan",
        "description": "Centrocercus urophasianus",
        "imageUrl": "https://picsum.photos/200/300"
      }, {
        "id": "80f2933a-aecd-4f02-9e7e-c944d77ef064",
        "name": "Edgeclub",
        "description": "Grus canadensis",
        "imageUrl": "https://picsum.photos/200/300"
      }, {
        "id": "4a102429-c7e2-4092-9ac2-1d91a3d58257",
        "name": "Dabvine",
        "description": "Funambulus pennati",
        "imageUrl": "https://picsum.photos/200/300"
      }, {
        "id": "b077799e-e515-4b36-af35-57c0c422fd8d",
        "name": "Mydo",
        "description": "Oncorhynchus nerka",
        "imageUrl": "https://picsum.photos/200/300"
      }, {
        "id": "658dd681-b08a-4a91-8eab-b108f0e23420",
        "name": "Ntag",
        "description": "Columba palumbus",
        "imageUrl": "https://picsum.photos/200/300"
      }, {
        "id": "9130bd60-48bc-4566-a221-e1e9fb86b196",
        "name": "Vinte",
        "description": "Papio cynocephalus",
        "imageUrl": "https://picsum.photos/200/300"
      }, {
        "id": "1cbf9fb9-938d-4ac6-a269-5f5a10ffff14",
        "name": "Buzzdog",
        "description": "Mycteria leucocephala",
        "imageUrl": "https://picsum.photos/200/300"
      }, {
        "id": "16207be7-d0af-49cf-8cbb-3e68e13f518f",
        "name": "Dynazzy",
        "description": "Phasianus colchicus",
        "imageUrl": "https://picsum.photos/200/300"
      }, {
        "id": "c6a72cce-5ece-4f50-9c28-07f32848eed2",
        "name": "Katz",
        "description": "Alligator mississippiensis",
        "imageUrl": "https://picsum.photos/200/300"
      }, {
        "id": "db221a34-8680-42d3-ae33-58605b1e8f0a",
        "name": "Livefish",
        "description": "Pavo cristatus",
        "imageUrl": "https://picsum.photos/200/300"
      }, {
        "id": "84448590-3c4d-41d9-81ba-82c400df84ef",
        "name": "Quatz",
        "description": "Dromaeus novaehollandiae",
        "imageUrl": "https://picsum.photos/200/300"
      }, {
        "id": "9e419f02-5c1d-4699-b68c-caef13b6a009",
        "name": "Twitterbridge",
        "description": "Marmota monax",
        "imageUrl": "https://picsum.photos/200/300"
      }, {
        "id": "4536cffd-f9a9-402c-8c86-b5be20c79feb",
        "name": "Skaboo",
        "description": "Pseudoleistes virescens",
        "imageUrl": "https://picsum.photos/200/300"
      }, {
        "id": "dc04cf46-b823-447e-b116-7250267569ac",
        "name": "Digitube",
        "description": "Tadorna tadorna",
        "imageUrl": "https://picsum.photos/200/300"
      }, {
        "id": "d5086059-3ee0-43b4-90e8-4ca52056c98b",
        "name": "Twimbo",
        "description": "Phalacrocorax carbo",
        "imageUrl": "https://picsum.photos/200/300"
      }, {
        "id": "b1ec6c35-2004-414d-8c26-04bb593ae7d0",
        "name": "Youspan",
        "description": "Zalophus californicus",
        "imageUrl": "https://picsum.photos/200/300"
      }, {
        "id": "3854cb30-1228-4f6f-9358-cfff3f20756c",
        "name": "Flashset",
        "description": "Fregata magnificans",
        "imageUrl": "https://picsum.photos/200/300"
      }, {
        "id": "b50c1194-e367-49e6-b2e7-5fc66d99eac6",
        "name": "Jaxspan",
        "description": "Tursiops truncatus",
        "imageUrl": "https://picsum.photos/200/300"
      }, {
        "id": "c3b1fcfc-dd44-4c5c-ae87-a71a5de118d6",
        "name": "Vitz",
        "description": "Papio ursinus",
        "imageUrl": "https://picsum.photos/200/300"
      }, {
        "id": "2120333e-81a5-4319-9484-f9ecc75842b9",
        "name": "Skinder",
        "description": "Anthropoides paradisea",
        "imageUrl": "https://picsum.photos/200/300"
      }
    ];
    setProduct(data);
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
                <CartContext.Consumer>
                  {({ addToCart }) => (
                    <Button onClick={() => addToCart(item)}>Add to Cart</Button>
                  )}
                </CartContext.Consumer>
              </CardBody>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
