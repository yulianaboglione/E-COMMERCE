import React, { useEffect } from "react";
import { Col, ListGroup, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { getPurchasesThunk } from "../store/slices/Purchases.slice";

const Purchases = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const purchases = useSelector((state) => state.purchases);

  useEffect(() => {
    dispatch(getPurchasesThunk());
  }, []);

  const formatDate = (date) => {
    const months = [
      "Enero",
      "Febrero",
      "Marzo",
      "Abril",
      "Mayo",
      "Junio",
      "Julio",
      "Agosto",
      "Septiembre",
      "Octubre",
      "Noviembre",
      "Diciembre",
    ];
    const newDate = new Date(date);
    const day = newDate.getDate();
    const month = months[newDate.getMonth()];
    const year = newDate.getFullYear();
    return `${month} ${day}, ${year}`;
  };
  return (
    <div style={{ maxWidth: "900px", margin: "0 auto" }}>
      <h1>Purchases</h1>
      <hr />
      <ListGroup>
        {purchases.map((purchase) => {
          return (
            <ListGroup.Item
              key={purchase.id}
              style={{
                marginBottom: "20px",
                borderRadius: "20px",
                padding: "50px",
                backgroundColor: "#f5f5f5",
                border: "1px solid #e3e3e3",
              }}
            >
              <h5>
                {" "}
                <b>{formatDate(purchase.createdAt)}</b>{" "}
              </h5>
              <hr />
              {purchase.cart.products.map((product) => {
                return (
                  <Link to={`/product/${product.id}`}>
                    <div
                      key={product.id}
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "flex-start",
                        marginBottom: "20px",
                      }}
                    >
                      <div style={{ width: "50%" }}>
                        <p style={{ width: "50%" }}>{product.title}</p>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          justifyContent: "space-between",
                          width: "50%",
                        }}
                      >
                        <p>{product.productsInCart.quantity} </p>
                        <p>${product.price}</p>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </ListGroup.Item>
          );
        })}
      </ListGroup>
    </div>
  );
};

export default Purchases;
