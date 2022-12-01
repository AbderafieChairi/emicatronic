import { collection } from 'firebase/firestore'
import React from 'react'
import { ProfileLite } from '../../components/Profile'
import { db } from '../../config/firebase'
import { Refs } from '../../config/Ref'
import './Members.css'
export default function Members() {
  return (
    <div className='members-container'>
        <Refs docRef={collection(db,'users')}>
            {
                data=>data.map((i,k)=><ProfileLite data={i} key={k}/>)
            }
        </Refs>
    </div>
  )
}
