import React from 'react';
import { Container, Row, Col, Card, Image } from 'react-bootstrap';
import ProfilePic from '../images/headshot.jpg';
import '../style/About.css';

function About() {
    return (
        // About section
        <section id="about" className="py-5">
            <h1 className="about-heading">About Me</h1>
            <Container>
                <Row>
                    <Col
                        xs={12}
                        md={4}
                        className="d-flex justify-content-center align-items-center mb-4 mb-md-0"
                    >
                        <Image src={ProfilePic} rounded fluid className="about-image" />
                    </Col>
                    <Col xs={12} md={8}>
                        <Card>
                            <Card.Body>
                                {/* <Card.Title className="text-center mb-4">
                                    About Jon Parker
                                </Card.Title> */}
                                <Card.Text>
                                    Hi! I'm Jon Parker. I'm a full-stack web developer and a recent graduate of the UNC-Chapel Hill Coding Bootcamp. I also hold a BBA degree from NC State University and have several years of experience working in analytics and customer service for companies such as Ralph Lauren and Dewey's Bakery. I'm originally from Mooresville, NC and currently live in Winston-Salem, NC with my wife, Tara, and our Great Dane, Waylon.
                                </Card.Text>
                                <Card.Text>
                                    In my spare time, I enjoy traveling, cooking, and playing video games. I am also passionate about music and have played guitar and bass since I was a teenager. I currently play bass in a 90s cover band called Red Rope Licorice.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default About;