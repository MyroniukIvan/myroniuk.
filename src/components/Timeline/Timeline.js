import React from 'react';
import timelineData from '../../assets/data/timelineData';
import TimelineItem from '../../components/Timeline/TimelineItem';

const Timeline = () =>
   timelineData.length > 0 && (
      <div className='timeline-container'>
         {timelineData.map((data, idx) => (
            <TimelineItem data={data} key={idx} />
         ))}
      </div>
   );
export default Timeline;
