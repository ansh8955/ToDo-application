import React,{useState} from "react";
import TodoList from './TodoList';
const Main =()=>{



const [inputList,setInputList] = useState("");
const [items,setItems] = useState([]);


const deleteItem = (id)=>{

    setItems((olditem)=>{

        return olditem.filter((elem,index)=>{

            return index !==id;

        })
    })
}
const itemEvent=(e)=>{

    setInputList(e.target.value)


}

const listOfItems=()=>{


    setItems((olditem)=>{

        return [...olditem,inputList];
    })

    setInputList('');
}
    return(
        <>

<div>

    <h1>Grocery Bud</h1>

    <div>

        <input type="text" 
        onChange={itemEvent}
        value={inputList}

        />
        <button onClick={listOfItems}>ADD Item</button>
    </div>
    <div>

        <ul>

            {/* <li>{inputList}</li> */}

           {
            items.map((elem,index)=>{

return <TodoList

        key={index} 
        id={index} 
        text={elem}
        onSelect = {deleteItem}
/>

            })
           } 
        </ul>
    </div>
</div>

        </>
    )
}

export default Main;