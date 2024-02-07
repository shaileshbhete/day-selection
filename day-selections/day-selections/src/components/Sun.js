import React from 'react'
import TaskBox from './TaskBox'
export default function Sun({title, desc}) {
  return (
    <div>
        <TaskBox title={title} desc={desc}/>
    </div>
  )
}