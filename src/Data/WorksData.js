import Leon from '../assets/Works/Leon.png'
import YellowMoon from '../assets/Works/YellowMoon.png'
import Modus from '../assets/Works/Modus.png'
import Wooster from '../assets/Works/Wooster.png'
import ITStore from '../assets/Works/ITStore.png'
import Portfolio from '../assets/Works/portfolio.png'
import ToDoList from '../assets/Works/ToDoList.png'
import RoseChic from '../assets/Works/Rose-Chic.png'
import Netflix from '../assets/Works/Netflix.png'
import Kolshein from '../assets/Works/Kolshein.png'
import RoseChicSenior from '../assets/Works/Rose-Chic-Senior.png'
import RoseChicDashboard from '../assets/Works/Rose-Chic-Dashboard.png'
const link = "https://osamaalbraidy.github.io/";

function vercel(text) {
    return `https://${text}.vercel.app`
}

const portfolioItems = [
    {
        title: 'Rose-Chic Senior',
        imgSrc: RoseChicDashboard,
        link: `/Portfolio-React`,
        category: 'Web Design',
        date: 'May 2024',
        main: true,
    },
    {
        title: 'Rose-Chic Senior',
        imgSrc: RoseChicSenior,
        link: `/Portfolio-React`,
        category: 'Web Design',
        date: 'May 2024',
        main: true,
    },
    {
        title: 'Kol-Shein',
        imgSrc: Kolshein,
        link: `${vercel('kol-shein')}`,
        category: 'Web Design',
        date: 'April 2024',
        main: true,
    },
    {
        title: 'Rose Chic',
        imgSrc: RoseChic,
        link: `${link}Rose-Chic/`,
        category: 'Web Design',
        date: 'March 2024',
        main: false,
    },
    {
        title: 'Netflix',
        imgSrc: Netflix,
        link: `${link}Net-Clone/`,
        category: 'Web Design',
        date: 'March 2024',
        main: true,
    },
    {
        title: 'ToDoList',
        imgSrc: ToDoList,
        link: `${link}ToDoList/`,
        category: 'Web Design',
        date: 'March 2024',
        main: false,
    },
    {
        title: 'Portfolio',
        imgSrc: Portfolio,
        link: `${link}Portfolio-React/`,
        category: 'Web Design',
        date: 'July 2023',
        main: true,
    },
    {
        title: 'IT Store',
        imgSrc: ITStore,
        link: `${link}IT-Store-React/`,
        category: 'Web Design',
        date: 'may 2023',
        main: true,
    },
    {
        title: 'Wooster',
        imgSrc: Wooster,
        link: `${link}HTML-CSS-JS-4/`,
        category: 'Web Design',
        date: 'March 2023',
        main: false,
    },
    {
        title: 'Modus',
        imgSrc: Modus,
        link: `${link}HTML-CSS-JS-3/`,
        category: 'Web Design',
        date: 'February 2023',
        main: false,
    },
    {
        title: 'Yellow Moon',
        imgSrc: YellowMoon,
        link: `${link}HTML-CSS-2/`,
        category: 'Web Design',
        date: 'February 2023',
        main: false,
    },
    {
        title: 'Leon',
        imgSrc: Leon,
        link: `${link}HTML-CSS-1/`,
        category: 'Web Design',
        date: 'January 2023',
        main: false,
    },
];

export default portfolioItems
