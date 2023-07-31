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
                        <p>Page is still building...</p>
                    </div>
                </div>
            </div>
        </div>
    </div>);
};

export default Coding;
