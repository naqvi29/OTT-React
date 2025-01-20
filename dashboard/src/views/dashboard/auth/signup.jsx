import React, { memo, Fragment } from "react";

// react-bootstrap
import { Container, Col, Row, Form, Button } from "react-bootstrap";

// react-router
import { Link, useNavigate } from "react-router-dom";

const SignUp = memo(() => {
  let history = useNavigate();

  return (
    <Fragment>
      <section className="sign-in-page">
        <Container>
          <Row className="justify-content-center align-items-center height-self-center">
            <Col lg="7" md="12" className="align-self-center">
              <div className="sign-user_card ">
                <div className="sign-in-page-data">
                  <div className="sign-in-from w-100 m-auto">
                    <Form className="" action="/">
                      <Row>
                        <Col md="6">
                          <Form.Group className="mb-3">
                            <Form.Label>Username</Form.Label>
                            <Form.Control
                              type="text"
                              className="mb-0"
                              id="exampleInputEmail2"
                              placeholder="Enter Full Name"
                              autoComplete="off"
                              required
                            />
                          </Form.Group>
                        </Col>
                        <Col md="6">
                          <Form.Group className="mb-3">
                            <Form.Label>E-mail</Form.Label>
                            <Form.Control
                              type="email"
                              className="mb-0"
                              id="exampleInputEmail3"
                              placeholder="Enter email"
                              autoComplete="off"
                              required
                            />
                          </Form.Group>
                        </Col>
                        <Col md="6">
                          <Form.Group className="mb-3">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control
                              type="text"
                              className="mb-0"
                              id="exampleInputEmail4"
                              placeholder="First Name"
                              autoComplete="off"
                              required
                            />
                          </Form.Group>
                        </Col>
                        <Col md="6">
                          <Form.Group className="mb-3">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control
                              type="email"
                              className="mb-0"
                              id="exampleInputEmail5"
                              placeholder="Last Name"
                              autoComplete="off"
                              required
                            />
                          </Form.Group>
                        </Col>
                        <Col md="6">
                          <Form.Group className="mb-3">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                              type="password"
                              className="mb-0"
                              id="exampleInputPassword6"
                              placeholder="Password"
                              required
                            />
                          </Form.Group>
                        </Col>
                        <Col md="6">
                          <Form.Group className="mb-3">
                            <Form.Label>Repeat Password</Form.Label>
                            <Form.Control
                              type="password"
                              className="mb-0"
                              id="exampleInputPassword7"
                              placeholder="Password"
                              required
                            />
                          </Form.Group>
                        </Col>
                      </Row>
                      <div className="form-check my-2">
                        <input
                          type="radio"
                          id="customRadio1"
                          name="customRadio"
                          className="form-check-input"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="customRadio1"
                        >
                          Premium-$39 / 3 Months with a 5 day free trial
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          type="radio"
                          id="customRadio2"
                          name="customRadio"
                          className="form-check-input"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="customRadio2"
                        >
                          {" "}
                          Basic- $19 / 1 Month
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          type="radio"
                          id="customRadio3"
                          name="customRadio"
                          className="form-check-input"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="customRadio3"
                        >
                          Free-Free
                        </label>
                      </div>
                      <Button
                        type="button"
                        onClick={() => history.push("/")}
                        variant="btn btn-primary my-2"
                      >
                        Sign Up
                      </Button>
                    </Form>
                  </div>
                </div>
                <div className="mt-3">
                  <div className="d-flex justify-content-center links">
                    Already have an account?{" "}
                    <Link to="/auth/sign-in" className="text-primary ms-2">
                      Sign In
                    </Link>{" "}
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Fragment>
  );
});

SignUp.displayName = "SignUp";
export default SignUp;
