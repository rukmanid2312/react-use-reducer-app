import React, {useRef} from 'react';

const Login=()=>{

    const emailRef=useRef();
    const passwordRef= useRef();

    const onSubmit=(e)=>{

        e.preventDefault();
        console.log({email:emailRef.current.value,password:passwordRef.current.value});

    }

    return(
        <form onSubmit={onSubmit}>
            <lable>email</lable>
            <input type="email"  ref={emailRef}/>
            <label>password</label>
            <input type="password"  ref={passwordRef} />
            <button type="submit">Submit</button>
        </form>
    )
}
export default Login;