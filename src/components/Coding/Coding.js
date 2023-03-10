import React from 'react';
import Header from "../Header/Header";
import {motion} from "framer-motion";
import {FaGithub, FaLessThan, FaGreaterThan} from 'react-icons/fa';
import {VscRunAll} from 'react-icons/vsc'
import shop from '../../assets/images/shopImg.png'
import nasa from '../../assets/images/nasa.png'

import './Coding.scss'

const transition = {
    duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96], opacity: 0,
};

const Coding = () => {
    return (<div>
        <Header/>
        <div className='card-secondary' id='project'>
            <h1 className='card-secondary-header'>Coding</h1>
            <div className='container'>
                <div className='project-info'>
                    <div>
                        <h1>Willow Shop</h1>
                        <p>
                            Here I want to show you one of <cite>the most largest</cite> my projects.
                            It was originally <FaLessThan/>Willow-Shop<FaGreaterThan/>
                            , but after <br/> we renamed it and
                            adjusted to an already existing business
                        </p>
                        <p>
                            The hardest for us at the time was manipulating data with <cite>database</cite>. For this we
                            were using
                            Firebase.
                        </p>
                    </div>
                    <div className='work_links'>
                        <a href="https://github.com/Gituservn/eshop"> <FaGithub
                            style={{color: "black", width: '25px'}}/>
                        </a>
                        <a href="https://eshop-dlcusjyb2-gituservn.vercel.app/"> <VscRunAll
                            style={{color: "black", width: '25px'}}/>
                        </a>
                    </div>
                </div>
                <div className='project-image'>
                    <motion.img
                        transition={transition}
                        whileHover={{scale: 1.03}}
                        src={shop}
                        width='100%'
                        height='100%'
                        alt={"shop"}
                    />
                </div>
                <div className='project-info'>
                    <div>
                        <h1>Nasa project</h1>
                        <p><cite>This project was developed using React + Node.js</cite></p>
                        <p>It has an amazing UI but not fully developed.
                            Nevertheless I want to show you this website!</p>
                    </div>
                    <div className='work_links'>
                        <a href="https://github.com/MyroniukIvan/nasa-app"> <FaGithub
                            style={{color: "black", width: '25px'}}/>
                        </a>
                    </div>
                </div>
                <div className='project-image'>
                    <motion.img
                        transition={transition}
                        whileHover={{scale: 1.03}}
                        src={nasa}
                        width='100%'
                        height='100%'
                        alt={"shop"}
                    />
                </div>
            </div>
        </div>
    </div>);
};

export default Coding;