import React from 'react';
import { Container, Row, Col, Card, Image } from 'react-bootstrap';
import ProfilePic from '../images/headshot.jpg';
import '../style/About.css';

function About() {
    return (
        // About section
        <section id="about">
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
                                    I'm Jon Parker, a full stack web developer and recent graduate of the UNC-Chapel Hill Coding Bootcamp. I hold a BA in Business Administration from NC State University and have several years of experience working in analytics, media planning, and customer service for companies such as Ralph Lauren, MediaHub, and Dewey’s Bakery. After being exposed to web development, I decided to make the switch and am looking forward to a life of learning and building a rewarding career in this industry.
                                </Card.Text>
                                <Card.Text>
                                    Originally from Mooresville, NC, I currently reside in Winston-Salem, NC with my wife and our Great Dane. In my spare time, I enjoy traveling, cooking, playing video games, and seeing my favorite bands live. I'm also a passionate musician and have played guitar and bass since I was a teenager. I currently play bass in a 90s cover band called Red Rope Licorice.
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