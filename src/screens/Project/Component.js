import React,{useState} from 'react'
import Item from './Item';
import './project.css'
import {Refs} from '../../config/Ref';
import { db } from '../../config/firebase';
import { collection } from "firebase/firestore";
import Image from "../../components/Image"
function Component({data}) {

    return (
        <div className='component-container'>

            {data.imgUrl!=""?
            <div className='component-item'>
                <Image url={data.imgUrl}/>
            </div>:
            <p className='component-item'>&#9881;</p>
            }
            <p className='component-name'>{data.name}</p>
            <p className='component-item'>&#10006;</p>
            <p className='component-item'>{data.nbr}</p>   
        </div>
    )
}



function Components({projectId}) {
    return (
        <Refs docRef={collection(db, "project", projectId,"components")}>
            {(data)=>(<div className='components-container'>
                <Item title="COMPONENTS AND SUPPLIES">
                {data.map((i,k)=><Component key={k} data={i}/>)}
                </Item>
            </div>)}
        </Refs>
    );
}

export default Components;