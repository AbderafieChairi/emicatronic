import React,{useState} from 'react'
import "./arduinoTap.css"
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Item from './Item';
import {Refs} from '../../config/Ref';
import { db } from '../../config/firebase';
import { collection } from "firebase/firestore";
function ArduinoTap({projectId}) {


  const [value, setValue] = React.useState(0);


  return (
    <Refs docRef={collection(db, "project", projectId,"code")}>
      {(data)=>(
        <Item title='Code'>
    <div className="tap-container">
      <div className="tap-header">
        <div className="btn b1"></div>
        <div className="btn b2"></div>
        <div className="btn b3"></div>
          <Tabs
            className='titles'
            value={value}
            onChange={(e,v)=>setValue(v)}
            variant="scrollable"
            scrollButtons="auto"
            aria-label="scrollable auto tabs example"
            
          >
          {data
          .map(i=>i.title)
          .map((i,k)=>(
            <Tab label={i} key={k}
            style={{backgroundColor:'white',marginRight:5,marginTop:10,borderTopRightRadius:5,borderTopLeftRadius:5}}
            />
            // <div className={selectedItem===i?"title high":"title"} key={k} onClick={()=>setSelectedItem(i)}>
            // <p>{i}</p>
            // {/* <div style={{color:"#88898B",marginLeft:5}}>&#10006;</div> */}
            // </div>
          ))
          }
        </Tabs>
      </div>
      <div className='card-content'>
        {data.filter((i,k)=>k===value).map((i,k)=><p key={k} className="code-content">{i.content}</p>)}
      </div>
    </div>
    </Item>
      )}
  </Refs>
  )
}



export default ArduinoTap;
