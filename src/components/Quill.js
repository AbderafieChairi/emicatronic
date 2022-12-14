import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import "./Quill.css"
import { db } from '../config/firebase';
import { doc, setDoc,getDoc } from "firebase/firestore";

const TOOLBAR_OPTIONS=[
    [{header:[1,2,3,4,5,6,false]}],
    [{font: [] }],
    [{list:'ordered'},{list:"bullet"}],
    ["bold","italic",'underline'],
    [{color:[]},{background:[]}],
    [{script:"sub"},{script:"super"}],
    [{align:[]}],
    ["image","blockquote",'code-block'],
    ["clean"]
]
export default function Quill({onSave,setData}) {
    const [value, setValue] = useState('');
    // const docRef = doc(db, "quotes", "q1");


    React.useEffect(()=>setData(value),[value])


  return (
    <div>
        <ReactQuill theme="snow" value={value} modules={{toolbar:TOOLBAR_OPTIONS}} onChange={setValue} />
        <button onClick={onSave} className="save-button">save</button>

    </div>
    );
}

export const QuillReader=({value})=>(
    <ReactQuill
        modules={{toolbar:false}}
        value={value}
        readOnly={true}
        theme={"snow"}
    /> 
)
