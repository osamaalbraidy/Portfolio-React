import './ServiceItem.css'

const ServiceItem = ({ icon, title, description }) => {
    return (
        <div className="col-md-4">
            <div className="service-box">
                <div className="service-ico">
                    <span className="ico-circle">
                        <img src={icon} alt="" />
                    </span>
                </div>
                <div className="service-content">
                    <h2 className="s-title">{title}</h2>
                    <p className="s-description text-center">{description}</p>
                </div>
            </div>
        </div>
    );
};

export default ServiceItem;
