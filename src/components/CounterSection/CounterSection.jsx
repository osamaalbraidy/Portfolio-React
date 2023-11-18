import React, { useEffect, useState } from 'react';
import CountUp from 'react-countup';
import './CounterSection.css';
import check from '../../assets/Counter/check-lg.svg';
import journal from '../../assets/Counter/journal-richtext.svg';

const CounterSection = () => {
    const [countersInView, setCountersInView] = useState(false);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const handleScroll = () => {
        const scrollPosition = window.scrollY + window.innerHeight;
        const elementPosition = document.querySelector('.section-counter').offsetTop;

        if (scrollPosition > elementPosition && !countersInView) {
            setCountersInView(true);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [countersInView, handleScroll]);

    return (
        <div className="section-counter paralax-mf bg-image">
            <div className="container position-relative">
                <div className="row">
                    <div className="col-sm-6 col-lg-6">
                        <div className="counter-box counter-box pt-4 pt-md-0">
                            <div className="counter-ico">
                                <div className="ico-circle">
                                    <img src={check} alt="" />
                                </div>
                            </div>
                            <div className="counter-num">
                                <CountUp start={0} end={countersInView ? 11 : 0} duration={2} className="counter purecounter" />
                                <p className="counter-text">WORKS COMPLETED</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-lg-6">
                        <div className="counter-box pt-4 pt-md-0">
                            <div className="counter-ico">
                                <div className="ico-circle">
                                    <img src={journal} alt="" />
                                </div>
                            </div>
                            <div className="counter-num">
                                <CountUp start={0} end={countersInView ? 1 : 0} duration={2} className="counter purecounter" />
                                <p className="counter-text">YEARS OF EXPERIENCE</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CounterSection;
