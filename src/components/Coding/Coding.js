import React from 'react';
import Header from '../Header/Header';

import './Coding.scss';

const Coding = () => {
  return (
    <div>
      <Header />
      <div className="card-secondary" id="project">
        <h1 className="card-secondary-header">Coding</h1>
        <div className="container">
          <div className="project-info">
            <div>
              <p>Page is still building...</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Coding;
