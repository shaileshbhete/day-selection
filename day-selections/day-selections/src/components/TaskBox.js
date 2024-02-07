import React from 'react'

export default function TaskBox({title,desc}) {
    return (
        <div className='taskBox'>
            <div className="content">
                <h4>{title}</h4>
                <p>{desc}</p>
            </div>
            <div className="actions">
                <button>Delete</button>
            </div>
        </div>
    )
}
