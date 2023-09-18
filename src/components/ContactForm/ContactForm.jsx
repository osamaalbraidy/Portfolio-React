import { useReducer } from 'react';
import './ContactForm.css'

const ContactForm = () => {
    const initState = {
        name: "",
        email: "",
        subject: "",
        message: ""
    }
    const reducer = (state, action) =>{
        switch(action.type){
            case "input":
                return {...state, [action.field] : action.value};
            default:
                return state;
        }
    }

    const [state, dispatch] = useReducer(reducer, initState)

    const handleChange = (e) =>{
        dispatch(
            {
                type : 'input',
                field: e.target.name,
                value: e.target.value
            }
        )
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        console.log(state)
    }

    return(
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
                    className="button-a">
                    Send Message
                </button>
            </div>
        </div>
    </form>
    )
};

export default ContactForm;
