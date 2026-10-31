
import React from "react";
import mock01 from '../assets/images/mock01.png';
import mock02 from '../assets/images/mock02.png';
import mock03 from '../assets/images/mock03.png';
import mock04 from '../assets/images/mock04.png';
import mock05 from '../assets/images/mock05.png';
import '../assets/styles/Project.scss';

function Project() {
    return (
        <div className="projects-container" id="projects">
            <h1><b>My Work</b></h1>

            {/* DEVELOPMENT */}
            <section className="project-category">
                <h2>Development</h2>
                <div className="projects-grid">

                    <div className="project">
                        <a
                            href="https://prabindangol618.github.io/keygati/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <img src={mock01} className="zoom" alt="KeyGati project" width="100%" />
                        </a>
                        <h2>KeyGati</h2>
                        <p>
                            A browser-based typing speed test that allows
                            users to practise their typing skills and
                            track their speed and accuracy.
                        </p>
                        <p><strong>Technologies:</strong> HTML, CSS, JavaScript, Tailwind CSS</p>
                        <a href="https://prabindangol618.github.io/keygati/" target="_blank" rel="noreferrer">
                            Live Website ↗
                        </a>
                    </div>

                    <div className="project">
                        <a
                            href="https://github.com/prabindangol618/AahileHaina"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <img src={mock02} className="zoom" alt="AahileHaina project" width="100%" />
                        </a>
                        <h2>AahileHaina</h2>
                        <p>
                            A parody website project built to explore
                            frontend development and create a fun,
                            unconventional web experience.
                        </p>
                        <p><strong>Technologies:</strong> React, TypeScript</p>
                        <a href="https://github.com/prabindangol618/AahileHaina" target="_blank" rel="noreferrer">
                            GitHub Repository ↗
                        </a>
                    </div>

                    <div className="project">
                        <a
                            href="https://github.com/prabindangol618/DimeDIce"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <img src={mock03} className="zoom" alt="DimeDice project" width="100%" />
                        </a>
                        <h2>DimeDice</h2>
                        <p>
                            A simple browser-based dice roller featuring
                            multiple dice, roll totals, roll history and
                            sound controls.
                        </p>
                        <p><strong>Technologies:</strong> HTML, CSS, JavaScript</p>
                        <a href="https://github.com/prabindangol618/DimeDIce" target="_blank" rel="noreferrer">
                            GitHub Repository ↗
                        </a>
                    </div>

                </div>
            </section>

            {/* GRAPHIC DESIGN */}
            <section className="project-category">
                <h2>Graphic Design</h2>
                <div className="projects-grid">

                    <div className="project">
                        <img src={mock04} className="zoom" alt="BabaJiKo Cafe poster designs" width="100%" />
                        <h2>BabaJiKo Cafe</h2>
                        <p>
                            Designed promotional posters and visual
                            materials for BabaJiKo Cafe, focusing on
                            presenting its brand and offerings through
                            engaging graphics.
                        </p>
                        <p><strong>Tools:</strong> Canva, Graphic Design</p>
                    </div>

                </div>
            </section>

            {/* SOCIAL MEDIA MANAGEMENT */}
            <section className="project-category">
                <h2>Social Media Management</h2>
                <div className="projects-grid">

                    <div className="project">
                        <img src={mock05} className="zoom" alt="Excellent Education Consultancy social media work" width="100%" />
                        <h2>Excellent Education Consultancy</h2>
                        <p>
                            Managed social media activities and content
                            publishing, helping organise and maintain
                            the consultancy's online presence.
                        </p>
                        <p><strong>Tools:</strong> Meta Business Suite, Buffer</p>
                    </div>

                </div>
            </section>

        </div>
    );
}

export default Project;
