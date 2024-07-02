import js from '../../assets/ProgrammingSkills/java-script.png';
import java from '../../assets/ProgrammingSkills/java.png';
import react from '../../assets/ProgrammingSkills/react.png';
import next from '../../assets/ProgrammingSkills/nextjs.png';
import express from '../../assets/ProgrammingSkills/express-js.png';
import ts from '../../assets/ProgrammingSkills/typescript.png';
import mdb from '../../assets/ProgrammingSkills/mongodb.png';
import sql from '../../assets/ProgrammingSkills/sql.png';
import css from '../../assets/ProgrammingSkills/css-3.png';
import html from '../../assets/ProgrammingSkills/html-5.png';
import flutter from '../../assets/ProgrammingSkills/flutter.png';
import php from '../../assets/ProgrammingSkills/php.png';
import C from '../../assets/ProgrammingSkills/C.png';
import Cshurp from '../../assets/ProgrammingSkills/Csharp.png';
import redux from '../../assets/ProgrammingSkills/redux-icon.webp';
import tailwind from '../../assets/ProgrammingSkills/tailwind.png';
import laravel from '../../assets/ProgrammingSkills/laravel.png';

const images = [
    { key: 0, src: html },
    { key: 1, src: css },
    { key: 2, src: js },
    { key: 3, src: react },
    { key: 13, src: next },
    { key: 4, src: ts },
    { key: 5, src: java },
    { key: 6, src: express },
    { key: 7, src: mdb },
    { key: 8, src: sql },
    { key: 9, src: flutter },
    { key: 10, src: php },
    { key: 11, src: C },
    { key: 12, src: Cshurp },
    { key: 14, src: redux },
    { key: 15, src: tailwind },
    { key: 16, src: laravel },
];

const Skill = () => {
    return images.map((item) => (
        <div className="skills" key={item.key}>
            <img src={item.src} alt="" />
        </div>
    ));
};

export default Skill;
