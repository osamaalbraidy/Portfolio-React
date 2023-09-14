import './Services.css'
import ServiceItem from '../../components/ServiceItem/ServiceItem';
import briefcase from '../../Data/imgs/Services/briefcase.svg'
import CardChecklist from '../../Data/imgs/Services/card-checklist.svg'
import binoculars from '../../Data/imgs/Services/binoculars.svg'
import CounterSection from '../CounterSection/CounterSection';

const Services = () => {
    const servicesData = [
        {
            icon: briefcase,
            title: 'Web Design',
            description: 'Our web design services combine creativity and functionality to create visually appealing websites that engage and inspire visitors. We understand the importance of user-friendly interfaces, intuitive navigation, and captivating visual elements to leave a lasting impression on your audience.',
        },
        {
            icon: CardChecklist,
            title: 'Web Development',
            description: 'With our web development services, we bring your website to life with clean code, seamless functionality, and optimized performance. Our team of skilled developers utilizes the latest technologies and frameworks to build dynamic and interactive websites that meet your specific business needs.',
        },
        {
            icon: binoculars,
            title: 'Responsive Design',
            description: 'Responsive design is at the core of our approach, ensuring your website looks and performs flawlessly across all devices. Our responsive design services optimize your websites layout, content, and images, providing a consistent and enjoyable user experience on desktops, tablets, and mobile devices.',
        },
    ];

    return (
        <section id="services" className="services-mf route">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="title-box text-center">
                            <h3 className="title-a">Services</h3>
                            <div className="line-mf"></div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {servicesData.map((service, index) => (
                        <ServiceItem
                            key={index}
                            icon={service.icon}
                            title={service.title}
                            description={service.description}
                        />
                    ))}
                </div>
            </div>
            <CounterSection/>
        </section>
    );
};

export default Services;
