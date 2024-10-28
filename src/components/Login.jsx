import React, { useState } from 'react'

const Login = () => {
    const [email, setEmail]= useState('');
    const [password, setPassword] = useState('');
    const [isRegistered, setIsRegistered] = useState(false);
  return (
    <div>
 <form>
<input type="email" placeholder = "Email" onChange={(e)=>setEmail(e.target.value)} />
<input type="password" placeholder="Password" onChange= {(e)=> setPassword(e.target.value)}/>



 </form>
<p> 
    {isRegistered?"Don't have an account?Register Now":"Already have an account:Log In"}
</p>
<button onClick={()=>setIsRegistered(!isRegistered)}>{isRegistered?'Login':"Register"}</button>

    </div>
  )
}

export default Login