import adobeXd from '../utils/skills/adobe-xd.svg';
import html from '../utils/skills/html.svg';
import javascript from '../utils/skills/javascript.svg';
import css from '../utils/skills/css.svg';
import react from '../utils/skills/react.svg';
import typescript from '../utils/skills/typescript.svg';
import java from '../utils/skills/java.svg';
import mysql from '../utils/skills/mysql.svg';
import tailwind from '../utils/skills/tailwind.svg';
import firebase from '../utils/skills/firebase.svg';
import git from '../utils/skills/git.svg';
import materialui from '../utils/skills/materialui.svg';
import figma from '../utils/skills/figma.svg';
import postman from '../utils/skills/postman.svg';
import mongoDB from '../utils/skills/mongoDB.svg';
import es6 from '../utils/skills/es6.svg';
import redux from '../utils/skills/redux.svg';


export const skillsNameData = [
    'HTML5',
    'CSS3',
    'Javascript',
    'Typescript',
    'React',
    'ES6',
    'Tailwind',
    'MongoDB',
    'MySQL',
    'Git',
    'Figma',
    'Firebase',
    'MaterialUI',
    'Redux',
    'Postman',
];

export const skillsImage = (skill) => {
    const skillID = skill.toLowerCase();
    switch (skillID) {
        case 'html5':
            return html;
        case 'adobe xd':
            return adobeXd;
        case 'css3':
            return css;
        case 'javascript':
            return javascript;
        case 'react':
            return react;
        case 'typescript':
            return typescript;
        case 'mysql':
            return mysql;
        case 'tailwind':
            return tailwind;
        case 'java':
            return java;
        case 'firebase':
            return firebase;
        case 'git':
            return git;
        case 'materialui':
            return materialui;
        case 'figma':
            return figma;
        case 'postman':
            return postman;
        case 'mongodb':
            return mongoDB;
        case 'es6':
            return es6;
        case 'redux':
            return redux;
        default:
            break;
    }
}

