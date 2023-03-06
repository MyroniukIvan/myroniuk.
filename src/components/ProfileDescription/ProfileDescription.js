import React, {useRef, useEffect} from 'react';

import './ProfileDescription.scss';
import {motion} from 'framer-motion';
import {TweenMax, Power3} from 'gsap';

import photoprofile from '../../assets/images/myphoto.jpg';

const transition = {duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96]};

const ProfileDescription = () => {
    let img = useRef(null);
    let p = useRef(null);

    useEffect(() => {
        TweenMax.staggerFrom([p], 2.5, {opacity: 0, y: 30, ease: Power3.easeOut}, 1);
        TweenMax.staggerFrom([img], 1.5, {opacity: 0, y: 50, ease: Power3.easeOut}, 1);
    }, []);
    return (<div>
        <div className='profile'>
            <div className='container'>
                <div className='wrapper'>

                    <div className='description'>
                        {/* <h4>This is the firct project</h4> */}
                        <p
                            className='small-title'
                            ref={(element) => {
                                p = element;
                            }}
                        >
                            <strong>
                                I am a Web Developer from
                                Ukraine, living in Kyiv.
                            </strong>
                            <br/>
                            <br/> This experience I was collecting throughout 1.5 years, during multiple freelance
                            and commercial projects. I was working mostly with people from Ukraine with whom we
                            continuously were exchanging experience.
                        </p>
                    </div>
                    <div
                        className='box'
                        ref={(element) => {
                            img = element;
                        }}
                    >
                        <motion.img
                            src={photoprofile}
                            alt='photoprofile'
                            transition={transition}
                            whileHover={{scale: 1.1}}
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>);
};

export default ProfileDescription;
