import React from 'react'
import Item from './Item'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import "../../components/Quill.css"
import Ref from '../../config/Ref';
import { doc } from 'firebase/firestore';
import { db } from '../../config/firebase';

export default function About({projectId}) {

  return (
    <Ref docRef={doc(db,"project",projectId,"about","1")}>
      {(data)=>{console.log(data);return (
        <Item title='ABOUT THIS PROJECT'>
          <ReactQuill
              modules={{toolbar:false}}
              value={data.data}
              readOnly={true}
              theme={"snow"}
          />
        </Item>
      )}}
    </Ref>
  )
}
