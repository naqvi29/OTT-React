import React, { memo, Fragment } from "react";

// react-bootstrap
import { Container, Col, Row, Button, Form } from "react-bootstrap";

// react-router
import { Link, useNavigate } from "react-router-dom";

const SignIn = memo(() => {
  let history = useNavigate();

  return (
    <Fragment>
      <section className="sign-in-page">
        <Container>
          <Row className="justify-content-center align-items-center height-self-center">
            <Col lg="5" md="12" className="align-self-center">
              <div className="sign-user_card ">
                <div className="sign-in-page-data">
                  <div className="sign-in-from w-100 m-auto">
                    <h3 className="mb-3 text-center">Sign in</h3>
                    <Form className="mt-4" action="">
                      <Form.Group className="mb-3">
                        <Form.Control
                          type="email"
                          className="mb-0"
                          id="exampleInputEmail1"
                          placeholder="Enter email"
                          autoComplete="off"
                          required
                        />
                      </Form.Group>
                      <Form.Group className="mb-3">
                        <Form.Control
                          type="password"
                          className="mb-0"
                          id="exampleInputPassword2"
                          placeholder="Password"
                          required
                        />
                      </Form.Group>
                      <div className=" d-flex justify-content-between align-items-cente sign-info">
                        <Button
                          type="button"
                          onClick={() => history.push("/")}
                          variant="btn btn-primary"
                        >
                          Sign in
                        </Button>
                        <div className="custom-control custom-checkbox d-inline-block">
                          <input
                            type="checkbox"
                            className="form-check-input mx-2"
                            id="customCheck"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="customCheck"
                          >
                            Remember Me
                          </label>
                        </div>
                      </div>
                    </Form>
                  </div>
                </div>
                <div className="mt-3">
                  <div className="d-flex justify-content-center links">
                    Don't have an account?{" "}
                    <Link to="/auth/sign-up" className="text-primary ms-2">
                      Sign Up
                    </Link>
                  </div>
                  <div className="d-flex justify-content-center links">
                    <Link to="/auth/pages-recoverpw" className="f-link">
                      Forgot your password?
                    </Link>
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

SignIn.displayName = "SignIn";
export default SignIn;
