import React, { useEffect, useState } from "react";
import { Button, ListGroup, ListGroupItem, Offcanvas } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { ckeckoutThunk, getCartThunk } from "../store/slices/cart.slice";

const Cart = ({ show, handleClose }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCartThunk());
  }, []);

  const products = useSelector((state) => state.cart);

  const Total = products.map((cart) => {
    return cart.productsInCart.quantity * Number(cart.price);
  });

  const totalToBuy = Total.reduce((a, b) => a + b, 0);

  return (
    <div>
      <Offcanvas placement="end" show={show} onHide={handleClose}>
        <Offcanvas.Header style={{ background: "#d9534f" }} closeButton>
          <Offcanvas.Title
            style={{ background: "#d9534f", color: "white", width: "100%" }}
          >
            MY PURCHASES
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ListGroup>
            {products.map((item) => (
              <ListGroupItem
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "baseline",
                  marginBottom: "20px",
                  border: "1px solid black",
                  borderRadius: "10px",
                }}
                key={item.id}
              >
                <h6>{item.brand}</h6>
                <Link to={`/product/${item.id}`} style={{ width: "30%" }}>
                  {item.title}
                </Link>
                <p>{item.productsInCart.quantity}</p>
                <p>${item.price} </p>
                <Button
                  style={{ borderRadius: "5px 0 5px 0", cursor: "none" }}
                  variant="danger"
                  className="position-absolute bottom-0 end-0"
                  size="sm"
                >
                  Total: ${item.productsInCart.quantity * item.price}
                </Button>
              </ListGroupItem>
            ))}
          </ListGroup>
          <hr />

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignContent: "space-between",
              padding: "15px",
            }}
          >
            <div>Total: </div>
            <div
              style={{
                marginLeft: "auto",
              }}
            >
              <span> US$ {totalToBuy}</span>
            </div>
          </div>

          <Button
            className="btn-danger  position-absolute end-0 bottom-0"
            style={{ width: "100%" }}
            onClick={() => dispatch(ckeckoutThunk())}
          >
            Checkout
          </Button>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
};

export default Cart;
