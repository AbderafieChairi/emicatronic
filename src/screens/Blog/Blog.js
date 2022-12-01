import { Typography } from '@mui/material';
import { collection } from 'firebase/firestore';
import React from 'react'
import { QuillReader } from '../../components/Quill';
import { db } from '../../config/firebase';
import { Refs } from '../../config/Ref';
import { useNavigate, useParams } from 'react-router-dom';
import "./Blog.css"
export default function Blog() {
    let {id} = useParams();
    let id_ = id?id:0;
    console.log(id_)
    return (
        <div>
            <Refs docRef={collection(db,'blogs')}>
                {data=>{console.log(data);return(
                    <>
                        {data.filter((i,k)=>id_!==0?i.id===id_:k===0).map((i,k)=>(
                            <div key={k}>
                            <div className='blog-title'>{i.title}</div>
                            <QuillReader value={i.detail}/>
                            </div>
                        ))}
                
                        <div>
                            <Blogs data={data.filter((i,k)=>id_!==0?i.id!==id_:k!==0)}/>
                        </div>
                    </>
                )}}
            </Refs>
        </div>
    )
}


export const Blogs = ({data})=>{
    const navigate = useNavigate();
    return (
    <div className='blogs-container'>
        <p className='other-blogs'>autres Blogs</p>
        {data.map((i,k)=>(
            <p 
                key={k}
                className='blog-item' 
                onClick={()=>navigate("/blog/"+i.id)}
            >{i.title}</p>
        ))}
    </div>
)}




function BlogThumbnail({data}) {
    return (
        <div className='blog-thumbnail'>
            <div className='blog-item'>{data.title}</div>
        </div>
    );
}
