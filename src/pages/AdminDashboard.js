// src/pages/AdminDashboard.js
import React from "react";
import { Link } from "react-router-dom";
import { Card, Button, Row, Col } from "react-bootstrap";
import Layout from "../components/Layout/Layout";
import './AdminDashboard.css';

const AdminDashboard = () => {
  return (
    <Layout>
  <div style={{ maxWidth: "800px", margin: "auto", padding: "20px" }}>
    <h3 className="text-center mb-4">Admin Dashboard</h3>
    <Row xs={1} md={3} className="g-4">
      <Col>
        <Card className="h-100 shadow-custom" style={{ border: "none" }}>
          <Card.Body>
            <Card.Title>Manage Vehicles</Card.Title>
            <Card.Text>
              View, add, update, and delete vehicle details.
            </Card.Text>
            <Link to="/vehicles-dashBoard">
              <Button
                variant="dark"
                className="mt-2 w-100"
                style={{ backgroundColor: "black", borderColor: "black" }}
              >
                Manage Vehicles
              </Button>
            </Link>
          </Card.Body>
        </Card>
      </Col>
      <Col>
        <Card className="h-100 shadow-custom" style={{ border: "none" }}>
          <Card.Body>
            <Card.Title>Manage Drivers</Card.Title>
            <Card.Text>
              View, add, update, and delete driver details.
            </Card.Text>
            <Link to="/driver-details">
              <Button
                variant="dark"
                className="mt-2 w-100"
                style={{ backgroundColor: "black", borderColor: "black" }}
              >
                Manage Drivers
              </Button>
            </Link>
          </Card.Body>
        </Card>
      </Col>
      <Col>
        <Card className="h-100 shadow-custom" style={{ border: "none" }}>
          <Card.Body>
            <Card.Title>Manage Trips</Card.Title>
            <Card.Text>
              View, add, update, and delete trip details.
            </Card.Text>
            <Link to="/trips">
              <Button
                variant="dark"
                className="mt-2 w-100"
                style={{ backgroundColor: "black", borderColor: "black" }}
              >
                Manage Trips
              </Button>
            </Link>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  </div>
</Layout>

  );
};

export default AdminDashboard;





{/* <Layout>
<div style={{ maxWidth: "800px", margin: "auto", padding: "20px" }}>
  <h3 className="text-center mb-4">Admin Dashboard</h3>
  <Row xs={1} md={3} className="g-4">
    <Col>
      <Card className="h-100 shadow-sm">
        <Card.Body>
          <Card.Title>Manage Vehicles</Card.Title>
          <Card.Text>
            View, add, update, and delete vehicle details.
          </Card.Text>
          <Link to="/vehicles-dashBoard">
            <Button variant="primary" className="mt-2 w-100">
              Manage Vehicles
            </Button>
          </Link>
        </Card.Body>
      </Card>
    </Col>
    <Col>
      <Card className="h-100 shadow-sm">
        <Card.Body>
          <Card.Title>Manage Drivers</Card.Title>
          <Card.Text>
            View, add, update, and delete driver details.
          </Card.Text>
          <Link to="/driver-details">
            <Button variant="primary" className="mt-2 w-100">
              Manage Drivers
            </Button>
          </Link>
        </Card.Body>
      </Card>
    </Col>
    <Col>
      <Card className="h-100 shadow-sm">
        <Card.Body>
          <Card.Title>Manage Trips</Card.Title>
          <Card.Text>
            View, add, update, and delete trip details.
          </Card.Text>
          <Link to="/trips">
            <Button variant="primary" className="mt-2 w-100">
              Manage Trips
            </Button>
          </Link>
        </Card.Body>
      </Card>
    </Col>
  </Row>
</div>
</Layout> */}
