import React, { useEffect } from "react";
import { Button, Card, Carousel, Col, ListGroup, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { getNewProductsThunk } from "../store/slices/products.slice";

const ProductsDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getNewProductsThunk());
  }, []);

  const productsList = useSelector((state) => state.products);

  const product = productsList.find(
    (productItem) => productItem.id === Number(id)
  );
  const relatedProducts = productsList.filter(
    (productItem) =>
      productItem.category.id === product.category.id &&
      product.id !== productItem.id
  );

  console.log(relatedProducts);

  return (
    <div>
      <Row xs={1} md={2} lg={2}>
        <Col lg={6}>
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
        </Col>

        <Col lg={6}>
          <h1>{product?.title}</h1>
          <br />
          <p>{product?.description}</p>
          <h5> Price: US${product?.price}</h5>
          <Button className="btn btn-danger" style={{ width: "8rem" }}>
            buy
          </Button>
        </Col>
      </Row>
      <br />
      <br />
      <h2>Related Products</h2>
      <br />
      {/* -------- PRODUCTOS SUGERIDOS-------*/}
      <Row xs={1} md={2} lg={3} className="g-4">
        {relatedProducts.map((productItem) => (
          <Col key={productItem.id}>
            <Link
              to={`/product/${productItem.id}`}
              style={{ textDecoration: "none" }}
            >
              <Card style={{ height: "100%" }}>
                <Card.Img
                  variant="top"
                  src={productItem?.productImgs[0]}
                  style={{ height: 200, objectFit: "contain" }}
                />
                <Card.Body>
                  <Card.Title>{productItem.title}</Card.Title>
                  <Card.Text>
                    <p>${productItem?.price}</p>
                  </Card.Text>
                  <Button
                    variant="danger"
                    className="position-absolute bottom-0 end-0"
                  >
                    View Details
                  </Button>
                </Card.Body>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default ProductsDetail;
