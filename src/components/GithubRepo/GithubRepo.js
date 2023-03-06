import React, { useEffect, useState } from 'react';
import './GithubRepo.scss';

function GithubRepo() {
    const [repos, setRepos] = useState([]);

    const fetchRepositories = () => {
        const url = 'https://api.github.com/users/MyroniukIvan/repos';
        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setRepos(data);
            })
            .catch((error) => console.log(error));
    };

    useEffect(() => {
        fetchRepositories();
    }, []);

    const reposName = ['flowers', 'gericht', 'shop'];

    return (
        <div>
            <div className='repos'>
                {repos.map((data, id) => {
                    if (reposName.includes(data.name)) {
                        const linkId = `project-link-${id}`; // Generate a unique ID for each link
                        return (
                            <div key={id} className='wrapper'>
                                <h1>{data.name}</h1>
                                <p>{data.description}</p>
                                <div className='project-link'>
                                    <a
                                        id={linkId} // Set the unique ID for the link
                                        href={data.homepage}
                                        target='_blank'
                                        rel='noopener noreferrer'
                                    >
                                        See case study
                                    </a>
                                </div>
                            </div>
                        );
                    }
                })}
            </div>
        </div>
    );
}

export default GithubRepo;