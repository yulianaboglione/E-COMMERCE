import axios from "axios";
import React from "react";
import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";

const Login = () => {
  const { register, handleSubmit } = useForm();

  const navigate = useNavigate();

  const submit = (data) => {
    axios
      .post(`https://e-commerce-api.academlo.tech/api/v1/users/login`, data)
      .then((res) => {
        navigate("/");
        console.log(res);
        localStorage.setItem("token", res.data.data.token);
      })
      .catch((error) => {
        if (error.response?.status === 404) {
          alert("Credenciales incorrectas");
        } else {
          console.log(error.response?.data);
        }
      });
  };
  return (
    <div className="login">
      <p>Welcome! Enter your email and password to continue</p>
      <div class="test-data">
        <h5 style={{ color: "#bfa6a2" }}>Test data</h5>
        <div class="field">
          <i class="fa-solid fa-envelope-circle-check"></i> max@gmail.com
        </div>
        <div class="field">
          <i class="fa-solid fa-lock"></i> pass1234
        </div>
      </div>
      <Form
        onSubmit={handleSubmit(submit)}
        style={{ maxWidth: 500, margin: "0 auto" }}
      >
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            {...register("email")}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            {...register("password")}
          />
        </Form.Group>

        <Button variant="danger" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Login;
