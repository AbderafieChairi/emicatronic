import React,{useState} from 'react'
import "./project.css"
export default function Item(props) {
    const [extended, setExtended] = useState(false)

    return (
    <div className='Item-container'>
        <div className='Item-header' onClick={()=>setExtended(v=>!v)}> 
            <p className='Item-title'>
                {props.title}
            </p>
            <i className={extended?"fa fa-chevron-down extend1":"fa fa-chevron-down extend"} onClick={()=>setExtended(v=>!v)}/>
        </div>
        {
            extended?
            <div>{props.children}</div>
            :
            <div></div>
        }
    </div>
    )
}
