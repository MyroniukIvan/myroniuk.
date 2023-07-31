import React, {useRef, useEffect} from 'react';
import {Power3, gsap} from 'gsap';
import {FaGithub} from 'react-icons/fa';

import './ProjectSection.scss';
import Kredopol from '../../assets/images/Kredopol.png';
import news from '../../assets/images/news-app.png';
import Marvel from '../../assets/images/Marvel.png';
import murrfecto from '../../assets/images/murrfecto.png'

import {motion} from 'framer-motion';

import {ScrollTrigger} from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const transition = {
    duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96], opacity: 0,
};
const data = [
    {
        id: 4,
        src: murrfecto,
        codeSource: 'https://github.com/murrfecto/murrfecto1',
        title: "Murrfecto:",
        language: ['React', 'Node.js', 'SendGrid', 'Fondy Payment', 'Framer Motions'],
        web: 'https://www.murrfecto.site/',
    },
    {
        id: 3,
        src: news,
        codeSource: 'https://github.com/MyroniukIvan/news-test',
        title: 'News-app:',
        language: ['HTML', 'SASS/SCSS', 'Typescript', 'React'],
        web: 'https://news-test-q3dz5r1u1-myroniukivan.vercel.app/',
    },
    {
        id: 2,
        src: Marvel,
        codeSource: 'https://github.com/MyroniukIvan/marvel_api',
        description: 'The first project created on courses of self-study.',
        title: 'Marvel:',
        language: ['HTML', 'CSS', 'React', 'JavaScript'],
        web: 'https://marvel-r06xhn9dz-myroniukivan.vercel.app/',
    }, {
        id: 1,
        src: Kredopol,
        name: 'Kredopol',
        title: 'Kredopol. Freelance',
        web: 'https://pl-n67vxn7rx-myroniukivan.vercel.app/',
        codeSource: 'https://github.com/MyroniukIvan/pl',
        description: 'The project was fully created by me with all requirements provided by the customer. This web-site was built only for advertising purposes',
        language: ['HTML', 'CSS', 'React'],
    },
];

function ProjectSection() {
    const revealRefs = useRef([]);
    revealRefs.current = [];

    useEffect(() => {
        revealRefs.current.forEach((el, index) => {
            gsap.fromTo(el, {
                autoAlpha: 0,
            }, {
                duration: 1, autoAlpha: 1, ease: Power3.easeOut, y: -30, scrollTrigger: {
                    id: `section-${index + 1}`,
                    trigger: el,
                    start: 'top center+=300',
                    toggleActions: 'play none none reverse',
                },
            });
        });
    }, []);

    const addToRefs = (el) => {
        if (el && !revealRefs.current.includes(el)) {
            revealRefs.current.push(el);
        }
    };
    return (<div className='card' id='project'>
        {data.map((data, id) => (<div key={id} className='container'>
            <div className='project-info' ref={addToRefs}>
                <h1>{data.title}</h1>
                <p>{data.description}</p>

                <ul>
                    {data.language && data.language.length > 0 ? data.language.map((item) => {
                        return (<li key={item.id}>
                            <span>&#8250;</span>
                            {item}
                        </li>);
                    }) : 'Loading...'}
                </ul>

                <div className='work_links'>
                    <a className='project-link' href={data.web} target='blank'>
                        Visit Site <span>&rarr;</span>
                    </a>
                    <a
                        className='work_code'
                        href={data.codeSource}
                        title='View Source Code'
                        target='blank'
                    >
                        <FaGithub/>
                    </a>
                </div>
            </div>
            <div className='project-image' ref={addToRefs}>
                <motion.img
                    transition={transition}
                    whileHover={{scale: 1.03}}
                    src={data.src}
                    width='100%'
                    height='100%'
                    alt={data.name}
                />
            </div>
        </div>))}
    </div>);
}

export default ProjectSection;
