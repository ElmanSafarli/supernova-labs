import React from 'react';
import NavBar from '../include/navBar';
import Footer from '../include/footer';


const About = () => {

    return (
        <div>
            <header>
                <nav>
                    <NavBar />
                </nav>
                <div class="aboutHeader">
                    <div class="aboutHeader-content">
                        <div class="aboutHeader-left">
                            <div class="aboutHeader-section">ABOUT US</div>
                            <div class="aboutHeader-title">
                                Discover Our Creations:
                                Explore the World of Innovative Apps
                            </div>
                            <div class="aboutHeader-text">
                                Join me on this journey of exploration and discovery. From sleek interfaces to powerful
                                functionalities, each app is a testament to my dedication to pushing the boundaries of what's
                                possible. Explore the future of digital innovation with InnovateApps – where your device meets
                                the extraordinary.
                            </div>
                        </div>
                        <div class="aboutHeader-right">
                            <img src={process.env.PUBLIC_URL + '/about2.png'} alt="Logo" />
                        </div>
                    </div>
                </div>
            </header >
            <div class="aboutMore">
                <div class="aboutMore-content">
                    <div class="aboutMore-section">OVERVIEW</div>
                    <div class="aboutMore-title">Who are we</div>
                    <div class="aboutMore-text">
                        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of
                        classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin
                        professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words,
                        consectetur, from a Lorem Ipsum passage
                    </div>
                    <div class="aboutMore-text">
                        The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.
                        Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default About;
