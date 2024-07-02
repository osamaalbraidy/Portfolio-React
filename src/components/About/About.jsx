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
                                            <p>
                                                I'm Osama Amin Al Braidy, a dedicated computer science student from Zahle, Lebanon, armed with a Bachelor of Science degree and a fervent passion for web development. My journey encompasses crafting diverse websites, from designing login pages for social media giants like Facebook and Instagram to contributing to the frontend of e-commerce platforms such as Kolshein, Rose-Chic, Netflix clone, This Portfolio, and the IT Store.
                                            </p>
                                            <p>
                                                Proficient in HTML, CSS, and JavaScript, I've embraced modern technologies like ReactJS and NextJS to build dynamic and responsive web applications. Additionally, I've ventured into mobile app development using Flutter, bringing seamless experiences to handheld devices. On the server-side, I've mastered server-side scripting with PHP and explored C programming in operating systems.
                                            </p>
                                            <p>
                                                Moreover, I've integrated Tailwind CSS to enhance the aesthetics and functionality of my projects, ensuring sleek and efficient user interfaces. My expertise extends to database management with MySQL and MongoDB, complemented by certifications from Cisco Networking Academy. Recently, I have also learned Laravel.
                                            </p>
                                            <p>
                                                With a problem-solving mindset, I'm eager to tackle challenges and contribute to innovative software development projects. I thrive in collaborative environments, always seeking opportunities to learn and grow in this ever-evolving field.
                                            </p>
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
