import Leon from '../assets/Works/Leon.png'
import YellowMoon from '../assets/Works/YellowMoon.png'
import Modus from '../assets/Works/Modus.png'
import Wooster from '../assets/Works/Wooster.png'
import ITStore from '../assets/Works/ITStore.png'
import Portfolio from '../assets/Works/portfolio.png'
import ToDoList from '../assets/Works/ToDoList.png'
import RoseChic from '../assets/Works/Rose-Chic.png'
const link = "https://osamaalbraidy.github.io/";

const portfolioItems = [
    {
        title: 'Rose Chic',
        imgSrc: RoseChic,
        link: `${link}Rose-Chic/`,
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
        main: true,
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
        main: true,
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
        main: true,
    },
];

export default portfolioItems
