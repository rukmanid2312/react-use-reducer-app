import React, { useReducer } from 'react';


const Counter=()=>{

    const INITIAL_STATE={count:0};
    const ACTIONS={
        INCREMENT:"increment",
        DECREMENT:"decrement",
    };
    const countReducer=(state,action)=>{

        const {type}=action;

       switch(type){

       case ACTIONS.INCREMENT:
       return {count:state.count+1}
  

        case ACTIONS.DECREMENT:
        return  {count:state.count-1}

        default:
        return state;    

        }
    };
    const [state,dispatch]=useReducer(countReducer,INITIAL_STATE);

    return(<div>

        <h1>Counter using useReducer</h1>
        <div>current count is {state.count}</div>
        <button onClick={()=>{dispatch({type:ACTIONS.INCREMENT})}}>Increment</button>
        <button onClick={()=>{dispatch({type:ACTIONS.DECREMENT})}}>Decrement</button>
    </div>)

}

export default Counter;