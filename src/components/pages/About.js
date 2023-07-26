import React from 'react';
import ProfilePic from '../assets/images/headshot.jpg';

function About() {
    return (
        <div>
            <h1 className='header'>About Me</h1>
            <section style={{ fontFamily: '' }} className='body'>
                <img src={ProfilePic} alt="Jon Parker Profile" style={{ width: '500px', height: 'auto' }} />
                <p>
                    Hi! I'm Jon Parker. I'm a full-stack web developer and a recent graduate of the UNC-Chapel Hill Coding Bootcamp. I also hold a BBA degree from NC State University and have several years of experience working in analytics and customer service for companies such as Ralph Lauren and Dewey's Bakery. I'm originally from Mooresville, NC and currently live in Winston-Salem, NC with my wife, Tara, and our Great Dane, Waylon.
                    <br></br>
                    In my spare time, I enjoy traveling, cooking, and playing video games. I am also passionate about music and have played guitar and bass since I was a teenager. I currently play in a 90s cover band called Red Rope Licorice.
                </p>
            </section>
        </div>
    )
}

export default About;