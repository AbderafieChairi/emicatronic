import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
// import './Event.css';
// import Timeline from '@muiz';

import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import { Refs } from '../../config/Ref';
import Image from '../../components/Image';
import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import { collection } from 'firebase/firestore';
import { db } from '../../config/firebase';
 
function Item({data}){
    return(
        <TimelineItem>
          <TimelineOppositeContent color="text.secondary">
            {data.date}
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color='grey'/>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
          <Typography>
            {data.detail}
          </Typography>
          <Box>
              <Image url={data.imgUrl} style={{maxWidth:400}}/>
          </Box>
          </TimelineContent>
        </TimelineItem>        
    )
}


export default function Events() {
  return (
    <div>
        <Typography sx={{textAlign:'center',fontWeight:'bold',fontSize:24,margin:2}}>Events</Typography>  
        <Timeline position="alternate">
            <Refs docRef={collection(db,"events")}>
                {data=>data.map((i,k)=>(
                    <Item key={k} data={i}/>
                ))}
            </Refs>
        </Timeline>
    </div>


  );
}
