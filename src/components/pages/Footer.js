import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function Footer() {
    return(
        <>
        <footer className='footer bg-primary text-white'>
            <div className='footer-container'>
                <section className='social-icons-wrapper d-flex flex-md-row justify-content-center'>
                    <div id='Github-footer' className='d-flex flex-column align-items-center mx-md-2 transparent-bg'>
                        <a href='https://github.com/jparker1221' className='btn tooltip-test icon'>
                            <FontAwesomeIcon icon= {faGithub}/>
                        </a>
                    </div>
                    <div id='Linkedin-footer' className='d-flex flex-column align-items-center mx-md-2 transparent-bg'>
                        <a href='https://www.linkedin.com/in/jonathan-parker-25375647/' className='btn tooltip-test icon'>
                            <FontAwesomeIcon icon= {faLinkedin}/>
                        </a>
                    </div>
                    </section>
                <section className='form-footer'>
                    <h5 className='footer-text'>Designed by Jon Parker</h5>
                </section>
            </div>
        </footer>
        </>
    )
}

export default Footer;