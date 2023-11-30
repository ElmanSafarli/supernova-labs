import React from 'react';
import { Link } from "react-router-dom"

const About = () => {

    return (
        <section>
            <div class="about">
                <div class="about-content">
                    <div class="about-left">
                        <div class="about-section">ABOUT US</div>
                        <div class="about-title">
                            Discover Our Creations: Explore the World of Innovative Apps
                        </div>
                        <div class="about-text">
                            At Supernova Labs we're dedicated to leveraging technology for practical solutions that seamlessly integrate into your daily life. As a small app startup, our focus is on thoughtful innovation and user-centric design. Our journey begins with a simple belief: technology should be intuitive and enhance, not complicate, your experiences
                        </div>
                        <div class="about-text">
                            Despite our small size, our team is a blend of creativity and expertise. We approach app development with a commitment to surpassing expectations. Each team member is dedicated to the principle that our apps should be user-friendly and efficient.
                        </div>
                        <div class="about-btn"><button><Link to="/about">Reed more</Link></button></div>
                    </div>
                    <div class="about-right">
                        <img src={process.env.PUBLIC_URL + '/about.png'} alt="image" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
