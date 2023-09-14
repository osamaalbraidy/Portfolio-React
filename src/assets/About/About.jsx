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
                                            I am Osama Amin Al Braidy, a passionate and dedicated
                                            computer science student from Zahle, Lebanon. With a
                                            strong background in web development and a Bachelor of
                                            Science degree in Computer Science, I am well-equipped
                                            to contribute effectively to software development
                                            projects. I have practical experience in creating
                                            websites, including Facebook and Instagram login pages,
                                            as well as e-commerce platforms like Leon, YellowMoon,
                                            Modus, Wooster, and the IT Store. I am proficient in
                                            HTML, CSS, JavaScript (including ReactJS), and have
                                            knowledge of database management using MySQL and
                                            MongoDB. With certifications from Cisco Networking
                                            Academy and a strong problem-solving mindset, I am
                                            constantly seeking opportunities to learn and grow in
                                            the field. I am a dedicated and communicative team
                                            player, ready to collaborate on innovative solutions.
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
