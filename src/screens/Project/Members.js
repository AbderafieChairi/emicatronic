import React from 'react'
import { ProjectProfiles } from '../../components/Profile'
import './project.css'
export default function Members({projectId}){
  return (
    <div className='members-container'>
        <p>Members</p>
        <hr />
        <ProjectProfiles projectId={projectId}/>
    </div>
  )
}
