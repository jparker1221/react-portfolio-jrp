import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import '../style/Contact.css';

function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [text, setText] = useState('');
    const [nameErrorMessage, setNameErrorMessage] = useState(false);
    const [emailErrorMessage, setEmailErrorMessage] = useState(false);
    const [textErrorMessage, setTextErrorMessage] = useState(false);
    const [successMessageSent, setSuccessMessageSent] = useState(false);

    // Handles name input changes
    const handleNameChange = (e) => {
        setName(e.target.value);
        setNameErrorMessage(false);
    };

    // Handles email input changes
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
        setEmailErrorMessage(false);
    };

    // Handles message input changes
    const handleTextChange = (e) => {
        setText(e.target.value);
        setTextErrorMessage(false);
    };

    // Validate email format using regex
    const validateEmail = (email) => {
        return /\S+@\S+\.\S+/.test(email);
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        let valid = true;

        // Validates the name, email, and text fields
        if (name.length <= 1) {
            setNameErrorMessage(true);
            valid = false;
        }
        if (!validateEmail(email)) {
            setEmailErrorMessage(true);
            valid = false;
        }
        if (text.length < 1) {
            setTextErrorMessage(true);
            valid = false;
        }
        // if after checking all the validation and valid is still true, then this resets all the form fields and sends a success message  
        if (valid) {
            setName('');
            setEmail('');
            setText('');
            setSuccessMessageSent(true);
        }
    };

    // Render the contact form
    return (
        <section id='contact'>
            <Container>
                <Row>
                    <Col lg={8} className='mx-auto'>
                        <h2 className='contact-header'>Contact Me</h2>
                        {successMessageSent && (
                            <div className='alert alert-success' role='alert'>
                                Thank you for your message!
                            </div>
                        )}
                        <Form onSubmit={handleSubmit} noValidate>
                            <Form.Group className='my-4'>
                                <Form.Label htmlFor='name'>Name:</Form.Label>
                                <Form.Control
                                    type='text'
                                    placeholder='Enter your name'
                                    className={nameErrorMessage ? 'is-invalid' : ''}
                                    id='name'
                                    name='name'
                                    value={name}
                                    onChange={handleNameChange}
                                    required
                                />
                                {nameErrorMessage && (
                                    <div className='invalid-feedback'>
                                        Please enter a valid name.
                                    </div>
                                )}
                            </Form.Group>
                            <Form.Group className='my-4'>
                                <Form.Label htmlFor='email'>Email:</Form.Label>
                                <Form.Control
                                    type='email'
                                    placeholder='Enter your email address'
                                    className={emailErrorMessage ? 'is-invalid' : ''}
                                    id='email'
                                    name='email'
                                    value={email}
                                    onChange={handleEmailChange}
                                    required
                                />
                                {emailErrorMessage && (
                                    <div className='invalid-feeback'>
                                        Please enter a valid email address.
                                    </div>
                                )}
                            </Form.Group>
                            <Form.Group className='my-4'>
                                <Form.Label htmlFor='message'>Message:</Form.Label>
                                <Form.Control
                                    as='textarea'
                                    placeholder='Enter your message'
                                    className={textErrorMessage ? 'is-invalid' : ''}
                                    id='message'
                                    name='message'
                                    rows='5'
                                    value={text}
                                    onChange={handleTextChange}
                                />
                                {textErrorMessage && (
                                    <div className='invalid-feedback'>
                                        Please enter a valid message.
                                    </div>
                                )}
                            </Form.Group>
                            <Button type='submit' variant='dark' className='my-4'>
                                Send Message
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

// Export Contact
export default Contact;