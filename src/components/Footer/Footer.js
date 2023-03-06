import React from 'react';

import './Footer.scss';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { motion } from 'framer-motion';

function Footer() {
   return (
      <div>
         <motion.div className='footer'>
            <div className='box-footer'>
               <div className='logo wrapper'>
                  <h2>Myroniuk.</h2>
                  <p>&copy; 2023 Myroniuk Ivan</p>
               </div>
               <div className='contact wrapper'>
                  <p>vanyamironyuk@gmail.com</p>
                  <p>+380 93 391 0348</p>
               </div>
               <div className='adress wrapper'>
                  <p>Ukraine</p>
                  <p>Kyiv</p>
               </div>
               <div className='social-icons wrapper'>
                  <p>You can follow me on</p>
                  <ul>
                     <li>
                        <a
                           target='_blank'
                           rel='noopener noreferrer'
                           href='https://www.linkedin.com/in/ivan-myroniuk-84009525b/'
                           className='social-icon'
                        >
                           {/* <i class='fa fa-linkedin'></i> */}
                           <FaLinkedin />
                        </a>
                     </li>

                     <li>
                        <a
                           target='blank'
                           rel='noopener noreferrer'
                           href='https://github.com/MyroniukIvan'
                           className='social-icon'
                        >
                           <FaGithub />
                        </a>
                     </li>
                  </ul>
               </div>
            </div>
         </motion.div>
      </div>
   );
}

export default Footer;
