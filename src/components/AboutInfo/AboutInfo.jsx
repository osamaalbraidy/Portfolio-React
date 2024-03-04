import './AboutInfo.css'

const AboutInfo = (props) => {
    return (
        <p>
            <span className="title-s">{props.title}</span>
            <span className="details">{props.details}</span>
        </p>
    )
}

export default AboutInfo
