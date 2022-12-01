import { collection } from 'firebase/firestore';
import React,{useState} from 'react'
import { db } from '../config/firebase';
import { RefRef,Refs } from '../config/Ref';
import Image from './Image';
import './profile.css'
export default function Profile(props) {
  return (
    <div>Profile</div>
  )
}



export function ProfileLite({data}) {
    return ( 
        <div className='profileLite-container'>
            <div style={{height:150,width:150}}>
                <Image url={data.imgUrl}/>
            </div>
            <div style={{padding:10}}>
                <p className='profilelite-name'>{data.name}</p>
                <p><b>Post </b>{data.job}</p>
                <p>{data.email}</p>
                <i>"{data.quote}"</i>
            </div>
        </div>
     );
}



export function ProjectProfiles({projectId}) {
    return (<div className='profiles-container'>
        <RefRef docRef={collection(db, "project", projectId,"members")}>
            {(data)=>(
                <div>
                    {data.map((i,k)=><ProfileLite data={i} key={k}/>)}
                </div>
            )}
        </RefRef> 
        
    </div>);
}
