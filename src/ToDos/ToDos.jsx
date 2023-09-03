import React, { useReducer, useState } from 'react';

 const ToDos=()=>{

    const INITIAL_STATE={todos:[]};
    const todoReducer=(state,action)=>{
console.log(state.todos);
        switch(action.type){

            case "add":
            const newToDo=action.payload;
            return {todos:[...state.todos,newToDo]}

            case "delete":
            return {todos:state.todos.filter((todo)=> todo.id!=action.payload.id)}

            default:
                return state
        }
    }
    const [state,dispatch]=useReducer(todoReducer,INITIAL_STATE);
    const [name,setName]=useState('');

    const handleSubmit=(e)=>{
        e.preventDefault();
        const todo={id:Date.now(),name:name,type:'complex',status:'pendng'}
        dispatch({type:"add",payload:todo});
        setName('');
    }

    return (
        <>
        <h1>To do app using useReducer</h1>
        <form onSubmit={handleSubmit}>
        <input type="text" value={name} onChange={(e)=>setName(e.target.value)}></input>
        <button type="submit">Submit</button>
        </form>

        <div>
            <ul>
                {state.todos.map((todo)=>{
                    return (<li key={todo.id}>{todo.name}  {todo.type}  {todo.status}
                    <button onClick={()=>dispatch({type:"delete",payload:{id:todo.id}})}>delete</button>
                    </li>)
                })}
            </ul>
        </div>
        

        </>
    )

};
export default ToDos;