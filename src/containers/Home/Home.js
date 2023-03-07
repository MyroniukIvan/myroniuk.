import React from 'react';
import './Home.scss';

import GithubRepo from '../../components/GithubRepo/GithubRepo';
import StrokeAnimationMyroniuk from '../../components/StrokeAnimationText';
import Title from '../../components/Title/Title';

import {Link} from 'react-router-dom';
import SkillsSection from '../../components/SkillsSection/SkillsSection';
import ProjectSection from '../../components/ProjectSection/ProjectSection';

import resume from '../../assets/cv.pdf';

function Home() {

    return (<div className='Home' id='up'>
        <div className='container'>
            <div className='wrapper'>
                <div className='main'>
                    <StrokeAnimationMyroniuk/>
                    <div className='main-text'>
                        <h1>Front-End Engineer</h1>
                    </div>
                    <div className='link-text'>
                        <h2>
                            <Link className='link' to={resume} target='blank'>
                                View Resume
                            </Link>
                        </h2>
                        <p>or</p>
                        <h2>
                            <Link className='link' to='/about'>
                                Read About Me
                            </Link>
                        </h2>
                    </div>
                </div>
                <Title title='Projects Section' text='SELECTED PROJECTS'/>
                <ProjectSection/>
                <Title title='Projects Section' text='SOME INTERESTING IDEAS'/>
                <SkillsSection/>
                <Title
                    title='Open Source Exercices'
                    text='github Repositories'
                />
                <GithubRepo/>
            </div>
        </div>
    </div>);
}

export default Home;
