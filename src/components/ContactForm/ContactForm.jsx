import React, { useReducer, useState } from 'react';
import emailjs from 'emailjs-com';
import './ContactForm.css';

const ContactForm = () => {
    const initState = {
        name: "",
        email: "",
        subject: "",
        message: ""
    };

    const reducer = (state, action) => {
        switch (action.type) {
            case "input":
                return { ...state, [action.field]: action.value };
            default:
                return state;
        }
    };

    const [state, dispatch] = useReducer(reducer, initState);
    const [isSent, setIsSent] = useState(null);

    const handleChange = (e) => {
        dispatch({
            type: 'input',
            field: e.target.name,
            value: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const templateParams = {
            to_name: 'Osama Al Braidy',
            from_name: state.name,
            subject: state.subject,
            email: state.email,
            message: state.message,
        };

        emailjs.send('service_k7vidbf', 'template_fv74g44', templateParams, 'cKd_maOOQuGiHfQ1y')
            .then((result) => {
                console.log(result.text);
                setIsSent(true);
                dispatch({ type: 'input', field: 'name', value: '' });
                dispatch({ type: 'input', field: 'email', value: '' });
                dispatch({ type: 'input', field: 'subject', value: '' });
                dispatch({ type: 'input', field: 'message', value: '' }); 
            }, (error) => {
                console.log(error.text);
                setIsSent(false);
            });
    };

    return (
        <form id="email-form" className="email-form" onSubmit={handleSubmit}>
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
                            onChange={handleChange}
                            value={state.name}
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
                            onChange={handleChange}
                            value={state.email}
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
                            onChange={handleChange}
                            value={state.subject}
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
                            onChange={handleChange}
                            value={state.message}
                        ></textarea>
                    </div>
                </div>
                <div className="col-md-12 text-center pt-3">
                    <button
                        type="submit"
                        className="button-a"
                    >
                        Send Message
                    </button>
                </div>
                {isSent !== null && (
                    <p className={`${isSent ? "success" : "failed"} isSent col-md-12`}>
                        {isSent ? "Your message has been sent successfully!" : "Sorry, there was an error sending your message. Please try again later."}
                    </p>
                )}

            </div>
        </form>
    );
};

export default ContactForm;
