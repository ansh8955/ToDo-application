import React from 'react';
import './TodoList.css';

const TodoList=(props)=>{

  

    return (

        <>
<div className='list'>

<li>{props.text}</li> 
<button onClick={props.onSelect(props.id)}>Remove</button>

</div>
        </>
    )
}

export default TodoList;