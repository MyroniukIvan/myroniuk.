import React from 'react';
import './Timeline.css';

const TimelineItem = ({ data }) => (
   <div className='timeline-item'>
      <div className='timeline-item-content'>
         <span className='tag' style={{ background: '#000' }}>
            {data.location}
         </span>
         <time>{data.date}</time>
         <h4>{data.title}</h4>
         <ul>
            {data.description.map((item) => (
               <li>{item}</li>
            ))}
         </ul>
         <span className='circle' />
      </div>
   </div>
);
export default TimelineItem;
