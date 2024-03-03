import './About.css';
import { ProfileInfo, SkillsSection } from '../../components/index'

const About = () => {
    return (
        <section id="about" className="about-mf route">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="box-shadow-full">
                            <div className="row">
                                <div className="col-md-6">
                                    <ProfileInfo />
                                    <SkillsSection />
                                </div>
                                <div className="col-md-6">
                                    <div className="about-me pt-4 pt-md-0">
                                        <div className="title-box-2">
                                            <h5 className="title-left">About me</h5>
                                        </div>
                                        <p className="lead">
                                            I am Osama Amin Al Braidy, a dedicated computer science student from Zahle,
                                            Lebanon, with a Bachelor of Science degree and a strong focus on web development.
                                            My experience encompasses creating diverse websites, 
                                            including Facebook and Instagram
                                            login pages, and contributing to e-commerce platforms like Leon,
                                            YellowMoon, Modus, Wooster,
                                            and the IT Store. Proficient in HTML, CSS, and JavaScript, 
                                            including ReactJS and NextJS, I have also delved into mobile app 
                                            development using Flutter, server-side scripting with PHP, and C programming 
                                            in operating systems. Additionally, my expertise extends to database 
                                            management with MySQL and MongoDB, and I hold certifications from Cisco 
                                            Networking Academy. With a problem-solving mindset, I am eager to 
                                            contribute to software development projects, always seeking opportunities 
                                            to learn and grow in this dynamic field. As a dedicated and communicative 
                                            team player,
                                            I am ready to collaborate on innovative solutions.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
