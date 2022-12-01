import React,{useState} from 'react'
import About from './About'
import ArduinoTap from './ArduinoTap'
import Members from './Members'
import Components from './Component'
import { db } from '../../config/firebase'
import Image from '../../components/Image'
import Ref, { Refs } from '../../config/Ref'
import { collection, doc } from 'firebase/firestore'
import { Link } from "react-router-dom";
import {useParams } from "react-router-dom";
import Quill from '../../components/Quill'
import { useNavigate } from 'react-router-dom'
export default function ProjectDetails() {
    const [data, setdata] = useState("")
    const d = useParams();
    const id = d.id;
    return (
    <div className='project-container'>
        <Ref docRef={doc(db,'project',id)}>
        {(data)=>(<>
            <div className='main'>
            <h1>{data.name}</h1>
                <div className='project-img'>
                    <div style={{width:"50%",margin:'auto'}}>
                        <Image url={data.imgUrl}/>
                    </div>
                </div>
                <About  projectId={id}/>
                {/* <ArduinoTap projectId={id}/> */}
                <Components projectId={id}/>
            </div>
            <div>
                <Members projectId={id}/>
            </div>
            {/* <Quill onSave={()=>{}} setData={setdata}/> */}
        </>)}
        </Ref>
    </div>
    )
}

function ProjectThumbnail({data,to}) {
    const navigation = useNavigate()
    return ( 
        <div className='project-thumbnail-container' onClick={()=>navigation(to)}>
            <p className='project-thumbnail-title'>{data.name}</p>
                <div className='project-thumbnail-img'>
                    <Image url={data.imgUrl}/>
                </div>
        </div>
     );
}




export function Projects(props) {
    return ( 
        <div>
            <Refs docRef={collection(db,"project")}>
                {(data)=>(<div className='projects-container' onClick={()=>{}}>
                    {data.map((i,k)=><ProjectThumbnail data={i} key={k} to={"/project/"+i.id} />)}
                </div>)}
            </Refs>
        </div>
    );
}
