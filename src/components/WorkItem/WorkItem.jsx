import "./WorkItem.css"

const WorkItem = ({ title, imgSrc, link, category, date }) => (
    <div className="col-md-4">
        <div className="work-box">
            <a href={link} className="portfolio-lightbox">
                <div className="work-img">
                    <img src={imgSrc} alt="" className="img-fluid" decoding="async" />
                </div>
            </a>
            <div className="work-content">
                <div className="row">
                    <div className="col-sm-8">
                        <h2 className="w-title">{title}</h2>
                        <div className="w-more">
                            <span className="w-ctegory">{category}</span> /
                            <span className="w-date">{date}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default WorkItem;
