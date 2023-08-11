import React from 'react';
import Project from './Project';
// import project images here
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
                            title: 'enter title here',
                            description: 'enter description here',
                            // imgSrc: enter project image here,
                            deployedLink:
                                'enter deployed link here',
                            githubLink:
                                'enter GitHub repository link here',
                        },
                        {
                            title: 'enter title here',
                            description: 'enter description here',
                            // imgSrc: enter project image here,
                            deployedLink:
                                'enter deployed link here',
                            githubLink:
                                'enter GitHub repository link here',
                        },
                        {
                            title: 'enter title here',
                            description: 'enter description here',
                            // imgSrc: enter project image here,
                            deployedLink:
                                'enter deployed link here',
                            githubLink:
                                'enter GitHub repository link here',
                        },
                        {
                            title: 'enter title here',
                            description: 'enter description here',
                            // imgSrc: enter project image here,
                            deployedLink:
                                'enter deployed link here',
                            githubLink:
                                'enter GitHub repository link here',
                        },
                        {
                            title: 'enter title here',
                            description: 'enter description here',
                            // imgSrc: enter project image here,
                            deployedLink:
                                'enter deployed link here',
                            githubLink:
                                'enter GitHub repository link here',
                        },
                        {
                            title: 'enter title here',
                            description: 'enter description here',
                            // imgSrc: enter project image here,
                            deployedLink:
                                'enter deployed link here',
                            githubLink:
                                'enter GitHub repository link here',
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