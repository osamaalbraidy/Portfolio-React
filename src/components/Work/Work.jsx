import './Work.css'
import { WorkItem } from '../../components';
import Leon from '../../assets/Works/Leon.png'
import YellowMoon from '../../assets/Works/YellowMoon.png'
import Modus from '../../assets/Works/Modus.png'
import Wooster from '../../assets/Works/Wooster.png'
import ITStore from '../../assets/Works/ITStore.png'
import Portfolio from '../../assets/Works/portfolio.png'

const PortfolioSection = () => {
    const link = "https://osamaalbraidy.github.io/";
    const portfolioItems = [
        {
            title: 'Leon',
            imgSrc: Leon,
            link: `${link}HTML-CSS-1/`,
            category: 'Web Design',
            date: 'January 2023',
        },
        {
            title: 'Yellow Moon',
            imgSrc: YellowMoon,
            link: `${link}HTML-CSS-2/`,
            category: 'Web Design',
            date: 'February 2023',
        },
        {
            title: 'Modus',
            imgSrc: Modus,
            link: `${link}HTML-CSS-JS-3/`,
            category: 'Web Design',
            date: 'February 2023',
        },
        {
            title: 'Wooster',
            imgSrc: Wooster,
            link: `${link}HTML-CSS-JS-4/`,
            category: 'Web Design',
            date: 'March 2023',
        },
        {
            title: 'IT Store',
            imgSrc: ITStore,
            link: `${link}IT-Store-React/`,
            category: 'Web Design',
            date: 'may 2023',
        },
        {
            title: 'Portfolio',
            imgSrc: Portfolio,
            link: `${link}Portfolio-React/`,
            category: 'Web Design',
            date: 'July 2023',
        },
    ];

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
