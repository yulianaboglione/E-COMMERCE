import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  filterProductsThunk,
  filterQueryThunk,
  getNewProductsThunk,
} from "../store/slices/products.slice";
import {
  Button,
  Card,
  Carousel,
  Col,
  Form,
  InputGroup,
  ListGroup,
  Row,
} from "react-bootstrap";
const Home = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);

  const [categoryList, setCategoryList] = useState([]);
  const [inputSearch, setInputSearch] = useState("");

  useEffect(() => {
    dispatch(getNewProductsThunk());

    axios
      .get(`https://e-commerce-api.academlo.tech/api/v1/products/categories`)
      .then((res) => setCategoryList(res.data.data.categories));
  }, []);

  console.log(categoryList);
  return (
    <Row>
      <h4>Category</h4>
      <Col lg={3}>
        <ListGroup>
          {categoryList.map((category) => (
            <ListGroup.Item
              onClick={() => dispatch(filterProductsThunk(category.id))}
              key={category.id}
              style={{ cursor: "pointer" }}
            >
              {category.name}
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Col>
      <Col>
        <InputGroup className="mb-3">
          <Form.Control
            placeholder="Whats are you lokking for?"
            aria-label="Whats are you lokking for?"
            aria-describedby="basic-addon2"
            value={inputSearch}
            onChange={(e) => setInputSearch(e.target.value)}
          />
          <Button
            variant="outline-secondary"
            onClick={() => dispatch(filterQueryThunk(inputSearch))}
          >
            <i className="fa-solid fa-magnifying-glass"></i>
          </Button>
        </InputGroup>

        <Row xs={1} md={2} lg={3} className="g-4">
          {products.map((product) => (
            <Col key={product.id}>
              <Card style={{ height: "100%" }}>
                <Link
                  to={`/product/${product.id}`}
                  style={{ textDecoration: "none" }}
                >
                  <Carousel variant="dark" className="bg-light">
                    <Carousel.Item>
                      <img
                        src={product?.productImgs[0]}
                        alt=""
                        className="img-product-list img-fluid d-block w-100"
                        style={{ height: 350, objectFit: "contain" }}
                      />
                    </Carousel.Item>
                    <Carousel.Item>
                      <img
                        src={product?.productImgs[1]}
                        alt=""
                        className="img-product-list img-fluid d-block w-100"
                        style={{ height: 350, objectFit: "contain" }}
                      />
                    </Carousel.Item>
                    <Carousel.Item>
                      <img
                        src={product?.productImgs[2]}
                        alt=""
                        className="img-product-list img-fluid d-block w-100"
                        style={{ height: 350, objectFit: "contain" }}
                      />
                    </Carousel.Item>
                  </Carousel>

                  <Card.Body>
                    <Card.Title>{product.title}</Card.Title>
                    <Card.Text> US${product.price}</Card.Text>
                  </Card.Body>
                </Link>
              </Card>
            </Col>
          ))}
        </Row>
      </Col>
    </Row>
  );
};

export default Home;
