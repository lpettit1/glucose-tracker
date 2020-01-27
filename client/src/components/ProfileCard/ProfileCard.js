import React from "react";
import { useAuth0 } from "../../react-auth0-spa";
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Col
} from 'reactstrap';
import "./ProfileCard.css";

const ProfileCard = () => {
  const { loading, user } = useAuth0();

  if (loading || !user) {
    return <div>Loading...</div>;
  }

  return (

      <Col md="2">
        <Card className="profileCard">
          <CardImg top width="100%" src={user.picture} alt="User google image" />
          <CardBody>
            <CardTitle className="profileTitle">{user.name}</CardTitle>
            <CardSubtitle className="profileEmail">{user.email}</CardSubtitle>
            <CardText className="profileText">HEY FUCKER</CardText>
            <CardText><code>{JSON.stringify(user, null, 2)}</code></CardText>
          </CardBody>
        </Card>
      </Col>
  );
};

export default ProfileCard;