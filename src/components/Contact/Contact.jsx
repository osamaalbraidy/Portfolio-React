import './Contact.css'
import { ContactForm, ContactInfo, SocialLinks } from '../../components';

const ContactSection = () => (
    <section id="contact" className="paralax-mf footer-paralax bg-image sect-mt4 route">
        <div className="overlay-mf"></div>
        <div className="container">
            <div className="row">
                <div className="col-sm-12">
                    <div className="contact-mf">
                        <div id="contact" className="box-shadow-full">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="title-box-2">
                                        <h5 className="title-left">Send Message Us</h5>
                                    </div>
                                    <div>
                                        <ContactForm />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="title-box-2 pt-4 pt-md-0">
                                        <h5 className="title-left">Get in Touch</h5>
                                    </div>
                                    <ContactInfo />
                                    <SocialLinks />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default ContactSection;
