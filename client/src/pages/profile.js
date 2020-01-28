import ProfileCard from "../components/ProfileCard/ProfileCard";
import InputForm from "../components/InputForm/InputForm";
import React from "react";
import { Row, Container, Col } from "reactstrap";
import DiabetesChart from "../components/DiabetesChart/DiabetesChart";

const Profile = () => {
  return (
    <Container>
      <Row>
        <Col md="3">
          <ProfileCard />
        </Col>
        <Col md="8">
          <InputForm />
          <DiabetesChart/>
        </Col>
      </Row>
    </Container>
  );
};

export default Profile;