import js from '../../Data/imgs/ProgrammingSkills/java-script.png';
import java from '../../Data/imgs/ProgrammingSkills/java.png';
import react from '../../Data/imgs/ProgrammingSkills/react.png';
import express from '../../Data/imgs/ProgrammingSkills/express-js.png';
import ts from '../../Data/imgs/ProgrammingSkills/typescript.png';
import mdb from '../../Data/imgs/ProgrammingSkills/mongodb.png';
import sql from '../../Data/imgs/ProgrammingSkills/sql.png';
import css from '../../Data/imgs/ProgrammingSkills/css-3.png';
import html from '../../Data/imgs/ProgrammingSkills/html-5.png';

const images = [
    { key: 0, src: html },
    { key: 1, src: css },
    { key: 2, src: js },
    { key: 3, src: react },
    { key: 4, src: ts },
    { key: 5, src: java },
    { key: 6, src: express },
    { key: 7, src: mdb },
    { key: 8, src: sql },
];

const Skill = () => {
    return images.map((item) => (
        <div className="skills" key={item.key}>
            <img src={item.src} alt="" />
        </div>
    ));
};

export default Skill;
