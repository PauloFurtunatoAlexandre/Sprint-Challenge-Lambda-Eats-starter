import React from "react";
import { Link } from "react-router-dom";
import {
  Nav,
  NavLink,
  Navbar,
  NavItem,
  Container,
  Row,
  Col,
  Button
} from "reactstrap";

const MainNavbar = () => {
  return (
    <div>
      <Navbar color="light" light expand="md">
        <Container>
          <Row>
            <Col md="6">
              <h3 className="text-left">Lambda Eats</h3>
            </Col>
            <Col md="6">
              <Nav>
                <NavItem className="ml-auto">
                  <Link to="/">
                    <NavLink>Home</NavLink>
                  </Link>
                </NavItem>

                <NavItem>
                  <Link to="/pizza">
                    <Button color="primary" size="lg">
                      Pizza
                    </Button>
                  </Link>
                </NavItem>
              </Nav>
            </Col>
          </Row>
        </Container>
      </Navbar>
    </div>
  );
};

export default MainNavbar;
