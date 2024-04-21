<<<<<<< HEAD
import './Work.css'
import { WorkItem } from '../../components';
import { Link as Link2 } from 'react-router-dom';
import WorkData from '../../Data/WorksData'
import { FaArrowRight } from "react-icons/fa";

const PortfolioSection = () => {
    const portfolioItems = WorkData

    return (
        <section id="work" className="portfolio-mf sect-pt4 route">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="title-box text-center">
                            <h3 className="title-a">Portfolio</h3>
                            <div className="line-mf"></div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {portfolioItems.map((item, index) => (
                        item.main?(<WorkItem
                            key={index}
                            title={item.title}
                            imgSrc={item.imgSrc}
                            link={item.link}
                            category={item.category}
                            date={item.date}
                        />):(<></>)
                    ))}
                </div>
                <div className='row'>
                <Link2 to="Works"><h3 className='ViewMore d-flex'>See More <FaArrowRight /></h3></Link2>
                </div>
            </div>
        </section>
    );
};

export default PortfolioSection;
=======
import './Work.css'
import { WorkItem } from '../../components';
import { Link as Link2 } from 'react-router-dom';
import WorkData from '../../Data/WorksData'

const PortfolioSection = () => {
    const portfolioItems = WorkData

    return (
        <section id="work" className="portfolio-mf sect-pt4 route">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="title-box text-center">
                            <h3 className="title-a">Portfolio</h3>
                            <div className="line-mf"></div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {portfolioItems.map((item, index) => (
                        item.main?(<WorkItem
                            key={index}
                            title={item.title}
                            imgSrc={item.imgSrc}
                            link={item.link}
                            category={item.category}
                            date={item.date}
                        />):(<></>)
                    ))}
                </div>
                <div className='row'>
                <Link2 to="Works"><h3 className='ViewMore'>View More Works {'=>'}</h3></Link2>
                </div>
            </div>
        </section>
    );
};

export default PortfolioSection;
>>>>>>> cf26256b2b839f3b47ce55256e75d447cc374d09
