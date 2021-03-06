import React from "react";
import { Col, Form, Row, Button } from "react-bootstrap";
import { NavLink, useLocation, useHistory } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const Login = () => {
  const location = useLocation();
  const { GoogleSignIn, setIsLoading } = useAuth();
  const history = useHistory();
  const redirect_uri = location.state?.from || "/shop";

  const handleGoogleLogIn = () => {
    GoogleSignIn()
      .then(() => {
        setIsLoading(true);
        history.push(redirect_uri);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <div className="text-center mt-3">
      <h1>Login</h1>
      <Form className="w-25 mx-auto">
        <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
          <Form.Label column sm="2">
            Email:
          </Form.Label>
          <Col sm="10">
            <Form.Control placeholder="Enter your e-mail" />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
          <Form.Label column sm="2">
            Password:
          </Form.Label>
          <Col sm="10">
            <Form.Control type="password" placeholder="Password" />
          </Col>
        </Form.Group>
        <Button variant="success" className="fs-5 px-3 mb-3" type="submit">
          SUBMIT
        </Button>
      </Form>
      <p>
        New to ema-john website?
        <NavLink to="/register">Create Account</NavLink>
        <div>----------- or -------------</div>
        <button onClick={handleGoogleLogIn} className="btn btn-outline-primary fs-5">
          Google Sign In
        </button>
      </p>
    </div>
  );
};

export default Login;
