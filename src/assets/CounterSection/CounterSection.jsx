import './CounterSection.css'
import check from "../../Data/imgs/Counter/check-lg.svg"
import journal from "../../Data/imgs/Counter/journal-richtext.svg"


const CounterSection = () => {
    return (
<div className="section-counter paralax-mf bg-image">
<div className="container position-relative">
    <div className="row">
        <div className="col-sm-6 col-lg-6">
            <div className="counter-box counter-box pt-4 pt-md-0">
                <div className="counter-ico">
                    <div className="ico-circle"><img src={check} alt="" /></div>
                </div>
                <div className="counter-num">
                    <p className="counter purecounter">7</p>
                    <span className="counter-text">WORKS COMPLETED</span>
                </div>
            </div>
        </div>
        <div className="col-sm-6 col-lg-6">
            <div className="counter-box pt-4 pt-md-0">
                <div className="counter-ico">
                    <div className="ico-circle"><img src={journal} alt="" /></div>
                </div>
                <div className="counter-num">
                    <p className="counter purecounter">1</p>
                    <span className="counter-text">YEARS OF EXPERIENCE</span>
                </div>
            </div>
        </div>
    </div>
</div>
</div>
    )
}


export default CounterSection
