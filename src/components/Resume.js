import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
// import CSS here
import PDF from '../documentation/JonathanParker_Resume2022.pdf';

// Resume component
function Resume() {
    return (
        <section id='resume' className='resume-margin'>
            <Container className='resume-section'>
                <Row>
                    <Col className='text-center'>
                        <h1>Resume</h1>
                        <hr className='star-primary' />
                        <Button variant='dark' href={PDF} download>
                            Download Resume
                        </Button>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h3>Programming Skills</h3>
                        <hr className='star-secondary' />
                        <ul className='list-inline'>
                            <li className='list-inline-item'>
                                <strong>Languages:</strong> JavaScript, HTML, CSS
                            </li>
                            <li className='list-inline-item'>
                                <strong>Frameworks/Packages:</strong> React, jQuery, Bootstrap, Express, Node
                            </li>
                            <li className='list-inline-item'>
                                <strong>Databases:</strong> MySQL, MongoDB
                            </li>
                            <li className='list-inline-item'>
                                <strong>Other Platforms:</strong> Git, GitHub, Heroku, Insomnia, VSCode
                            </li>
                        </ul>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h3>Education</h3>
                        <hr className='star-secondary' />
                        <div className='resume-item'>
                            <h4>Bachelor of Arts in Business Administration</h4>
                            <h5>NC State University, 2007-2011</h5>
                        </div>
                        <div className='resume-item'>
                            <h4>Certificate in Full Stack Web Development</h4>
                            <h5>UNC-Chapel Hill Boot Camps, 2023</h5>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h3>Work Experience</h3>
                        <hr className='star-secondary' />
                        <div className='resume-item'>
                            <h4>Business Analyst</h4>
                            <h5>Dewey's Bakery, 2022-2023</h5>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                                cursus bibendum magna, vitae dapibus felis ultricies ut. Sed ac
                                odio eget est convallis ullamcorper. Duis bibendum vestibulum
                                risus, non convallis odio aliquam eu.
                            </p>
                        </div>
                        <div className='resume-item'>
                            <h4>Mediahub</h4>
                            <h5>Assistant Media Planner, 2021-2022</h5>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                                cursus bibendum magna, vitae dapibus felis ultricies ut. Sed ac
                                odio eget est convallis ullamcorper. Duis bibendum vestibulum
                                risus, non convallis odio aliquam eu.
                            </p>
                        </div>
                        <div className='resume-item'>
                            <h4>Vertical Account Services Analyst</h4>
                            <h5>Ralph Lauren, 2013-2020</h5>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                                cursus bibendum magna, vitae dapibus felis ultricies ut. Sed ac
                                odio eget est convallis ullamcorper. Duis bibendum vestibulum
                                risus, non convallis odio aliquam eu.
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Resume;