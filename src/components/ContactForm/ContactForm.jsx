import './ContactForm.css'

const ContactForm = () => (
    <form id="email-form" className="email-form">
        <div className="row">
            <div className="col-md-12 mb-3">
                <div className="form-group">
                    <input
                        type="text"
                        name="name"
                        className="form-control"
                        id="name"
                        placeholder="Your Name"
                        required
                    />
                </div>
            </div>
            <div className="col-md-12 mb-3">
                <div className="form-group">
                    <input
                        type="email"
                        className="form-control"
                        name="email"
                        id="email"
                        placeholder="Your Email"
                        required
                    />
                </div>
            </div>
            <div className="col-md-12 mb-3">
                <div className="form-group">
                    <input
                        type="text"
                        className="form-control"
                        name="subject"
                        id="subject"
                        placeholder="Subject"
                        required
                    />
                </div>
            </div>
            <div className="col-md-12">
                <div className="form-group">
                    <textarea
                        className="form-control"
                        name="message"
                        id="message"
                        rows="5"
                        placeholder="Message"
                        required
                    ></textarea>
                </div>
            </div>
            <div className="col-md-12 text-center pt-3">
                <button
                    type="submit"
                    className="button-a">
                    Send Message
                </button>
            </div>
        </div>
    </form>
);

export default ContactForm;
