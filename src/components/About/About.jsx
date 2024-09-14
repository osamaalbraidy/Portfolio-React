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
                                <div className="col-md-12">
                                    <ProfileInfo />
                                    <SkillsSection />
                                </div>
                                <div className="col-md-12">
                                    <div className="about-me pt-4 pt-md-0">
                                        <div className="title-box-2">
                                            <h5 className="title-left">About me</h5>
                                        </div>
                                        <p className="lead">
                                            <p>
                                                I’m Osama Amin Al Braidy, a passionate Computer Science graduate from Zahle, Lebanon, with a Bachelor of Science degree and over two years of hands-on experience in web and mobile development. My journey spans across building and contributing to various projects, including designing login pages for platforms like Facebook and Instagram, and developing the front end of e-commerce platforms such as KolShein, Rose-Chic, Netflix Clone, this portfolio, and the IT Store.
                                            </p>
                                            <p>
                                                Proficient in HTML, CSS, and JavaScript, I have embraced modern frameworks like ReactJS, NextJS, and Tailwind CSS to create dynamic, responsive web applications that deliver excellent user experiences. Additionally, I’ve ventured into mobile app development using React Native and Flutter, bringing seamless experiences to mobile devices.
                                            </p>
                                            <p>
                                                On the backend, I’ve worked with PHP, Laravel, and .NET, gaining experience in server-side scripting, API integrations, and database management using MySQL and MongoDB. I’ve also explored C programming for operating systems, further strengthening my understanding of low-level programming concepts.
                                            </p>
                                            <p>
                                                I’m adept at developing full-stack solutions, as demonstrated by my work on admin dashboards for platforms like PIXELS and MSM, where I implemented features for managing categories, services, users, and more. My technical toolbox includes TypeScript, Bootstrap, Node.js, and Express.js, alongside tools like Git and Visual Studio Code.
                                            </p>
                                            <p>
                                                My academic background is complemented by certifications from Cisco Networking Academy, including CCNA and Cyber Ops Associate, solidifying my foundation in network security and communication protocols. Currently, I’m further expanding my skill set by pursuing a course on building apps with .NET Core and React, aiming to master full-stack development and gain deeper expertise in high-demand technologies.
                                            </p>
                                            <p>
                                                Driven by a problem-solving mindset and a commitment to continuous learning, I’m eager to tackle challenging software development projects. I thrive in collaborative environments, where I can contribute to innovative solutions, optimize performance, and stay at the forefront of technological advancements.
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
