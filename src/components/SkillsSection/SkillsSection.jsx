import './SkillsSection.css';
import Skill from '../Skill/Skill';

const SkillsSection = () => {
    return (
        <div className="skill-mf">
            <h1 className="fs-3 title-s pb-3">Programming Skills:</h1>
            <div className="skill">
                <Skill/>
            </div>
        </div>
    );
};

export default SkillsSection;
