import React from 'react'
import "./InputOption.css"

function InputOption({ Icon, title ,color,id}) {
    return (
        <div className="inputOption">
            <Icon style={{color:color}} />
            <h4 id={id}>{title}</h4>
        </div>
    )
}

export default InputOption
