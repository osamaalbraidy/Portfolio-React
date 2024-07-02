import '../../components/Work/Work.css'
import { WorkItem } from '../../components';
import WorkData from '../../Data/WorksData'

const PortfolioSection = () => {
    const portfolioItems = WorkData

    return (
        <section id="work" className="portfolio-mf sect-pt4 route">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="title-box text-center">
                            <h3 className="title-a">Portfolio <span className='workNum'>{portfolioItems.length}</span></h3>
                            <div className="line-mf"></div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {portfolioItems.map((item, index) => (
                        <WorkItem
                            key={index}
                            title={item.title}
                            imgSrc={item.imgSrc}
                            link={item.link}
                            category={item.category}
                            date={item.date}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PortfolioSection;
