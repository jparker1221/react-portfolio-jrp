import React from 'react';
import Project from './Project';
import brewFinder from '../images/brewFinder.png';
import inkedIn from '../images/inkedIn.png';
import musicGenerator from '../images/musicGenerator.png';
import passwordGenerator from '../images/passwordGenerator.png';
import textEditor from '../images/textEditor.png';
import workdayScheduler from '../images/workdayScheduler.png';
import '../style/Portfolio.css';

// Portfolio page
function Portfolio() {
    return (
        // Portfolio container
        <div className="portfolio-wrapper">
            <h1 className="portfolio-title">Portfolio</h1>
            <div className="container">
                <div className="row">
                    {[
                        {
                            title: 'Password Generator',
                            description: 'A password generator that creates a random password for the user based on a series of prompts',
                            imgSrc: passwordGenerator,
                            deployedLink:
                                'https://jparker1221.github.io/mondo-generator-3/',
                            githubLink:
                                'https://github.com/jparker1221/mondo-generator-3',
                        },
                        {
                            title: 'Work Day Scheduler',
                            description: 'A calendar application that saves events for each hour of the workday using jQuery to dynamically update the HTML and CSS',
                            imgSrc: workdayScheduler,
                            deployedLink:
                                'https://jparker1221.github.io/daily-planner-module-5-challenge/',
                            githubLink:
                                'https://github.com/jparker1221/daily-planner-module-5-challenge',
                        },
                        {
                            title: 'Just Another Text Editor',
                            description: 'A text editor that runs in the browser and meets the progressive web application criteria',
                            imgSrc: textEditor,
                            deployedLink:
                                'https://pwa-jrp-52b4e4ae0537.herokuapp.com/',
                            githubLink:
                                'https://github.com/jparker1221/text-editor-module-19-pwa',
                        },
                        {
                            title: 'Brew Finder',
                            description: 'An app that allows the user to search for breweries and local weather by city',
                            imgSrc: brewFinder,
                            deployedLink:
                                'https://seropyan1995.github.io/Brew-Finder-Project-01/',
                            githubLink:
                                'https://github.com/Seropyan1995/Brew-Finder-Project-01',
                        },
                        {
                            title: 'Random Music Generator',
                            description: "An app that creates a playlist of songs based on the user's artist or genre input",
                            imgSrc: musicGenerator,
                            deployedLink:
                                'https://new-random-playlist-generator.herokuapp.com/',
                            githubLink:
                                'https://github.com/andrewbreytenbach/Random-Playlist-Generator',
                        },
                        {
                            title: 'InkedIn',
                            description: 'A MERN-based social media platform where tattoo artists can network and tattoo enthusiasts can find inspiration for their next tattoo',
                            imgSrc: inkedIn,
                            deployedLink:
                                'https://inkedin-ef5cc989f602.herokuapp.com/',
                            githubLink:
                                'https://github.com/bnadel4/inkedin',
                        },
                    ].map((project, index) => (
                        // Div container for each project
                        <div className="col-12 col-md-6 col-lg-4 my-2" key={index}>
                            {/* <h2>{project.title}</h2> */}
                            <Project
                                title={project.title}
                                description={project.description}
                                imgSrc={project.imgSrc}
                                deployedLink={project.deployedLink}
                                githubLink={project.githubLink}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
// Export Portfolio
export default Portfolio;