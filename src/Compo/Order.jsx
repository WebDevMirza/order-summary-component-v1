import "./Order.css";
import { Button, Card, Col, Container, Image, Row } from "react-bootstrap";
import Hero from "../images/illustration-hero.svg";
import MusicIcon from "../images/icon-music.svg";

const Order = () => {
  return (
    <>
      <Container className="d-flex align-items-center con-main">
        <Card className="rounded-4 border-0">
          <Card.Img className="rounded-4 pb-3" src={Hero} alt="Heroimg" />
          <Card.Body>
            <Card.Title className="text-head pb-3">Order Summary</Card.Title>
            <Card.Text className="pb-3">
              You can now listen to millions of songs, audiobooks, and podcasts on any device anywhere you like!
            </Card.Text>
            <Container>
              <Row className="bg-accent rounded-2 align-items-center mb-4">
                <Col xs>
                  <Image src={MusicIcon} alt="music" />
                </Col>
                <Col xs="auto">
                  <div className="text-head">Annual Plan</div>
                  <div>$59.99/year</div>
                </Col>
                <Col xs>
                  <a href="#">Change</a>
                </Col>
              </Row>
            </Container>
            <div className="d-grid mb-2">
              <Button className="btn-payment" size="lg">
                Proceed to Payment
              </Button>
            </div>
            <Button className="btn-cancel" variant="custom">
              Cancel Order
            </Button>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
};

export default Order;
